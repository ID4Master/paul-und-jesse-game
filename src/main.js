import * as THREE from 'three';
import { std, metal, mesh, move, solidAt, angleDiff, blocked as blockedSpot, circles } from './util.js';
import { buildWorld, HOME, GUARD_SPAWNS, ARCHER_SPAWNS, randomFreeSpot, STALL, CAGE_SPOTS, WIZARD_POS } from './world.js';
import { makeHuman, animateHuman, flash, setWeapon, setArmorLevel, makeAnimal, animateAnimal, makeWeaponModel, makeFrog, makeCage, addWizardLook } from './characters.js';
import { makeBar, drawBar, hpColor, floatText, updateFloaters, initAudio, sfx, showMsg } from './ui.js';
import { hostGame, joinGame, randomCode } from './net.js';
import { startVoice, stopVoice } from './voice.js';

const $ = (id) => document.getElementById(id);
const isTouch = matchMedia('(pointer: coarse)').matches;
if (isTouch) document.body.classList.add('touch');

// ================= Grundaufbau =================
const renderer = new THREE.WebGLRenderer({ antialias: !isTouch });
renderer.setPixelRatio(Math.min(devicePixelRatio, isTouch ? 1.5 : 2));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;
document.body.prepend(renderer.domElement);
addEventListener('resize', () => renderer.setSize(innerWidth, innerHeight));

const scene = new THREE.Scene();
const SKY = 0x9fd3f0;
scene.background = new THREE.Color(SKY);
scene.fog = new THREE.Fog(SKY, 70, 240);
scene.add(new THREE.HemisphereLight(0xcfe8ff, 0x4a6b2a, 1.0));
const sun = new THREE.DirectionalLight(0xfff1d6, 2.2);
sun.position.set(70, 110, 40);
sun.castShadow = true;
sun.shadow.mapSize.set(isTouch ? 2048 : 4096, isTouch ? 2048 : 4096);
sun.shadow.bias = -0.0005;
Object.assign(sun.shadow.camera, { left: -160, right: 160, top: 160, bottom: -160, far: 350 });
scene.add(sun);

buildWorld(scene);

// ================= Regeln =================
const RANKS = ['Bauer', 'Ritter', 'Schmied', 'Landherr', 'König', 'Kaiser', 'Militär'];
const RANK_COLORS = [0x8b6b3d, 0x7a8590, 0x4a4a4a, 0x2e7d32, 0x6a1b9a, 0x8a6d1f, 0x556b2f];
const KILLS_PER_LEVEL = 3;
const MAX_LEVEL = RANKS.length - 1;
const START_LIVES = 3;
const SPECIAL_TIME = 15;

const WEAPONS = {
  fork:      { name: 'Mistgabel', icon: '🔱', melee: true, range: 3.6, cone: 0.2, dmg: 10, cd: 0.45 },
  bow:       { name: 'Bogen', icon: '🏹', melee: false, dmg: 9, cd: 0.6, speed: 32, projectile: 'arrow' },
  firesword: { name: 'Feuerschwert', icon: '🔥', melee: true, range: 4.4, cone: -0.2, dmg: 25, cd: 0.4, special: true },
  gun:       { name: 'Maschinengewehr', icon: '💥', melee: false, dmg: 5, cd: 0.1, speed: 60, projectile: 'bullet', special: true },
};

// ================= Kinderfreundlich (Schalter im Startmenü) =================
// Gleiches Spiel, aber Zauberstab statt Waffen, Schelme werden verzaubert, Tiere werden Freunde.
let kid = true;
try { kid = localStorage.getItem('kic-kid') !== '0'; } catch { /* ohne Speicher bleibt es an */ }
const KID = {
  fork:      { name: 'Zauberstab', icon: '🪄', model: 'wand' },
  bow:       { name: 'Zauberkugeln', icon: '✨', model: 'orbwand' },
  firesword: { name: 'Sternenstab', icon: '⭐', model: 'starstaff' },
  gun:       { name: 'Seifenblasen-Kanone', icon: '🫧', model: 'bubbler' },
};
const wName = (w) => (kid ? KID[w].name : WEAPONS[w].name);
const wIcon = (w) => (kid ? KID[w].icon : WEAPONS[w].icon);
const wModel = (w) => (kid ? KID[w].model : w);
const rankName = (l) => (kid && l === MAX_LEVEL ? 'Burgheld' : RANKS[l]);
const snd = (normal, kidSound) => (kid ? kidSound : normal);

// ================= Spielmodus =================
// single: ein Spieler · local: zwei an einer Tastatur · host/client: zwei übers Internet
let mode = null;
let me = 0;              // welcher Spieler auf diesem Gerät zu sehen ist (bei 'local' beide)
let started = false;
let conn = null;
let players = [];
const enemies = [];
const animals = [];
const items = [];
const projectiles = [];
let nextId = 1;
let pending = [];
const later = (t, fn) => pending.push({ t, fn });
const isSim = () => mode !== 'client';   // rechnet dieses Gerät das Spiel?

// ================= Effekte (laufen hier und werden beim Netzwerkspiel mitgeschickt) =================
let netEvents = [];
const emit = (ev) => { if (mode === 'host') netEvents.push(ev); };
const visible = (i) => mode === 'local' || i === me;

function fxFloat(text, color, pos) { floatText(scene, text, color, pos); emit(['f', text, color, pos.x, pos.z]); }
function fxSfx(name) { sfx[name](); emit(['s', name]); }
function fxPlayerMsg(i, text, ms) { playerMsg(i, text, ms); emit(['m', i, text, ms]); }
function fxGlobalMsg(text, ms) { showMsg('msg', text, ms); emit(['g', text, ms]); }
function fxHurt(p) { hurtVisual(p); emit(['h', p.index]); }
function fxFlash(c) { c.hit = 0.15; flash(c.h, 0xffffff); emit(['c', c.id]); }
function fxWait(i, text) { setWait(i, text); emit(['w', i, text]); }

function playerMsg(i, text, ms) { if (visible(i)) showMsg('msg' + i, text, ms); }
function setWait(i, text) {
  if (!visible(i)) return;
  const w = $('wait' + i);
  w.textContent = text || '';
  w.style.display = text ? 'flex' : 'none';
}
function hurtVisual(p) {
  p.hurt = 0.25;
  flash(p.h, 0xaa0000);
  if (!visible(p.index)) return;
  const hurtEl = $('hurt' + p.index);
  hurtEl.style.opacity = 1;
  setTimeout(() => (hurtEl.style.opacity = 0), 250);
  const bar = p.hud.querySelector('.bar');
  bar.classList.remove('shake');
  void bar.offsetWidth;
  bar.classList.add('shake');
}

// ================= Spieler =================
const LOOKS = [
  { pants: 0x5a4a32, hair: 0x3a2414, band: 0x1e63d6 },
  { pants: 0x4a3a2a, hair: 0xd9b36a, band: 0xef6c00 },
];
const KEYMAPS = {
  p1: { fwd: ['KeyW'], back: ['KeyS'], left: ['KeyA'], right: ['KeyD'], attack: ['Space'], swap: ['KeyQ', 'KeyE'] },
  p2: { fwd: ['ArrowUp'], back: ['ArrowDown'], left: ['ArrowLeft'], right: ['ArrowRight'],
        attack: ['Enter', 'NumpadEnter', 'Numpad0'], swap: ['ShiftRight', 'ControlRight', 'Numpad1'] },
};
KEYMAPS.all = Object.fromEntries(Object.keys(KEYMAPS.p1).map((k) => [k, [...KEYMAPS.p1[k], ...KEYMAPS.p2[k]]]));
const KEY_HINTS = {
  p1: 'W A S D laufen · Leertaste angreifen · Q Waffe wechseln',
  p2: 'Pfeiltasten laufen · Enter angreifen · Shift rechts Waffe wechseln',
  all: 'W A S D / Pfeile laufen · Leertaste / Enter angreifen · Q / Shift Waffe wechseln',
};

// source: 'local' (Tastatur/Touch an diesem Gerät) oder 'remote' (über das Netzwerk)
function createPlayer(index, keymap, source) {
  const p = {
    index, name: 'Spieler ' + (index + 1), startX: index ? 2.5 : -2.5, startWeapon: index ? 'bow' : 'fork',
    keymap: KEYMAPS[keymap], source, input: { fwd: 0, turn: 0, attack: false }, swapReq: false,
  };
  p.h = makeHuman({ shirt: RANK_COLORS[0], ...LOOKS[index], strawHat: true, armor: true, weapons: ['fork', 'bow', 'firesword', 'gun', 'wand', 'orbwand', 'starstaff', 'bubbler'] });
  p.root = p.h.root;
  scene.add(p.root);
  p.bar = makeBar();
  p.root.add(p.bar);
  p.cam = new THREE.PerspectiveCamera(60, 1, 0.1, 500);
  p.hud = $('hud' + index);
  p.hud.querySelector('.keys').textContent = (KEY_HINTS[keymap] || '').replace('angreifen', kid ? 'zaubern' : 'angreifen').replace('Waffe wechseln', kid ? 'Zauber wechseln' : 'Waffe wechseln');
  p.hudCache = '';
  p.walk = 0;
  resetPlayer(p);
  return p;
}

function applyLevel(p) {
  setArmorLevel(p.h, p.level);
  p.h.mats.shirt.color.setHex(RANK_COLORS[p.level]);
  if (p.index === 1) p.h.mats.shirt.color.offsetHSL(0, 0, 0.06);
}

function resetPlayer(p) {
  p.level = 0;
  p.kills = 0;
  p.lives = START_LIVES;
  p.out = false;
  p.special = null;
  p.apples = 0;
  p.pack = { wood: 0, stone: 0, soap: 0, star: 0 };
  p.weapon = p.baseWeapon = p.startWeapon;
  setWeapon(p.h, wModel(p.weapon));
  applyLevel(p);
  setWait(p.index, null);
  respawn(p);
}

function respawn(p) {
  p.root.position.set(HOME.x + p.startX, 0, HOME.z - 16);
  p.root.visible = true;
  p.h.body.rotation.x = 0;
  p.heading = p.bodyYaw = Math.PI;
  p.faceT = 0;
  p.hp = 100;
  p.dead = 0;
  p.attackT = 0;
  p.attackDur = 0.35;
  p.cooldown = 0;
  p.hurt = 0;
  p.moving = 0;
  p.camDist = 7;
  p.camInit = false;
}

function updateHud(p) {
  const hp = Math.max(0, Math.round(p.hp));
  const lives = '❤️'.repeat(Math.max(0, p.lives)) + '🖤'.repeat(Math.max(0, START_LIVES - p.lives));
  const weapon = `${wIcon(p.weapon)} ${wName(p.weapon)}` + (p.special && p.weapon === p.special.type ? ` (${Math.ceil(p.special.t)} s)` : '')
    + (p.special && p.weapon !== p.special.type ? ` · ${wIcon(p.special.type)} bereit` : '');
  const xp = p.level >= MAX_LEVEL ? 'Höchster Rang erreicht!'
    : `Noch ${KILLS_PER_LEVEL - (p.kills % KILLS_PER_LEVEL)} ${kid ? 'Schelme verzaubern' : 'Gegner'} bis ${rankName(p.level + 1)}`;
  const xpLine = kid ? `🍎 ${p.apples} Äpfel · 🐾 ${freed}/${CAGE_SPOTS.length} Tiere befreit · ${xp}` : xp;
  const packLine = kid ? `🎒 Rucksack (${packCount(p)}/${PACK_SIZE}): ${matText(p.pack) || 'leer'}` : '';
  const key = [hp, p.level, lives, weapon, xpLine, packLine].join('|');
  if (key === p.hudCache) return;
  p.hudCache = key;
  const fill = p.hud.querySelector('.fill');
  fill.style.width = hp + '%';
  fill.style.background = hpColor(hp / 100);
  p.hud.querySelector('.hpnum').textContent = hp + ' / 100';
  p.hud.querySelector('.level').textContent = `Level ${p.level + 1}: ${rankName(p.level)}`;
  p.hud.querySelector('.lives').textContent = lives;
  p.hud.querySelector('.weapon').textContent = weapon;
  p.hud.querySelector('.xp').textContent = xpLine;
  p.hud.querySelector('.pack').textContent = packLine;
  drawBar(p.bar, hp / 100);
}

const alivePlayers = () => players.filter((p) => !p.dead && !p.out);

function nearestPlayer(pos, maxDist) {
  let best = null, bestD = maxDist;
  for (const p of alivePlayers()) {
    const d = p.root.position.distanceTo(pos);
    if (d < bestD) { best = p; bestD = d; }
  }
  return best;
}

function hurtPlayer(p, rawDmg) {
  if (p.dead || p.out) return;
  // Bessere Rüstung = weniger Schaden
  const dmg = Math.max(1, Math.round(rawDmg * (1 - 0.08 * p.level)));
  p.hp -= dmg;
  fxHurt(p);
  fxFloat('-' + dmg, '#ff5252', p.root.position);
  fxSfx(snd('hurt', 'plop'));
  if (p.hp <= 0) loseLife(p);
}

function loseLife(p) {
  p.hp = 0;
  p.lives--;
  p.dead = 3;
  p.special = null;
  if (WEAPONS[p.weapon].special) { p.weapon = p.baseWeapon; setWeapon(p.h, wModel(p.weapon)); }
  fxSfx('lifeLost');
  if (p.lives > 0) {
    fxPlayerMsg(p.index, `Autsch! Noch ${p.lives} ${p.lives === 1 ? 'Leben' : 'Leben'}. Gleich geht es in der Burg weiter.`, 3000);
    return;
  }
  p.out = true;
  if (players.every((q) => q.out)) {
    fxGlobalMsg(players.length === 1 ? 'Keine Leben mehr! Neues Spiel als Bauer …' : 'Beide sind besiegt! Neues Spiel als Bauern …', 4000);
    later(4, resetGame);
  } else {
    const other = players.find((q) => q !== p);
    fxWait(p.index, `Keine Leben mehr! Warte, bis ${other.name} auch fertig ist.`);
  }
}

function addKill(p) {
  p.kills++;
  const lvl = Math.min(Math.floor(p.kills / KILLS_PER_LEVEL), MAX_LEVEL);
  if (lvl > p.level) {
    p.level = lvl;
    applyLevel(p);
    p.hp = 100;
    fxPlayerMsg(p.index, `${p.name} ist jetzt ${rankName(lvl)}! Neue Rüstung!`, 3000);
    fxSfx('levelUp');
  }
}

function swapWeapon(p) {
  if (p.dead || p.out) return;
  const list = ['fork', 'bow', ...(p.special ? [p.special.type] : [])];
  p.weapon = list[(list.indexOf(p.weapon) + 1) % list.length];
  if (!WEAPONS[p.weapon].special) p.baseWeapon = p.weapon;
  setWeapon(p.h, wModel(p.weapon));
}

// ================= Figuren-Modelle (für Rechner und Mitspieler gleich) =================
function makeEnemyEntity(archer, x, z) {
  const h = makeHuman(archer
    ? { shirt: 0x8e2424, pants: 0x3a3a3a, hair: 0x2b1b10, hood: 0x5a1414, weapons: [kid ? 'snowball' : 'bow'] }
    : { shirt: 0xb71c1c, pants: 0x3a3a3a, hair: 0x2b1b10, helmet: true, shield: !kid, weapons: [kid ? 'pillow' : 'sword'] });
  h.root.position.set(x, 0, z);
  const bar = makeBar();
  h.root.add(bar);
  drawBar(bar, 1);
  scene.add(h.root);
  const maxHp = archer ? 20 : 30;
  return { kind: 'enemy', archer, h, root: h.root, bar, hp: maxHp, maxHp, wind: 0, strike: 0, hit: 0, dying: 0, walk: 0, moving: false };
}

function makeAnimalEntity(type, x, z) {
  const a = makeAnimal(type);
  a.root.position.set(x, 0, z);
  const bar = makeBar({ deer: 2.0, cow: 2.0, chicken: 1.1 }[type] || 1.4);
  bar.visible = false;
  a.root.add(bar);
  scene.add(a.root);
  const maxHp = type === 'deer' ? 10 : 20;
  return { kind: 'animal', type, h: a, root: a.root, bar, hp: maxHp, maxHp, hit: 0, dying: 0, walk: 0, spd: 0 };
}

// ================= Gegner und Tiere (nur der Rechner) =================
const targets = () => (kid ? [...enemies, ...cages] : [...enemies, ...animals]).filter((c) => !c.dying);

function spawnEnemy(slot, archer) {
  const [x, z] = (archer ? ARCHER_SPAWNS : GUARD_SPAWNS)[slot];
  const e = makeEnemyEntity(archer, x, z);
  Object.assign(e, {
    id: nextId++, home: { x, z }, slot, cd: 0, shootCd: 1 + Math.random() * 2, lastHit: null,
    target: null, orbit: 0, orbitDir: Math.random() < 0.5 ? -1 : 1, dodge: 0, dodgeDir: 1,
    flee: 0, fled: false, backoff: 0, isAttacker: false,
  });
  enemies.push(e);
}

function spawnAllEnemies() {
  GUARD_SPAWNS.forEach((_, i) => spawnEnemy(i, false));
  ARCHER_SPAWNS.forEach((_, i) => spawnEnemy(i, true));
}

function spawnAnimal() {
  const s = randomFreeSpot();
  const kidTypes = ['cow', 'cow', 'chicken', 'chicken', 'chicken', 'deer', 'boar'];
  const type = kid ? kidTypes[Math.floor(Math.random() * kidTypes.length)] : Math.random() < 0.55 ? 'deer' : 'boar';
  const c = makeAnimalEntity(type, s.x, s.z);
  Object.assign(c, { id: nextId++, heading: Math.random() * 6.28, wanderT: 0, wander: false, fleeT: 0, state: 'wild' });
  animals.push(c);
}

function hitCreature(c, p, dmg, dirX, dirZ) {
  if (c.dying) return;
  if (c.kind === 'cage') { hitCage(c, p); return; }
  let text = (kid ? '✨' : '-') + dmg, color = kid ? '#b388ff' : '#ffffff';
  if (c.kind === 'enemy') {
    const now = performance.now();
    if (c.lastHit && c.lastHit.by !== p && now - c.lastHit.time < 1500) {
      dmg *= 2;   // Teamwork-Bonus
      text = 'TEAM! ' + (kid ? '✨' : '-') + dmg;
      color = '#ffd54f';
    }
    c.lastHit = { by: p, time: now };
    c.wind = 0;            // Treffer unterbricht den Angriff
    c.cd = Math.max(c.cd, 0.8);
    if (!c.fled && c.hp - dmg > 0 && c.hp - dmg <= c.maxHp / 3) { c.flee = 2.5; c.fled = true; }
  } else {
    c.fleeT = 5;
  }
  c.hp -= dmg;
  fxFlash(c);
  fxFloat(text, color, c.root.position);
  fxSfx(snd('hit', 'magic'));
  move(c.root, dirX, dirZ, 0.5);
  c.bar.visible = true;
  drawBar(c.bar, c.hp / c.maxHp);
  if (c.hp <= 0) killCreature(c, p);
}

function killCreature(c, p) {
  c.dying = 1;
  c.bar.visible = false;
  const pos = c.root.position;
  if (c.kind === 'enemy') {
    addKill(p);
    if (kid) { fxFloat('Verzaubert! 🐸', '#a5ff8a', pos); fxSfx('poof'); }
    const r = Math.random();
    if (kid) dropItem(Math.random() < 0.5 ? 'soap' : 'star', { x: pos.x + 0.8, z: pos.z });
    if (r < 0.3) dropItem('heart', pos);
    else if (r < 0.4) dropItem('life', pos);
    else if (r < 0.65) dropItem(Math.random() < 0.5 ? 'gun' : 'firesword', pos);
    const { slot, archer } = c;
    later(8, () => spawnEnemy(slot, archer));
  } else {
    dropItem('meat', pos);
    later(20, spawnAnimal);
  }
}

// ================= Gegenstände zum Einsammeln =================
const heartGeo = (() => {
  const s = new THREE.Shape();
  s.moveTo(5, 5);
  s.bezierCurveTo(5, 5, 4, 0, 0, 0);
  s.bezierCurveTo(-6, 0, -6, 7, -6, 7);
  s.bezierCurveTo(-6, 11, -3, 15.4, 5, 19);
  s.bezierCurveTo(12, 15.4, 16, 11, 16, 7);
  s.bezierCurveTo(16, 7, 16, 0, 10, 0);
  s.bezierCurveTo(7, 0, 5, 5, 5, 5);
  const g = new THREE.ExtrudeGeometry(s, { depth: 4, bevelEnabled: true, bevelSize: 1, bevelThickness: 1, bevelSegments: 2 });
  g.center();
  g.rotateZ(Math.PI);
  g.scale(0.03, 0.03, 0.03);
  return g;
})();
const ITEM_GLOW = { wood: 0x8d6e63, stone: 0xbdbdbd, soap: 0xf48fb1, star: 0xfff176, milk: 0xffffff, egg: 0xffe0b2, heart: 0xff3b3b, life: 0xffd54f, meat: 0xffa040, apple: 0xff5050, gun: 0x40c4ff, firesword: 0xff7a1a };

function makeItemEntity(type, x, z) {
  const g = new THREE.Group();
  const model = new THREE.Group();
  if (type === 'heart') model.add(mesh(heartGeo, new THREE.MeshStandardMaterial({ color: 0xe53935, emissive: 0x550000, roughness: 0.4 })));
  if (type === 'life') {
    const m = mesh(heartGeo, new THREE.MeshStandardMaterial({ color: 0xffd54f, emissive: 0x664400, metalness: 0.6, roughness: 0.3 }));
    m.scale.setScalar(1.3);
    model.add(m);
  }
  if (type === 'meat') {
    const bone = mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.5, 6), std(0xf4f0e8), 0, 0, -0.1);
    bone.rotation.z = 1.1;
    model.add(bone, mesh(new THREE.SphereGeometry(0.22, 10, 8), std(0x9c4a1c), 0.12, 0.06, -0.1));
  }
  if (type === 'wood') {
    for (const [y, x] of [[0, -0.15], [0, 0.15], [0.22, 0]]) {
      const log = mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.7, 8), std(0x7b4a2e), x, y, 0);
      log.rotation.z = Math.PI / 2;
      model.add(log);
    }
  }
  if (type === 'stone') {
    const st = mesh(new THREE.IcosahedronGeometry(0.25, 0), std(0x9e9e9e, { flatShading: true }));
    st.scale.set(1.2, 0.8, 1);
    model.add(st);
  }
  if (type === 'soap') {
    model.add(mesh(new THREE.BoxGeometry(0.4, 0.18, 0.26), std(0xf48fb1, { roughness: 0.3 })));
    for (const [x, y] of [[0.1, 0.2], [-0.1, 0.3], [0.05, 0.42]]) {
      model.add(mesh(new THREE.SphereGeometry(0.06, 8, 6), new THREE.MeshStandardMaterial({ color: 0xe1f5fe, transparent: true, opacity: 0.6 }), x, y, 0));
    }
  }
  if (type === 'star') model.add(mesh(new THREE.OctahedronGeometry(0.22), new THREE.MeshStandardMaterial({ color: 0xfff176, emissive: 0xffd54f, emissiveIntensity: 1.5 })));
  if (type === 'milk') {
    model.add(mesh(new THREE.CylinderGeometry(0.13, 0.15, 0.4, 14), std(0xfafafa, { roughness: 0.2 })));
    model.add(mesh(new THREE.CylinderGeometry(0.07, 0.1, 0.12, 12), std(0xfafafa, { roughness: 0.2 }), 0, 0.26, 0));
    model.add(mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.06, 12), std(0x1e88e5), 0, 0.34, 0));
  }
  if (type === 'egg') {
    const egg = mesh(new THREE.SphereGeometry(0.15, 14, 10), std(0xf3e0c4, { roughness: 0.5 }));
    egg.scale.set(0.85, 1.15, 0.85);
    model.add(egg);
  }
  if (type === 'apple') {
    model.add(mesh(new THREE.SphereGeometry(0.2, 14, 10), std(0xd32f2f, { roughness: 0.4 })));
    model.add(mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.12, 5), std(0x5d4037), 0, 0.22, 0));
    const leaf = mesh(new THREE.SphereGeometry(0.07, 8, 6), std(0x43a047), 0.07, 0.24, 0);
    leaf.scale.set(1, 0.3, 0.6);
    model.add(leaf);
  }
  if (type === 'gun' || type === 'firesword') {
    const w = makeWeaponModel(wModel(type));
    w.rotation.y = Math.PI / 2;
    w.position.x = -0.5;
    model.add(w);
  }
  const ring = mesh(new THREE.TorusGeometry(0.6, 0.05, 8, 24).rotateX(Math.PI / 2),
    new THREE.MeshStandardMaterial({ color: ITEM_GLOW[type], emissive: ITEM_GLOW[type], emissiveIntensity: 1.2 }), 0, 0.05, 0);
  model.position.y = 0.9;
  g.add(model, ring);
  g.position.set(x, 0, z);
  scene.add(g);
  return { type, g, model, t: 0 };
}

function dropItem(type, pos) {
  const it = makeItemEntity(type, pos.x, pos.z);
  it.id = nextId++;
  items.push(it);
}

function pickUp(item, p) {
  const pos = p.root.position;
  if (MATERIALS.includes(item.type)) {
    if (packCount(p) >= PACK_SIZE) {
      if ((p.fullHintT || 0) < performance.now()) {
        p.fullHintT = performance.now() + 4000;
        fxPlayerMsg(p.index, '🎒 Rucksack voll! Bring alles in eure Burg.', 2500);
      }
      return false;
    }
    p.pack[item.type]++;
    fxFloat(`+1 ${MAT_ICON[item.type]} ${MAT_NAME[item.type]}`, '#ffffff', pos);
    fxSfx('pickup');
    return true;
  }
  if (item.type === 'heart') { p.hp = Math.min(100, p.hp + 30); fxFloat('+30 ❤', '#ff8a80', pos); }
  if (item.type === 'apple') {
    if (p.apples < 9) { p.apples++; fxFloat(`+1 🍎 (${p.apples})`, '#ff8a80', pos); }
    else { p.hp = Math.min(100, p.hp + 20); fxFloat('Mmh, Apfel! +20', '#ff8a80', pos); }
  }
  if (item.type === 'milk') { p.hp = Math.min(100, p.hp + 30); fxFloat('Leckere Milch! +30', '#ffffff', pos); }
  if (item.type === 'egg') { p.hp = Math.min(100, p.hp + 15); fxFloat('Frisches Ei! +15', '#ffe0b2', pos); }
  if (item.type === 'meat') { p.hp = Math.min(100, p.hp + 40); fxFloat('Lecker! +40', '#ffcc80', pos); }
  if (item.type === 'life') { p.lives = Math.min(5, p.lives + 1); fxFloat('+1 Leben', '#ffd54f', pos); }
  if (item.type === 'gun' || item.type === 'firesword') {
    p.special = { type: item.type, t: SPECIAL_TIME };
    p.weapon = item.type;
    setWeapon(p.h, wModel(p.weapon));
    fxPlayerMsg(p.index, `${wIcon(item.type)} ${wName(item.type)} für ${SPECIAL_TIME} Sekunden!`);
  }
  fxSfx('pickup');
}

function updateItems(dt) {
  for (const it of [...items]) {
    const p = alivePlayers().find((q) => q.root.position.distanceTo(it.g.position) < 1.6);
    const taken = p && pickUp(it, p) !== false;
    if (taken || it.t > (MATERIALS.includes(it.type) ? 60 : 30)) { scene.remove(it.g); items.splice(items.indexOf(it), 1); }
  }
}

function poseItems(dt) {
  for (const it of items) {
    it.t += dt;
    it.model.rotation.y += dt * 2;
    it.model.position.y = 0.9 + Math.sin(it.t * 3) * 0.15;
    const life = MATERIALS.includes(it.type) ? 60 : 30;
    it.g.visible = it.t < life - 5 || Math.floor(it.t * 6) % 2 === 0;   // blinkt kurz vor dem Verschwinden
  }
}

// ================= Pfeile und Kugeln =================
const arrowGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.8, 5).rotateX(Math.PI / 2);
const tipGeo = new THREE.ConeGeometry(0.05, 0.15, 6).rotateX(Math.PI / 2);
const bulletGeo = new THREE.SphereGeometry(0.07, 6, 6);
const arrowMat = std(0x8d6e4a), tipMat = metal(0x888888), redArrowMat = std(0x7a1010);
const bulletMat = new THREE.MeshStandardMaterial({ color: 0xffee58, emissive: 0xffd000, emissiveIntensity: 2 });

const orbMat = new THREE.MeshStandardMaterial({ color: 0x80deea, emissive: 0x40c4ff, emissiveIntensity: 2 });
const bubbleMat = new THREE.MeshStandardMaterial({ color: 0xbfefff, transparent: true, opacity: 0.5, roughness: 0.1, emissive: 0x2a6f80 });
const snowMat = std(0xffffff);
const spellMat = new THREE.MeshStandardMaterial({ color: 0xce93d8, emissive: 0x9c27b0, emissiveIntensity: 2.5 });
const orbGeo = new THREE.SphereGeometry(0.15, 12, 10);

function makeProjectileMesh(kind, owner) {
  let m;
  if (kind === 'spell') {
    m = new THREE.Mesh(orbGeo, spellMat);
    m.scale.setScalar(1.6);
  } else if (kid) {
    m = new THREE.Mesh(orbGeo, owner === 'enemy' ? snowMat : kind === 'bullet' ? bubbleMat : orbMat);
    if (owner === 'enemy') m.scale.setScalar(0.8);
  } else if (kind === 'bullet') m = new THREE.Mesh(bulletGeo, bulletMat);
  else {
    m = new THREE.Group();
    m.add(new THREE.Mesh(arrowGeo, owner === 'enemy' ? redArrowMat : arrowMat));
    const tip = new THREE.Mesh(tipGeo, tipMat);
    tip.position.z = 0.45;
    m.add(tip);
  }
  scene.add(m);
  return m;
}

function shoot({ from, heading, speed, target, dmg, kind, owner, by }) {
  const m = makeProjectileMesh(kind, owner);
  m.position.set(from.x + Math.sin(heading) * 0.8, 1.4, from.z + Math.cos(heading) * 0.8);
  projectiles.push({ id: nextId++, m, kind, vel: new THREE.Vector3(Math.sin(heading) * speed, 0, Math.cos(heading) * speed),
                     speed, target, dmg, owner, by, life: 1.6 });
}

const tmpV = new THREE.Vector3();
function updateProjectiles(dt) {
  for (const pr of [...projectiles]) {
    const pos = pr.m.position;
    // Zielhilfe: Pfeile der Spieler fliegen zum gewählten Ziel
    if (pr.target && !pr.target.dying) {
      tmpV.copy(pr.target.root.position).setY(1.1).sub(pos).normalize().multiplyScalar(pr.speed);
      pr.vel.lerp(tmpV, Math.min(1, dt * 10));
    }
    pos.addScaledVector(pr.vel, dt);
    pr.m.lookAt(tmpV.copy(pos).add(pr.vel));
    pr.life -= dt;
    let done = pr.life <= 0 || pos.y < 0 || (pos.y < 7 && solidAt(pos.x, pos.z));
    if (!done && pr.owner === 'player') {
      for (const c of targets()) {
        const cp = c.root.position;
        if (Math.hypot(cp.x - pos.x, cp.z - pos.z) < 0.9 && pos.y < 2.4) {
          const l = Math.hypot(pr.vel.x, pr.vel.z) || 1;
          hitCreature(c, pr.by, pr.dmg, (pr.vel.x / l) * 0.5, (pr.vel.z / l) * 0.5);
          done = true;
          break;
        }
      }
    }
    if (!done && pr.owner === 'enemy') {
      for (const p of alivePlayers()) {
        const pp = p.root.position;
        if (Math.hypot(pp.x - pos.x, pp.z - pos.z) < 0.8 && pos.y < 2.4) { hurtPlayer(p, pr.dmg); done = true; break; }
      }
    }
    if (done) { scene.remove(pr.m); projectiles.splice(projectiles.indexOf(pr), 1); }
  }
}

// ================= Angriff der Spieler =================
function autoTarget(p, range, maxAngle) {
  const pos = p.root.position;
  let best = null, bestScore = Infinity;
  for (const c of targets()) {
    const dx = c.root.position.x - pos.x, dz = c.root.position.z - pos.z;
    const dist = Math.hypot(dx, dz);
    if (dist > range) continue;
    const ang = Math.abs(angleDiff(Math.atan2(dx, dz), p.heading));
    if (ang > maxAngle && dist > 2.5) continue;
    const score = ang * 8 + dist * 0.15 + (c.kind === 'animal' ? 4 : 0);
    if (score < bestScore) { best = c; bestScore = score; }
  }
  return best;
}

function attack(p) {
  const W = WEAPONS[p.weapon];
  p.cooldown = W.cd;
  p.attackDur = W.melee ? 0.35 : Math.min(0.25, W.cd);
  p.attackT = p.attackDur;
  p.justAttacked = true;
  const pos = p.root.position;
  // Grob in die Richtung zielen reicht: wir suchen das passende Ziel selbst
  const target = autoTarget(p, W.melee ? 4.5 : 38, W.melee ? 1.4 : 0.9);
  let aim = p.heading;
  if (target) aim = Math.atan2(target.root.position.x - pos.x, target.root.position.z - pos.z);
  p.face = aim;
  p.faceT = 0.6;
  const fx = Math.sin(aim), fz = Math.cos(aim);
  if (W.melee) {
    fxSfx(snd('swing', 'magic'));
    for (const c of targets()) {
      const dx = c.root.position.x - pos.x, dz = c.root.position.z - pos.z;
      const dist = Math.hypot(dx, dz);
      if (dist < W.range && (dx * fx + dz * fz) / dist > W.cone) hitCreature(c, p, W.dmg + p.level * 2, fx * 1.2, fz * 1.2);
    }
  } else {
    fxSfx(W.projectile === 'arrow' ? snd('bow', 'magic') : snd('gun', 'bubble'));
    const spread = target ? 0 : (Math.random() - 0.5) * 0.1;
    shoot({ from: pos, heading: aim + spread, speed: W.speed, target, dmg: W.dmg + p.level, kind: W.projectile, owner: 'player', by: p });
  }
}

// ================= Eingabe: Tastatur und Touch =================
const keys = {};
const touchIn = { fwd: 0, turn: 0, attack: false };
addEventListener('keydown', (e) => {
  keys[e.code] = true;
  initAudio();
  if (!started) return;
  if (e.code.startsWith('Arrow') || ['Space', 'Enter', 'ShiftRight', 'ControlRight'].includes(e.code)) e.preventDefault();
  if (!e.repeat) for (const p of players) if (p.source === 'local' && p.keymap.swap.includes(e.code)) p.swapReq = true;
});
addEventListener('keyup', (e) => (keys[e.code] = false));
addEventListener('blur', () => { for (const k in keys) keys[k] = false; });

const any = (list) => list.some((c) => keys[c]);
function readLocalInput(p) {
  const m = p.keymap;
  const clamp = (v) => Math.max(-1, Math.min(1, v));
  p.input = {
    fwd: clamp((any(m.fwd) ? 1 : 0) - (any(m.back) ? 1 : 0) + touchIn.fwd),
    turn: clamp((any(m.left) ? 1 : 0) - (any(m.right) ? 1 : 0) + touchIn.turn),
    attack: any(m.attack) || touchIn.attack,
  };
}

// Joystick links, Knöpfe rechts
{
  const joy = $('joy'), knob = $('knob');
  let pid = null;
  const setKnob = (e) => {
    const r = joy.getBoundingClientRect();
    let dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
    const max = r.width / 2, len = Math.hypot(dx, dy);
    if (len > max) { dx *= max / len; dy *= max / len; }
    knob.style.transform = `translate(${dx}px, ${dy}px)`;
    const jx = dx / max, jy = dy / max;
    touchIn.fwd = Math.abs(jy) > 0.2 ? -jy : 0;
    touchIn.turn = Math.abs(jx) > 0.2 ? -jx : 0;
  };
  joy.addEventListener('pointerdown', (e) => { pid = e.pointerId; joy.setPointerCapture(pid); initAudio(); setKnob(e); });
  joy.addEventListener('pointermove', (e) => { if (e.pointerId === pid) setKnob(e); });
  const release = (e) => {
    if (e.pointerId !== pid) return;
    pid = null;
    knob.style.transform = '';
    touchIn.fwd = touchIn.turn = 0;
  };
  joy.addEventListener('pointerup', release);
  joy.addEventListener('pointercancel', release);
  const atk = $('tAttack');
  atk.addEventListener('pointerdown', (e) => { atk.setPointerCapture(e.pointerId); initAudio(); touchIn.attack = true; });
  atk.addEventListener('pointerup', () => (touchIn.attack = false));
  atk.addEventListener('pointercancel', () => (touchIn.attack = false));
  $('tSwap').addEventListener('pointerdown', () => { const p = players[me]; if (p) p.swapReq = true; });
}

// ================= Spieler: Logik (nur der Rechner) =================
function updatePlayerLogic(p, dt) {
  const root = p.root;
  p.moving = 0;
  if (p.dead > 0) {
    p.dead -= dt;
    if (p.dead <= 0) {
      if (p.out) p.dead = 0.001;
      else respawn(p);
    }
  } else {
    const inp = p.input;
    p.heading += inp.turn * 2.6 * dt;
    const speed = inp.fwd > 0 ? inp.fwd * 9 : inp.fwd * 5;
    if (Math.abs(speed) > 0.1) {
      move(root, Math.sin(p.heading) * speed * dt, Math.cos(p.heading) * speed * dt, 0.5);
      p.moving = speed > 0 ? 1 : -1;
    }
    if (p.swapReq) swapWeapon(p);
    p.cooldown -= dt;
    if (inp.attack && p.cooldown <= 0) attack(p);
    p.hp = Math.min(100, p.hp + dt);
    if (p.special) {
      p.special.t -= dt;
      if (p.special.t <= 0) {
        if (p.weapon === p.special.type) { p.weapon = p.baseWeapon; setWeapon(p.h, wModel(p.weapon)); }
        p.special = null;
      }
    }
  }
  p.swapReq = false;
  p.attackT = Math.max(0, p.attackT - dt);
  // Der Körper dreht sich beim Angriff zum Ziel, die Kamera bleibt ruhig hinter dem Spieler
  p.faceT -= dt;
  const want = p.faceT > 0 ? p.face : p.heading;
  p.bodyYaw += angleDiff(want, p.bodyYaw) * Math.min(1, dt * 15);
}

// ================= Spieler: Aussehen und Kamera (auf jedem Gerät) =================
const camPos = new THREE.Vector3(), camLook = new THREE.Vector3();

function posePlayer(p, dt) {
  const root = p.root;
  if (p.dead > 0 || p.out) p.h.body.rotation.x = Math.max(-Math.PI / 2, p.h.body.rotation.x - dt * 4);
  else p.h.body.rotation.x = 0;
  root.visible = !(p.out && p.h.body.rotation.x <= -1.5);
  root.rotation.y = p.bodyYaw;
  if (p.moving) p.walk += dt * (p.moving > 0 ? 11 : -8);

  p.attackT = Math.max(0, p.attackT - (isSim() ? 0 : dt));
  const prog = p.attackT > 0 ? 1 - p.attackT / p.attackDur : 0;
  const s = p.attackT > 0 ? Math.sin(prog * Math.PI) : 0;
  const wpn = p.h.weapon;
  let armR, armL;
  wpn.position.z = 0;
  if (p.weapon === 'fork') {
    armR = -0.35 - s * 1.1;
    wpn.rotation.x = -armR - 0.25;
    wpn.position.z = s * 0.4;
  } else if (p.weapon === 'bow') {
    armR = -1.45;
    armL = -1.3 + s * 0.3;
    wpn.rotation.x = -armR;
  } else if (p.weapon === 'gun') {
    armR = -1.3;
    armL = -1.1;
    wpn.rotation.x = -armR;
    wpn.position.z = -s * 0.08;
  } else {
    armR = p.attackT > 0 ? -2.4 + prog * 2.1 : -0.5;
    wpn.rotation.x = 0;
  }
  animateHuman(p.h, p.walk, !!p.moving, armR, armL);
  if (p.hurt > 0) { p.hurt -= dt; if (p.hurt <= 0) flash(p.h, 0); }
  updateHud(p);

  // Kamera hinter dem Spieler, rückt nur sanft näher, wenn eine Mauer oder ein Berg im Weg ist
  const fx = Math.sin(p.heading), fz = Math.cos(p.heading);
  let wantDist = 7;
  for (let d = 1; d <= 7; d += 0.5) {
    if (solidAt(root.position.x - fx * d, root.position.z - fz * d)) { wantDist = Math.max(1.5, d - 1); break; }
  }
  p.camDist += (wantDist - p.camDist) * Math.min(1, dt * (wantDist < p.camDist ? 10 : 3));
  camPos.set(root.position.x - fx * p.camDist, 3.8, root.position.z - fz * p.camDist);
  camLook.set(root.position.x + fx * 3, 1.6, root.position.z + fz * 3);
  if (!p.camInit) { p.cam.position.copy(camPos); p.camInit = true; }
  p.cam.position.lerp(camPos, 1 - Math.exp(-dt * 10));
  p.cam.lookAt(camLook);
}

// Wer keine Leben mehr hat, schaut beim anderen zu
function spectate(p) {
  if (!p.out) return;
  const other = players.find((q) => q !== p && !q.out);
  if (!other) return;
  p.cam.position.copy(other.cam.position);
  p.cam.quaternion.copy(other.cam.quaternion);
}

// ================= Gegner: etwas klüger (nur der Rechner) =================
function assignTargets() {
  for (const e of enemies) {
    if (e.dying) continue;
    const t = e.flee > 0 ? null : nearestPlayer(e.root.position, e.archer ? 30 : 24);
    if (t && t !== e.target) {
      // Von der eigenen Seite aus angreifen, nicht alle von vorne
      e.orbit = Math.atan2(e.root.position.x - t.root.position.x, e.root.position.z - t.root.position.z);
    }
    e.target = t;
    e.isAttacker = false;
  }
  // Höchstens zwei Wachen greifen einen Spieler gleichzeitig an, die anderen kreisen und warten
  for (const p of players) {
    enemies
      .filter((e) => !e.dying && !e.archer && e.target === p)
      .sort((a, b) => a.root.position.distanceTo(p.root.position) - b.root.position.distanceTo(p.root.position))
      .slice(0, 2)
      .forEach((e) => (e.isAttacker = true));
  }
}

function walkTo(e, gx, gz, speed, dt) {
  const dx = gx - e.root.position.x, dz = gz - e.root.position.z;
  const d = Math.hypot(dx, dz);
  if (d < 0.3) return false;
  move(e.root, (dx / d) * speed * dt, (dz / d) * speed * dt, 0.5);
  return true;
}

function updateEnemyLogic(e, dt) {
  const root = e.root;
  if (e.dying) {
    e.dying -= dt;
    if (e.dying <= 0) { scene.remove(root); enemies.splice(enemies.indexOf(e), 1); }
    return;
  }
  e.cd -= dt;
  e.shootCd -= dt;
  e.strike = Math.max(0, e.strike - dt);
  let moving = false;
  const t = e.target;
  const pos = root.position;

  if (e.flee > 0) {
    // Angeschlagen: kurz zurück zur Burg
    e.flee -= dt;
    e.wind = 0;
    moving = walkTo(e, e.home.x, e.home.z, 5.5, dt);
    root.rotation.y = Math.atan2(e.home.x - pos.x, e.home.z - pos.z);
  } else if (t) {
    const tp = t.root.position;
    const dx = tp.x - pos.x, dz = tp.z - pos.z;
    const dist = Math.hypot(dx, dz) || 0.01;
    const face = Math.atan2(dx, dz);
    const sideX = -dz / dist, sideZ = dx / dist;
    root.rotation.y = face;

    // Ausweichen, wenn der Spieler gerade zuschlägt
    if (t.justAttacked && dist < 4.5 && e.wind <= 0 && e.dodge <= 0 && Math.random() < 0.35) {
      e.dodge = 0.3;
      e.dodgeDir = Math.random() < 0.5 ? -1 : 1;
    }

    if (e.archer) {
      if (e.wind > 0) {
        e.wind -= dt;
        if (e.wind <= 0) {
          fxSfx(snd('bow', 'plop'));
          shoot({ from: pos, heading: face, speed: 20, target: null, dmg: 6, kind: 'arrow', owner: 'enemy' });
        }
      } else if (e.dodge > 0) {
        e.dodge -= dt;
        moving = move(root, sideX * e.dodgeDir * 7 * dt, sideZ * e.dodgeDir * 7 * dt, 0.5);
      } else {
        if (dist < 9) moving = walkTo(e, pos.x - dx, pos.z - dz, 4, dt);          // Abstand halten
        else if (dist > 16) moving = walkTo(e, tp.x, tp.z, 4.5, dt);
        else {
          moving = move(root, sideX * e.orbitDir * 2.5 * dt, sideZ * e.orbitDir * 2.5 * dt, 0.5);
          if (!moving || Math.random() < dt * 0.4) e.orbitDir *= -1;
        }
        if (e.shootCd <= 0 && dist < 26) { e.wind = 0.7; e.shootCd = 2.5 + Math.random(); }
      }
    } else {
      if (e.wind > 0) {
        // Schwert hoch ... und zuschlagen!
        e.wind -= dt;
        if (e.wind <= 0) {
          e.strike = 0.15;
          if (dist < 2.8) hurtPlayer(t, 8);
          e.backoff = 0.5;
        }
      } else if (e.dodge > 0) {
        e.dodge -= dt;
        moving = move(root, sideX * e.dodgeDir * 7 * dt, sideZ * e.dodgeDir * 7 * dt, 0.5);
      } else if (e.backoff > 0 && e.strike <= 0) {
        e.backoff -= dt;
        moving = move(root, (-dx / dist) * 3.5 * dt, (-dz / dist) * 3.5 * dt, 0.5);
      } else if (e.strike <= 0) {
        // Um den Spieler herum verteilen: Angreifer kommen von der Seite, die anderen warten im Kreis
        e.orbit += e.orbitDir * (e.isAttacker ? 0.25 : 0.6) * dt;
        const r = e.isAttacker ? 1.7 : 5.5;
        moving = walkTo(e, tp.x + Math.sin(e.orbit) * r, tp.z + Math.cos(e.orbit) * r, e.isAttacker ? 5.5 : 4, dt);
        if (e.isAttacker && dist < 2.3 && e.cd <= 0) {
          e.wind = 0.55;
          e.cd = 1.6 + Math.random() * 0.8;
          fxSfx('windup');
        }
      }
    }
  } else {
    e.wind = 0;
    moving = walkTo(e, e.home.x, e.home.z, 4, dt);
    if (moving) root.rotation.y = Math.atan2(e.home.x - pos.x, e.home.z - pos.z);
  }

  // Nicht alle auf einem Haufen stehen
  for (const o of enemies) {
    if (o === e || o.dying) continue;
    const dx = pos.x - o.root.position.x, dz = pos.z - o.root.position.z;
    const d = Math.hypot(dx, dz);
    if (d > 0 && d < 1.3) move(root, (dx / d) * (1.3 - d) * 0.5, (dz / d) * (1.3 - d) * 0.5, 0.5);
  }
  e.moving = moving;
}

const frogs = [];
function spawnFrogAt(pos) {
  const g = makeFrog();
  g.position.set(pos.x, 0, pos.z);
  const dir = Math.random() * Math.PI * 2;
  g.rotation.y = dir;
  scene.add(g);
  frogs.push({ g, dir, t: 0 });
}
function poseEnemy(e, dt) {
  if (e.dying) {
    if (kid) {
      // Verzaubert: dreht sich, wird klein, und ein Frosch hüpft davon
      if (!e.frogged) { e.frogged = true; spawnFrogAt(e.root.position); }
      e.root.rotation.y += dt * 12;
      e.root.scale.setScalar(Math.max(0.01, e.dying));
    } else {
      e.h.body.rotation.x = Math.max(-Math.PI / 2, e.h.body.rotation.x - dt * 5);
      if (e.dying < 0.3) e.root.position.y -= dt * 3;
    }
    return;
  }
  if (e.moving) e.walk += dt * 9;
  let armR = -0.3, armL = -0.6;
  if (e.archer && kid) {
    // Schneeball werfen: Arm nach hinten holen
    armL = undefined;
    if (e.wind > 0) armR = -0.3 - (1 - Math.min(1, e.wind / 0.7)) * 2.6;
    e.h.weapon.rotation.x = 0;
  } else if (e.archer) {
    armL = undefined;
    if (e.wind > 0) { armR = -1.45; armL = -1.3; }
    e.h.weapon.rotation.x = -armR;
  } else if (e.wind > 0) armR = -0.3 - (1 - Math.min(1, e.wind / 0.55)) * 2.3;
  else if (e.strike > 0) armR = -0.4 - (e.strike / 0.15) * 2.2;
  animateHuman(e.h, e.walk, e.moving, armR, armL);
  if (e.hit > 0) { e.hit -= dt; if (e.hit <= 0) flash(e.h, 0); }
}

function updateFrogs(dt) {
  for (const f of [...frogs]) {
    f.t += dt;
    const hop = Math.abs(Math.sin(f.t * 7));
    f.g.position.x += Math.sin(f.dir) * dt * 2.5;
    f.g.position.z += Math.cos(f.dir) * dt * 2.5;
    f.g.position.y = hop * 0.5;
    if (f.t > 2.5) f.g.scale.setScalar(Math.max(0.01, 1 - (f.t - 2.5) * 2));
    if (f.t > 3) { scene.remove(f.g); frogs.splice(frogs.indexOf(f), 1); }
  }
}

// ================= Tiere =================
function updateAnimalLogic(c, dt) {
  const root = c.root;
  if (c.dying) {
    c.dying -= dt;
    if (c.dying <= 0) { scene.remove(root); animals.splice(animals.indexOf(c), 1); }
    return;
  }
  if (kid) { updateKidAnimal(c, dt); return; }
  const near = nearestPlayer(root.position, 12);
  let speed = 0;
  if (near || c.fleeT > 0) {
    // Weglaufen!
    c.fleeT -= dt;
    if (near) {
      const away = Math.atan2(root.position.x - near.root.position.x, root.position.z - near.root.position.z);
      c.heading += angleDiff(away, c.heading) * Math.min(1, dt * 5);
    }
    speed = c.type === 'deer' ? 8.5 : 6.5;
  } else {
    c.wanderT -= dt;
    if (c.wanderT <= 0) {
      c.wanderT = 2 + Math.random() * 4;
      c.wander = Math.random() < 0.6;
      c.heading += (Math.random() - 0.5) * 2;
    }
    speed = c.wander ? 1.5 : 0;
  }
  if (speed && !move(root, Math.sin(c.heading) * speed * dt, Math.cos(c.heading) * speed * dt, 0.6)) c.heading += Math.PI / 2;
  root.rotation.y = c.heading;
  c.spd = speed;
}

// Kinderfreundlich: Tiere mit Äpfeln anfüttern, dann laufen sie mit. Im Stall geben sie etwas.
const PRODUCE = { cow: ['milk', 18, 'Muuh! 🥛'], chicken: ['egg', 12, 'Gack gack! 🥚'], deer: ['apple', 25, '🍎'], boar: ['apple', 25, '🍎'] };
const ANIMAL_NAME = { cow: 'die Kuh', chicken: 'das Huhn', deer: 'das Reh', boar: 'das Wildschwein' };
const inStall = (x, z, m = 0) => x > STALL.x1 + m && x < STALL.x2 - m && z > STALL.z1 + m && z < STALL.z2 - m;
const capital = (t) => t[0].toUpperCase() + t.slice(1);

function tame(c, p) {
  c.state = 'follow';
  c.owner = p;
  fxFloat('Neuer Freund! ❤', '#ff8ac8', c.root.position);
  fxSfx('pickup');
  fxPlayerMsg(p.index, `${capital(ANIMAL_NAME[c.type])} kommt mit! Bring es in deinen Stall neben der Burg.`, 3500);
}

function updateKidAnimal(c, dt) {
  const root = c.root, pos = root.position;
  c.helpCd = (c.helpCd || 0) - dt;
  c.hintCd = (c.hintCd || 0) - dt;
  let speed = 0;
  if (c.state === 'captive') { c.spd = 0; return; }
  if (c.state === 'follow' && (!c.owner || c.owner.out)) { c.state = 'wild'; c.owner = null; }

  if (c.state === 'follow' && inStall(pos.x, pos.z, 0.5)) {
    c.state = 'stall';
    fxFloat('Im Stall! 🏠', '#a5ff8a', pos);
    fxSfx('pickup');
    fxPlayerMsg(c.owner.index, `${capital(ANIMAL_NAME[c.type])} ist jetzt in deinem Stall!`, 2500);
    c.owner = null;
    c.prodT = PRODUCE[c.type][1] / 2;
  }

  if (c.state === 'wild') {
    const np = nearestPlayer(pos, 2.2);
    if (np && np.apples > 0) { np.apples--; tame(c, np); }
    else if (np && c.hintCd <= 0) {
      c.hintCd = 4;
      fxPlayerMsg(np.index, `Füttere ${ANIMAL_NAME[c.type]} mit einem Apfel 🍎, dann kommt es mit!`, 2500);
    }
  }

  if (c.state === 'follow') {
    // Freunde laufen hintereinander mit und schubsen freche Schelme weg
    const o = c.owner, op = o.root.position;
    // Zu weit weg (z. B. hinter einem Berg hängen geblieben)? Dann schnell hinterherhüpfen
    if (pos.distanceTo(op) > 25) pos.set(op.x - Math.sin(o.heading) * 3, 0, op.z - Math.cos(o.heading) * 3);
    const mates = animals.filter((a) => a.owner === o && a.state === 'follow');
    const i = mates.indexOf(c);
    const foe = enemies.find((e) => !e.dying && e.root.position.distanceTo(pos) < 8);
    const back = o.heading + Math.PI + (i % 2 ? 0.45 : -0.45);
    const gx = foe ? foe.root.position.x : op.x + Math.sin(back) * (2.2 + i * 1.3);
    const gz = foe ? foe.root.position.z : op.z + Math.cos(back) * (2.2 + i * 1.3);
    const dx = gx - pos.x, dz = gz - pos.z, d = Math.hypot(dx, dz);
    if (d > (foe ? 1.2 : 0.8)) {
      c.heading = Math.atan2(dx, dz);
      speed = Math.min(9, d * 3);
    }
    if (foe && d < 1.6 && c.helpCd <= 0) {
      c.helpCd = 1.5;
      hitCreature(foe, o, 5, (dx / (d || 1)) * 1.5, (dz / (d || 1)) * 1.5);
    }
  } else {
    // gemütlich herumlaufen; im Stall bleiben sie hinter dem Zaun
    c.wanderT -= dt;
    if (c.wanderT <= 0) {
      c.wanderT = 2 + Math.random() * 4;
      c.wander = Math.random() < 0.6;
      c.heading += (Math.random() - 0.5) * 2;
    }
    speed = c.wander ? (c.type === 'chicken' ? 1 : 1.5) : 0;
    if (c.state === 'stall') {
      const nx = pos.x + Math.sin(c.heading) * 1.5, nz = pos.z + Math.cos(c.heading) * 1.5;
      if (!inStall(nx, nz, 1)) c.heading = Math.atan2((STALL.x1 + STALL.x2) / 2 - pos.x, (STALL.z1 + STALL.z2) / 2 - pos.z);
      c.prodT -= dt;
      if (c.prodT <= 0) {
        const [item, every, text] = PRODUCE[c.type];
        c.prodT = every;
        if (items.filter((it) => it.type === item).length < 12) {
          dropItem(item, { x: pos.x + (Math.random() - 0.5) * 2, z: pos.z + (Math.random() - 0.5) * 2 });
          fxFloat(text, '#ffffff', pos);
        }
      }
    }
  }
  if (speed && !move(root, Math.sin(c.heading) * speed * dt, Math.cos(c.heading) * speed * dt, 0.6) && c.state !== 'follow') c.heading += Math.PI / 2;
  root.rotation.y = c.heading;
  c.spd = speed;
}

// ================= Kinderfreundlich: Käfige, böser Zauberer, Gewinnen =================
const cages = [];
let freed = 0;
let won = false;
let wizard = null;

function spawnCages() {
  for (const [x, z, type] of CAGE_SPOTS) {
    const root = makeCage();
    root.position.set(x, 0, z);
    scene.add(root);
    const bar = makeBar(2.6);
    drawBar(bar, 1);
    root.add(bar);
    const circle = { x, z, r: 1.4 };
    circles.push(circle);
    const a = makeAnimalEntity(type, x, z);
    Object.assign(a, { id: nextId++, heading: Math.random() * 6.28, wanderT: 0, wander: false, fleeT: 0, state: 'captive' });
    animals.push(a);
    cages.push({ kind: 'cage', id: nextId++, root, bar, hp: 3, maxHp: 3, dying: 0, circle, animal: a });
  }
}

function hitCage(c, p) {
  c.hp--;
  fxFloat('✨', '#b388ff', c.root.position);
  fxSfx('magic');
  drawBar(c.bar, c.hp / c.maxHp);
  if (c.hp > 0) return;
  c.dying = 1;
  c.bar.visible = false;
  circles.splice(circles.indexOf(c.circle), 1);
  freed++;
  c.animal.state = 'follow';
  c.animal.owner = p;
  fxFloat('Befreit! ❤', '#ff8ac8', c.root.position);
  fxSfx('poof');
  if (freed >= CAGE_SPOTS.length) win();
  else fxPlayerMsg(p.index, `Tier befreit! Noch ${CAGE_SPOTS.length - freed} gefangen. Bring es in deinen Stall.`, 3500);
}

function updateCages(dt) {
  for (const c of [...cages]) {
    if (!c.dying) continue;
    c.dying -= dt;
    if (c.dying <= 0) { scene.remove(c.root); cages.splice(cages.indexOf(c), 1); }
  }
}

function poseCage(c, dt) {
  if (!c.dying) return;
  c.root.rotation.y += dt * 8;
  c.root.scale.setScalar(Math.max(0.01, c.dying));
}

function makeWizardEntity() {
  const h = makeHuman({ shirt: 0x5e35b1, pants: 0x311b92, hair: 0xdddddd, weapons: ['orbwand'] });
  addWizardLook(h);
  h.root.position.set(WIZARD_POS.x, 0, WIZARD_POS.z);
  scene.add(h.root);
  return { h, root: h.root, wind: 0, castT: 3, laughT: 4, gone: 0, frogged: false };
}

function updateWizardLogic(dt) {
  const w = wizard;
  if (!w) return;
  if (w.gone) {
    w.gone -= dt;
    if (w.gone <= 0) { scene.remove(w.root); wizard = null; }
    return;
  }
  const t = nearestPlayer(w.root.position, 32);
  if (!t) { w.wind = 0; return; }
  const tp = t.root.position, pos = w.root.position;
  const face = Math.atan2(tp.x - pos.x, tp.z - pos.z);
  w.root.rotation.y = face;
  if (w.wind > 0) {
    w.wind -= dt;
    if (w.wind <= 0) {
      fxSfx('plop');
      shoot({ from: pos, heading: face, speed: 13, target: null, dmg: 8, kind: 'spell', owner: 'enemy' });
    }
  } else if ((w.castT -= dt) <= 0) {
    w.wind = 0.8;
    w.castT = 3.5;
    fxSfx('windup');
  }
  if ((w.laughT -= dt) <= 0) { w.laughT = 7; fxFloat('Hihihi! 🧙', '#d1a3ff', pos); }
}

function poseWizard(w, dt) {
  if (!w) return;
  if (w.gone) {
    if (!w.frogged) { w.frogged = true; spawnFrogAt(w.root.position); }
    w.root.rotation.y += dt * 12;
    w.root.scale.setScalar(Math.max(0.01, w.gone));
    return;
  }
  const armR = w.wind > 0 ? -0.3 - (1 - w.wind / 0.8) * 2.4 : -0.3;
  animateHuman(w.h, 0, false, armR, -0.3);
  w.h.weapon.rotation.x = -armR;
}

function win() {
  if (won) return;
  won = true;
  if (wizard) wizard.gone = 1;
  fxGlobalMsg('🎉 Gewonnen! Alle Tiere sind frei! Der Zauberer ist jetzt ein Frosch! 🎉', 8000);
  fxSfx('levelUp');
  for (const p of players) fxFloat('🎉 Juhu! 🎉', '#ffd54f', p.root.position);
  later(10, resetGame);
}

function spawnKidWorld() {
  freed = 0;
  won = false;
  spawnCages();
  if (wizard) scene.remove(wizard.root);
  wizard = makeWizardEntity();
  for (let i = 0; i < 16; i++) spawnAnimal();
}

// ================= Kinderfreundlich: Rucksack, Burglager und Bauen =================
// Holz, Steine, Seife und Sternenstaub sammeln, in der eigenen Burg ausladen und auf den Bauplätzen etwas bauen.
const MATERIALS = ['wood', 'stone', 'soap', 'star'];
const MAT_ICON = { wood: '🪵', stone: '🪨', soap: '🧼', star: '✨' };
const MAT_NAME = { wood: 'Holz', stone: 'Stein', soap: 'Seife', star: 'Sternenstaub' };
const PACK_SIZE = 10;
const store = { wood: 0, stone: 0, soap: 0, star: 0 };
const packCount = (p) => MATERIALS.reduce((n, m) => n + p.pack[m], 0);
const matText = (o) => MATERIALS.filter((m) => o[m] > 0).map((m) => `${MAT_ICON[m]}${o[m]}`).join(' ');
const inCastle = (pos) => Math.abs(pos.x - HOME.x) < 9.5 && pos.z > HOME.z - 9.5 && pos.z < HOME.z + 9.5;

const BUILDS = [
  { id: 'catapult', name: 'Seifenblasen-Katapult', icon: '🫧', x: -8, z: 60, cost: { wood: 6, soap: 3, star: 2 },
    done: 'Das Katapult schießt jetzt Riesen-Seifenblasen auf die freche Burg!' },
  { id: 'fountain', name: 'Heilbrunnen', icon: '⛲', x: -6, z: 74, cost: { stone: 5, soap: 1 },
    done: 'Am Heilbrunnen bekommt ihr schnell wieder Energie.' },
  { id: 'garden', name: 'Apfelgarten', icon: '🌳', x: -6, z: 86, cost: { wood: 3, stone: 2 },
    done: 'Im Apfelgarten wachsen jetzt Äpfel für eure Tiere.' },
  { id: 'tower', name: 'Festturm', icon: '🏰', x: 6, z: 86, cost: { stone: 6, wood: 2, star: 3 },
    done: 'Eure Burg ist jetzt die schönste im Land! Jeder bekommt ein Extra-Leben.' },
];
const built = {};

function labelSprite(text) {
  const cv = document.createElement('canvas');
  cv.width = 512; cv.height = 128;
  const ctx = cv.getContext('2d');
  ctx.fillStyle = '#000a';
  ctx.beginPath();
  ctx.roundRect(4, 4, 504, 120, 24);
  ctx.fill();
  ctx.font = 'bold 42px system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillStyle = '#fff';
  const [a, b] = text.split('\n');
  ctx.fillText(a, 256, 54);
  ctx.font = '38px system-ui, sans-serif';
  ctx.fillText(b || '', 256, 104);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false }));
  sp.scale.set(4, 1, 1);
  sp.renderOrder = 9;
  return sp;
}

// Bauplätze: Schild mit Bauplan, solange noch nichts gebaut ist
const sites = BUILDS.map((b) => {
  const g = new THREE.Group();
  g.position.set(b.x, 0, b.z);
  const ring = mesh(new THREE.TorusGeometry(1.6, 0.06, 6, 28).rotateX(Math.PI / 2),
    new THREE.MeshStandardMaterial({ color: 0xffd54f, emissive: 0xffd54f, emissiveIntensity: 0.6 }), 0, 0.05, 0);
  const post = mesh(new THREE.BoxGeometry(0.12, 1.4, 0.12), std(0x7a5a3a), 0, 0.7, 0);
  const label = labelSprite(`${b.icon} ${b.name}\n${matText(b.cost)}`);
  label.position.y = 2.6;
  g.add(ring, post, label);
  scene.add(g);
  return { b, g, model: null, hintCd: 0 };
});
const updateSitesVisible = () => sites.forEach((s) => (s.g.visible = kid && started && !built[s.b.id]));

function makeBuildModel(id) {
  const g = new THREE.Group();
  const wood = std(0x8a6a44), stoneM = std(0xa39e93), bubble = new THREE.MeshStandardMaterial({ color: 0xbfefff, transparent: true, opacity: 0.55, roughness: 0.1, emissive: 0x2a6f80 });
  if (id === 'catapult') {
    g.add(mesh(new THREE.BoxGeometry(2.6, 0.4, 3.4), wood, 0, 0.5, 0));
    for (const s of [-1, 1]) {
      const wheel = mesh(new THREE.CylinderGeometry(0.6, 0.6, 0.2, 14), std(0x5d4037), s * 1.4, 0.6, 0);
      wheel.rotation.z = Math.PI / 2;
      g.add(wheel, mesh(new THREE.BoxGeometry(0.2, 1.6, 0.2), wood, s * 0.9, 1.4, 0.6));
    }
    const arm = new THREE.Group();
    arm.position.set(0, 2.1, 0.6);
    arm.add(mesh(new THREE.BoxGeometry(0.25, 0.25, 3.4), wood, 0, 0, -1.4));
    arm.add(mesh(new THREE.SphereGeometry(0.7, 16, 12), bubble, 0, 0.6, -3));
    g.add(arm);
    g.userData.arm = arm;
    g.rotation.y = Math.PI;   // zeigt zur feindlichen Burg
  }
  if (id === 'fountain') {
    g.add(mesh(new THREE.CylinderGeometry(1.5, 1.6, 0.6, 20), stoneM, 0, 0.3, 0));
    g.add(mesh(new THREE.CylinderGeometry(1.35, 1.35, 0.05, 20), new THREE.MeshStandardMaterial({ color: 0x4fc3f7, emissive: 0x0277bd, emissiveIntensity: 0.6 }), 0, 0.58, 0));
    g.add(mesh(new THREE.CylinderGeometry(0.2, 0.25, 1.4, 10), stoneM, 0, 1, 0));
    g.add(mesh(new THREE.SphereGeometry(0.35, 12, 10), new THREE.MeshStandardMaterial({ color: 0x81d4fa, emissive: 0x4fc3f7, emissiveIntensity: 1 }), 0, 1.8, 0));
    circles.push({ x: -6, z: 74, r: 1.6 });
  }
  if (id === 'garden') {
    for (const [x, z] of [[-1.3, -0.8], [1.3, -0.6], [0, 1.2]]) {
      g.add(mesh(new THREE.CylinderGeometry(0.15, 0.2, 1.4, 7), std(0x5b3d26), x, 0.7, z));
      g.add(mesh(new THREE.SphereGeometry(0.9, 12, 10), std(0x3f8f3a), x, 1.9, z));
      for (let k = 0; k < 4; k++) g.add(mesh(new THREE.SphereGeometry(0.12, 8, 6), std(0xd32f2f), x + Math.sin(k * 1.7) * 0.7, 1.7 + (k % 2) * 0.4, z + Math.cos(k * 1.7) * 0.7));
    }
  }
  if (id === 'tower') {
    g.add(mesh(new THREE.CylinderGeometry(1.4, 1.6, 12, 18), stoneM, 0, 6, 0));
    g.add(mesh(new THREE.ConeGeometry(1.9, 3, 18), std(0xd4af37, { metalness: 0.6, roughness: 0.3 }), 0, 13.5, 0));
    g.add(mesh(new THREE.CylinderGeometry(0.06, 0.06, 3), std(0x5d4037), 0, 16.5, 0));
    g.add(mesh(new THREE.PlaneGeometry(1.8, 1.1), new THREE.MeshStandardMaterial({ color: 0xffd54f, emissive: 0xffb300, emissiveIntensity: 0.6, side: THREE.DoubleSide }), 0.9, 17.4, 0));
    circles.push({ x: 6, z: 86, r: 1.6 });
  }
  return g;
}

function placeBuild(id) {
  const s = sites.find((x) => x.b.id === id);
  built[id] = true;
  s.model = makeBuildModel(id);
  s.model.position.set(s.b.x, 0, s.b.z);
  scene.add(s.model);
  updateSitesVisible();
}

function tryBuild(s, p) {
  const missing = {};
  for (const [m, n] of Object.entries(s.b.cost)) if (store[m] < n) missing[m] = n - store[m];
  if (Object.keys(missing).length) {
    if (s.hintCd <= 0) {
      s.hintCd = 4;
      fxPlayerMsg(p.index, `Für ${s.b.name} fehlt im Lager noch: ${matText(missing)}`, 3000);
    }
    return;
  }
  for (const [m, n] of Object.entries(s.b.cost)) store[m] -= n;
  placeBuild(s.b.id);
  emit(['b', s.b.id]);
  fxGlobalMsg(`${s.b.icon} ${s.b.name} gebaut! ${s.b.done}`, 5000);
  fxSfx('levelUp');
  if (s.b.id === 'tower') for (const q of players) q.lives = Math.min(5, q.lives + 1);
}

// Riesen-Seifenblasen fliegen vom Katapult in hohem Bogen zur feindlichen Burg
const bigBubbles = [];
const bigBubbleGeo = new THREE.SphereGeometry(1.4, 20, 14);
const bigBubbleMat = new THREE.MeshStandardMaterial({ color: 0xbfefff, transparent: true, opacity: 0.55, roughness: 0.05, emissive: 0x4fc3f7, emissiveIntensity: 0.4 });
function launchBubble(from, to, id = nextId++) {
  const m = new THREE.Mesh(bigBubbleGeo, bigBubbleMat);
  scene.add(m);
  const b = { id, m, sx: from.x, sz: from.z, ex: to.x, ez: to.z, t: 0, dur: 3.5 };
  bigBubbles.push(b);
  return b;
}
function moveBubble(b, dt) {
  b.t += dt / b.dur;
  const t = Math.min(1, b.t);
  b.m.position.set(b.sx + (b.ex - b.sx) * t, 3 + Math.sin(t * Math.PI) * 70, b.sz + (b.ez - b.sz) * t);
  b.m.rotation.y += dt;
}

let catapultT = 6;
function updateBuildLogic(dt) {
  // Rucksack in der Burg ausladen
  for (const p of alivePlayers()) {
    if (!packCount(p) || !inCastle(p.root.position)) continue;
    const text = matText(p.pack);
    for (const m of MATERIALS) { store[m] += p.pack[m]; p.pack[m] = 0; }
    fxPlayerMsg(p.index, `Ausgeladen ins Burglager: ${text} 🏰`, 2500);
    fxSfx('pickup');
  }
  // Bauplätze betreten
  for (const s of sites) {
    s.hintCd -= dt;
    if (built[s.b.id]) continue;
    const p = alivePlayers().find((q) => Math.hypot(q.root.position.x - s.b.x, q.root.position.z - s.b.z) < 2.2);
    if (p) tryBuild(s, p);
  }
  // Heilbrunnen
  if (built.fountain) {
    for (const p of alivePlayers()) if (Math.hypot(p.root.position.x + 6, p.root.position.z - 74) < 4.5) p.hp = Math.min(100, p.hp + 8 * dt);
  }
  // Apfelgarten
  if (built.garden && (garden.t -= dt) <= 0) {
    garden.t = 10;
    if (items.filter((it) => it.type === 'apple' && Math.hypot(it.g.position.x + 6, it.g.position.z - 86) < 5).length < 4) {
      dropItem('apple', { x: -6 + (Math.random() - 0.5) * 4, z: 83.5 });
    }
  }
  // Katapult
  if (built.catapult && (catapultT -= dt) <= 0) {
    catapultT = 10;
    const foes = enemies.filter((e) => !e.dying);
    if (foes.length) {
      const e = foes[Math.floor(Math.random() * foes.length)];
      const b = launchBubble({ x: -8, z: 58 }, { x: e.root.position.x, z: e.root.position.z });
      fxSfx('bubble');
      catapultSwing = 1;
      emit(['k']);
      b.onLand = () => {
        fxSfx('poof');
        for (const f of enemies) {
          if (!f.dying && Math.hypot(f.root.position.x - b.ex, f.root.position.z - b.ez) < 7) hitCreature(f, players[0], 15, 0, 0);
        }
      };
    }
  }
  for (const b of [...bigBubbles]) {
    moveBubble(b, dt);
    if (b.t >= 1) { b.onLand?.(); scene.remove(b.m); bigBubbles.splice(bigBubbles.indexOf(b), 1); }
  }
}
const garden = { t: 5 };

let catapultSwing = 0;
function poseBuilds(dt) {
  const arm = sites[0].model?.userData.arm;
  if (arm) {
    catapultSwing = Math.max(0, catapultSwing - dt * 2);
    arm.rotation.x = -Math.sin(catapultSwing * Math.PI) * 1.2;
  }
  const bar = $('store');
  if (bar) {
    bar.hidden = !(kid && started);
    const t = `🏰 Burglager: ${MATERIALS.map((m) => `${MAT_ICON[m]} ${store[m]}`).join('  ')}`;
    if (bar.textContent !== t) bar.textContent = t;
  }
}

function resetBuilds() {
  for (const m of MATERIALS) store[m] = 0;
  for (const s of sites) {
    if (s.model) { scene.remove(s.model); s.model = null; }
    built[s.b.id] = false;
  }
  for (const c of [...circles]) if ((c.x === -6 && c.z === 74) || (c.x === 6 && c.z === 86)) circles.splice(circles.indexOf(c), 1);
  for (const b of bigBubbles) scene.remove(b.m);
  bigBubbles.length = 0;
  updateSitesVisible();
}

// Holz und Steine tauchen in der Nähe der Spieler auf
let matTimer = 2;
function spawnMaterials(dt) {
  if (!kid || (matTimer -= dt) > 0) return;
  matTimer = 4;
  const type = Math.random() < 0.55 ? 'wood' : 'stone';
  if (items.filter((it) => it.type === type).length >= 10) return;
  const ps = alivePlayers();
  if (!ps.length) return;
  const base = ps[Math.floor(Math.random() * ps.length)].root.position;
  for (let n = 0; n < 20; n++) {
    const a = Math.random() * Math.PI * 2, r = 10 + Math.random() * 20;
    const x = base.x + Math.sin(a) * r, z = base.z + Math.cos(a) * r;
    if (!blockedSpot(x, z) && !inCastle({ x, z })) { dropItem(type, { x, z }); return; }
  }
}

updateSitesVisible();

// Kinderfreundlich: Äpfel liegen in der Nähe der Spieler herum
let appleTimer = 3;
function spawnApples(dt) {
  if (!kid || (appleTimer -= dt) > 0) return;
  appleTimer = 6;
  if (items.filter((it) => it.type === 'apple').length >= 10) return;
  const ps = alivePlayers();
  if (!ps.length) return;
  const base = ps[Math.floor(Math.random() * ps.length)].root.position;
  for (let n = 0; n < 20; n++) {
    const a = Math.random() * Math.PI * 2, r = 8 + Math.random() * 18;
    const x = base.x + Math.sin(a) * r, z = base.z + Math.cos(a) * r;
    if (!blockedSpot(x, z)) { dropItem('apple', { x, z }); return; }
  }
}

function poseAnimal(c, dt) {
  if (c.dying) {
    c.h.body.rotation.z = Math.min(Math.PI / 2, c.h.body.rotation.z + dt * 5);
    if (c.dying < 0.3) c.root.position.y -= dt * 3;
    return;
  }
  c.walk += dt * c.spd * 2.5;
  animateAnimal(c.h, c.walk, c.spd > 0);
  if (c.hit > 0) { c.hit -= dt; if (c.hit <= 0) flash(c.h, 0); }
}

// ================= Neues Spiel =================
function resetGame() {
  for (const e of enemies) scene.remove(e.root);
  enemies.length = 0;
  for (const it of items) scene.remove(it.g);
  items.length = 0;
  for (const pr of projectiles) scene.remove(pr.m);
  projectiles.length = 0;
  pending = pending.filter((t) => t.fn === spawnAnimal);
  players.forEach((p) => { resetPlayer(p); emit(['w', p.index, null]); });
  spawnAllEnemies();
  if (kid) {
    // Kinderfreundlich: alle Tiere wieder einsperren und neu verteilen
    for (const c of animals) scene.remove(c.root);
    animals.length = 0;
    for (const c of cages) { scene.remove(c.root); if (circles.includes(c.circle)) circles.splice(circles.indexOf(c.circle), 1); }
    cages.length = 0;
    pending = [];
    resetBuilds();
    spawnKidWorld();
  }
}

// ================= Netzwerk: Spielstand verschicken und anwenden =================
const r2 = (v) => Math.round(v * 100) / 100;

function buildSnapshot() {
  return {
    t: 's',
    p: players.map((p) => [r2(p.root.position.x), r2(p.root.position.z), r2(p.heading), r2(p.bodyYaw), Math.round(p.hp),
      p.level, p.lives, p.weapon, p.special ? p.special.type : '', p.special ? r2(p.special.t) : 0,
      r2(p.attackT), r2(p.attackDur), r2(p.dead), p.out ? 1 : 0, p.kills, p.moving, p.apples, MATERIALS.map((m) => p.pack[m])]),
    e: enemies.map((e) => [e.id, e.archer ? 1 : 0, r2(e.root.position.x), r2(e.root.position.z), r2(e.root.rotation.y),
      e.hp, r2(e.wind), r2(e.strike), r2(e.dying), e.moving ? 1 : 0]),
    a: animals.map((c) => [c.id, c.type, r2(c.root.position.x), r2(c.root.position.z), r2(c.root.rotation.y), r2(c.dying), c.hp, r2(c.spd)]),
    i: items.map((it) => [it.id, it.type, r2(it.g.position.x), r2(it.g.position.z)]),
    r: projectiles.map((pr) => [pr.id, pr.kind, pr.owner, r2(pr.m.position.x), r2(pr.m.position.y), r2(pr.m.position.z),
      r2(pr.vel.x), r2(pr.vel.y), r2(pr.vel.z)]),
    c: cages.map((c) => [c.id, r2(c.root.position.x), r2(c.root.position.z), c.hp, r2(c.dying)]),
    z: wizard ? [r2(wizard.root.rotation.y), r2(wizard.wind), r2(wizard.gone)] : null,
    fr: freed,
    st: MATERIALS.map((m) => store[m]),
    bl: Object.keys(built).filter((k) => built[k]),
    bb: bigBubbles.map((b) => [b.id, r2(b.sx), r2(b.sz), r2(b.ex), r2(b.ez), r2(b.t)]),
    ev: netEvents.splice(0),
  };
}

const remote = { enemies: new Map(), animals: new Map(), items: new Map(), shots: new Map(), cages: new Map() };

function syncMap(map, rows, create, update, remove) {
  const seen = new Set();
  for (const row of rows) {
    seen.add(row[0]);
    let ent = map.get(row[0]);
    if (!ent) { ent = create(row); map.set(row[0], ent); }
    update(ent, row);
  }
  for (const [id, ent] of map) if (!seen.has(id)) { remove(ent); map.delete(id); }
}

function applySnapshot(s) {
  s.p.forEach((row, i) => {
    const p = players[i];
    if (!p) return;
    const [x, z, heading, bodyYaw, hp, level, lives, weapon, spType, spT, attackT, attackDur, dead, out, kills, moving, apples, pack] = row;
    p.apples = apples || 0;
    if (pack) MATERIALS.forEach((m, k) => (p.pack[m] = pack[k]));
    p.tx = x; p.tz = z;
    p.heading = heading; p.bodyYaw = bodyYaw;
    p.hp = hp; p.lives = lives; p.kills = kills; p.out = !!out; p.moving = moving;
    if (dead > 0 && !p.dead) p.h.body.rotation.x = 0;
    p.dead = dead;
    if (attackT > p.attackT) { p.attackT = attackT; p.attackDur = attackDur; }
    if (level !== p.level) { p.level = level; applyLevel(p); }
    if (weapon !== p.weapon) { p.weapon = weapon; setWeapon(p.h, wModel(weapon)); }
    p.special = spType ? { type: spType, t: spT } : null;
  });
  syncMap(remote.enemies, s.e,
    ([id, archer, x, z]) => Object.assign(makeEnemyEntity(!!archer, x, z), { id }),
    (e, [, , x, z, ry, hp, wind, strike, dying, moving]) => {
      e.tx = x; e.tz = z; e.root.rotation.y = ry;
      if (hp !== e.hp) { e.hp = hp; e.bar.visible = !dying; drawBar(e.bar, hp / e.maxHp); }
      e.wind = wind; e.strike = strike; e.dying = dying; e.moving = !!moving;
      if (dying) e.bar.visible = false;
    },
    (e) => scene.remove(e.root));
  syncMap(remote.animals, s.a,
    ([id, type, x, z]) => Object.assign(makeAnimalEntity(type, x, z), { id }),
    (c, [, , x, z, ry, dying, hp, spd]) => {
      c.tx = x; c.tz = z; c.root.rotation.y = ry; c.dying = dying; c.spd = spd;
      if (hp !== c.hp) { c.hp = hp; c.bar.visible = hp > 0; drawBar(c.bar, hp / c.maxHp); }
    },
    (c) => scene.remove(c.root));
  freed = s.fr || 0;
  if (s.st) MATERIALS.forEach((m, k) => (store[m] = s.st[k]));
  if (s.bl) {
    for (const id of s.bl) if (!built[id]) placeBuild(id);
    if (!s.bl.length && Object.values(built).some(Boolean)) resetBuilds();
  }
  const seenB = new Set();
  for (const [id, sx, sz, ex, ez, t] of s.bb || []) {
    seenB.add(id);
    let b = bigBubbles.find((x) => x.id === id);
    if (!b) b = launchBubble({ x: sx, z: sz }, { x: ex, z: ez }, id);
    b.t = t;
  }
  for (const b of [...bigBubbles]) if (!seenB.has(b.id)) { scene.remove(b.m); bigBubbles.splice(bigBubbles.indexOf(b), 1); }
  syncMap(remote.cages, s.c || [],
    ([id, x, z]) => {
      const root = makeCage();
      root.position.set(x, 0, z);
      scene.add(root);
      const bar = makeBar(2.6);
      drawBar(bar, 1);
      root.add(bar);
      return { id, root, bar, hp: 3, maxHp: 3, dying: 0 };
    },
    (c, [, , , hp, dying]) => {
      if (hp !== c.hp) { c.hp = hp; drawBar(c.bar, hp / c.maxHp); }
      c.dying = dying;
      c.bar.visible = !dying;
    },
    (c) => scene.remove(c.root));
  if (s.z && !wizard) wizard = makeWizardEntity();
  if (!s.z && wizard) { scene.remove(wizard.root); wizard = null; }
  if (wizard && s.z) [wizard.root.rotation.y, wizard.wind, wizard.gone] = s.z;
  syncMap(remote.items, s.i,
    ([id, type, x, z]) => Object.assign(makeItemEntity(type, x, z), { id }),
    () => {},
    (it) => scene.remove(it.g));
  syncMap(remote.shots, s.r,
    ([id, kind, owner]) => ({ id, m: makeProjectileMesh(kind, owner), vel: new THREE.Vector3() }),
    (pr, [, , , x, y, z, vx, vy, vz]) => { pr.m.position.set(x, y, z); pr.vel.set(vx, vy, vz); },
    (pr) => scene.remove(pr.m));
  for (const ev of s.ev) {
    const [type, a, b, c, d] = ev;
    if (type === 'f') floatText(scene, a, b, { x: c, z: d });
    if (type === 's') sfx[a]();
    if (type === 'm') playerMsg(a, b, c);
    if (type === 'g') showMsg('msg', a, b);
    if (type === 'h') hurtVisual(players[a]);
    if (type === 'c') { const e = remote.enemies.get(a) || remote.animals.get(a); if (e) { e.hit = 0.15; flash(e.h, 0xffffff); } }
    if (type === 'w') setWait(a, b);
    if (type === 'k') catapultSwing = 1;
  }
}

// Mitspieler: Figuren sanft zur gemeldeten Position gleiten lassen
function smoothRemote(dt) {
  const k = Math.min(1, dt * 15);
  const glide = (o) => {
    if (o.tx === undefined) return;
    if (Math.abs(o.tx - o.root.position.x) + Math.abs(o.tz - o.root.position.z) > 10) { o.root.position.x = o.tx; o.root.position.z = o.tz; return; }
    o.root.position.x += (o.tx - o.root.position.x) * k;
    o.root.position.z += (o.tz - o.root.position.z) * k;
  };
  players.forEach(glide);
  remote.enemies.forEach(glide);
  remote.animals.forEach(glide);
  remote.shots.forEach((pr) => {
    pr.m.position.addScaledVector(pr.vel, dt);
    pr.m.lookAt(tmpV.copy(pr.m.position).add(pr.vel));
  });
}

let lastSent = '';
function sendInput() {
  const p = players[me];
  readLocalInput(p);
  const msg = { t: 'i', f: r2(p.input.fwd), u: r2(p.input.turn), a: p.input.attack ? 1 : 0 };
  const key = JSON.stringify(msg);
  if (key !== lastSent) { conn.send(msg); lastSent = key; }
  if (p.swapReq) { conn.send({ t: 'swap' }); p.swapReq = false; }
}

// ================= Spiel starten =================
function startGame(newMode) {
  mode = newMode;
  me = mode === 'client' ? 1 : 0;
  const body = document.body;
  body.classList.add('playing', mode === 'local' ? 'split' : 'full');
  if (mode === 'single') players = [createPlayer(0, 'all', 'local')];
  if (mode === 'local') players = [createPlayer(0, 'p1', 'local'), createPlayer(1, 'p2', 'local')];
  if (mode === 'host') players = [createPlayer(0, 'all', 'local'), createPlayer(1, 'all', 'remote')];
  if (mode === 'client') players = [createPlayer(0, 'all', 'remote'), createPlayer(1, 'all', 'local')];
  players.forEach((p) => (p.hud.style.display = visible(p.index) ? 'block' : 'none'));
  if (isSim()) {
    spawnAllEnemies();
    if (kid) spawnKidWorld();
    else for (let i = 0; i < 12; i++) spawnAnimal();
  }
  started = true;
  updateSitesVisible();
  $('tAttack').textContent = kid ? '🪄' : '⚔️';
  const goal = kid ? 'Der böse Zauberer hat Tiere eingesperrt: befreit sie alle! Äpfel 🍎 sammeln, Tiere füttern, ab in den Stall.' : 'Erobere die rote Burg!';
  const swapKey = isTouch ? '🔄' : 'Q / Shift';
  const text = {
    single: `${goal} Mit ${swapKey} wechselst du ${kid ? 'den Zauber' : 'die Waffe'}.`,
    local: `Spieler 1 hat ${kid ? 'den Zauberstab' : 'die Mistgabel'}, Spieler 2 ${kid ? 'die Zauberkugeln' : 'den Bogen'}. Helft euch gegenseitig!`,
    host: 'Dein Mitspieler ist da! Helft euch gegenseitig!',
    client: `Du bist Spieler 2 mit ${kid ? 'den Zauberkugeln' : 'dem Bogen'}. Helft euch gegenseitig!`,
  }[mode];
  showMsg('msg', text, 4000);
}

// ================= Startmenü =================
const KID_TEXT = {
  on: ['Befreit die Tiere vom bösen Zauberer!', 'Zähmt Tiere mit Äpfeln und bringt sie in euren Stall: Kühe geben Milch, Hühner legen Eier. Zauberstab statt Waffen.'],
  off: ['Vom Bauern zum Kaiser: erobert die rote Burg!', 'Ritter mit Mistgabel, Bogen, Feuerschwert und Maschinengewehr. Eher für ältere Kinder.'],
};
function showKidSetting() {
  $('kidToggle').checked = kid;
  const [sub, hint] = KID_TEXT[kid ? 'on' : 'off'];
  $('menuSub').textContent = sub;
  $('kidHint').textContent = hint;
}
$('kidToggle').onchange = () => {
  kid = $('kidToggle').checked;
  try { localStorage.setItem('kic-kid', kid ? '1' : '0'); } catch { /* egal */ }
  showKidSetting();
};
showKidSetting();

$('btnSingle').onclick = () => { initAudio(); startGame('single'); };
$('btnLocal').onclick = () => { initAudio(); startGame('local'); };
$('btnNet').onclick = () => { $('menuMain').hidden = true; $('menuNet').hidden = false; };
$('btnBack').onclick = () => location.reload();
$('menuBtn').onclick = () => location.reload();
const status = (html) => ($('netStatus').innerHTML = html);
const netError = (err) => status('😕 Das hat nicht geklappt: ' + (err?.type === 'peer-unavailable' ? 'Code nicht gefunden.' : err?.message || err));

$('btnHost').onclick = async () => {
  initAudio();
  $('btnHost').disabled = true;
  const code = randomCode();
  status('Verbinde …');
  try {
    const peer = await hostGame(code, {
      onConnection: (c) => {
        if (conn) { c.close(); return; }
        conn = c;
        conn.send({ t: 'cfg', kid });   // der Mitspieler übernimmt die Einstellung
        startGame('host');
        startVoice(peer, conn.peer, true);
        conn.on('data', (d) => {
          const p2 = players[1];
          if (d.t === 'i') p2.input = { fwd: d.f, turn: d.u, attack: !!d.a };
          if (d.t === 'swap') p2.swapReq = true;
        });
        conn.on('close', () => { stopVoice(); players[1].input = { fwd: 0, turn: 0, attack: false }; showMsg('msg', 'Dein Mitspieler ist weg.', 4000); });
        setInterval(() => conn.open && conn.send(buildSnapshot()), 50);
      },
      onError: netError,
    });
    status(`Sag deinem Mitspieler diesen Code:<br><b>${code}</b><br>Warte auf Mitspieler …`);
  } catch (err) { netError(err); }
};

$('btnJoin').onclick = async () => {
  initAudio();
  const code = $('joinCode').value.trim().toUpperCase();
  if (code.length !== 4) { status('Bitte den Code mit 4 Buchstaben eingeben.'); return; }
  status('Verbinde …');
  try {
    const peer = await joinGame(code, {
      onOpen: (c) => {
        conn = c;
        conn.on('data', (d) => {
          if (d.t === 'cfg') { kid = d.kid; startGame('client'); startVoice(peer, conn.peer, false); }
          if (d.t === 's' && started) applySnapshot(d);
        });
        conn.on('close', () => { stopVoice(); showMsg('msg', 'Die Verbindung ist weg. Über ☰ Menü neu starten.', 6000); });
      },
      onError: netError,
    });
  } catch (err) { netError(err); }
};

// ================= Spielschleife =================
const clock = new THREE.Clock();
const menuCam = new THREE.PerspectiveCamera(55, 1, 0.1, 500);
let menuT = 0;

let lastFrame = performance.now();
function tick() {
  lastFrame = performance.now();
  step(Math.min(clock.getDelta(), 0.05));
  render();
  requestAnimationFrame(tick);
}

// Wer ein Netzwerkspiel erstellt hat, rechnet weiter, auch wenn sein Fenster gerade im Hintergrund ist
setInterval(() => {
  if (mode === 'host' && performance.now() - lastFrame > 200) { clock.getDelta(); step(0.05); }
}, 50);

function step(dt) {
  if (started) {
    if (isSim()) {
      for (const t of [...pending]) {
        t.t -= dt;
        if (t.t <= 0) { pending.splice(pending.indexOf(t), 1); t.fn(); }
      }
      players.forEach((p) => { if (p.source === 'local') readLocalInput(p); });
      players.forEach((p) => updatePlayerLogic(p, dt));
      assignTargets();
      [...enemies].forEach((e) => updateEnemyLogic(e, dt));
      [...animals].forEach((c) => updateAnimalLogic(c, dt));
      players.forEach((p) => (p.justAttacked = false));
      updateProjectiles(dt);
      spawnApples(dt);
      spawnMaterials(dt);
      updateBuildLogic(dt);
      updateCages(dt);
      updateWizardLogic(dt);
      updateItems(dt);
      poseItems(dt);
      enemies.forEach((e) => poseEnemy(e, dt));
      animals.forEach((c) => poseAnimal(c, dt));
      cages.forEach((c) => poseCage(c, dt));
      poseWizard(wizard, dt);
    } else {
      if (conn?.open) sendInput();
      smoothRemote(dt);
      remote.enemies.forEach((e) => poseEnemy(e, dt));
      remote.animals.forEach((c) => poseAnimal(c, dt));
      remote.cages.forEach((c) => poseCage(c, dt));
      bigBubbles.forEach((b) => moveBubble(b, dt));
      poseWizard(wizard, dt);
      remote.items.forEach((it) => { it.t += dt; it.model.rotation.y += dt * 2; it.model.position.y = 0.9 + Math.sin(it.t * 3) * 0.15; });
    }
    players.forEach((p) => posePlayer(p, dt));
    players.forEach(spectate);
    poseBuilds(dt);
  }
  updateFrogs(dt);
  updateFloaters(scene, dt);
}

function render() {
  const w = innerWidth, h = innerHeight;
  if (!started) {
    // Langsamer Flug um die Welt hinter dem Menü
    menuT += 0.0008;
    menuCam.position.set(Math.sin(menuT) * 110, 45, -20 + Math.cos(menuT) * 110);
    menuCam.lookAt(0, 5, -40);
    menuCam.aspect = w / h;
    menuCam.updateProjectionMatrix();
    renderer.setScissorTest(false);
    renderer.setViewport(0, 0, w, h);
    renderer.render(scene, menuCam);
  } else if (mode === 'local') {
    // Geteilter Bildschirm: links Spieler 1, rechts Spieler 2
    const half = Math.floor(w / 2);
    renderer.setScissorTest(true);
    players.forEach((p, i) => {
      renderer.setViewport(i * half, 0, half, h);
      renderer.setScissor(i * half, 0, half, h);
      p.cam.aspect = half / h;
      p.cam.updateProjectionMatrix();
      renderer.render(scene, p.cam);
    });
  } else {
    const p = players[me];
    renderer.setScissorTest(false);
    renderer.setViewport(0, 0, w, h);
    p.cam.aspect = w / h;
    p.cam.updateProjectionMatrix();
    renderer.render(scene, p.cam);
  }
}

window.game = { get players() { return players; }, enemies, animals, items, keys, startGame, step, render };   // zum Ausprobieren in der Konsole
tick();

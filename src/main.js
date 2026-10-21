import * as THREE from 'three';
import { std, metal, mesh, move, solidAt, angleDiff } from './util.js';
import { buildWorld, HOME, GUARD_SPAWNS, ARCHER_SPAWNS, randomFreeSpot } from './world.js';
import { makeHuman, animateHuman, flash, setWeapon, setArmorLevel, makeAnimal, animateAnimal, makeWeaponModel } from './characters.js';
import { makeBar, drawBar, hpColor, floatText, updateFloaters, initAudio, sfx, showMsg } from './ui.js';

// ================= Grundaufbau =================
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
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
sun.shadow.mapSize.set(4096, 4096);
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

// ================= Pending-Aufgaben (z. B. Gegner neu erscheinen lassen) =================
let pending = [];
const later = (t, fn) => pending.push({ t, fn });

// ================= Spieler =================
const $ = (id) => document.getElementById(id);
const players = [
  { name: 'Spieler 1', startX: -2.5, startWeapon: 'fork',
    keys: { up: 'KeyW', down: 'KeyS', left: 'KeyA', right: 'KeyD', attack: ['Space'], swap: ['KeyQ', 'KeyE'] },
    look: { pants: 0x5a4a32, hair: 0x3a2414, band: 0x1e63d6 } },
  { name: 'Spieler 2', startX: 2.5, startWeapon: 'bow',
    keys: { up: 'ArrowUp', down: 'ArrowDown', left: 'ArrowLeft', right: 'ArrowRight',
            attack: ['Enter', 'NumpadEnter', 'Numpad0'], swap: ['ShiftRight', 'ControlRight', 'Numpad1'] },
    look: { pants: 0x4a3a2a, hair: 0xd9b36a, band: 0xef6c00 } },
];

players.forEach((p, i) => {
  p.index = i;
  p.h = makeHuman({ shirt: RANK_COLORS[0], ...p.look, strawHat: true, armor: true, weapons: ['fork', 'bow', 'firesword', 'gun'] });
  p.root = p.h.root;
  scene.add(p.root);
  p.bar = makeBar();
  p.root.add(p.bar);
  p.cam = new THREE.PerspectiveCamera(60, 1, 0.1, 500);
  p.hud = $('hud' + i);
  p.hudCache = '';
  p.walk = 0;
  resetPlayer(p);
});

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
  p.weapon = p.baseWeapon = p.startWeapon;
  setWeapon(p.h, p.weapon);
  applyLevel(p);
  $('wait' + p.index).style.display = 'none';
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
  p.camDist = 7;
  p.camInit = false;
}

function updateHud(p) {
  const hp = Math.max(0, Math.round(p.hp));
  const W = WEAPONS[p.weapon];
  const lives = '❤️'.repeat(Math.max(0, p.lives)) + '🖤'.repeat(Math.max(0, START_LIVES - p.lives));
  const weapon = `${W.icon} ${W.name}` + (p.special && p.weapon === p.special.type ? ` (${Math.ceil(p.special.t)} s)` : '')
    + (p.special && p.weapon !== p.special.type ? ` · ${WEAPONS[p.special.type].icon} bereit` : '');
  const xp = p.level >= MAX_LEVEL ? 'Höchster Rang erreicht!'
    : `Noch ${KILLS_PER_LEVEL - (p.kills % KILLS_PER_LEVEL)} Gegner bis ${RANKS[p.level + 1]}`;
  const key = [hp, p.level, lives, weapon, xp].join('|');
  if (key === p.hudCache) return;
  p.hudCache = key;
  const fill = p.hud.querySelector('.fill');
  fill.style.width = hp + '%';
  fill.style.background = hpColor(hp / 100);
  p.hud.querySelector('.hpnum').textContent = hp + ' / 100';
  p.hud.querySelector('.level').textContent = `Level ${p.level + 1}: ${RANKS[p.level]}`;
  p.hud.querySelector('.lives').textContent = lives;
  p.hud.querySelector('.weapon').textContent = weapon;
  p.hud.querySelector('.xp').textContent = xp;
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
  p.hurt = 0.25;
  flash(p.h, 0xaa0000);
  floatText(scene, '-' + dmg, '#ff5252', p.root.position);
  sfx.hurt();
  const hurtEl = $('hurt' + p.index);
  hurtEl.style.opacity = 1;
  setTimeout(() => (hurtEl.style.opacity = 0), 250);
  const bar = p.hud.querySelector('.bar');
  bar.classList.remove('shake');
  void bar.offsetWidth;
  bar.classList.add('shake');
  if (p.hp <= 0) loseLife(p);
}

function loseLife(p) {
  p.hp = 0;
  p.lives--;
  p.dead = 3;
  p.special = null;
  if (WEAPONS[p.weapon].special) { p.weapon = p.baseWeapon; setWeapon(p.h, p.weapon); }
  sfx.lifeLost();
  if (p.lives > 0) {
    showMsg('msg' + p.index, `Autsch! Noch ${p.lives} ${p.lives === 1 ? 'Leben' : 'Leben'}. Gleich geht es in der Burg weiter.`, 3000);
  } else {
    p.out = true;
    const other = players[1 - p.index];
    const w = $('wait' + p.index);
    w.textContent = `Keine Leben mehr! Warte, bis ${other.name} auch fertig ist.`;
    w.style.display = 'flex';
    if (players.every((q) => q.out)) {
      showMsg('msg', 'Beide sind besiegt! Neues Spiel als Bauern …', 4000);
      later(4, resetGame);
    }
  }
}

function addKill(p) {
  p.kills++;
  const lvl = Math.min(Math.floor(p.kills / KILLS_PER_LEVEL), MAX_LEVEL);
  if (lvl > p.level) {
    p.level = lvl;
    applyLevel(p);
    p.hp = 100;
    showMsg('msg' + p.index, `${p.name} ist jetzt ${RANKS[lvl]}! Neue Rüstung!`, 3000);
    sfx.levelUp();
  }
}

function swapWeapon(p) {
  if (p.dead || p.out) return;
  const list = ['fork', 'bow', ...(p.special ? [p.special.type] : [])];
  p.weapon = list[(list.indexOf(p.weapon) + 1) % list.length];
  if (!WEAPONS[p.weapon].special) p.baseWeapon = p.weapon;
  setWeapon(p.h, p.weapon);
}

// ================= Gegner und Tiere =================
const enemies = [];
const animals = [];
const targets = () => [...enemies, ...animals].filter((c) => !c.dying);

function spawnEnemy(slot, archer) {
  const h = makeHuman(archer
    ? { shirt: 0x8e2424, pants: 0x3a3a3a, hair: 0x2b1b10, hood: 0x5a1414, weapons: ['bow'] }
    : { shirt: 0xb71c1c, pants: 0x3a3a3a, hair: 0x2b1b10, helmet: true, shield: true, weapons: ['sword'] });
  const [x, z] = (archer ? ARCHER_SPAWNS : GUARD_SPAWNS)[slot];
  h.root.position.set(x, 0, z);
  const bar = makeBar();
  h.root.add(bar);
  drawBar(bar, 1);
  scene.add(h.root);
  const maxHp = archer ? 20 : 30;
  enemies.push({
    kind: 'enemy', archer, h, root: h.root, bar, hp: maxHp, maxHp, home: { x, z }, slot,
    wind: 0, strike: 0, cd: 0, shootCd: 1 + Math.random() * 2, hit: 0, dying: 0, walk: 0, lastHit: null,
    target: null, orbit: 0, orbitDir: Math.random() < 0.5 ? -1 : 1, dodge: 0, dodgeDir: 1,
    flee: 0, fled: false, backoff: 0, isAttacker: false,
  });
}

function spawnAllEnemies() {
  GUARD_SPAWNS.forEach((_, i) => spawnEnemy(i, false));
  ARCHER_SPAWNS.forEach((_, i) => spawnEnemy(i, true));
}

function spawnAnimal() {
  const type = Math.random() < 0.55 ? 'deer' : 'boar';
  const a = makeAnimal(type);
  const s = randomFreeSpot();
  a.root.position.set(s.x, 0, s.z);
  const bar = makeBar(type === 'deer' ? 2.0 : 1.4);
  bar.visible = false;
  a.root.add(bar);
  scene.add(a.root);
  const maxHp = type === 'deer' ? 10 : 20;
  animals.push({ kind: 'animal', type, h: a, root: a.root, bar, hp: maxHp, maxHp, hit: 0, dying: 0, walk: 0,
                 heading: Math.random() * 6.28, wanderT: 0, moving: false, fleeT: 0 });
}

function hitCreature(c, p, dmg, dirX, dirZ) {
  if (c.dying) return;
  let text = '-' + dmg, color = '#ffffff';
  if (c.kind === 'enemy') {
    const now = performance.now();
    if (c.lastHit && c.lastHit.by !== p && now - c.lastHit.time < 1500) {
      dmg *= 2;   // Teamwork-Bonus
      text = 'TEAM! -' + dmg;
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
  c.hit = 0.15;
  flash(c.h, 0xffffff);
  floatText(scene, text, color, c.root.position);
  sfx.hit();
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
    const r = Math.random();
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
const items = [];
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
const ITEM_GLOW = { heart: 0xff3b3b, life: 0xffd54f, meat: 0xffa040, gun: 0x40c4ff, firesword: 0xff7a1a };

function dropItem(type, pos) {
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
  if (type === 'gun' || type === 'firesword') {
    const w = makeWeaponModel(type);
    w.rotation.y = Math.PI / 2;
    w.position.x = -0.5;
    model.add(w);
  }
  const ring = mesh(new THREE.TorusGeometry(0.6, 0.05, 8, 24).rotateX(Math.PI / 2),
    new THREE.MeshStandardMaterial({ color: ITEM_GLOW[type], emissive: ITEM_GLOW[type], emissiveIntensity: 1.2 }), 0, -0.6, 0);
  model.position.y = 0.9;
  g.add(model, ring);
  ring.position.y = 0.05;
  g.position.set(pos.x, 0, pos.z);
  scene.add(g);
  items.push({ type, g, model, t: 0 });
}

function pickUp(item, p) {
  const pos = p.root.position;
  if (item.type === 'heart') { p.hp = Math.min(100, p.hp + 30); floatText(scene, '+30 ❤', '#ff8a80', pos); }
  if (item.type === 'meat') { p.hp = Math.min(100, p.hp + 40); floatText(scene, 'Lecker! +40', '#ffcc80', pos); }
  if (item.type === 'life') { p.lives = Math.min(5, p.lives + 1); floatText(scene, '+1 Leben', '#ffd54f', pos); }
  if (item.type === 'gun' || item.type === 'firesword') {
    p.special = { type: item.type, t: SPECIAL_TIME };
    p.weapon = item.type;
    setWeapon(p.h, p.weapon);
    showMsg('msg' + p.index, `${WEAPONS[item.type].icon} ${WEAPONS[item.type].name} für ${SPECIAL_TIME} Sekunden!`);
  }
  sfx.pickup();
}

function updateItems(dt) {
  for (const it of [...items]) {
    it.t += dt;
    it.model.rotation.y += dt * 2;
    it.model.position.y = 0.9 + Math.sin(it.t * 3) * 0.15;
    it.g.visible = it.t < 25 || Math.floor(it.t * 6) % 2 === 0;   // blinkt kurz vor dem Verschwinden
    const p = alivePlayers().find((q) => q.root.position.distanceTo(it.g.position) < 1.6);
    if (p) pickUp(it, p);
    if (p || it.t > 30) { scene.remove(it.g); items.splice(items.indexOf(it), 1); }
  }
}

// ================= Pfeile und Kugeln =================
const projectiles = [];
const arrowGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.8, 5).rotateX(Math.PI / 2);
const tipGeo = new THREE.ConeGeometry(0.05, 0.15, 6).rotateX(Math.PI / 2);
const bulletGeo = new THREE.SphereGeometry(0.07, 6, 6);
const arrowMat = std(0x8d6e4a), tipMat = metal(0x888888), redArrowMat = std(0x7a1010);
const bulletMat = new THREE.MeshStandardMaterial({ color: 0xffee58, emissive: 0xffd000, emissiveIntensity: 2 });

function shoot({ from, heading, speed, target, dmg, kind, owner, by }) {
  let m;
  if (kind === 'bullet') m = new THREE.Mesh(bulletGeo, bulletMat);
  else {
    m = new THREE.Group();
    m.add(new THREE.Mesh(arrowGeo, owner === 'enemy' ? redArrowMat : arrowMat));
    const tip = new THREE.Mesh(tipGeo, tipMat);
    tip.position.z = 0.45;
    m.add(tip);
  }
  m.position.set(from.x + Math.sin(heading) * 0.8, 1.4, from.z + Math.cos(heading) * 0.8);
  scene.add(m);
  projectiles.push({ m, vel: new THREE.Vector3(Math.sin(heading) * speed, 0, Math.cos(heading) * speed), speed, target, dmg, owner, by, life: 1.6 });
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
    sfx.swing();
    for (const c of targets()) {
      const dx = c.root.position.x - pos.x, dz = c.root.position.z - pos.z;
      const dist = Math.hypot(dx, dz);
      if (dist < W.range && (dx * fx + dz * fz) / dist > W.cone) hitCreature(c, p, W.dmg + p.level * 2, fx * 1.2, fz * 1.2);
    }
  } else {
    W.projectile === 'arrow' ? sfx.bow() : sfx.gun();
    const spread = target ? 0 : (Math.random() - 0.5) * 0.1;
    shoot({ from: pos, heading: aim + spread, speed: W.speed, target, dmg: W.dmg + p.level, kind: W.projectile, owner: 'player', by: p });
  }
}

// ================= Tastatur =================
const keys = {};
addEventListener('keydown', (e) => {
  keys[e.code] = true;
  initAudio();
  if (e.code.startsWith('Arrow') || ['Space', 'Enter', 'ShiftRight', 'ControlRight'].includes(e.code)) e.preventDefault();
  if (!e.repeat) for (const p of players) if (p.keys.swap.includes(e.code)) swapWeapon(p);
});
addEventListener('keyup', (e) => (keys[e.code] = false));

// ================= Spieler bewegen =================
const camPos = new THREE.Vector3(), camLook = new THREE.Vector3();

function updatePlayer(p, dt) {
  const root = p.root;
  let moving = false;
  if (p.dead > 0) {
    p.dead -= dt;
    p.h.body.rotation.x = Math.max(-Math.PI / 2, p.h.body.rotation.x - dt * 4);
    if (p.dead <= 0) {
      if (p.out) { p.dead = 0.001; root.visible = false; }
      else respawn(p);
    }
  } else {
    const k = p.keys;
    if (keys[k.left]) p.heading += 2.6 * dt;
    if (keys[k.right]) p.heading -= 2.6 * dt;
    let speed = 0;
    if (keys[k.up]) speed = 9;
    if (keys[k.down]) speed = -5;
    if (speed) {
      move(root, Math.sin(p.heading) * speed * dt, Math.cos(p.heading) * speed * dt, 0.5);
      p.walk += dt * (speed > 0 ? 11 : -8);
      moving = true;
    }
    p.cooldown -= dt;
    if (k.attack.some((c) => keys[c]) && p.cooldown <= 0) attack(p);
    p.hp = Math.min(100, p.hp + dt);
    if (p.special) {
      p.special.t -= dt;
      if (p.special.t <= 0) {
        if (p.weapon === p.special.type) { p.weapon = p.baseWeapon; setWeapon(p.h, p.weapon); }
        p.special = null;
      }
    }
  }

  // Der Körper dreht sich beim Angriff zum Ziel, die Kamera bleibt ruhig hinter dem Spieler
  p.faceT -= dt;
  const want = p.faceT > 0 ? p.face : p.heading;
  p.bodyYaw += angleDiff(want, p.bodyYaw) * Math.min(1, dt * 15);
  root.rotation.y = p.bodyYaw;

  // Arme und Waffe
  p.attackT = Math.max(0, p.attackT - dt);
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
  animateHuman(p.h, p.walk, moving, armR, moving && armL === undefined ? undefined : armL);
  if (p.hurt > 0) { p.hurt -= dt; if (p.hurt <= 0) flash(p.h, 0); }
  updateHud(p);

  // Kamera hinter dem Spieler, rückt nur sanft näher, wenn eine Mauer oder ein Berg im Weg ist
  if (p.out) {
    const other = players[1 - p.index];
    p.cam.position.copy(other.cam.position);
    p.cam.quaternion.copy(other.cam.quaternion);
    return;
  }
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

// ================= Gegner: etwas klüger =================
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

function updateEnemy(e, dt) {
  const root = e.root;
  if (e.dying) {
    e.dying -= dt;
    e.h.body.rotation.x = Math.max(-Math.PI / 2, e.h.body.rotation.x - dt * 5);
    if (e.dying < 0.3) root.position.y -= dt * 3;
    if (e.dying <= 0) { scene.remove(root); enemies.splice(enemies.indexOf(e), 1); }
    return;
  }
  e.cd -= dt;
  e.shootCd -= dt;
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
    const dist = Math.hypot(dx, dz);
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
          sfx.bow();
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
          sfx.windup();
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

  if (moving) e.walk += dt * 9;
  let armR = -0.3, armL = -0.6;
  if (e.archer) {
    armL = undefined;
    if (e.wind > 0) { armR = -1.45; armL = -1.3; }
    e.h.weapon.rotation.x = -armR;
  } else if (e.wind > 0) armR = -0.3 - (1 - e.wind / 0.55) * 2.3;
  else if (e.strike > 0) { armR = -0.4 - (e.strike / 0.15) * 2.2; e.strike -= dt; }
  animateHuman(e.h, e.walk, moving, armR, armL);
  if (e.hit > 0) { e.hit -= dt; if (e.hit <= 0) flash(e.h, 0); }
}

// ================= Tiere =================
function updateAnimal(c, dt) {
  const root = c.root;
  if (c.dying) {
    c.dying -= dt;
    c.h.body.rotation.z = Math.min(Math.PI / 2, c.h.body.rotation.z + dt * 5);
    if (c.dying < 0.3) root.position.y -= dt * 3;
    if (c.dying <= 0) { scene.remove(root); animals.splice(animals.indexOf(c), 1); }
    return;
  }
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
      c.moving = Math.random() < 0.6;
      c.heading += (Math.random() - 0.5) * 2;
    }
    speed = c.moving ? 1.5 : 0;
  }
  if (speed && !move(root, Math.sin(c.heading) * speed * dt, Math.cos(c.heading) * speed * dt, 0.6)) c.heading += Math.PI / 2;
  root.rotation.y = c.heading;
  c.walk += dt * speed * 2.5;
  animateAnimal(c.h, c.walk, speed > 0);
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
  players.forEach(resetPlayer);
  spawnAllEnemies();
}

spawnAllEnemies();
for (let i = 0; i < 12; i++) spawnAnimal();

// ================= Spielschleife =================
const clock = new THREE.Clock();
function tick() {
  const dt = Math.min(clock.getDelta(), 0.05);
  for (const t of [...pending]) {
    t.t -= dt;
    if (t.t <= 0) { pending.splice(pending.indexOf(t), 1); t.fn(); }
  }
  players.forEach((p) => updatePlayer(p, dt));
  assignTargets();
  [...enemies].forEach((e) => updateEnemy(e, dt));
  [...animals].forEach((a) => updateAnimal(a, dt));
  players.forEach((p) => (p.justAttacked = false));
  updateProjectiles(dt);
  updateItems(dt);
  updateFloaters(scene, dt);

  // Geteilter Bildschirm: links Spieler 1, rechts Spieler 2
  const w = innerWidth, h = innerHeight, half = Math.floor(w / 2);
  renderer.setScissorTest(true);
  players.forEach((p, i) => {
    renderer.setViewport(i * half, 0, half, h);
    renderer.setScissor(i * half, 0, half, h);
    p.cam.aspect = half / h;
    p.cam.updateProjectionMatrix();
    renderer.render(scene, p.cam);
  });
  requestAnimationFrame(tick);
}

window.game = { players, enemies, animals, items, keys };   // zum Ausprobieren in der Browser-Konsole
showMsg('msg', 'Spieler 1 hat die Mistgabel, Spieler 2 den Bogen. Helft euch gegenseitig!', 4000);
tick();

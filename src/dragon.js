import * as THREE from '../lib/three.module.js';
import { std, mesh, WORLD, bounds } from './util.js';
import { HOME, ENEMY_CASTLE, MOUNTAINS } from './world.js';
import { VILLAGES } from './map.js';
import { floorAt, TOWER_REL, TOWER_TOP } from './castlewalk.js';

// ================= Drachen zum Fliegen =================
// Wenn alle Dorfrätsel gelöst sind und der Festturm steht, landen zwei Drachen am Turm.
// Oben auf der Turmplattform aufsteigen (Zauber-Taste), dann fliegt man über die ganze Landschaft.
// Steuerung im Flug: vor/zurück = höher/tiefer, links/rechts = lenken, Zauber-Taste = landen, Wechsel-Taste = Feuer.

const SEAT = 2.45;                       // so hoch sitzt der Reiter über den Füßen des Drachen
const SPEED = 17;                        // Fluggeschwindigkeit
const CLIMB = 11;                        // so schnell geht es hoch oder runter
const TOP = 85;                          // höher geht es nicht
const TOWER = { x: HOME.x + TOWER_REL.x, z: HOME.z + TOWER_REL.z };
const PERCH_Y = TOWER_TOP - 1.25;        // der Drache schwebt neben der Plattform, sein Rücken ist auf Höhe der Plattform
const PERCHES = [   // Lage neben dem Turm, Blick zum Turm
  { x: TOWER.x, z: TOWER.z + 5.4, yaw: Math.PI },
  { x: TOWER.x + 5.4, z: TOWER.z, yaw: -Math.PI / 2 },
];
const COLORS = [
  { body: 0x2e9e4f, belly: 0xf2d16b, wing: 0x8be36a, horn: 0xfff3d6 },
  { body: 0xc62828, belly: 0xffcc80, wing: 0xff8a65, horn: 0xfff3d6 },
];
const WINDMILL = (() => { const m = VILLAGES.find((v) => v.id === 'muehle'); return { x: m.x + 24, z: m.z }; })();
// hohe Sachen, über die man drüber fliegen muss
const TALL = [
  { x: HOME.x, z: HOME.z, r: 17, h: 17 },
  { x: ENEMY_CASTLE.x, z: ENEMY_CASTLE.z, r: 28, h: 20 },
  { x: WINDMILL.x, z: WINDMILL.z, r: 7, h: 15 },
];

const STATES = ['away', 'perch', 'fly', 'land', 'rest', 'return'];
let api = null;
const dragons = [];
let time = 0;
let announced = false, towerHint = false;
const hintT = {};

function wingShape() {
  const s = new THREE.Shape();
  s.moveTo(0, 0.5);
  s.lineTo(2.2, 1.3);
  s.lineTo(4.4, 1.6);
  s.lineTo(5.6, 0.6);
  s.lineTo(4.6, -0.2);
  s.lineTo(3.9, -1.1);
  s.lineTo(2.9, -0.6);
  s.lineTo(2.1, -1.5);
  s.lineTo(1.0, -1.0);
  s.lineTo(0, -1.2);
  s.closePath();
  return new THREE.ShapeGeometry(s);
}

// Ein eigener, freundlicher Drache: Ursprung unter den Füßen, Blick nach +z
function makeDragon(c) {
  const root = new THREE.Group();
  const body = new THREE.Group();
  body.rotation.order = 'YXZ';
  root.add(body);
  const skin = std(c.body, { roughness: 0.6 }), belly = std(c.belly, { roughness: 0.8 }), horn = std(c.horn, { roughness: 0.5 });
  const torso = mesh(new THREE.SphereGeometry(1, 20, 14), skin, 0, 1.75, 0);
  torso.scale.set(1.05, 0.9, 1.9);
  body.add(torso);
  const tummy = mesh(new THREE.SphereGeometry(1, 16, 12), belly, 0, 1.55, 0.15);
  tummy.scale.set(0.85, 0.75, 1.65);
  body.add(tummy);
  // Rückenstacheln (nicht da, wo man sitzt)
  for (let k = 0; k < 6; k++) {
    const z = -0.7 - k * 0.45;
    body.add(mesh(new THREE.ConeGeometry(0.16, 0.45, 6), horn, 0, 2.55 - k * 0.12, z));
  }
  // Hals und Kopf
  const neck = mesh(new THREE.CapsuleGeometry(0.42, 1.3, 6, 12), skin, 0, 2.55, 2.0);
  neck.rotation.x = 0.85;
  body.add(neck);
  const head = new THREE.Group();
  head.position.set(0, 3.25, 2.75);
  body.add(head);
  const skull = mesh(new THREE.SphereGeometry(0.55, 16, 12), skin, 0, 0, 0);
  skull.scale.set(1, 0.85, 1.15);
  head.add(skull);
  head.add(mesh(new THREE.BoxGeometry(0.62, 0.42, 0.85), skin, 0, -0.12, 0.65));
  head.add(mesh(new THREE.BoxGeometry(0.5, 0.12, 0.7), belly, 0, -0.34, 0.6));
  for (const s of [-1, 1]) {
    const hn = mesh(new THREE.ConeGeometry(0.1, 0.6, 6), horn, s * 0.28, 0.45, -0.25);
    hn.rotation.x = -0.6;
    head.add(hn);
    head.add(mesh(new THREE.SphereGeometry(0.13, 10, 8), std(0xffffff, { roughness: 0.3 }), s * 0.3, 0.12, 0.3));
    head.add(mesh(new THREE.SphereGeometry(0.07, 8, 6), std(0x111111, { roughness: 0.2 }), s * 0.33, 0.13, 0.4));
    head.add(mesh(new THREE.SphereGeometry(0.04, 6, 5), std(0x222222), s * 0.14, 0.02, 1.08));
  }
  // Feuer aus dem Maul
  const flame = new THREE.Group();
  flame.position.set(0, -0.15, 1.1);
  const fireMat = (color, op) => new THREE.MeshBasicMaterial({ color, transparent: true, opacity: op, depthWrite: false, fog: false, userData: { fire: true } });
  const outer = new THREE.Mesh(new THREE.ConeGeometry(0.9, 5, 14, 1, true), fireMat(0xff5722, 0.8));
  const inner = new THREE.Mesh(new THREE.ConeGeometry(0.45, 3.4, 12, 1, true), fireMat(0xffca28, 0.95));
  for (const f of [outer, inner]) { f.rotation.x = -Math.PI / 2; f.position.z = f.geometry.parameters.height / 2; flame.add(f); }
  flame.visible = false;
  head.add(flame);
  // Schwanz aus Kugeln, hinten eine Pfeilspitze
  const tail = [];
  let parent = body, px = 0, py = 1.55, pz = -1.7;
  for (let k = 0; k < 7; k++) {
    const seg = new THREE.Group();
    seg.position.set(px, py, pz);
    parent.add(seg);
    const r = 0.42 - k * 0.05;
    seg.add(mesh(new THREE.SphereGeometry(r, 10, 8), skin, 0, 0, -0.3));
    tail.push(seg);
    parent = seg; px = 0; py = -0.06; pz = -0.55;
  }
  const tip = mesh(new THREE.ConeGeometry(0.3, 0.6, 4), horn, 0, 0, -0.55);
  tip.rotation.x = -Math.PI / 2;
  tip.scale.z = 0.35;
  parent.add(tip);
  // Beine
  const legs = [];
  for (const [x, z] of [[-0.6, 0.9], [0.6, 0.9], [-0.65, -0.9], [0.65, -0.9]]) {
    const hip = new THREE.Group();
    hip.position.set(x, 1.15, z);
    hip.add(mesh(new THREE.CapsuleGeometry(0.2, 0.6, 4, 8), skin, 0, -0.45, 0));
    hip.add(mesh(new THREE.BoxGeometry(0.34, 0.14, 0.45), belly, 0, -0.95, 0.1));
    body.add(hip);
    legs.push(hip);
  }
  // Flügel
  const wings = [];
  const membrane = std(c.wing, { roughness: 0.7, side: THREE.DoubleSide });
  const geo = wingShape();
  for (const s of [1, -1]) {
    const pivot = new THREE.Group();
    pivot.position.set(s * 0.8, 2.35, 0.35);
    const w = new THREE.Mesh(geo, membrane);
    w.rotation.x = Math.PI / 2;
    w.castShadow = true;
    const holder = new THREE.Group();
    holder.scale.x = s;
    holder.add(w);
    const bone = mesh(new THREE.CylinderGeometry(0.07, 0.05, 4.6, 6), skin, 2.3, 0.02, 1.15);
    bone.rotation.z = Math.PI / 2;
    bone.rotation.y = -0.22;
    holder.add(bone);
    pivot.add(holder);
    body.add(pivot);
    wings.push({ pivot, s });
  }
  root.traverse((o) => { if (o.isMesh && !o.material.userData.fire) o.castShadow = true; });
  return { root, body, head, flame, tail, legs, wings };
}

export function initDragons(scene, a) {
  api = a;
  PERCHES.forEach((pc, k) => {
    const m = makeDragon(COLORS[k]);
    m.root.visible = false;
    scene.add(m.root);
    dragons.push({ k, m, perch: pc, state: 'away', rider: -1, x: pc.x, y: PERCH_Y, z: pc.z, yaw: pc.yaw, bank: 0, pitch: 0,
      fire: 0, flap: Math.random() * 6, t: 0, target: null, prevAtk: true });
  });
}

const available = () => api.solvedAll() && api.towerBuilt();
const onTowerTop = (p) => p.root.position.y > TOWER_TOP - 0.4 && Math.hypot(p.root.position.x - TOWER.x, p.root.position.z - TOWER.z) < 3;

// Mindesthöhe beim Fliegen: über Berge, Burgen und die Windmühle drüber
function minAlt(x, z) {
  let a = 9;
  for (const m of MOUNTAINS) if (Math.hypot(x - m.x, z - m.z) < m.r + 7) a = Math.max(a, m.h + 3);
  for (const t of TALL) if (Math.hypot(x - t.x, z - t.z) < t.r) a = Math.max(a, t.h);
  return a;
}
const minAhead = (x, z, yaw) => Math.max(minAlt(x, z), minAlt(x + Math.sin(yaw) * 14, z + Math.cos(yaw) * 14));

function seatRider(d, p) {
  p.root.position.set(d.x + Math.sin(d.yaw) * 0.15, d.y + SEAT, d.z + Math.cos(d.yaw) * 0.15);
  p.heading = p.bodyYaw = d.yaw;
}

// Zauber-Taste oben auf dem Turm (oder neben einem gelandeten Drachen): aufsteigen
export function dragonMount(p) {
  if (!available() || p.riding != null || p.dead > 0 || p.out) return false;
  let d = null;
  if (onTowerTop(p)) {
    d = dragons.filter((q) => q.state === 'perch').sort((a, b) =>
      Math.hypot(a.x - p.root.position.x, a.z - p.root.position.z) - Math.hypot(b.x - p.root.position.x, b.z - p.root.position.z))[0];
  } else {
    d = dragons.find((q) => q.state === 'rest' && p.root.position.y < 1 && Math.hypot(q.x - p.root.position.x, q.z - p.root.position.z) < 4.5);
  }
  if (!d) return false;
  d.state = 'fly';
  d.rider = p.index;
  d.prevAtk = true;   // erst loslassen, sonst landet man gleich wieder
  p.riding = d.k;
  if (d.y < 1) d.y = 0.5;
  seatRider(d, p);
  api.sfx('levelUp');
  api.float('🐉 Los geht\'s!', '#ffd54f', p.root.position);
  api.msg(p.index, `🐉 Festhalten! ${api.flyHelp(p)}`, 7000);
  return true;
}

function dismount(d, p, x, y, z) {
  p.riding = null;
  d.rider = -1;
  p.root.position.set(x, y, z);
  p.holdAtk = true;
  p.cooldown = Math.max(p.cooldown || 0, 0.4);
  p.camInit = false;
}

// Freie Wiese zum Landen in der Nähe suchen
function landingSpot(x, z) {
  for (let r = 0; r < 22; r += 1.5) {
    for (let a = 0; a < 6.28; a += 0.5) {
      const px = x + Math.sin(a) * r, pz = z + Math.cos(a) * r;
      if (Math.abs(px) > bounds.r - 6 || Math.abs(pz) > bounds.r - 6) continue;
      // Platz für den Drachen und für den Reiter daneben
      if (floorAt(px, pz, 0) === 0 && floorAt(px + 1.5, pz, 0) === 0 && floorAt(px - 1.5, pz, 0) === 0
        && floorAt(px, pz + 1.5, 0) === 0 && floorAt(px, pz - 1.5, 0) === 0) return { x: px, z: pz };
    }
  }
  return null;
}

function startLanding(d, p) {
  const pos = p.root.position;
  if (Math.hypot(pos.x - TOWER.x, pos.z - TOWER.z) < 28) {
    d.state = 'land';
    d.target = { x: d.perch.x, y: PERCH_Y, z: d.perch.z, tower: true };
    api.msg(p.index, '🐉 Zurück zum Festturm!', 2500);
    return;
  }
  const s = landingSpot(pos.x, pos.z);
  if (!s) { api.msg(p.index, '🐉 Hier ist kein Platz zum Landen. Flieg über eine freie Wiese!', 3000); return; }
  d.state = 'land';
  d.target = { x: s.x, y: 0, z: s.z, tower: false };
  api.msg(p.index, '🐉 Der Drache landet …', 2500);
}

function turnTo(d, want, rate, dt) {
  let diff = (want - d.yaw) % (Math.PI * 2);
  if (diff > Math.PI) diff -= Math.PI * 2;
  if (diff < -Math.PI) diff += Math.PI * 2;
  const step = Math.max(-rate * dt, Math.min(rate * dt, diff));
  d.yaw += step;
  return step / Math.max(dt, 1e-4);
}

// Zum Ziel fliegen (beim Landen und beim Zurückfliegen). Gibt true zurück, wenn es angekommen ist.
function glideTo(d, t, dt, cruise) {
  const dx = t.x - d.x, dz = t.z - d.z, h = Math.hypot(dx, dz);
  let turn = 0;
  if (h > 0.3) {
    turn = turnTo(d, Math.atan2(dx, dz), 2.2, dt);
    const sp = Math.min(cruise, h * 1.6 + 1.5) * dt;
    d.x += (dx / h) * Math.min(sp, h);
    d.z += (dz / h) * Math.min(sp, h);
  } else if (t.yaw !== undefined) turnTo(d, t.yaw, 2.5, dt);
  // Erst kurz vor dem Ziel tiefer gehen, vorher über alles drüber
  const want = h > 9 ? Math.max(t.y, minAhead(d.x, d.z, d.yaw)) : t.y;
  const vy = Math.max(-8, Math.min(CLIMB, (want - d.y) * 2.5));
  d.y += vy * dt;
  d.pitch += (-vy * 0.035 - d.pitch) * Math.min(1, dt * 4);
  d.bank += (-turn * 0.25 - d.bank) * Math.min(1, dt * 4);
  return h < 0.3 && Math.abs(t.y - d.y) < 0.15;
}

// Für den Reiter (nur auf dem Gerät, das das Spiel rechnet). Gibt true zurück, solange geflogen wird.
export function dragonFly(p, dt) {
  if (p.riding == null) return false;
  const d = dragons[p.riding];
  if (!d || d.rider !== p.index) { p.riding = null; return false; }
  const inp = p.input;
  if (p.swapReq && d.fire <= 0) { d.fire = 1.4; api.sfx('poof'); }
  const pressed = inp.attack && !d.prevAtk;
  d.prevAtk = inp.attack;
  if (d.state === 'fly') {
    if (pressed) startLanding(d, p);
    const turn = inp.turn * 1.5;
    d.yaw += turn * dt;
    const lo = minAhead(d.x, d.z, d.yaw);
    const vy = inp.fwd * CLIMB;
    d.y = Math.min(TOP, d.y + vy * dt);
    if (d.y < lo) d.y += (lo - d.y) * Math.min(1, dt * 3);   // nie gegen Berge fliegen
    d.x += Math.sin(d.yaw) * SPEED * dt;
    d.z += Math.cos(d.yaw) * SPEED * dt;
    const lim = bounds.r - 8;
    if (Math.abs(d.x) > lim || Math.abs(d.z) > lim) {
      d.x = Math.max(-lim, Math.min(lim, d.x));
      d.z = Math.max(-lim, Math.min(lim, d.z));
      if ((p.edgeT || 0) < performance.now()) { p.edgeT = performance.now() + 4000; api.msg(p.index, bounds.r < WORLD ? '🐉 Hinter dem Nebel ist noch unentdecktes Land. Erlebt mehr Abenteuer, dann wächst die Welt!' : '🐉 Hier ist die Welt zu Ende. Dreh um!', 3000); }
    }
    d.bank += (-turn * 0.32 - d.bank) * Math.min(1, dt * 4);
    d.pitch += (-inp.fwd * 0.3 - d.pitch) * Math.min(1, dt * 4);
  } else if (d.state === 'land') {
    if (glideTo(d, d.target, dt, SPEED)) {
      if (d.target.tower) {
        d.state = 'perch';
        d.yaw = d.perch.yaw;
        // Reiter steht wieder oben auf der Plattform
        dismount(d, p, TOWER.x + (d.perch.x - TOWER.x) * 0.2, TOWER_TOP, TOWER.z + (d.perch.z - TOWER.z) * 0.2);
      } else {
        d.state = 'rest';
        d.t = 0;
        d.y = 0;
        const sx = d.x + Math.cos(d.yaw) * 2.6, sz = d.z - Math.sin(d.yaw) * 2.6;
        if (floorAt(sx, sz, 0) === 0) dismount(d, p, sx, 0, sz);
        else dismount(d, p, d.x, 0, d.z);
        api.msg(p.index, '🐉 Gelandet! Drück noch mal neben dem Drachen, dann geht es wieder los. Sonst fliegt er gleich zurück zum Turm.', 4500);
      }
      api.sfx('plop');
      return true;
    }
  }
  seatRider(d, p);
  return true;
}

// Drachen ohne Reiter, Ankunft und Tipps (nur auf dem Gerät, das das Spiel rechnet)
export function updateDragons(dt, players) {
  const ok = available();
  for (const d of dragons) {
    if (d.fire > 0) d.fire -= dt;
    const p = d.rider >= 0 ? players[d.rider] : null;
    if (d.rider >= 0 && (!p || p.riding !== d.k)) { d.rider = -1; d.state = 'return'; }
    if (!ok) {
      if (d.rider >= 0 && p) dismount(d, p, p.root.position.x, 0, p.root.position.z);
      d.state = 'away';
      continue;
    }
    if (d.state === 'away') {
      // kommt von weit her angeflogen
      d.state = 'return';
      d.x = TOWER.x + 160 * (d.k ? -1 : 1); d.z = TOWER.z + 140; d.y = 60;
      d.yaw = Math.atan2(TOWER.x - d.x, TOWER.z - d.z);
    }
    if (d.state === 'rest' && (d.t += dt) > 6) d.state = 'return';
    if (d.state === 'return' && glideTo(d, { x: d.perch.x, y: PERCH_Y, z: d.perch.z, yaw: d.perch.yaw }, dt, 13)) d.state = 'perch';
    if (d.state === 'perch') {
      turnTo(d, d.perch.yaw, 2, dt);
      d.y = PERCH_Y;
      d.bank *= 0.9; d.pitch *= 0.9;
    }
  }
  if (ok && !announced) {
    announced = true;
    api.later(15, () => api.gmsg('🐉 Zwei Drachen sind auf euren Festturm geflogen! Lauft die Wendeltreppe ganz nach oben und drückt dort die Zauber-Taste zum Aufsteigen!', 8000));
  }
  if (!ok) announced = false;
  if (api.solvedAll() && !api.towerBuilt() && api.kid() && !towerHint) {
    towerHint = true;
    api.later(15, () => api.gmsg('🐉 Ein Drache sucht einen Landeplatz! Baut in der Werkstatt den Festturm 🏰, dann kommt er zu euch.', 8000));
  }
  // Wer oben auf dem Turm steht, bekommt einen Tipp
  for (const p of players) {
    if (p.riding != null || !onTowerTop(p)) continue;
    if ((hintT[p.index] || 0) > performance.now()) continue;
    hintT[p.index] = performance.now() + 25000;
    if (!ok) api.msg(p.index, `🐉 Hier oben landet ein Drache, wenn ihr alle Dorfrätsel gelöst habt (noch ${api.missing()}). Schaut auf der kleinen Karte nach den ❓!`, 5000);
    else if (dragons.some((d) => d.state === 'perch')) api.msg(p.index, `🐉 Drück ${api.talkKey()}, um auf den Drachen zu steigen!`, 4000);
  }
}

// ---------- Aussehen (auf jedem Gerät) ----------
export function poseDragons(dt, sim) {
  time += dt;
  const ok = available();
  for (const d of dragons) {
    const { m } = d;
    if (!sim && d.tx !== undefined) {
      const k = Math.min(1, dt * 15);
      if (Math.abs(d.tx - d.x) + Math.abs(d.tz - d.z) > 20) { d.x = d.tx; d.y = d.ty; d.z = d.tz; }
      d.x += (d.tx - d.x) * k; d.y += (d.ty - d.y) * k; d.z += (d.tz - d.z) * k;
      d.yaw += (((d.tyaw - d.yaw + Math.PI * 3) % (Math.PI * 2)) - Math.PI) * k;
    }
    m.root.visible = ok && d.state !== 'away';
    if (!m.root.visible) continue;
    const resting = d.state === 'rest';
    const hover = d.state === 'perch' ? Math.sin(time * 2 + d.k) * 0.2 : 0;
    m.root.position.set(d.x, d.y + hover, d.z);
    m.root.rotation.y = d.yaw;
    m.body.rotation.x = d.pitch;
    m.body.rotation.z = d.bank;
    // Flügel schlagen: im Flug kräftig, beim Schweben langsam, am Boden zusammengefaltet
    d.flap += dt * (resting ? 0 : d.state === 'perch' ? 5 : d.pitch < -0.1 ? 8 : 4.5);
    const glide = d.state === 'fly' && d.pitch > 0.1;   // beim Runterfliegen gleiten
    const a = resting ? 0.9 : glide ? 0.1 + Math.sin(d.flap) * 0.08 : Math.sin(d.flap) * 0.6 + 0.1;
    for (const w of m.wings) w.pivot.rotation.z = w.s * a;
    m.tail.forEach((s, k) => { s.rotation.y = Math.sin(time * 2.2 - k * 0.6) * 0.18; s.rotation.x = resting ? 0.05 : -0.03; });
    const airborne = !resting;
    m.legs.forEach((l, k) => (l.rotation.x = airborne ? 0.9 : 0));
    m.head.rotation.x = Math.sin(time * 1.3 + d.k) * 0.06;
    m.flame.visible = d.fire > 0;
    if (d.fire > 0) {
      if (!sim) d.fire -= dt;
      const s = 0.8 + Math.random() * 0.4;
      m.flame.scale.set(s, s, 0.9 + Math.random() * 0.3);
    }
  }
}

// Reiter sitzen auf dem Drachen (Beine nach vorne)
export function poseRider(p) {
  if (p.riding == null) return;
  p.h.legs[0].rotation.x = p.h.legs[1].rotation.x = -1.3;
  p.h.body.position.y = 0;
}

// ---------- Kamera für Reiter ----------
const tmp = new THREE.Vector3();
export function riderCamera(p, camPos, camLook) {
  if (p.riding == null) return false;
  const d = dragons[p.riding];
  const yaw = d ? d.yaw : p.heading;
  const fx = Math.sin(yaw), fz = Math.cos(yaw), pos = p.root.position;
  const low = d && (d.state === 'land' || d.state === 'rest') ? 0.6 : 1;
  camPos.set(pos.x - fx * 11, pos.y + 3 + 1.5 * low, pos.z - fz * 11);
  camLook.copy(tmp.set(pos.x + fx * 10, pos.y - 1.5 * low, pos.z + fz * 10));
  return true;
}

// ---------- Kleine Karte ----------
export const dragonMapMarks = () => (available() ? [{ x: TOWER.x, z: TOWER.z, icon: '🐉' }] : []);

// ---------- Netzwerk ----------
const r2 = (v) => Math.round(v * 100) / 100;
export const dragonSnapshot = () => dragons.map((d) =>
  [STATES.indexOf(d.state), d.rider, r2(d.x), r2(d.y), r2(d.z), r2(d.yaw), r2(d.bank), r2(d.pitch), d.fire > 0 ? r2(d.fire) : 0]);
export function applyDragonSnapshot(rows, players) {
  if (!rows) return;
  for (const p of players) p.riding = null;
  rows.forEach(([s, rider, x, y, z, yaw, bank, pitch, fire], k) => {
    const d = dragons[k];
    if (!d) return;
    if (d.state === 'away') { d.x = x; d.y = y; d.z = z; d.yaw = yaw; }
    d.state = STATES[s] || 'away';
    d.rider = rider;
    d.tx = x; d.ty = y; d.tz = z; d.tyaw = yaw;
    d.bank = bank; d.pitch = pitch;
    if (fire > 0 && d.fire <= 0) d.fire = fire;
    if (rider >= 0 && players[rider]) players[rider].riding = k;
  });
}

export function resetDragons(players) {
  for (const p of players) p.riding = null;
  for (const d of dragons) {
    d.state = 'away'; d.rider = -1; d.fire = 0;
    d.x = d.perch.x; d.y = PERCH_Y; d.z = d.perch.z; d.yaw = d.perch.yaw;
  }
  announced = false;
  towerHint = false;
}

export const dragonDebug = { dragons, TOWER, PERCHES, minAlt };

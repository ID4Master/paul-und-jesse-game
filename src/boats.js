// Boote auf dem großen See: Floß, Ruderboot und Segelschiff. Jedes ist schneller und stärker als das vorige.
// Das Floß fährt nur auf ruhigem Wasser, das Ruderboot kommt durch hohe Wellen, nur das Segelschiff schafft den Strudel.
// Auf drei Inseln wartet je eine Schatztruhe.
import * as THREE from '../lib/three.module.js';
import { std, mesh, blockers } from './util.js';
import { SEE, ISLANDS, WERFT } from './map.js';

let api = null;
let time = 0;

export const BOAT_TYPES = {
  raft: { name: 'Floß', icon: '🛶', speed: 4.5, acc: 1.2, turn: 1.1, power: 1, r: 1.4, seat: 0.42, sit: true, cam: 8, dock: { x: 88.5, z: 45.6, yaw: Math.PI / 2 } },
  rowboat: { name: 'Ruderboot', icon: '🚣', speed: 7.5, acc: 1.6, turn: 1.6, power: 2, r: 1.5, seat: 0.5, sit: true, cam: 8, dock: { x: 88.5, z: 52.4, yaw: Math.PI / 2 } },
  ship: { name: 'Segelschiff', icon: '⛵', speed: 11, acc: 1.0, turn: 1.25, power: 3, r: 2.2, seat: 1.15, sit: false, cam: 12, dock: { x: 87, z: 58, yaw: Math.PI / 2 } },
};
const IDS = Object.keys(BOAT_TYPES);
// Steg von der Bootswerft ins Wasser (darauf kann man laufen)
const STEG = { x1: 82.4, x2: 90, z: 49.3, w: 0.9 };
const onSteg = (x, z) => x > STEG.x1 && x < STEG.x2 + 0.2 && Math.abs(z - STEG.z) < STEG.w - 0.05;
const boats = [];
const chests = [];
const rings = [];

// ---------- Wasser ----------
// Ist hier Wasser? m > 0 macht das Wasser etwas größer (für Leute, die am Ufer stehen bleiben sollen)
export const isWater = (x, z, m = 0) =>
  Math.hypot(x - SEE.x, z - SEE.z) < SEE.r + m && ISLANDS.every((i) => Math.hypot(x - i.x, z - i.z) > i.r - m);

// Darf das Boot hier fahren? Gibt '' zurück oder warum nicht.
function boatBlock(b, x, z) {
  const T = BOAT_TYPES[b.type], br = T.r;
  if (Math.hypot(x - SEE.x, z - SEE.z) > SEE.r - br * 0.75) return 'shore';
  for (const i of ISLANDS) {
    const d = Math.hypot(x - i.x, z - i.z);
    if (d < i.r + br * 0.75) return 'shore';
    if (i.rough >= T.power && d < i.ring + br * 0.5) return i.rough === 1 ? 'waves' : 'swirl';
  }
  if (x < STEG.x2 + br * 0.5 && Math.abs(z - STEG.z) < STEG.w + br * 0.6) return 'shore';   // Steg
  for (const o of boats) {
    if (o === b || !o.built) continue;
    const min = br + BOAT_TYPES[o.type].r - 0.4;
    const now = Math.hypot(b.x - o.x, b.z - o.z), next = Math.hypot(x - o.x, z - o.z);
    if (next < min && next < now) return 'boat';
  }
  return '';
}

// ---------- Aussehen ----------
const woodM = std(0x9c7448), darkWood = std(0x6d4c30), ropeM = std(0xd7c49a);
function hullGeo(w, L, H) {
  // Umriss von oben: vorne spitz (nach dem Drehen zeigt die Spitze nach +z)
  const s = new THREE.Shape();
  s.moveTo(0, -L / 2);
  s.quadraticCurveTo(w, -L / 4, w, L / 6);
  s.lineTo(w * 0.78, L / 2);
  s.lineTo(-w * 0.78, L / 2);
  s.lineTo(-w, L / 6);
  s.quadraticCurveTo(-w, -L / 4, 0, -L / 2);
  const g = new THREE.ExtrudeGeometry(s, { depth: H, bevelEnabled: false, curveSegments: 8 });
  g.rotateX(-Math.PI / 2);
  return g;
}

function makeRaft() {
  const g = new THREE.Group();
  for (let k = -2; k <= 2; k++) {
    const log = mesh(new THREE.CylinderGeometry(0.24, 0.24, 3.2, 8), k % 2 ? darkWood : woodM, k * 0.48, 0.22, 0);
    log.rotation.x = Math.PI / 2;
    g.add(log);
  }
  for (const z of [-1.1, 1.1]) g.add(mesh(new THREE.BoxGeometry(2.6, 0.1, 0.25), ropeM, 0, 0.45, z));
  g.add(mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.8, 6), darkWood, 0.9, 1.3, -1.1));
  const flag = mesh(new THREE.PlaneGeometry(0.7, 0.45), std(0xffeb3b, { side: THREE.DoubleSide }), 0.9, 1.95, -0.75);
  flag.rotation.y = Math.PI / 2;
  g.add(flag);
  g.userData.flag = flag;
  return g;
}

function makeRowboat() {
  const g = new THREE.Group();
  const hull = new THREE.Mesh(hullGeo(0.85, 3.4, 0.6), [std(0xa1785a), std(0xc62828)]);
  hull.castShadow = true;
  g.add(hull);
  g.add(mesh(new THREE.BoxGeometry(1.5, 0.03, 2.6), std(0xd32f2f), 0, 0.42, 0));   // weißer Streifen ist der Rand
  const stripe = mesh(new THREE.BoxGeometry(1.72, 0.08, 0.06), std(0xffffff), 0, 0.5, 1.13);
  g.add(stripe, mesh(new THREE.BoxGeometry(1.4, 0.08, 0.35), woodM, 0, 0.62, 0.1), mesh(new THREE.BoxGeometry(1.2, 0.08, 0.3), woodM, 0, 0.62, -1.0));
  // Ruder an beiden Seiten, sie drehen sich beim Fahren
  const oars = [];
  for (const s of [-1, 1]) {
    const piv = new THREE.Group();
    piv.position.set(s * 0.8, 0.65, 0.2);
    const oar = mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.2, 6), darkWood, s * 0.9, -0.2, 0);
    oar.rotation.z = s * 1.25;
    const blade = mesh(new THREE.BoxGeometry(0.05, 0.12, 0.35), darkWood, s * 1.9, -0.6, 0);
    piv.add(oar, blade);
    g.add(piv);
    oars.push({ piv, s });
  }
  g.userData.oars = oars;
  return g;
}

function sailTexture() {
  const cv = document.createElement('canvas');
  cv.width = 128; cv.height = 128;
  const ctx = cv.getContext('2d');
  ctx.fillStyle = '#fafafa';
  ctx.fillRect(0, 0, 128, 128);
  ctx.fillStyle = '#1e63d6';
  for (let k = 0; k < 3; k++) ctx.fillRect(0, 10 + k * 42, 128, 16);
  ctx.font = '54px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('⭐', 64, 92);
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function makeShip() {
  const g = new THREE.Group();
  const hull = new THREE.Mesh(hullGeo(1.5, 6.2, 1.2), [std(0xb08a5c), std(0x1565c0)]);
  hull.castShadow = true;
  g.add(hull);
  g.add(mesh(new THREE.BoxGeometry(2.4, 0.12, 0.08), std(0xffffff), 0, 1.0, 2.04));
  for (const s of [-1, 1]) g.add(mesh(new THREE.BoxGeometry(0.08, 0.35, 4.6), std(0xffffff), s * 1.38, 1.3, -0.4));   // Reling
  g.add(mesh(new THREE.BoxGeometry(2.4, 0.5, 1.2), std(0x8d6e4a), 0, 1.45, -2.2));   // Kajüte hinten
  const mast = mesh(new THREE.CylinderGeometry(0.1, 0.13, 7, 8), darkWood, 0, 4.5, 0.6);
  g.add(mast, mesh(new THREE.CylinderGeometry(0.06, 0.06, 2.8, 6), darkWood, 0, 2.6, 1.2));
  g.children[g.children.length - 1].rotation.z = Math.PI / 2;
  const sail = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 3.8, 6, 1), new THREE.MeshStandardMaterial({ map: sailTexture(), side: THREE.DoubleSide, roughness: 0.9 }));
  sail.position.set(0, 4.6, 0.75);
  sail.castShadow = true;
  g.add(sail);
  const flag = mesh(new THREE.PlaneGeometry(0.9, 0.5), std(0xffd54f, { side: THREE.DoubleSide }), 0, 8.15, 0.15);
  flag.rotation.y = Math.PI / 2;
  g.add(flag);
  // Steuerrad hinten
  const wheel = mesh(new THREE.TorusGeometry(0.4, 0.05, 6, 16), darkWood, 0, 2.0, -1.45);
  g.add(wheel);
  g.userData = { sail, flag, wheel };
  return g;
}

function swirlTexture() {
  const cv = document.createElement('canvas');
  cv.width = cv.height = 256;
  const ctx = cv.getContext('2d');
  ctx.translate(128, 128);
  ctx.strokeStyle = 'rgba(255,255,255,0.9)';
  ctx.lineWidth = 9;
  for (let arm = 0; arm < 4; arm++) {
    ctx.beginPath();
    for (let t = 0; t < 1; t += 0.02) {
      const a = arm * Math.PI / 2 + t * 4.5, r = 30 + t * 95;
      ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
    }
    ctx.stroke();
  }
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function makeChest() {
  const g = new THREE.Group();
  g.add(mesh(new THREE.BoxGeometry(1.1, 0.6, 0.7), std(0x8d5a2b), 0, 0.3, 0));
  const lid = new THREE.Group();
  lid.position.set(0, 0.6, -0.35);
  lid.add(mesh(new THREE.BoxGeometry(1.15, 0.22, 0.75), std(0x6d4320), 0, 0.11, 0.35));
  lid.add(mesh(new THREE.BoxGeometry(0.18, 0.2, 0.05), std(0xd4af37, { metalness: 0.7, roughness: 0.3 }), 0, -0.02, 0.73));
  g.add(lid);
  const glow = new THREE.PointLight(0xffd54f, 0, 6);
  glow.position.set(0, 1.2, 0);
  g.add(glow);
  g.userData = { lid, glow };
  return g;
}

function addPalm(scene, x, z) {
  const trunk = std(0x8d6e4a), leaf = std(0x43a047, { side: THREE.DoubleSide });
  for (let k = 0; k < 5; k++) scene.add(mesh(new THREE.CylinderGeometry(0.16, 0.2, 0.9, 7), trunk, x + k * 0.12, 0.5 + k * 0.85, z));
  for (let k = 0; k < 6; k++) {
    const l = mesh(new THREE.ConeGeometry(0.35, 2.2, 4), leaf, 0, 0, 0);
    const a = (k / 6) * Math.PI * 2;
    l.position.set(x + 0.6 + Math.sin(a) * 0.9, 4.5, z + Math.cos(a) * 0.9);
    l.rotation.set(Math.cos(a) * 1.2, 0, -Math.sin(a) * 1.2);
    scene.add(l);
  }
}

// Wird beim Bauen der Welt aufgerufen (vor dem Wald, damit dort keine Bäume wachsen)
export function buildLake(scene) {
  const { x, z, r } = SEE;
  const sand = mesh(new THREE.CircleGeometry(r + 1.8, 64), std(0xd9c49a), x, 0.024, z);
  sand.rotation.x = -Math.PI / 2;
  const water = mesh(new THREE.CircleGeometry(r, 64),
    new THREE.MeshStandardMaterial({ color: 0x2f86c8, roughness: 0.08, metalness: 0.35, transparent: true, opacity: 0.88 }), x, 0.05, z);
  water.rotation.x = -Math.PI / 2;
  water.castShadow = false;
  scene.add(sand, water);
  // Schilf am Ufer
  const reed = std(0x6d8b3a);
  for (let k = 0; k < 60; k++) {
    const a = (k / 60) * Math.PI * 2 + Math.sin(k * 7.1) * 0.05, d = r + 0.2 + ((k * 37) % 10) / 10;
    const px = x + Math.sin(a) * d, pz = z + Math.cos(a) * d;
    if (px < WERFT.x2 + 1 && Math.abs(pz - 52) < 12) continue;   // vor der Bootswerft frei lassen
    const h = 0.8 + ((k * 13) % 9) / 10;
    scene.add(mesh(new THREE.CylinderGeometry(0.03, 0.04, h, 4), reed, px, h / 2, pz));
  }
  // Inseln
  for (const i of ISLANDS) {
    const s = mesh(new THREE.CylinderGeometry(i.r, i.r + 0.5, 0.3, 24), std(0xd9c49a), i.x, 0.05, i.z);
    const top = mesh(new THREE.CylinderGeometry(i.r - 0.8, i.r - 0.4, 0.12, 24), std(0x5c9a3c), i.x, 0.24, i.z);
    scene.add(s, top);
    if (i.id === 'schatz') addPalm(scene, i.x - 1.6, i.z + 0.8);
    if (i.id === 'moewe') for (const [dx, dz, sc] of [[1.2, 0.8, 0.6], [-1.1, 0.9, 0.45], [0.5, -1.3, 0.5]]) scene.add(mesh(new THREE.IcosahedronGeometry(sc, 0), std(0x9e9a92, { flatShading: true }), i.x + dx, sc * 0.5, i.z + dz));
    if (i.id === 'seerose') {
      for (let k = 0; k < 10; k++) {
        const a = k * 0.9, d = i.r + 1 + (k % 3);
        const pad = mesh(new THREE.CircleGeometry(0.45, 10), std(0x4caf50), i.x + Math.sin(a) * d, 0.07, i.z + Math.cos(a) * d);
        pad.rotation.x = -Math.PI / 2;
        scene.add(pad);
        if (k % 2 === 0) scene.add(mesh(new THREE.SphereGeometry(0.13, 6, 5), std(0xf8bbd0), pad.position.x, 0.14, pad.position.z));
      }
    }
  }
  // Bootswerft: Holzboden, Schild und Steg
  const plank = std(0xa1824f), post = std(0x6d4c30);
  const floor = mesh(new THREE.BoxGeometry(WERFT.x2 - WERFT.x1, 0.08, WERFT.z2 - WERFT.z1), plank, (WERFT.x1 + WERFT.x2) / 2, 0.02, (WERFT.z1 + WERFT.z2) / 2);
  scene.add(floor);
  for (let k = 0; k < 9; k++) scene.add(mesh(new THREE.BoxGeometry(0.85, 0.1, STEG.w * 2), plank, STEG.x1 + 0.45 + k * 0.85, 0.3, STEG.z));
  for (const px of [83.5, 86.5, 89.5]) for (const s of [-1, 1]) scene.add(mesh(new THREE.CylinderGeometry(0.1, 0.1, 1.1, 6), post, px, 0.25, STEG.z + s * (STEG.w - 0.05)));
  for (const pz of [WERFT.z1 + 0.3, WERFT.z2 - 0.3]) scene.add(mesh(new THREE.BoxGeometry(0.2, 3.4, 0.2), post, 74, 1.7, pz));
  // Seerosen-Ringe, Wellen und Strudel bewegen sich: in eine Gruppe, damit sie nicht mit dem Rest verschmolzen werden
  const anim = new THREE.Group();
  for (const i of ISLANDS) {
    if (!i.rough) continue;
    const mat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35, side: THREE.DoubleSide, depthWrite: false,
      map: i.rough === 2 ? swirlTexture() : null });
    const ring = new THREE.Mesh(i.rough === 2 ? new THREE.CircleGeometry(i.ring, 40) : new THREE.RingGeometry(i.r + 0.6, i.ring, 40, 1), mat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(i.x, 0.08, i.z);
    anim.add(ring);
    const crests = [];
    if (i.rough === 1) {
      for (let k = 0; k < 16; k++) {
        const a = (k / 16) * Math.PI * 2, d = i.r + 1.2 + (k % 3) * 1.1;
        const c = mesh(new THREE.ConeGeometry(0.35, 0.6, 5), new THREE.MeshStandardMaterial({ color: 0xe3f2fd, roughness: 0.3 }), i.x + Math.sin(a) * d, 0.1, i.z + Math.cos(a) * d);
        c.castShadow = false;
        anim.add(c);
        crests.push(c);
      }
    }
    rings.push({ i, ring, crests });
  }
  scene.add(anim);
  // Schatztruhen auf den Inseln
  for (const i of ISLANDS) {
    const g = makeChest();
    g.position.set(i.x + 0.4, 0.3, i.z - 0.3);
    g.rotation.y = -Math.PI / 2;   // Schloss zeigt nach Westen, zur Bootswerft
    scene.add(g);
    chests.push({ i, g, open: false, t: 0 });
  }
  // Wer am Ufer steht, läuft nicht ins Wasser (auf den Inseln bleibt man auf der Insel)
  blockers.push({ hit: (px, pz, pr) => !onSteg(px, pz) && isWater(px, pz, Math.max(0, (pr || 0) - 0.35)), solid: () => false });
}

export function initBoats(scene, a) {
  api = a;
  IDS.forEach((type, k) => {
    const T = BOAT_TYPES[type];
    const m = type === 'raft' ? makeRaft() : type === 'rowboat' ? makeRowboat() : makeShip();
    const root = new THREE.Group();
    root.add(m);
    root.visible = false;
    scene.add(root);
    boats.push({ k, type, root, m, built: false, rider: -1, x: T.dock.x, z: T.dock.z, yaw: T.dock.yaw, v: 0, prevAtk: true, hintT: 0, hornT: 0, row: 0 });
  });
}

// ---------- Bauen ----------
export function boatBuilt(type, on = true) {
  const b = boats.find((q) => q.type === type);
  if (!b) return;
  b.built = on;
  if (on && b.rider < 0) { const d = BOAT_TYPES[type].dock; b.x = d.x; b.z = d.z; b.yaw = d.yaw; b.v = 0; }
}
export const boatDock = (type) => BOAT_TYPES[type].dock;

// ---------- Einsteigen, Fahren, Aussteigen (nur auf dem Gerät, das das Spiel rechnet) ----------
function seat(b, p) {
  const T = BOAT_TYPES[b.type];
  const back = b.type === 'ship' ? -1.3 : b.type === 'rowboat' ? -0.15 : 0;
  p.root.position.set(b.x + Math.sin(b.yaw) * back, T.seat, b.z + Math.cos(b.yaw) * back);
  p.heading = p.bodyYaw = b.yaw;
}

// Zauber-Taste am Ufer neben einem Boot: einsteigen
export function boatBoard(p) {
  if (p.boat != null || p.riding != null || p.dead > 0 || p.out || p.root.position.y > 1) return false;
  const pos = p.root.position;
  let best = null, bestD = Infinity;
  for (const b of boats) {
    if (!b.built || b.rider >= 0) continue;
    const d = Math.hypot(b.x - pos.x, b.z - pos.z) - BOAT_TYPES[b.type].r;
    if (d < 2.6 && d < bestD) { best = b; bestD = d; }
  }
  if (!best) return false;
  const T = BOAT_TYPES[best.type];
  best.rider = p.index;
  best.prevAtk = true;
  best.v = 0;
  p.boat = best.k;
  p.holdAtk = true;
  seat(best, p);
  api.sfx('splash');
  api.float(`${T.icon} Leinen los!`, '#81d4fa', p.root.position);
  api.msg(p.index, `${T.icon} Du fährst das ${T.name}! ${api.sailHelp(p, best.type)}`, 7000);
  return true;
}

// Freie Stelle an Land neben dem Boot suchen
function landSpot(b) {
  const br = BOAT_TYPES[b.type].r;
  for (let d = br + 0.5; d < br + 2.6; d += 0.3) {
    for (let k = 0; k < 24; k++) {
      const a = b.yaw + (k % 2 ? 1 : -1) * Math.ceil(k / 2) * (Math.PI / 12);
      const x = b.x + Math.sin(a) * d, z = b.z + Math.cos(a) * d;
      if (!api.blocked(x, z, 0.5)) return { x, z };
    }
  }
  return null;
}

function leave(b, p) {
  const s = landSpot(b);
  if (!s) {
    if (b.hintT < time) { b.hintT = time + 3; api.msg(p.index, '⚓ Hier ist kein Land. Fahr ans Ufer oder an eine Insel, dann kannst du aussteigen.', 3000); }
    return false;
  }
  b.rider = -1;
  b.v = 0;
  p.boat = null;
  p.root.position.set(s.x, 0, s.z);
  p.holdAtk = true;
  p.cooldown = Math.max(p.cooldown || 0, 0.4);
  p.camInit = false;
  api.sfx('plop');
  return true;
}

export function boatSail(p, dt) {
  if (p.boat == null) return false;
  const b = boats[p.boat];
  if (!b || b.rider !== p.index || !b.built) { p.boat = null; if (b && b.rider === p.index) b.rider = -1; return false; }
  const T = BOAT_TYPES[b.type], inp = p.input;
  const pressed = inp.attack && !b.prevAtk;
  b.prevAtk = inp.attack;
  if (pressed && leave(b, p)) return true;
  if (p.swapReq && b.type === 'ship' && b.hornT < time) {
    b.hornT = time + 1.2;
    api.sfx('horn');
    api.float('📯 Tuuut!', '#ffffff', { x: b.x, z: b.z });
  }
  if (p.swapReq && b.type !== 'ship' && b.hintT < time) { b.hintT = time + 4; api.msg(p.index, `${T.icon} Nur das Segelschiff hat eine Tröte 📯.`, 2500); }
  const want = inp.fwd > 0 ? inp.fwd * T.speed : inp.fwd * T.speed * 0.4;
  b.v += (want - b.v) * Math.min(1, dt * T.acc);
  b.yaw += inp.turn * T.turn * dt * (0.55 + 0.45 * Math.min(1, Math.abs(b.v) / T.speed)) * (b.v < -0.2 ? -1 : 1);
  const dx = Math.sin(b.yaw) * b.v * dt, dz = Math.cos(b.yaw) * b.v * dt;
  const why = boatBlock(b, b.x + dx, b.z + dz);
  if (!why) { b.x += dx; b.z += dz; }
  else {
    // am Ufer, an Inseln, Wellen und Strudel entlang gleiten
    let slid = false;
    for (const turn of [0.5, -0.5, 1.0, -1.0]) {
      const k = Math.cos(turn) * 0.8, a = b.yaw + (b.v < 0 ? -turn : turn);
      const sx = Math.sin(a) * b.v * dt * k, sz = Math.cos(a) * b.v * dt * k;
      if (!boatBlock(b, b.x + sx, b.z + sz)) { b.x += sx; b.z += sz; slid = true; break; }
    }
    if (!slid) b.v *= 0.5;
    if (b.hintT < time && Math.abs(b.v) > 0.5) {
      b.hintT = time + 6;
      if (why === 'waves') api.msg(p.index, `🌊 Die Wellen sind zu hoch für das ${T.name}! Mit einem Ruderboot 🚣 kommst du durch. Das gibt es in der Bootswerft.`, 4500);
      else if (why === 'swirl') api.msg(p.index, `🌀 Der Strudel ist zu stark für ${b.type === 'raft' ? 'das Floß' : 'das Ruderboot'}! Nur ein Segelschiff ⛵ schafft das. Das gibt es in der Bootswerft.`, 4500);
      else if (why === 'shore') api.msg(p.index, `⚓ Ufer! Drück ${api.talkKey()} zum Aussteigen.`, 3000);
    }
  }
  b.row += Math.abs(b.v) * dt;
  seat(b, p);
  p.hp = 100;   // auf dem Wasser passiert einem nichts
  return true;
}

// Truhen auf den Inseln öffnen (nur auf dem Gerät, das das Spiel rechnet)
export function updateBoats(dt, players) {
  for (const b of boats) {
    if (b.rider < 0) { b.v *= Math.max(0, 1 - dt * 2); continue; }
    const p = players[b.rider];
    if (!p || p.boat !== b.k || p.out) { b.rider = -1; if (p && p.boat === b.k) p.boat = null; }
  }
  for (const c of chests) {
    if (c.open) continue;
    const p = players.find((q) => !q.dead && !q.out && q.boat == null && Math.hypot(q.root.position.x - c.g.position.x, q.root.position.z - c.g.position.z) < 1.9);
    if (!p) continue;
    c.open = true;
    api.loot(c.i, p, { x: c.g.position.x, z: c.g.position.z });
  }
}

// ---------- Aussehen (auf jedem Gerät) ----------
export function poseBoats(dt, sim) {
  time += dt;
  for (const b of boats) {
    b.root.visible = b.built;
    if (!b.built) continue;
    if (!sim && b.tx !== undefined) {
      const k = Math.min(1, dt * 12);
      if (Math.abs(b.tx - b.x) + Math.abs(b.tz - b.z) > 15) { b.x = b.tx; b.z = b.tz; }
      b.x += (b.tx - b.x) * k; b.z += (b.tz - b.z) * k;
      b.yaw += (((b.tyaw - b.yaw + Math.PI * 3) % (Math.PI * 2)) - Math.PI) * k;
      b.row += Math.abs(b.v) * dt;
    }
    const bob = Math.sin(time * 1.6 + b.k * 2) * 0.05;
    b.root.position.set(b.x, (b.type === 'ship' ? -0.35 : -0.12) + bob, b.z);
    b.root.rotation.set(Math.sin(time * 1.2 + b.k) * 0.03, b.yaw, Math.sin(time * 1.4 + b.k) * 0.04 - b.v * 0.004);
    const u = b.m.userData;
    if (u.oars) for (const o of u.oars) { const ph = b.row * 1.4; o.piv.rotation.y = o.s * Math.sin(ph) * 0.6; o.piv.rotation.z = o.s * (Math.cos(ph) * 0.25); }
    if (u.flag) u.flag.rotation.x = Math.sin(time * 6 + b.k) * 0.25;
    if (u.sail) {
      // Wer am Steuer steht, schaut durch das Segel hindurch, sonst sieht man nichts
      const want = b.rider >= 0 ? 0.3 : 1;
      u.sail.material.transparent = true;
      u.sail.material.depthWrite = want === 1;
      u.sail.material.opacity += (want - u.sail.material.opacity) * Math.min(1, dt * 4);
    }
    if (u.wheel) u.wheel.rotation.z = b.yaw * 2;
  }
  for (const r of rings) {
    if (r.i.rough === 2) r.ring.rotation.z += dt * 1.8;
    else r.ring.material.opacity = 0.25 + Math.sin(time * 2) * 0.1;
    r.crests.forEach((c, k) => { c.position.y = 0.05 + Math.max(0, Math.sin(time * 3 + k * 1.7)) * 0.35; c.rotation.y += dt * 0.5; });
  }
  for (const c of chests) {
    const { lid, glow } = c.g.userData;
    c.t += dt;
    lid.rotation.x += ((c.open ? -1.9 : 0) - lid.rotation.x) * Math.min(1, dt * 4);
    glow.intensity = c.open ? 0 : 1.2 + Math.sin(c.t * 3) * 0.6;
  }
}

// Spieler im Boot sitzen (oder stehen am Steuerrad)
export function poseSailor(p) {
  if (p.boat == null) return;
  const b = boats[p.boat];
  if (b && BOAT_TYPES[b.type].sit) {
    p.h.legs[0].rotation.x = p.h.legs[1].rotation.x = -1.3;
    p.h.body.position.y = 0;
  }
}

const tmp = new THREE.Vector3();
export function sailorCamera(p, camPos, camLook) {
  if (p.boat == null) return false;
  const b = boats[p.boat];
  if (!b) return false;
  const T = BOAT_TYPES[b.type];
  const fx = Math.sin(b.yaw), fz = Math.cos(b.yaw);
  camPos.set(b.x - fx * T.cam, T.cam * 0.5 + 1, b.z - fz * T.cam);
  camLook.copy(tmp.set(b.x + fx * 6, 0.8, b.z + fz * 6));
  return true;
}

// Für Hinweise: steht jemand vor einem Boot?
export const boatNear = (pos, extra = 2.6) => boats.find((b) => b.built && b.rider < 0 && Math.hypot(b.x - pos.x, b.z - pos.z) - BOAT_TYPES[b.type].r < extra);
export const boatOf = (p) => (p.boat == null ? null : boats[p.boat]);

// ---------- Karte ----------
export const boatMapMarks = () => [
  ...boats.filter((b) => b.built).map((b) => ({ x: b.x, z: b.z, icon: BOAT_TYPES[b.type].icon })),
  ...chests.filter((c) => !c.open).map((c) => ({ x: c.i.x, z: c.i.z, icon: '🎁' })),
];

// ---------- Speichern und Netzwerk ----------
export const islandKey = () => chests.map((c) => (c.open ? 1 : 0)).join('');
export function applyIslandKey(k) {
  if (typeof k !== 'string') return;
  chests.forEach((c, n) => (c.open = k[n] === '1'));
}
export const islandsLooted = () => chests.filter((c) => c.open).length;
const r2 = (v) => Math.round(v * 100) / 100;
export const boatSnapshot = () => boats.map((b) => [b.built ? 1 : 0, b.rider, r2(b.x), r2(b.z), r2(b.yaw), r2(b.v)]);
export function applyBoatSnapshot(rows, players) {
  if (!rows) return;
  for (const p of players) p.boat = null;
  rows.forEach(([on, rider, x, z, yaw, v], k) => {
    const b = boats[k];
    if (!b) return;
    if (!b.built && on) { b.x = x; b.z = z; b.yaw = yaw; }
    b.built = !!on;
    b.rider = rider;
    b.tx = x; b.tz = z; b.tyaw = yaw; b.v = v;
    if (rider >= 0 && players[rider]) players[rider].boat = k;
  });
}

export function resetBoats(players) {
  for (const p of players) p.boat = null;
  for (const b of boats) { b.rider = -1; boatBuilt(b.type, false); }
  for (const c of chests) c.open = false;
}

export const boatDebug = { boats, chests, isWater, boatBlock };

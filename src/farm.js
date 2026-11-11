// Bauernhof: Getreidefeld zum Mähen, Futtertrog im Stall und die Bäckerei (Mühle + Backofen).
// Hier stehen nur die Modelle und der Zustand vom Feld. Was beim Spielen passiert, steht in main.js.
import * as THREE from '../lib/three.module.js';
import { mergeGeometries } from '../lib/BufferGeometryUtils.js';
import { std, mesh } from './util.js';
import { FIELD, BAKERY } from './map.js';

export const WHEAT_GROW = 45;      // Sekunden, bis abgemähtes Getreide wieder reif ist
export const TROUGH = { x: 24, z: 66 };
export const TROUGH_PAD = { x: 24, z: 69.2 };
export const TROUGH_MAX = 20;

// ---------- Getreidefeld ----------
// Jede Pflanze ist ein Büschel Halme mit Ähren. Drei Farben: grün (wächst), gelbgrün (fast reif), gold (reif).
const stalkGeo = (() => {
  const parts = [];
  for (let k = 0; k < 14; k++) {
    const a = k * 2.4, r = k ? 0.15 + (k % 4) * 0.12 : 0;
    const x = Math.sin(a) * r, z = Math.cos(a) * r, h = 0.95 + ((k * 37) % 5) * 0.07;
    parts.push(new THREE.CylinderGeometry(0.025, 0.035, h, 4).translate(x, h / 2, z));
    parts.push(new THREE.CylinderGeometry(0.06, 0.04, 0.3, 5).translate(x, h + 0.12, z));   // Ähre
  }
  return mergeGeometries(parts);
})();
const WHEAT_MATS = [std(0x6fae3d), std(0xb5c24a), std(0xe0b84a, { roughness: 0.7 })];

export const plants = [];

export function buildFarm(scene) {
  // Ackerboden mit Furchen
  const w = FIELD.x2 - FIELD.x1, d = FIELD.z2 - FIELD.z1;
  const soil = mesh(new THREE.PlaneGeometry(w + 1, d + 1), std(0x6b4a2e), (FIELD.x1 + FIELD.x2) / 2, 0.025, (FIELD.z1 + FIELD.z2) / 2);
  soil.rotation.x = -Math.PI / 2;
  soil.castShadow = false;
  scene.add(soil);
  for (let x = FIELD.x1 + 1; x < FIELD.x2; x += 2) {
    const row = mesh(new THREE.BoxGeometry(0.5, 0.08, d), std(0x5a3c24), x, 0.05, (FIELD.z1 + FIELD.z2) / 2);
    row.castShadow = false;
    scene.add(row);
  }
  // Zaun mit Schild an der Stallseite
  const wood = std(0x8a6a44);
  const label = signLabel('🌾 Getreidefeld');
  label.position.set(FIELD.x1 - 0.8, 2.4, FIELD.z1 + 1.5);
  label.rotation.y = -Math.PI / 2;
  scene.add(label, mesh(new THREE.BoxGeometry(0.15, 2.2, 0.15), wood, FIELD.x1 - 0.8, 1.1, FIELD.z1 + 1.5));
  // Pflanzen in Reihen
  for (let x = FIELD.x1 + 1; x < FIELD.x2; x += 2) {
    for (let z = FIELD.z1 + 1; z < FIELD.z2; z += 1.6) {
      const m = new THREE.Mesh(stalkGeo, WHEAT_MATS[2]);
      m.position.set(x, 0, z);
      m.rotation.y = (x * 7 + z * 3) % 6.28;
      scene.add(m);
      plants.push({ x, z, m, grow: 1, stage: -1 });
    }
  }
  plants.forEach(showPlant);
}

export function showPlant(pl) {
  const stage = pl.grow >= 1 ? 2 : pl.grow >= 0.6 ? 1 : 0;
  pl.m.scale.set(1, 0.2 + 0.8 * Math.min(1, pl.grow), 1);
  if (stage !== pl.stage) { pl.stage = stage; pl.m.material = WHEAT_MATS[stage]; }
}

export function growField(dt) {
  for (const pl of plants) {
    if (pl.grow >= 1) continue;
    pl.grow = Math.min(1, pl.grow + dt / WHEAT_GROW);
    showPlant(pl);
  }
}

export const ripeNear = (x, z, r) => plants.filter((pl) => pl.grow >= 1 && Math.hypot(pl.x - x, pl.z - z) < r);
export const inField = (x, z, m = 0) => x > FIELD.x1 - m && x < FIELD.x2 + m && z > FIELD.z1 - m && z < FIELD.z2 + m;

// Für Netzwerk und Spielstand: Wachstum in Zehnteln
export const fieldKey = () => plants.map((pl) => Math.round(pl.grow * 10));
export function applyFieldKey(arr) {
  if (!Array.isArray(arr)) return;
  plants.forEach((pl, i) => {
    const v = Number(arr[i]);
    if (!isFinite(v)) return;
    const g = Math.max(0, Math.min(10, v)) / 10;
    if (Math.abs(g - pl.grow) > 0.12 || (g >= 1) !== (pl.grow >= 1)) { pl.grow = g; showPlant(pl); }
  });
}
export function resetField() { plants.forEach((pl) => { pl.grow = 1; showPlant(pl); }); }

// ---------- Futtertrog: Getreide sieht man im Trog liegen ----------
let troughFill = null;
export function makeTroughFill(scene) {
  troughFill = mesh(new THREE.BoxGeometry(2.7, 0.3, 0.55), std(0xe0b84a), TROUGH.x, 0.4, TROUGH.z);
  troughFill.castShadow = false;
  scene.add(troughFill);
}
export function showTrough(n) {
  if (!troughFill) return;
  troughFill.visible = n > 0;
  troughFill.scale.y = 0.3 + 0.7 * Math.min(1, n / TROUGH_MAX);
  troughFill.position.y = 0.3 + 0.15 * troughFill.scale.y;
}

// ---------- Bäckerei: Windmühle zum Mehlmahlen und ein Backofen ----------
export function makeBakeryModel() {
  const g = new THREE.Group();
  const wall = std(0xe8dcc0), roof = std(0x8d2b2b), wood = std(0x8a6a44), stone = std(0x9e9a90);
  g.add(mesh(new THREE.BoxGeometry(5, 3, 4), wall, 0, 1.5, 0));
  const r = mesh(new THREE.ConeGeometry(3.7, 1.8, 4), roof, 0, 3.9, 0);
  r.rotation.y = Math.PI / 4;
  r.scale.set(1, 1, 0.82);
  g.add(r);
  g.add(mesh(new THREE.BoxGeometry(1.2, 2, 0.1), wood, 0, 1, -2.02));                 // Tür (zur Straße)
  g.add(mesh(new THREE.BoxGeometry(0.6, 1.6, 0.6), stone, 1.6, 4.2, 0.8));           // Schornstein
  // Backofen vorne an der Seite
  const oven = mesh(new THREE.SphereGeometry(1.1, 14, 10, 0, Math.PI * 2, 0, Math.PI / 2), stone, -3.4, 0, -0.6);
  g.add(oven, mesh(new THREE.CircleGeometry(0.45, 12, 0, Math.PI), std(0x2a1a10), -3.4, 0.02, -1.67));
  g.add(mesh(new THREE.SphereGeometry(0.3, 10, 8), new THREE.MeshStandardMaterial({ color: 0xff8a3d, emissive: 0xff5a1a, emissiveIntensity: 1.2 }), -3.4, 0.25, -1.45));
  // Windmühlenflügel am Giebel
  const sails = new THREE.Group();
  sails.position.set(0, 3.4, 2.15);
  for (let k = 0; k < 4; k++) {
    const arm = new THREE.Group();
    arm.rotation.z = (k * Math.PI) / 2;
    arm.add(mesh(new THREE.BoxGeometry(0.12, 2.6, 0.08), wood, 0, 1.3, 0));
    arm.add(mesh(new THREE.BoxGeometry(0.7, 1.9, 0.04), std(0xf5f0e0), 0.4, 1.55, 0));
    sails.add(arm);
  }
  sails.add(mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.3, 10).rotateX(Math.PI / 2), wood));
  g.add(sails);
  g.userData.sails = sails;
  const sign = signLabel('🍞 Bäckerei');
  sign.position.set(0, 2.6, -2.06);
  sign.rotation.y = Math.PI;
  sign.scale.setScalar(0.7);
  g.add(sign);
  g.position.set(BAKERY.x, 0, BAKERY.z);
  return g;
}
// Brot kommt vorne an der Tür heraus
export const BREAD_SPOT = { x: BAKERY.x, z: BAKERY.z - 3.4 };

function signLabel(text) {
  const cv = document.createElement('canvas');
  cv.width = 512; cv.height = 128;
  const ctx = cv.getContext('2d');
  ctx.fillStyle = '#5d4037';
  ctx.fillRect(4, 4, 504, 120);
  ctx.font = 'bold 60px system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillStyle = '#ffe082';
  ctx.fillText(text, 256, 86);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  return new THREE.Mesh(new THREE.PlaneGeometry(3.2, 0.8), new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide }));
}

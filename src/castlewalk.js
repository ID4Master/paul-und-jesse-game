import * as THREE from 'three';
import { std, mesh, blocked, boxes } from './util.js';
import { brickTex } from './textures.js';

// ================= Wehrgang, Treppe und Festturm zum Hochlaufen =================
// Begehbare Flächen über dem Boden. Wer oben ist, bleibt auf den Flächen (man fällt nicht herunter)
// und kommt nur über Treppen wieder nach unten.

export const WALK_H = 4.2;          // Höhe des Wehrgangs (die Mauer ist 5 hoch, also eine Brüstung)
const STEP = 0.75;                  // so viel geht es pro Schritt höchstens hoch oder runter
const R = 0.5;                      // Spieler-Radius
const IN = 0.45;                    // Abstand der Laufkante zur sichtbaren Kante

// Festturm (wird in der Werkstatt gebaut): Lage relativ zur Burgmitte
export const TOWER_REL = { x: 3.8, z: 5.8 };
export const TOWER_TOP = 12;
const TOWER_R = 1.3;
const SPIRAL = { r1: 1.8, r2: 2.3, phi0: Math.PI / 2, span: Math.PI * 3.5, rise: TOWER_TOP - WALK_H };
const TOP_GAP = 1.1;                // Öffnung im Turmdach, wo die Wendeltreppe ankommt (Bogenmaß)

const surfaces = [];                // { type: 'rect' | 'ramp' | 'spiral' | 'disc', ..., on?: () => bool }
const tall = [];                    // hohe runde Hindernisse auch oben: { x, z, r, top, on? }
let towerOn = false;
const tower = { x: 0, z: 0 };

const on = (s) => !s.on || s.on();

function surfaceHeight(s, x, z, y) {
  if (s.type === 'rect') {
    return x >= s.x1 && x <= s.x2 && z >= s.z1 && z <= s.z2 ? s.h : null;
  }
  if (s.type === 'ramp') {   // steigt in z-Richtung von h0 (bei z1) auf h1 (bei z2)
    if (x < s.x1 || x > s.x2 || z < s.z1 || z > s.z2) return null;
    const t = (z - s.z1) / (s.z2 - s.z1);
    return Math.max(0, Math.min(s.h1, s.h0 + (s.h1 - s.h0) * t + s.lift));
  }
  const dx = x - s.x, dz = z - s.z, r = Math.hypot(dx, dz);
  if (s.type === 'disc') {
    if (r > s.r) return null;
    if (r > s.gapR) {   // in der Öffnung ist kein Dach, da kommt die Treppe hoch
      const d = Math.atan2(Math.sin(Math.atan2(dz, dx) - s.gapAt), Math.cos(Math.atan2(dz, dx) - s.gapAt));
      if (d > -s.gap && d < 0.05) return null;
    }
    return s.h;
  }
  if (s.type === 'spiral') {
    if (r < s.r1 || r > s.r2) return null;
    let phi = Math.atan2(dz, dx) - s.phi0;
    phi = ((phi % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
    // Eine Wendeltreppe hat an derselben Stelle mehrere Stockwerke: das nächste zur jetzigen Höhe nehmen
    let best = null;
    for (let a = phi; a <= s.span + 1e-6; a += Math.PI * 2) {
      const h = s.h0 + s.rise * (a / s.span);
      if (best === null || Math.abs(h - y) < Math.abs(best - y)) best = h;
    }
    return best;
  }
  return null;
}

function tallBlocked(x, z, h) {
  for (const c of tall) {
    if (!on(c) || c.top <= h + 0.3) continue;
    const dx = x - c.x, dz = z - c.z;
    if (dx * dx + dz * dz < (c.r + R) ** 2) return true;
  }
  return false;
}

// Höchste Fläche, die man von Höhe y aus erreicht (oder null, wenn man dort nicht stehen kann)
export function floorAt(x, z, y) {
  let best = null;
  if (y <= STEP && !blocked(x, z, R)) best = 0;
  for (const s of surfaces) {
    if (!on(s)) continue;
    const h = surfaceHeight(s, x, z, y);
    if (h === null || Math.abs(h - y) > STEP || (best !== null && h <= best)) continue;
    if (!tallBlocked(x, z, h)) best = h;
  }
  return best;
}

// Wie move() aus util.js, aber mit Treppen, Wehrgang und Turm
export function moveClimb(obj, dx, dz) {
  const p = obj.position;
  let moved = false;
  let h = floorAt(p.x + dx, p.z, p.y);
  if (h !== null) { p.x += dx; p.y = h; moved = true; }
  h = floorAt(p.x, p.z + dz, p.y);
  if (h !== null) { p.z += dz; p.y = h; moved = true; }
  return moved;
}

// Für die Kamera: steht hier etwas Hohes, das über Höhe y hinausragt?
export function solidAbove(x, z, y) {
  for (const c of tall) {
    if (!on(c) || c.top <= y) continue;
    const dx = x - c.x, dz = z - c.z;
    if (dx * dx + dz * dz < c.r * c.r) return true;
  }
  return false;
}

export function setTowerClimb(v) { towerOn = v; }

// Für die Kamera unten im Burghof: liegt hier über dem Kopf ein Bretterboden?
const decks = [];
export function underDeck(x, z) {
  for (const d of decks) if (x > d.x1 - 0.3 && x < d.x2 + 0.3 && z > d.z1 - 0.3 && z < d.z2 + 0.3) return true;
  return false;
}

// ---------- Aussehen ----------
const wood = std(0x8a5a33, { roughness: 0.85 });
const darkWood = std(0x5d3a1f, { roughness: 0.9 });
const stairStone = std(0xbdb6a6, { roughness: 0.95, map: brickTex });

function deck(scene, x1, x2, z1, z2, h = WALK_H) {
  scene.add(mesh(new THREE.BoxGeometry(x2 - x1, 0.3, z2 - z1), wood, (x1 + x2) / 2, h - 0.15, (z1 + z2) / 2));
  surfaces.push({ type: 'rect', x1: x1 + IN, x2: x2 - IN, z1: z1 + IN, z2: z2 - IN, h });
  decks.push({ x1, x2, z1, z2 });
}

// Geländer entlang einer Linie (Pfosten und Handlauf), damit man sieht: hier geht es nicht weiter
function railing(scene, x1, z1, x2, z2, h = WALK_H) {
  const len = Math.hypot(x2 - x1, z2 - z1);
  const n = Math.max(1, Math.round(len / 1.6));
  for (let k = 0; k <= n; k++) {
    const t = k / n;
    scene.add(mesh(new THREE.BoxGeometry(0.14, 1, 0.14), darkWood, x1 + (x2 - x1) * t, h + 0.5, z1 + (z2 - z1) * t));
  }
  const rail = mesh(new THREE.BoxGeometry(len, 0.1, 0.1), darkWood, (x1 + x2) / 2, h + 1, (z1 + z2) / 2);
  rail.rotation.y = -Math.atan2(z2 - z1, x2 - x1);
  scene.add(rail);
}

// Stützbalken unter dem Wehrgang
function posts(scene, x1, z1, x2, z2) {
  const len = Math.hypot(x2 - x1, z2 - z1);
  const n = Math.max(1, Math.round(len / 3.2));
  for (let k = 0; k <= n; k++) {
    const t = k / n;
    scene.add(mesh(new THREE.BoxGeometry(0.3, WALK_H - 0.3, 0.3), darkWood, x1 + (x2 - x1) * t, (WALK_H - 0.3) / 2, z1 + (z2 - z1) * t));
  }
}

// Wird von world.js beim Bau eurer Burg aufgerufen (Burgmitte cx, cz; Mauern bei ±10, innen ±9.5)
export function addWallWalk(scene, cx, cz) {
  const o = 9.5, i = 7.1;   // Außen- und Innenkante des Wehrgangs
  // Vier Bretterböden innen an den Mauern, auch über dem Tor
  deck(scene, cx - o, cx - i, cz - o, cz + o);   // links
  deck(scene, cx + i, cx + o, cz - o, cz + o);   // rechts
  deck(scene, cx - o, cx + o, cz - o, cz - i);   // vorne (über dem Tor)
  deck(scene, cx - o, cx + o, cz + i, cz + o);   // hinten
  // Ecktürme stehen im Weg: man läuft innen um sie herum
  for (const [tx, tz] of [[-10, -10], [10, -10], [-10, 10], [10, 10]]) tall.push({ x: cx + tx, z: cz + tz, r: 2, top: 8 });

  // Über dem Tor gibt es keine Mauer, also ein Geländer nach außen
  railing(scene, cx - 3, cz - 9.6, cx + 3, cz - 9.6);
  // Innen ein Geländer, außer an der Treppe (rechts vorne) und an der Turmtreppe (hinten)
  railing(scene, cx - i, cz - i, cx + i, cz - i);
  railing(scene, cx - i, cz - i, cx - i, cz + i);
  railing(scene, cx - i, cz + i, cx + TOWER_REL.x - 2.7, cz + i);
  railing(scene, cx + TOWER_REL.x + 1.4, cz + i, cx + i, cz + i);
  railing(scene, cx + i, cz - i, cx + i, cz + 1.8);
  railing(scene, cx + i, cz + 4.4, cx + i, cz + i);
  posts(scene, cx - i, cz - i, cx + i, cz - i);
  posts(scene, cx - i, cz - i + 3, cx - i, cz + i);
  posts(scene, cx + i, cz - i + 3, cx + i, cz + i - 3);
  posts(scene, cx - i + 3, cz + i, cx + i, cz + i);

  // Steintreppe innen an der rechten Mauer: von vorne nach hinten hoch zum Wehrgang
  const sx1 = cx + 4.9, sx2 = cx + i, z0 = cz - 6, z1 = cz + 2, n = 14, d = (z1 - z0) / n;
  for (let k = 1; k <= n; k++) {
    const h = (WALK_H * k) / n;
    scene.add(mesh(new THREE.BoxGeometry(sx2 - sx1, h, d), stairStone, (sx1 + sx2) / 2, h / 2, z0 + (k - 0.5) * d));
  }
  // Treppenabsatz oben, geht seitlich in den Wehrgang über
  scene.add(mesh(new THREE.BoxGeometry(sx2 - sx1, WALK_H, 2.2), stairStone, (sx1 + sx2) / 2, WALK_H / 2, z1 + 1.1));
  surfaces.push({ type: 'ramp', x1: sx1 + IN, x2: sx2 - IN, z1: z0, z2: z1 + 0.2, h0: 0, h1: WALK_H, lift: (WALK_H / n) * 0.5 });
  surfaces.push({ type: 'rect', x1: sx1 + IN, x2: cx + o - IN, z1: z1, z2: z1 + 2.2 - IN, h: WALK_H });
  // Unten ist die Treppe fest (dort, wo sie schon höher als ein Schritt ist)
  boxes.push({ x1: sx1, x2: sx2, z1: z0 + 1.6, z2: z1 + 2.2 });

  // Festturm mit Wendeltreppe außen herum: beginnt am hinteren Wehrgang, oben eine Plattform mit Zinnen
  tower.x = cx + TOWER_REL.x;
  tower.z = cz + TOWER_REL.z;
  const isOn = () => towerOn;
  tall.push({ x: tower.x, z: tower.z, r: TOWER_R, top: TOWER_TOP, on: isOn });
  surfaces.push({ type: 'spiral', x: tower.x, z: tower.z, r1: SPIRAL.r1, r2: SPIRAL.r2, phi0: SPIRAL.phi0, span: SPIRAL.span,
                  h0: WALK_H, rise: SPIRAL.rise, on: isOn });
  surfaces.push({ type: 'disc', x: tower.x, z: tower.z, r: 2.25, h: TOWER_TOP, gapR: 1.75,
                  gapAt: SPIRAL.phi0 + SPIRAL.span, gap: TOP_GAP, on: isOn });
}

// Modell des Festturms (Ursprung = Turmmitte am Boden); wird in main.js beim Bauen aufgestellt
export function makeTowerModel() {
  const stoneM = stairStone;
  const g = new THREE.Group();
  g.add(mesh(new THREE.CylinderGeometry(TOWER_R, TOWER_R + 0.15, TOWER_TOP, 18), stoneM, 0, TOWER_TOP / 2, 0));
  // Plattform oben, mit einer Lücke, wo die Treppe ankommt
  const endPhi = SPIRAL.phi0 + SPIRAL.span;
  // three.js misst Winkel von +z Richtung +x, wir von +x Richtung +z
  const toTheta = (phi) => Math.PI / 2 - phi;
  const thetaStart = toTheta(endPhi - TOP_GAP);
  g.add(mesh(new THREE.CylinderGeometry(2.7, 2.5, 0.4, 28, 1, false, thetaStart, Math.PI * 2 - TOP_GAP - 0.05), stoneM, 0, TOWER_TOP - 0.2, 0));
  g.add(mesh(new THREE.CylinderGeometry(1.5, 1.5, 0.4, 18), stoneM, 0, TOWER_TOP - 0.2, 0));
  const gold = std(0xd4af37, { metalness: 0.6, roughness: 0.3 });
  for (let k = 0; k < 14; k++) {   // Zinnen, nicht in der Lücke
    const phi = endPhi + 0.25 + (k / 14) * (Math.PI * 2 - TOP_GAP - 0.4);
    g.add(mesh(new THREE.BoxGeometry(0.5, 0.7, 0.5), stoneM, Math.cos(phi) * 2.5, TOWER_TOP + 0.35, Math.sin(phi) * 2.5));
  }
  // Wendeltreppe: Stufen ragen aus der Turmwand
  const steps = 30;
  for (let k = 1; k <= steps; k++) {
    const t = k / steps, phi = SPIRAL.phi0 + SPIRAL.span * (t - 0.5 / steps), h = WALK_H + SPIRAL.rise * t;
    const rc = (TOWER_R + 2.6) / 2;
    const st = mesh(new THREE.BoxGeometry(2.6 - TOWER_R, 0.25, 1.0), stoneM, Math.cos(phi) * rc, h - 0.125, Math.sin(phi) * rc);
    st.rotation.y = -phi;
    g.add(st);
    // Handlauf außen
    if (k % 2 === 0) g.add(mesh(new THREE.BoxGeometry(0.1, 1, 0.1), darkWood, Math.cos(phi) * 2.55, h + 0.5, Math.sin(phi) * 2.55));
  }
  // Goldene Fahne am Rand gegenüber der Treppe, damit in der Mitte Platz zum Stehen ist
  const fx = Math.cos(endPhi + Math.PI) * 2.2, fz = Math.sin(endPhi + Math.PI) * 2.2;
  g.add(mesh(new THREE.CylinderGeometry(0.06, 0.06, 3.5), gold, fx, TOWER_TOP + 1.75, fz));
  g.add(mesh(new THREE.PlaneGeometry(1.8, 1.1), new THREE.MeshStandardMaterial({ color: 0xffd54f, emissive: 0xffb300, emissiveIntensity: 0.6, side: THREE.DoubleSide }), fx + 0.9, TOWER_TOP + 3, fz));
  return g;
}

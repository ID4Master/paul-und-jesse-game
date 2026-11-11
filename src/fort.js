// Eigene Festung: jeder Spieler stellt sie auf, wo er will, baut sie aus und kann sie zum Umziehen wieder einpacken.
// Hier stehen nur das Modell und die Hindernisse. Was beim Spielen passiert, steht in main.js.
import * as THREE from '../lib/three.module.js';
import { mergeGeometries } from '../lib/BufferGeometryUtils.js';
import { std, mesh } from './util.js';

// Viele gleiche Teile (Pfähle, Zinnen) als ein einziges Modell: viel schneller
function merged(g, geos, mat) {
  if (!geos.length) return;
  const m = mesh(mergeGeometries(geos), mat);
  g.add(m);
}

export const FORT_HALF = 6;     // halbe Kantenlänge (immer gleich, damit Ausbauen nie gegen etwas stößt)
export const FORT_GATE = 3.2;   // Breite vom Tor
export const FORT_MAX = 3;
export const FORT_LEVELS = [
  null,
  { name: 'Holzfestung' },
  { name: 'Steinfestung', cost: { gold: 4, stone: 6, wood: 4 } },
  { name: 'Ritterburg', cost: { gold: 8, stone: 10, wood: 6, star: 2 } },
];
export const FORT_COLORS = [0x1e63d6, 0xef6c00];

// Drehung in Vierteln: lokales (x, z) -> Welt. Das Tor liegt lokal bei +z.
export const rot = (q, x, z) => [[x, z], [z, -x], [-x, -z], [-z, x]][q & 3];

// Wände als Rechtecke in lokalen Koordinaten [x1, z1, x2, z2] (mit Toröffnung vorne)
function wallRects(t) {
  const H = FORT_HALF, g = FORT_GATE / 2;
  return [
    [-H, -H, H, -H + t],              // hinten
    [-H, -H, -H + t, H],              // links
    [H - t, -H, H, H],                // rechts
    [-H, H - t, -g, H],               // vorne links
    [g, H - t, H, H],                 // vorne rechts
  ];
}

// Welt-Rechtecke für die Hindernisse
export function fortBoxes(f) {
  const t = f.level >= 2 ? 0.9 : 0.5;
  return wallRects(t).map(([x1, z1, x2, z2]) => {
    const [ax, az] = rot(f.q, x1, z1), [bx, bz] = rot(f.q, x2, z2);
    return { x1: f.x + Math.min(ax, bx), x2: f.x + Math.max(ax, bx), z1: f.z + Math.min(az, bz), z2: f.z + Math.max(az, bz) };
  });
}

// Liegt ein Punkt innen in der Festung?
export function inFort(f, x, z, m = 0) {
  return !f.packed && Math.abs(x - f.x) < FORT_HALF - m && Math.abs(z - f.z) < FORT_HALF - m;
}

const woodM = std(0x8a6a44), darkWood = std(0x6b4a30), stoneM = std(0xa39e93), stoneDark = std(0x8f897d), roofM = std(0x8d2b2b);

function tower(g, x, z, r, h, color) {
  g.add(mesh(new THREE.CylinderGeometry(r, r * 1.08, h, 12), stoneM, x, h / 2, z));
  const parts = [];
  for (let k = 0; k < 8; k++) {
    const a = (k / 8) * Math.PI * 2;
    parts.push(new THREE.BoxGeometry(0.45, 0.5, 0.45).translate(x + Math.sin(a) * (r - 0.15), h + 0.25, z + Math.cos(a) * (r - 0.15)));
  }
  merged(g, parts, stoneM);
  g.add(mesh(new THREE.ConeGeometry(r * 1.15, r * 1.6, 12), std(color), x, h + 0.5 + r * 0.8, z));
}

// Das Modell in lokalen Koordinaten; das Tor zeigt nach +z
export function makeFortModel(level, color) {
  const g = new THREE.Group();
  const H = FORT_HALF;
  if (level === 1) {
    // Palisade aus Pfählen
    const posts = [], tips = [];
    for (const [x1, z1, x2, z2] of wallRects(0.5)) {
      const len = Math.max(x2 - x1, z2 - z1), along = x2 - x1 > z2 - z1;
      for (let d = 0.2; d <= len - 0.1; d += 0.42) {
        const x = along ? x1 + d : (x1 + x2) / 2, z = along ? (z1 + z2) / 2 : z1 + d;
        posts.push(new THREE.CylinderGeometry(0.2, 0.22, 2.4, 6).translate(x, 1.2, z));
        tips.push(new THREE.ConeGeometry(0.22, 0.4, 6).translate(x, 2.6, z));
      }
    }
    merged(g, posts, woodM);
    merged(g, tips, darkWood);
    // Zelt in der Mitte hinten
    const tent = mesh(new THREE.ConeGeometry(2, 2.6, 4), std(color), 0, 1.3, -H + 2.8);
    tent.rotation.y = Math.PI / 4;
    g.add(tent);
  } else {
    const h = level === 2 ? 3 : 3.8;
    const crens = [];
    for (const [x1, z1, x2, z2] of wallRects(0.9)) {
      const w = x2 - x1, d = z2 - z1;
      g.add(mesh(new THREE.BoxGeometry(w, h, d), stoneM, (x1 + x2) / 2, h / 2, (z1 + z2) / 2));
      const along = w > d, len = along ? w : d;
      for (let k = 0.4; k < len - 0.2; k += 1.1) {
        crens.push(new THREE.BoxGeometry(along ? 0.55 : d, 0.55, along ? d : 0.55).translate(
          along ? x1 + k : (x1 + x2) / 2, h + 0.27, along ? (z1 + z2) / 2 : z1 + k));
      }
    }
    merged(g, crens, stoneDark);
    // Torbogen
    g.add(mesh(new THREE.BoxGeometry(FORT_GATE + 0.4, 0.8, 1), stoneDark, 0, h - 0.4 + 0.6, H - 0.45));
    if (level === 2) tower(g, -H + 0.9, -H + 0.9, 1.4, h + 2.2, color);
    else for (const [x, z] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) tower(g, x * (H - 0.9), z * (H - 0.9), 1.5, h + 3, color);
    // kleines Haus innen
    g.add(mesh(new THREE.BoxGeometry(3.4, 2.4, 2.6), std(0xe8dcc0), 2.2, 1.2, -H + 2.4));
    const roof = mesh(new THREE.ConeGeometry(2.6, 1.6, 4), roofM, 2.2, 3.2, -H + 2.4);
    roof.rotation.y = Math.PI / 4;
    g.add(roof);
  }
  // Fahne in der Spielerfarbe
  const poleH = level === 1 ? 4.5 : level === 2 ? 7.5 : 9;
  const px = level === 1 ? -3.2 : -1.5, pz = level === 1 ? -H + 2 : -1.5;
  g.add(mesh(new THREE.CylinderGeometry(0.06, 0.06, poleH, 6), darkWood, px, poleH / 2, pz));
  const flag = mesh(new THREE.BoxGeometry(1.4, 0.9, 0.04), new THREE.MeshStandardMaterial({ color, side: THREE.DoubleSide, emissive: color, emissiveIntensity: 0.15 }), px + 0.75, poleH - 0.5, pz);
  g.add(flag);
  g.userData.flag = flag;
  return g;
}

// Kleines Bündel, das man trägt, wenn die Festung eingepackt ist
export function makeFortBundle(color) {
  const g = new THREE.Group();
  g.add(mesh(new THREE.BoxGeometry(0.7, 0.5, 0.45), std(color), 0, 0, 0));
  g.add(mesh(new THREE.BoxGeometry(0.75, 0.08, 0.5), std(0x6b4a30), 0, 0.12, 0));
  g.add(mesh(new THREE.BoxGeometry(0.75, 0.08, 0.5), std(0x6b4a30), 0, -0.12, 0));
  return g;
}

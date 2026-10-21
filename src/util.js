import * as THREE from 'three';

export const WORLD = 150;

// Zufall mit festem Startwert, damit die Welt immer gleich aussieht
let seed = 42;
export const rand = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
export const noise3 = (x, y, z) => {
  const s = Math.sin(x * 12.9898 + y * 78.233 + z * 37.719) * 43758.5453;
  return s - Math.floor(s);
};

export const std = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.9, metalness: 0, ...extra });
export const metal = (color) => new THREE.MeshStandardMaterial({ color, roughness: 0.35, metalness: 0.8 });

export function mesh(geo, material, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(geo, material);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

// Kleinster Winkel von b nach a (zwischen -PI und PI)
export const angleDiff = (a, b) => {
  const d = (a - b) % (Math.PI * 2);
  return d > Math.PI ? d - Math.PI * 2 : d < -Math.PI ? d + Math.PI * 2 : d;
};

// ---------- Hindernisse ----------
export const circles = [];
export const boxes = [];

export function blocked(x, z, r) {
  if (Math.abs(x) > WORLD - 2 || Math.abs(z) > WORLD - 2) return true;
  for (const c of circles) {
    const dx = x - c.x, dz = z - c.z;
    if (dx * dx + dz * dz < (c.r + r) ** 2) return true;
  }
  for (const b of boxes) {
    if (x + r > b.x1 && x - r < b.x2 && z + r > b.z1 && z - r < b.z2) return true;
  }
  return false;
}

// Nur große feste Dinge (Mauern, Häuser, Türme, Berge), nicht Bäume.
// Wichtig für Kamera und Pfeile.
export function solidAt(x, z) {
  if (Math.abs(x) > WORLD || Math.abs(z) > WORLD) return true;
  for (const b of boxes) {
    if (x > b.x1 && x < b.x2 && z > b.z1 && z < b.z2) return true;
  }
  for (const c of circles) {
    if (c.r < 1.5) continue;
    const dx = x - c.x, dz = z - c.z;
    if (dx * dx + dz * dz < c.r * c.r) return true;
  }
  return false;
}

export function move(obj, dx, dz, r) {
  const p = obj.position;
  let moved = false;
  if (!blocked(p.x + dx, p.z, r)) { p.x += dx; moved = true; }
  if (!blocked(p.x, p.z + dz, r)) { p.z += dz; moved = true; }
  return moved;
}

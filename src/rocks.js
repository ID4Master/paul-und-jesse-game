import * as THREE from '../lib/three.module.js';
import { std, circles, blockers } from './util.js';
import { TREES, ROCKS, setTreeVisible } from './world.js';

// ================= Berge aus Felsblöcken =================
// Jeder Berg besteht aus vielen Felssäulen (je 2 × 2 Meter). Jede Säule hat unten einen Block,
// den man mit der Spitzhacke weghauen kann, und darüber den Rest des Berges.
// Haut man unten einen Block weg, bleibt der Berg darüber stehen: So entstehen richtige Höhlen mit Decke.

export const CELL = 2;          // Größe eines Felsblocks
export const LOW = 2.6;         // so hoch ist der Block, den man weghauen kann (darüber ist die Höhlendecke)
const STEP = 1.6;               // die Berge sind in Stufen gebaut

// Eigener Zufall, damit Host und Mitspieler genau gleiche Berge haben
function seeded(seed) {
  let s = seed;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

// Ein Kasten mit leicht verbeulten Ecken, damit es nach Fels aussieht und nicht nach Klötzchen
function lumpyBox(w, h, d, seg, amount, rnd, topOnly = false) {
  const g = new THREE.BoxGeometry(w, h, d, seg, seg, seg);
  const p = g.attributes.position;
  const key = (x, y, z) => `${x.toFixed(3)},${y.toFixed(3)},${z.toFixed(3)}`;
  const moved = new Map();
  for (let k = 0; k < p.count; k++) {
    const x = p.getX(k), y = p.getY(k), z = p.getZ(k);
    const id = key(x, y, z);
    if (!moved.has(id)) {
      const edgeX = Math.abs(Math.abs(x) - w / 2) < 1e-3, edgeZ = Math.abs(Math.abs(z) - d / 2) < 1e-3;
      const top = y > h / 2 - 1e-3, bottom = y < -h / 2 + 1e-3;
      let dx = 0, dy = 0, dz = 0;
      if (!bottom && (!topOnly || top)) {
        dx = edgeX ? (rnd() - 0.3) * amount * Math.sign(x) : (rnd() - 0.5) * amount * 0.5;
        dz = edgeZ ? (rnd() - 0.3) * amount * Math.sign(z) : (rnd() - 0.5) * amount * 0.5;
        dy = topOnly ? 0 : top ? (rnd() - 0.4) * amount * 0.4 : (rnd() - 0.5) * amount * 0.6;   // Säulen werden in der Höhe gestreckt: dort nicht verbeulen
      }
      moved.set(id, [dx, dy, dz]);
    }
    const [dx, dy, dz] = moved.get(id);
    p.setXYZ(k, x + dx, y + dy, z + dz);
  }
  g.computeVertexNormals();
  return g;
}

const ZERO = new THREE.Matrix4().makeScale(0, 0, 0);
const rockMat = std(0xffffff, { flatShading: true, roughness: 0.95 });
const snowMat = std(0xf4f6f8, { flatShading: true, roughness: 0.8 });
const crystalMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
const floorMat = std(0x6f6253, { roughness: 1 });
const GEMS = [0x40c4ff, 0xff4081, 0x69f0ae, 0xffd740, 0xb388ff];

export const MASSIFS = [];

export function buildMountain(scene, m, seed) {
  const rnd = seeded(seed);
  const n = Math.ceil((m.r * 1.12) / CELL);
  const W = 2 * n, K = 2 * n;
  const x0 = m.x - n * CELL, z0 = m.z - n * CELL;
  const ph = [rnd() * 6.28, rnd() * 6.28, rnd() * 6.28];
  const rAt = (a) => m.r * (0.96 + 0.07 * Math.sin(2 * a + ph[0]) + 0.05 * Math.sin(3 * a + ph[1]) + 0.03 * Math.sin(5 * a + ph[2]));
  m.radiusAt = rAt;
  const M = { m, x0, z0, W, K, grid: new Array(W * K).fill(null), cells: [], dug: 0 };

  for (let k = 0; k < K; k++) {
    for (let i = 0; i < W; i++) {
      const x = x0 + (i + 0.5) * CELL, z = z0 + (k + 0.5) * CELL;
      const dx = x - m.x, dz = z - m.z, d = Math.hypot(dx, dz), R = rAt(Math.atan2(dx, dz));
      if (d > R) continue;
      const t = 1 - d / R;   // 0 am Rand, 1 in der Mitte
      const H = Math.max(LOW + 0.7, Math.round((m.h * t ** 1.15 + (rnd() - 0.5) * 1.2) / STEP) * STEP);
      const cell = { i, k, x, z, t, H, solid: true, hits: 0, ore: false, idx: M.cells.length };
      M.cells.push(cell);
      M.grid[i + k * W] = cell;
    }
  }
  M.radius = Math.max(...M.cells.map((c) => Math.hypot(c.x - m.x, c.z - m.z))) + CELL * 0.75;

  // Erzadern: manche Blöcke haben bunte Kristalle, die geben Sternenstaub
  const pool = M.cells.filter((c) => c.t < 0.75);
  for (let s = 0; s < 9 && pool.length; s++) pool.splice(Math.floor(rnd() * pool.length), 1)[0].ore = true;

  // Bäume und Steine, die im Berg stehen würden, wegräumen
  for (const t of TREES) if (Math.hypot(t.x - m.x, t.z - m.z) < M.radius) { setTreeVisible(t, false); t.inRock = true; }
  for (const r of ROCKS) {
    if (Math.hypot(r.x - m.x, r.z - m.z) > M.radius) continue;
    r.im.setMatrixAt(r.i, ZERO);
    r.im.instanceMatrix.needsUpdate = true;
    if (r.circle && circles.includes(r.circle)) circles.splice(circles.indexOf(r.circle), 1);
  }

  // Aussehen: unterer Block, Berg darüber, Schnee oben, Kristalle
  const cnt = M.cells.length;
  M.low = new THREE.InstancedMesh(lumpyBox(CELL * 1.08, LOW, CELL * 1.08, 2, 0.2, rnd), rockMat, cnt);
  M.top = new THREE.InstancedMesh(lumpyBox(CELL * 1.1, 1, CELL * 1.1, 2, 0.3, rnd, true), rockMat, cnt);
  const snowy = M.cells.filter((c) => c.H > m.h * 0.6);
  M.snow = new THREE.InstancedMesh(lumpyBox(CELL * 1.14, 0.6, CELL * 1.14, 1, 0.15, rnd, true), snowMat, Math.max(1, snowy.length));
  const oreCells = M.cells.filter((c) => c.ore);
  M.crystals = new THREE.InstancedMesh(new THREE.OctahedronGeometry(0.22), crystalMat, Math.max(1, oreCells.length * 4));
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), pos = new THREE.Vector3(), sc = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
  const col = new THREE.Color();
  M.cells.forEach((c) => {
    q.setFromAxisAngle(up, Math.floor(rnd() * 4) * (Math.PI / 2));
    const topH = c.H - LOW;
    c.lowM = m4.compose(pos.set(c.x, LOW / 2, c.z), q, sc.set(1, 1, 1)).clone();
    M.low.setMatrixAt(c.idx, c.lowM);
    M.top.setMatrixAt(c.idx, m4.compose(pos.set(c.x, LOW + topH / 2 - 0.06, c.z), q, sc.set(1, topH + 0.06, 1)));
    c.color = new THREE.Color().setHSL(0.07 + rnd() * 0.03, 0.06 + rnd() * 0.05, 0.36 + rnd() * 0.1);
    M.low.setColorAt(c.idx, c.color);
    // am Fuß des Berges ein bisschen grün bemoost, weiter oben heller
    if (c.t < 0.07) col.setHSL(0.2, 0.16, 0.32 + rnd() * 0.05);
    else col.copy(c.color).offsetHSL(0, 0, Math.min(0.12, c.t * 0.12));
    M.top.setColorAt(c.idx, col);
  });
  snowy.forEach((c, s) => M.snow.setMatrixAt(s, m4.compose(pos.set(c.x, c.H + 0.2, c.z), q.identity(), sc.set(1, 1, 1))));
  if (!snowy.length) M.snow.setMatrixAt(0, ZERO);
  oreCells.forEach((c, o) => {
    c.crystals = [];
    c.crystalM = [];
    for (let s = 0; s < 4; s++) {
      const a = (s * Math.PI) / 2 + rnd() * 0.6;
      const r = CELL * 0.55;
      q.setFromEuler(new THREE.Euler(rnd(), rnd(), rnd()));
      const mm = m4.compose(pos.set(c.x + Math.sin(a) * r, 0.5 + rnd() * 1.5, c.z + Math.cos(a) * r), q, sc.setScalar(0.8 + rnd() * 0.7)).clone();
      const id = o * 4 + s;
      M.crystals.setMatrixAt(id, mm);
      M.crystals.setColorAt(id, col.setHex(GEMS[Math.floor(rnd() * GEMS.length)]));
      c.crystals.push(id);
      c.crystalM.push(mm);
    }
  });
  if (!oreCells.length) M.crystals.setMatrixAt(0, ZERO);
  for (const im of [M.low, M.top, M.snow]) { im.castShadow = true; im.receiveShadow = true; scene.add(im); }
  scene.add(M.crystals);
  // Steiniger Boden unter dem Berg (sieht man in den Höhlen)
  const floor = new THREE.Mesh(new THREE.CircleGeometry(M.radius, 40), floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.position.set(m.x, 0.025, m.z);
  floor.receiveShadow = true;
  scene.add(floor);
  M.hole = { x: m.x, z: m.z, r: M.radius - 0.4 };

  // Kollision über das Raster: schnell, auch bei vielen Blöcken
  const xMax = x0 + W * CELL, zMax = z0 + K * CELL;
  blockers.push({
    hit: (x, z, r) => {
      if (x + r < x0 || x - r > xMax || z + r < z0 || z - r > zMax) return false;
      const i1 = Math.floor((x - r - x0) / CELL), i2 = Math.floor((x + r - x0) / CELL);
      const k1 = Math.floor((z - r - z0) / CELL), k2 = Math.floor((z + r - z0) / CELL);
      for (let i = Math.max(0, i1); i <= Math.min(W - 1, i2); i++) {
        for (let k = Math.max(0, k1); k <= Math.min(K - 1, k2); k++) {
          const c = M.grid[i + k * W];
          if (!c || !c.solid) continue;
          const bx = x0 + i * CELL, bz = z0 + k * CELL;
          const nx = Math.max(bx, Math.min(x, bx + CELL)), nz = Math.max(bz, Math.min(z, bz + CELL));
          if ((x - nx) ** 2 + (z - nz) ** 2 < r * r) return true;
        }
      }
      return false;
    },
    solid: (x, z) => !!cellAt(M, x, z),
  });
  MASSIFS.push(M);
  return M;
}

// Raster-Zelle an dieser Stelle (fest oder gegraben)
export function gridCell(M, x, z) {
  const i = Math.floor((x - M.x0) / CELL), k = Math.floor((z - M.z0) / CELL);
  if (i < 0 || k < 0 || i >= M.W || k >= M.K) return null;
  return M.grid[i + k * M.W];
}

// Welcher feste Block ist an dieser Stelle?
export function cellAt(M, x, z) {
  const c = gridCell(M, x, z);
  return c && c.solid ? c : null;
}

// Steht man in einer gegrabenen Höhle (Fels über dem Kopf)?
export function underRock(x, z) {
  for (const M of MASSIFS) {
    const c = gridCell(M, x, z);
    if (c && !c.solid) return true;
  }
  return false;
}

// Die Zelle, die vom Mittelpunkt aus in Richtung (dx, dz) etwa 'depth' Meter tief im Berg liegt
export function cellInside(M, dx, dz, depth) {
  const m = M.m, a = Math.atan2(dx, dz);
  const R = m.radiusAt(a);
  const d = Math.max(CELL, R - depth);
  let best = null, bd = Infinity;
  for (const c of M.cells) {
    const e = Math.hypot(c.x - (m.x + Math.sin(a) * d), c.z - (m.z + Math.cos(a) * d));
    if (e < bd) { bd = e; best = c; }
  }
  return best;
}

export const neighbours = (M, c) => [[1, 0], [-1, 0], [0, 1], [0, -1]]
  .map(([di, dk]) => (c.i + di >= 0 && c.i + di < M.W && c.k + dk >= 0 && c.k + dk < M.K ? M.grid[c.i + di + (c.k + dk) * M.W] : null))
  .filter(Boolean);

// Erster Schlag: Block bekommt Risse (dunkler und ein bisschen kleiner)
export function crackCell(M, c) {
  const m = c.lowM.clone().multiply(new THREE.Matrix4().makeScale(0.95, 0.97, 0.95));
  M.low.setMatrixAt(c.idx, m);
  M.low.setColorAt(c.idx, c.color.clone().offsetHSL(0, 0, -0.12));
  M.low.instanceMatrix.needsUpdate = true;
  M.low.instanceColor.needsUpdate = true;
}

export function setCellSolid(M, c, solid) {
  if (c.solid === solid) return;
  c.solid = solid;
  c.hits = 0;
  M.dug += solid ? -1 : 1;
  M.low.setMatrixAt(c.idx, solid ? c.lowM : ZERO);
  M.low.setColorAt(c.idx, c.color);
  M.low.instanceMatrix.needsUpdate = true;
  M.low.instanceColor.needsUpdate = true;
  if (c.crystals) {
    c.crystals.forEach((id, n) => M.crystals.setMatrixAt(id, solid ? c.crystalM[n] : ZERO));
    M.crystals.instanceMatrix.needsUpdate = true;
  }
}

// Gegrabene Blöcke als kurzer Text (für Speichern und Netzwerk): je 4 Blöcke ein Hex-Zeichen
export function dugKey(M) {
  let s = '';
  for (let n = 0; n < M.cells.length; n += 4) {
    let v = 0;
    for (let b = 0; b < 4; b++) if (M.cells[n + b] && !M.cells[n + b].solid) v |= 1 << b;
    s += v.toString(16);
  }
  return s.replace(/0+$/, '');
}

export function applyDugKey(M, key) {
  M.cells.forEach((c, n) => {
    const v = parseInt((key || '')[n >> 2] || '0', 16) || 0;
    setCellSolid(M, c, !(v & (1 << (n & 3))));
  });
}

export function resetMassif(M) {
  for (const c of M.cells) setCellSolid(M, c, true);
}

import * as THREE from 'three';
import { std, circles, boxes, blockers } from './util.js';
import { TREES, ROCKS, setTreeVisible } from './world.js';

// ================= Felsmassive =================
// Vor einigen Bergen liegt eine große Felswand aus vielen Felsblöcken (je 2 × 2 Meter).
// Mit der Spitzhacke haut man Block für Block heraus und gräbt so richtige Gänge und Höhlen hinein.
// Die Decke (der obere Teil jedes Blocks) bleibt stehen, damit es wie eine Höhle aussieht.
// Steht ein Spieler in der Nähe, wird die Decke über den gegrabenen Gängen durchsichtig, damit man ihn sieht.

export const CELL = 2;          // Größe eines Felsblocks
export const LOW = 2.6;         // so hoch ist der Teil, den man weghauen kann
const W = 11;                   // Blöcke nebeneinander
const DEPTH = 7;                // Blöcke von vorne bis zum Berg (in der Mitte)
const K = 13;                   // höchstens so viele Reihen nach hinten
const ROOF_FADE = 9;            // so nah muss ein Spieler sein, damit die Decke verschwindet

// Eigener Zufall, damit Host und Mitspieler genau gleiche Felsen haben
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
        dy = top ? (rnd() - 0.4) * amount * 1.6 : (rnd() - 0.5) * amount * 0.6;
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
const crystalMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
const GEMS = [0x40c4ff, 0xff4081, 0x69f0ae, 0xffd740, 0xb388ff];

export const MASSIFS = [];

// Ist der Platz frei von Burgen, Häusern, Teich und Co? (Berge zählen nicht, die schneiden wir aus)
function otherThingAt(x, z) {
  for (const c of circles) if (c.r >= 1.5 && Math.hypot(x - c.x, z - c.z) < c.r + 1) return true;
  for (const b of boxes) if (x + 1 > b.x1 && x - 1 < b.x2 && z + 1 > b.z1 && z - 1 < b.z2) return true;
  return false;
}

export function buildMassif(scene, m, side, seed) {
  const rnd = seeded(seed);
  const front = m.radiusAt(side > 0 ? 0 : Math.PI);
  const zFace = m.z + side * (front + DEPTH * CELL - 0.8);   // vordere Kante
  const x0 = m.x - (W * CELL) / 2;
  const z0 = side > 0 ? zFace - K * CELL : zFace;           // kleinste z-Kante des Rasters
  const M = { m, side, x0, z0, W, K, grid: new Array(W * K).fill(null), cells: [], dug: 0 };
  const mid = (W - 1) / 2;

  for (let i = 0; i < W; i++) {
    const di = Math.abs(i - mid);
    const start = Math.round(di ** 1.6 * 0.22 + rnd() * 0.8);   // vorne abgerundet
    for (let j = start; j < K; j++) {
      const k = side > 0 ? K - 1 - j : j;
      const x = x0 + (i + 0.5) * CELL, z = z0 + (k + 0.5) * CELL;
      const dm = Math.hypot(x - m.x, z - m.z), rm = m.radiusAt(Math.atan2(x - m.x, z - m.z));
      if (dm < rm - 1.2) break;              // ab hier steckt der Block ganz im Berg
      if (otherThingAt(x, z)) continue;
      const depthBack = j - start;
      const topH = Math.min(2.8, 0.6 + depthBack * 0.3 + rnd() * 0.7 + (dm < rm + 2 ? 0.8 : 0));
      const cell = { i, k, j, x, z, topH, solid: true, hits: 0, ore: false, idx: M.cells.length, inMountain: dm < rm + 0.3 };
      M.cells.push(cell);
      M.grid[i + k * W] = cell;
    }
  }

  // Erzadern: manche Blöcke haben bunte Kristalle, die geben Sternenstaub
  const inner = M.cells.filter((c) => c.j > 0);
  for (let n = 0; n < 7 && inner.length; n++) inner.splice(Math.floor(rnd() * inner.length), 1)[0].ore = true;

  // Der Schatz liegt tief drinnen, nahe am Berg, aber dort, wo man noch hinkommt
  const deep = M.cells.filter((c) => !c.inMountain && Math.abs(c.i - mid) <= 2).sort((a, b) => b.j - a.j);
  M.treasure = deep[Math.floor(rnd() * Math.min(3, deep.length))] || M.cells[M.cells.length - 1];
  M.treasure.ore = false;

  // Bäume und Steine, die im Fels stehen würden, wegräumen
  for (const t of TREES) if (cellAt(M, t.x, t.z, 1)) { setTreeVisible(t, false); t.inRock = true; }
  for (const r of ROCKS) {
    if (!cellAt(M, r.x, r.z, 1)) continue;
    r.im.setMatrixAt(r.i, ZERO);
    r.im.instanceMatrix.needsUpdate = true;
    if (r.circle && circles.includes(r.circle)) circles.splice(circles.indexOf(r.circle), 1);
  }

  // Aussehen: unterer Teil, Decke, Kristalle
  const n = M.cells.length;
  const lowGeo = lumpyBox(CELL * 1.08, LOW, CELL * 1.08, 2, 0.22, rnd);
  const topGeo = lumpyBox(CELL * 1.12, 1, CELL * 1.12, 2, 0.25, rnd, true);
  M.low = new THREE.InstancedMesh(lowGeo, rockMat, n);
  M.top = new THREE.InstancedMesh(topGeo, rockMat, n);
  const oreCells = M.cells.filter((c) => c.ore);
  M.crystals = new THREE.InstancedMesh(new THREE.OctahedronGeometry(0.22), crystalMat, oreCells.length * 4 || 1);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), pos = new THREE.Vector3(), sc = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
  const col = new THREE.Color();
  M.cells.forEach((c) => {
    q.setFromAxisAngle(up, Math.floor(rnd() * 4) * (Math.PI / 2));
    c.lowM = m4.compose(pos.set(c.x, LOW / 2, c.z), q, sc.set(1, 1, 1)).clone();
    c.topM = m4.compose(pos.set(c.x, LOW + c.topH / 2 - 0.08, c.z), q, sc.set(1, c.topH, 1)).clone();
    M.low.setMatrixAt(c.idx, c.lowM);
    M.top.setMatrixAt(c.idx, c.topM);
    c.color = new THREE.Color().setHSL(0.07 + rnd() * 0.03, 0.06 + rnd() * 0.05, 0.4 + rnd() * 0.1);
    M.low.setColorAt(c.idx, c.color);
    M.top.setColorAt(c.idx, col.copy(c.color).offsetHSL(0, 0, 0.04));
  });
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
  for (const im of [M.low, M.top]) { im.castShadow = true; im.receiveShadow = true; scene.add(im); }
  // Steiniger Boden unter dem ganzen Felsen (dort wächst kein Gras)
  const xs = M.cells.map((c) => c.x), zs = M.cells.map((c) => c.z);
  M.rect = { x1: Math.min(...xs) - CELL / 2 - 0.3, x2: Math.max(...xs) + CELL / 2 + 0.3, z1: Math.min(...zs) - CELL / 2 - 0.3, z2: Math.max(...zs) + CELL / 2 + 0.3 };
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(M.rect.x2 - M.rect.x1, M.rect.z2 - M.rect.z1), std(0x77695a, { roughness: 1 }));
  floor.rotation.x = -Math.PI / 2;
  floor.position.set((M.rect.x1 + M.rect.x2) / 2, 0.025, (M.rect.z1 + M.rect.z2) / 2);
  floor.receiveShadow = true;
  scene.add(floor);
  scene.add(M.crystals);

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
    solid: (x, z) => !!cellAt(M, x, z, 0),
  });
  MASSIFS.push(M);
  return M;
}

// Welcher feste Block ist an dieser Stelle? (pad: auch knapp daneben zählt)
export function cellAt(M, x, z, pad = 0) {
  for (const [ox, oz] of pad ? [[0, 0], [pad, 0], [-pad, 0], [0, pad], [0, -pad]] : [[0, 0]]) {
    const i = Math.floor((x + ox - M.x0) / CELL), k = Math.floor((z + oz - M.z0) / CELL);
    if (i < 0 || k < 0 || i >= M.W || k >= M.K) continue;
    const c = M.grid[i + k * M.W];
    if (c && c.solid) return c;
  }
  return null;
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
  M.roofDirty = true;
}

// Decke über gegrabenen Gängen ausblenden, wenn ein Spieler in der Nähe ist
export function updateRoofs(M, positions) {
  for (const c of M.cells) {
    if (c.solid) { if (c.roofHidden) { M.top.setMatrixAt(c.idx, c.topM); c.roofHidden = false; M.roofDirty = true; } continue; }
    const near = positions.some((p) => Math.abs(p.x - c.x) < ROOF_FADE && Math.abs(p.z - c.z) < ROOF_FADE);
    if (near !== !!c.roofHidden) { c.roofHidden = near; M.top.setMatrixAt(c.idx, near ? ZERO : c.topM); M.roofDirty = true; }
  }
  if (M.roofDirty) { M.top.instanceMatrix.needsUpdate = true; M.roofDirty = false; }
}

// Gegrabene Blöcke als kurzer Text (für Speichern und Netzwerk): je 4 Blöcke ein Hex-Zeichen
export function dugKey(M) {
  let s = '';
  for (let n = 0; n < M.cells.length; n += 4) {
    let v = 0;
    for (let b = 0; b < 4; b++) if (M.cells[n + b] && !M.cells[n + b].solid) v |= 1 << b;
    s += v.toString(16);
  }
  return s;
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

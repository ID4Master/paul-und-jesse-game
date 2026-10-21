import * as THREE from 'three';
import { WORLD, rand, noise3, std, mesh, circles, boxes, blocked } from './util.js';

export const HOME = { x: 0, z: 80 };
export const ENEMY_CASTLE = { x: 0, z: -100 };

// Wachen mit Schwert und Bogenschützen der roten Burg
export const GUARD_SPAWNS = [[-4, -94], [4, -94], [-10, -112], [10, -112], [-10, -58], [10, -58], [-4, -70], [4, -70]];
// Stall neben eurer Burg (Zaun nur zum Anschauen) und Käfige beim bösen Zauberer
export const STALL = { x1: 16, x2: 32, z1: 64, z2: 80 };
export const CAGE_SPOTS = [[-3.5, -89, 'cow'], [3.5, -89, 'chicken'], [-12, -108, 'deer'], [12, -108, 'boar'], [-7, -51, 'chicken'], [18, -56, 'cow']];
export const WIZARD_POS = { x: 0, z: -97 };

export const ARCHER_SPAWNS = [[-7, -77], [7, -77], [0, -50]];

const stone = std(0xa39e93, { roughness: 0.95 });
const darkStone = std(0x8a857b, { roughness: 0.95 });
const merlonGeo = new THREE.BoxGeometry(1, 0.8, 1);

function addBox(x1, x2, z1, z2) {
  boxes.push({ x1: Math.min(x1, x2), x2: Math.max(x1, x2), z1: Math.min(z1, z2), z2: Math.max(z1, z2) });
}

function addWall(scene, x1, z1, x2, z2, height = 5, thick = 1, material = stone) {
  const w = Math.max(Math.abs(x2 - x1), thick), d = Math.max(Math.abs(z2 - z1), thick);
  const cx = (x1 + x2) / 2, cz = (z1 + z2) / 2;
  scene.add(mesh(new THREE.BoxGeometry(w, height, d), material, cx, height / 2, cz));
  const len = Math.max(w, d);
  for (let t = -len / 2 + 0.5; t <= len / 2 - 0.5; t += 2) {
    scene.add(mesh(merlonGeo, material, w > d ? cx + t : cx, height + 0.4, w > d ? cz : cz + t));
  }
  addBox(cx - w / 2, cx + w / 2, cz - d / 2, cz + d / 2);
}

function addTower(scene, x, z, r, h, roof) {
  scene.add(mesh(new THREE.CylinderGeometry(r, r * 1.1, h, 18), stone, x, h / 2, z));
  scene.add(mesh(new THREE.CylinderGeometry(r * 1.15, r * 1.15, 0.6, 18), darkStone, x, h + 0.3, z));
  scene.add(mesh(new THREE.ConeGeometry(r * 1.35, r * 1.8, 18), roof, x, h + 0.6 + r * 0.9, z));
  circles.push({ x, z, r });
}

function addFlag(scene, x, y, z, color, size = 1) {
  scene.add(mesh(new THREE.CylinderGeometry(0.08, 0.08, 4 * size), std(0x5d4037), x, y + 2 * size, z));
  scene.add(mesh(new THREE.PlaneGeometry(2 * size, 1.2 * size), std(color, { side: THREE.DoubleSide }), x + size, y + 3.3 * size, z));
}

// Einfache Burg für euch
function addHomeCastle(scene) {
  const roof = std(0x1e63d6, { roughness: 0.7 });
  const { x: cx, z: cz } = HOME;
  addWall(scene, cx - 10, cz + 10, cx + 10, cz + 10);
  addWall(scene, cx - 10, cz - 10, cx - 10, cz + 10);
  addWall(scene, cx + 10, cz - 10, cx + 10, cz + 10);
  addWall(scene, cx - 10, cz - 10, cx - 3, cz - 10);   // Tor in der Mitte
  addWall(scene, cx + 3, cz - 10, cx + 10, cz - 10);
  for (const [tx, tz] of [[-10, -10], [10, -10], [-10, 10], [10, 10]]) addTower(scene, cx + tx, cz + tz, 2, 8, roof);
  scene.add(mesh(new THREE.BoxGeometry(6, 9, 6), stone, cx, 4.5, cz));
  const keepRoof = mesh(new THREE.ConeGeometry(5, 4, 4), roof, cx, 11, cz);
  keepRoof.rotation.y = Math.PI / 4;
  scene.add(keepRoof);
  addFlag(scene, cx, 13, cz, 0x1e63d6);
  addBox(cx - 3, cx + 3, cz - 3, cz + 3);
}

// Große, detaillierte feindliche Burg
function addEnemyCastle(scene) {
  const roof = std(0xb71c1c, { roughness: 0.7 });
  const banner = std(0xc62828, { side: THREE.DoubleSide });
  const { x: cx, z: cz } = ENEMY_CASTLE;
  const H = 7, T = 1.5, S = 18;
  const front = cz + S;   // Torseite zeigt zu euch
  addWall(scene, cx - S, cz - S, cx + S, cz - S, H, T);
  addWall(scene, cx - S, cz - S, cx - S, cz + S, H, T);
  addWall(scene, cx + S, cz - S, cx + S, cz + S, H, T);
  addWall(scene, cx - S, front, cx - 4, front, H, T);
  addWall(scene, cx + 4, front, cx + S, front, H, T);
  // Ecktürme und Türme in der Mitte der Seitenmauern
  for (const [tx, tz] of [[-S, -S], [S, -S], [-S, S], [S, S]]) addTower(scene, cx + tx, cz + tz, 3, 11, roof);
  addTower(scene, cx - S, cz, 2.3, 9, roof);
  addTower(scene, cx + S, cz, 2.3, 9, roof);
  addTower(scene, cx, cz - S, 2.3, 9, roof);
  // Torhaus mit Bogen und Fallgitter
  addTower(scene, cx - 4.5, front + 0.5, 2.4, 10, roof);
  addTower(scene, cx + 4.5, front + 0.5, 2.4, 10, roof);
  scene.add(mesh(new THREE.BoxGeometry(9, 2.5, 3), stone, cx, 7.5, front));
  for (let bx = -1.8; bx <= 1.8; bx += 0.6) {
    scene.add(mesh(new THREE.BoxGeometry(0.12, 2.2, 0.12), std(0x333333), cx + bx, 5.3, front + 1.2));
  }
  // Banner am Torhaus
  for (const bx of [-7.5, 7.5]) {
    scene.add(mesh(new THREE.PlaneGeometry(1.6, 3.5), banner, cx + bx, 4.5, front + T / 2 + 0.05));
  }
  // Großer Bergfried mit vier Türmchen
  const kz = cz - 7;
  scene.add(mesh(new THREE.BoxGeometry(12, 14, 12), stone, cx, 7, kz));
  addBox(cx - 6, cx + 6, kz - 6, kz + 6);
  for (const [tx, tz] of [[-6, -6], [6, -6], [-6, 6], [6, 6]]) {
    scene.add(mesh(new THREE.CylinderGeometry(1.4, 1.4, 17, 14), stone, cx + tx, 8.5, kz + tz));
    scene.add(mesh(new THREE.ConeGeometry(1.9, 3, 14), roof, cx + tx, 18.5, kz + tz));
  }
  for (let t = -5.5; t <= 5.5; t += 2) {
    for (const [mx, mz] of [[t, -6], [t, 6], [-6, t], [6, t]]) scene.add(mesh(merlonGeo, stone, cx + mx, 14.4, kz + mz));
  }
  for (const wy of [5, 9, 12]) {
    for (const wx of [-3, 0, 3]) scene.add(mesh(new THREE.BoxGeometry(0.8, 1.4, 0.1), std(0x1a1a1a), cx + wx, wy, kz + 6.05));
  }
  scene.add(mesh(new THREE.BoxGeometry(2.4, 3.5, 0.15), std(0x4e342e), cx, 1.75, kz + 6.05));
  addFlag(scene, cx, 14.8, kz, 0xc62828, 1.5);
  // Häuser im Burghof
  addHouse(scene, cx + 11, cz + 8, 6, 8, 0x8d2b2b);
  addHouse(scene, cx - 11, cz + 9, 6, 6, 0x8d2b2b);
  addWell(scene, cx - 9, cz - 1);
}

// Fachwerkhaus, um das man herumlaufen kann
const plaster = std(0xe8dcc0);
const timber = std(0x4a3020);
const glass = std(0x1d2a33, { roughness: 0.3 });
function addHouse(scene, x, z, w, d, roofColor = 0x7b4a2e) {
  const h = 3.2;
  scene.add(mesh(new THREE.BoxGeometry(w, h, d), plaster, x, h / 2, z));
  // Balken an den Kanten und in der Mitte
  for (const [bx, bz] of [[-w / 2, -d / 2], [w / 2, -d / 2], [-w / 2, d / 2], [w / 2, d / 2]]) {
    scene.add(mesh(new THREE.BoxGeometry(0.25, h, 0.25), timber, x + bx, h / 2, z + bz));
  }
  for (const side of [-1, 1]) {
    scene.add(mesh(new THREE.BoxGeometry(w + 0.1, 0.22, 0.12), timber, x, h * 0.55, z + side * (d / 2 + 0.02)));
    scene.add(mesh(new THREE.BoxGeometry(0.12, 0.22, d + 0.1), timber, x + side * (w / 2 + 0.02), h * 0.55, z));
  }
  // Satteldach
  const shape = new THREE.Shape();
  shape.moveTo(-w / 2 - 0.4, 0);
  shape.lineTo(w / 2 + 0.4, 0);
  shape.lineTo(0, w * 0.45);
  shape.lineTo(-w / 2 - 0.4, 0);
  const roofGeo = new THREE.ExtrudeGeometry(shape, { depth: d + 0.8, bevelEnabled: false });
  roofGeo.translate(0, 0, -(d + 0.8) / 2);
  scene.add(mesh(roofGeo, std(roofColor, { roughness: 0.8 }), x, h, z));
  // Tür, Fenster, Schornstein
  scene.add(mesh(new THREE.BoxGeometry(1, 1.9, 0.08), std(0x5d3a1a), x, 0.95, z + d / 2 + 0.03));
  for (const wx of [-w / 3, w / 3]) {
    scene.add(mesh(new THREE.BoxGeometry(0.8, 0.8, 0.06), glass, x + wx, 2, z + d / 2 + 0.03));
    scene.add(mesh(new THREE.BoxGeometry(0.8, 0.8, 0.06), glass, x + wx, 2, z - d / 2 - 0.03));
  }
  scene.add(mesh(new THREE.BoxGeometry(0.6, 1.8, 0.6), darkStone, x + w / 4, h + w * 0.3, z - d / 4));
  addBox(x - w / 2, x + w / 2, z - d / 2, z + d / 2);
}

function addWell(scene, x, z) {
  scene.add(mesh(new THREE.CylinderGeometry(1, 1.05, 0.9, 16, 1, true), darkStone, x, 0.45, z));
  scene.add(mesh(new THREE.CircleGeometry(0.95, 16).rotateX(-Math.PI / 2), std(0x23465e, { roughness: 0.2 }), x, 0.5, z));
  for (const s of [-1, 1]) scene.add(mesh(new THREE.BoxGeometry(0.15, 2, 0.15), timber, x + s * 0.9, 1.4, z));
  const roofGeo = new THREE.ConeGeometry(1.5, 0.8, 4);
  const r = mesh(roofGeo, std(0x7b4a2e), x, 2.7, z);
  r.rotation.y = Math.PI / 4;
  scene.add(r);
  circles.push({ x, z, r: 1.1 });
}

function addHay(scene, x, z) {
  scene.add(mesh(new THREE.CylinderGeometry(0.8, 0.8, 1.2, 14), std(0xd8b85a), x, 0.6, z));
  circles.push({ x, z, r: 0.85 });
}

function addFence(scene, x1, z, x2) {
  const wood = std(0x7a5a3a);
  for (let x = x1; x <= x2; x += 1.5) scene.add(mesh(new THREE.BoxGeometry(0.12, 1, 0.12), wood, x, 0.5, z));
  for (const y of [0.4, 0.8]) scene.add(mesh(new THREE.BoxGeometry(x2 - x1, 0.08, 0.06), wood, (x1 + x2) / 2, y, z));
  addBox(x1, x2, z - 0.1, z + 0.1);
}

// Dorf vor der feindlichen Burg
function addVillage(scene) {
  const houses = [
    [-13, -50, 6, 5], [-24, -57, 7, 6], [-13, -64, 5, 5], [-26, -70, 6, 5],
    [13, -52, 6, 6], [24, -60, 6, 5], [13, -67, 6, 5], [27, -48, 5, 5],
  ];
  const roofColors = [0x7b4a2e, 0x8d2b2b, 0x6d5a3a];
  houses.forEach(([x, z, w, d], i) => addHouse(scene, x, z, w, d, roofColors[i % 3]));
  addWell(scene, -7, -58);
  addHay(scene, 19, -72);
  addHay(scene, 20.5, -73.5);
  addHay(scene, -19, -46);
  addFence(scene, 30, -54, 36);
  addFence(scene, -36, -63, -31);
}

function addStall(scene) {
  const { x1, x2, z1, z2 } = STALL;
  const wood = std(0x8a6a44);
  const post = new THREE.BoxGeometry(0.15, 1.1, 0.15);
  const rail = (ax, az, bx, bz) => {
    const len = Math.hypot(bx - ax, bz - az);
    for (const y of [0.45, 0.85]) {
      const r = mesh(new THREE.BoxGeometry(len, 0.08, 0.06), wood, (ax + bx) / 2, y, (az + bz) / 2);
      r.rotation.y = -Math.atan2(bz - az, bx - ax);
      scene.add(r);
    }
    for (let t = 0; t <= len; t += 2) scene.add(mesh(post, wood, ax + ((bx - ax) * t) / len, 0.55, az + ((bz - az) * t) / len));
  };
  rail(x1, z1, x2, z1);
  rail(x2, z1, x2, z2);
  rail(x1, z2, x2, z2);
  rail(x1, z1, x1, 69);        // Tor zur Burg hin offen lassen
  rail(x1, 75, x1, z2);
  // Stroh auf dem Boden, Futtertrog und Scheune
  const straw = mesh(new THREE.PlaneGeometry(x2 - x1, z2 - z1), std(0xc9b27a), (x1 + x2) / 2, 0.03, (z1 + z2) / 2);
  straw.rotation.x = -Math.PI / 2;
  scene.add(straw);
  scene.add(mesh(new THREE.BoxGeometry(3, 0.5, 0.8), wood, 24, 0.25, 66));
  addHouse(scene, 24, 84.5, 9, 5, 0xa83232);
  addHay(scene, 30, 78);
  addHay(scene, 18.5, 78.5);
}

function addMountains(scene) {
  for (const side of [-1, 1]) {
    for (let i = 0; i < 6; i++) {
      const r = 14 + rand() * 6, h = 28 + rand() * 22;
      const x = side * (26 + i * 22), z = (rand() - 0.5) * 12;
      const geo = new THREE.ConeGeometry(r, h, 14, 7, true);
      const p = geo.attributes.position;
      const colors = [];
      const c = new THREE.Color();
      for (let k = 0; k < p.count; k++) {
        const vx = p.getX(k), vy = p.getY(k), vz = p.getZ(k);
        const t = (vy + h / 2) / h, n = noise3(vx, vy, vz);
        if (t < 0.999) {
          const s = 1 + (n - 0.5) * 0.35;
          p.setXYZ(k, vx * s, vy + (noise3(vz, vx, vy) - 0.5) * h * 0.04, vz * s);
        }
        if (t > 0.7 + n * 0.1) c.set(0xf4f6f8);
        else if (t < 0.1) c.setHSL(0.25, 0.3, 0.25 + n * 0.05);
        else c.setHSL(0.08, 0.06, 0.33 + n * 0.12);
        colors.push(c.r, c.g, c.b);
      }
      geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
      geo.computeVertexNormals();
      scene.add(mesh(geo, std(0xffffff, { vertexColors: true, flatShading: true }), x, h / 2, z));
      circles.push({ x, z, r: r * 0.9 });
    }
  }
}

// Wo darf Wald wachsen und wo dürfen Tiere auftauchen?
export const freeSpot = (x, z) =>
  !(Math.abs(z) < 26 || Math.abs(x) < 6 ||                       // Berge und Weg
    (Math.abs(x) < 18 && Math.abs(z - HOME.z) < 18) ||              // eure Burg
    (Math.abs(x) < 10 && z > 55 && z < 70) ||                       // Platz vor eurer Burg
    (x > 10 && x < 38 && z > 56 && z < 92) ||                       // Stall
    (x > -28 && x < -6 && z > 44 && z < 72) ||                      // Werkstatt
    (Math.abs(x) < 42 && z < -38 && z > -125));                     // Dorf und feindliche Burg

export function randomFreeSpot() {
  for (let n = 0; n < 100; n++) {
    const x = (Math.random() - 0.5) * 260, z = (Math.random() - 0.5) * 260;
    if (freeSpot(x, z) && !blocked(x, z, 1.5)) return { x, z };
  }
  return { x: 40, z: 50 };
}

function addForest(scene) {
  const trees = [];
  for (let n = 0; n < 500 && trees.length < 260; n++) {
    const x = (rand() - 0.5) * 280, z = (rand() - 0.5) * 280;
    if (!freeSpot(x, z)) continue;
    const s = 0.8 + rand() * 0.6;
    trees.push({ x, z, s });
    circles.push({ x, z, r: 0.5 * s });
  }
  const N = trees.length;
  const trunks = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.22, 0.35, 2.4, 7), std(0x5b3d26), N);
  const leafGeos = [new THREE.ConeGeometry(2.2, 3, 9), new THREE.ConeGeometry(1.7, 2.6, 9), new THREE.ConeGeometry(1.1, 2.2, 9)];
  const leafY = [3.0, 4.4, 5.6];
  const leaves = leafGeos.map((g) => new THREE.InstancedMesh(g, std(0xffffff, { flatShading: true }), N));
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), pos = new THREE.Vector3();
  const up = new THREE.Vector3(0, 1, 0), col = new THREE.Color();
  trees.forEach((t, i) => {
    q.setFromAxisAngle(up, rand() * 6.28);
    sc.setScalar(t.s);
    trunks.setMatrixAt(i, m4.compose(pos.set(t.x, 1.2 * t.s, t.z), q, sc));
    col.setHSL(0.29 + rand() * 0.06, 0.45 + rand() * 0.15, 0.17 + rand() * 0.08);
    leaves.forEach((li, j) => {
      li.setMatrixAt(i, m4.compose(pos.set(t.x, leafY[j] * t.s, t.z), q, sc));
      li.setColorAt(i, col);
    });
  });
  for (const im of [trunks, ...leaves]) { im.castShadow = true; im.receiveShadow = true; scene.add(im); }

  const rocks = [];
  for (let n = 0; n < 200 && rocks.length < 70; n++) {
    const x = (rand() - 0.5) * 280, z = (rand() - 0.5) * 280;
    if (freeSpot(x, z)) rocks.push({ x, z, s: 0.3 + rand() * 1.0 });
  }
  const rockMesh = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 0), std(0x8a8780, { flatShading: true }), rocks.length);
  rocks.forEach((r, i) => {
    q.setFromAxisAngle(up, rand() * 6.28);
    sc.set(r.s * (0.8 + rand() * 0.5), r.s * (0.5 + rand() * 0.3), r.s * (0.8 + rand() * 0.5));
    rockMesh.setMatrixAt(i, m4.compose(pos.set(r.x, r.s * 0.2, r.z), q, sc));
    if (r.s > 0.6) circles.push({ x: r.x, z: r.z, r: r.s * 0.9 });
  });
  rockMesh.castShadow = true;
  rockMesh.receiveShadow = true;
  scene.add(rockMesh);
}

export function buildWorld(scene) {
  const geo = new THREE.PlaneGeometry(WORLD * 2, WORLD * 2, 150, 150);
  const colors = [];
  const c = new THREE.Color();
  for (let i = 0; i < geo.attributes.position.count; i++) {
    c.setHSL(0.27 + rand() * 0.04, 0.5, 0.30 + rand() * 0.06);
    colors.push(c.r, c.g, c.b);
  }
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  const ground = mesh(geo, std(0xffffff, { vertexColors: true }));
  ground.rotation.x = -Math.PI / 2;
  scene.add(ground);
  const path = mesh(new THREE.PlaneGeometry(6, 152), std(0xb89a62));
  path.rotation.x = -Math.PI / 2;
  path.position.set(0, 0.02, -6);
  scene.add(path);

  addHomeCastle(scene);
  addStall(scene);
  addEnemyCastle(scene);
  addVillage(scene);
  addMountains(scene);
  addForest(scene);
}

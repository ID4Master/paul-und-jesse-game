import * as THREE from 'three';
import { WORLD, rand, noise3, std, mesh, circles, boxes, blocked } from './util.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { makeGrassField, makeFlowers, updateGrass } from './grass.js';
import { brickTex, tileTex, grassTex, dirtTex, worldUVBox, worldUVCyl } from './textures.js';

export const HOME = { x: 0, z: 80 };
export const ENEMY_CASTLE = { x: 0, z: -100 };

// Wachen mit Schwert und Bogenschützen der roten Burg
export const GUARD_SPAWNS = [[-4, -94], [4, -94], [-10, -112], [10, -112], [-10, -58], [10, -58], [-4, -70], [4, -70]];
// Stall neben eurer Burg (Zaun nur zum Anschauen) und Käfige beim bösen Zauberer
export const STALL = { x1: 16, x2: 32, z1: 64, z2: 80 };
export const CAGE_SPOTS = [[-3.5, -89, 'cow'], [3.5, -89, 'chicken'], [-12, -108, 'deer'], [12, -108, 'boar'], [-7, -51, 'chicken'], [18, -56, 'cow']];
export const WIZARD_POS = { x: 0, z: -97 };

export const ARCHER_SPAWNS = [[-7, -77], [7, -77], [0, -50]];

const stone = std(0xcfc8b8, { roughness: 0.95, map: brickTex });
const darkStone = std(0xa59e90, { roughness: 0.95, map: brickTex });
const merlonGeo = worldUVBox(new THREE.BoxGeometry(1, 0.8, 1), 1, 0.8, 1);
const sbox = (w, h, d) => worldUVBox(new THREE.BoxGeometry(w, h, d), w, h, d);
const scyl = (rt, rb, h, seg) => worldUVCyl(new THREE.CylinderGeometry(rt, rb, h, seg), Math.max(rt, rb), h);
const roofMat = (color) => std(color, { roughness: 0.7, map: tileTex });
const roofCone = (r, h, seg) => worldUVCyl(new THREE.ConeGeometry(r, h, seg), r, Math.hypot(r, h), 2.2, 1.4);
const houseTiles = tileTex.clone();
houseTiles.repeat.set(0.45, 0.45);
houseTiles.needsUpdate = true;

function addBox(x1, x2, z1, z2) {
  boxes.push({ x1: Math.min(x1, x2), x2: Math.max(x1, x2), z1: Math.min(z1, z2), z2: Math.max(z1, z2) });
}

function addWall(scene, x1, z1, x2, z2, height = 5, thick = 1, material = stone) {
  const w = Math.max(Math.abs(x2 - x1), thick), d = Math.max(Math.abs(z2 - z1), thick);
  const cx = (x1 + x2) / 2, cz = (z1 + z2) / 2;
  scene.add(mesh(sbox(w, height, d), material, cx, height / 2, cz));
  const len = Math.max(w, d);
  for (let t = -len / 2 + 0.5; t <= len / 2 - 0.5; t += 2) {
    scene.add(mesh(merlonGeo, material, w > d ? cx + t : cx, height + 0.4, w > d ? cz : cz + t));
  }
  addBox(cx - w / 2, cx + w / 2, cz - d / 2, cz + d / 2);
}

function addTower(scene, x, z, r, h, roof) {
  scene.add(mesh(scyl(r, r * 1.1, h, 20), stone, x, h / 2, z));
  scene.add(mesh(scyl(r * 1.15, r * 1.15, 0.6, 20), darkStone, x, h + 0.3, z));
  for (let k = 0; k < 8; k++) {   // Zinnen auf dem Turm
    const a = (k / 8) * Math.PI * 2;
    scene.add(mesh(merlonGeo, darkStone, x + Math.sin(a) * r * 1.05, h + 0.95, z + Math.cos(a) * r * 1.05));
  }
  scene.add(mesh(roofCone(r * 1.35, r * 1.8, 20), roof, x, h + 0.6 + r * 0.9, z));
  circles.push({ x, z, r });
}

function addFlag(scene, x, y, z, color, size = 1) {
  scene.add(mesh(new THREE.CylinderGeometry(0.08, 0.08, 4 * size), std(0x5d4037), x, y + 2 * size, z));
  scene.add(mesh(new THREE.PlaneGeometry(2 * size, 1.2 * size), std(color, { side: THREE.DoubleSide }), x + size, y + 3.3 * size, z));
}

// Einfache Burg für euch
function addHomeCastle(scene) {
  const roof = roofMat(0x1e63d6);
  const { x: cx, z: cz } = HOME;
  addWall(scene, cx - 10, cz + 10, cx + 10, cz + 10);
  addWall(scene, cx - 10, cz - 10, cx - 10, cz + 10);
  addWall(scene, cx + 10, cz - 10, cx + 10, cz + 10);
  addWall(scene, cx - 10, cz - 10, cx - 3, cz - 10);   // Tor in der Mitte
  addWall(scene, cx + 3, cz - 10, cx + 10, cz - 10);
  for (const [tx, tz] of [[-10, -10], [10, -10], [-10, 10], [10, 10]]) addTower(scene, cx + tx, cz + tz, 2, 8, roof);
  scene.add(mesh(sbox(6, 9, 6), stone, cx, 4.5, cz));
  const keepRoof = mesh(roofCone(5, 4, 4), roof, cx, 11, cz);
  keepRoof.rotation.y = Math.PI / 4;
  scene.add(keepRoof);
  addFlag(scene, cx, 13, cz, 0x1e63d6);
  addBox(cx - 3, cx + 3, cz - 3, cz + 3);
}

// Große, detaillierte feindliche Burg
function addEnemyCastle(scene) {
  const roof = roofMat(0xb71c1c);
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
  scene.add(mesh(sbox(9, 2.5, 3), stone, cx, 7.5, front));
  for (let bx = -1.8; bx <= 1.8; bx += 0.6) {
    scene.add(mesh(new THREE.BoxGeometry(0.12, 2.2, 0.12), std(0x333333), cx + bx, 5.3, front + 1.2));
  }
  // Banner am Torhaus
  for (const bx of [-7.5, 7.5]) {
    scene.add(mesh(new THREE.PlaneGeometry(1.6, 3.5), banner, cx + bx, 4.5, front + T / 2 + 0.05));
  }
  // Großer Bergfried mit vier Türmchen
  const kz = cz - 7;
  scene.add(mesh(sbox(12, 14, 12), stone, cx, 7, kz));
  addBox(cx - 6, cx + 6, kz - 6, kz + 6);
  for (const [tx, tz] of [[-6, -6], [6, -6], [-6, 6], [6, 6]]) {
    scene.add(mesh(scyl(1.4, 1.4, 17, 16), stone, cx + tx, 8.5, kz + tz));
    scene.add(mesh(roofCone(1.9, 3, 16), roof, cx + tx, 18.5, kz + tz));
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
  scene.add(mesh(roofGeo, std(roofColor, { roughness: 0.8, map: houseTiles }), x, h, z));
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
    (Math.abs(x) < 42 && z < -38 && z > -125) ||                    // Dorf und feindliche Burg
    Math.hypot(x - 52, z - 38) < 13);                               // Teich

export function randomFreeSpot() {
  for (let n = 0; n < 100; n++) {
    const x = (Math.random() - 0.5) * 260, z = (Math.random() - 0.5) * 260;
    if (freeSpot(x, z) && !blocked(x, z, 1.5)) return { x, z };
  }
  return { x: 40, z: 50 };
}

function addForest(scene, low) {
  const trees = [];
  for (let n = 0; n < 500 && trees.length < 260; n++) {
    const x = (rand() - 0.5) * 280, z = (rand() - 0.5) * 280;
    if (!freeSpot(x, z)) continue;
    const s = 0.8 + rand() * 0.6;
    trees.push({ x, z, s, leafy: rand() < 0.35 });
    circles.push({ x, z, r: 0.5 * s });
  }
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), pos = new THREE.Vector3();
  const up = new THREE.Vector3(0, 1, 0), col = new THREE.Color();
  const finish = (im) => { im.castShadow = true; im.receiveShadow = true; scene.add(im); };

  // Tannen
  const pines = trees.filter((t) => !t.leafy);
  const trunks = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.22, 0.35, 2.4, 7), std(0x5b3d26), pines.length);
  const leafGeos = [new THREE.ConeGeometry(2.2, 3, 9), new THREE.ConeGeometry(1.7, 2.6, 9), new THREE.ConeGeometry(1.1, 2.2, 9)];
  const leafY = [3.0, 4.4, 5.6];
  const leaves = leafGeos.map((g) => new THREE.InstancedMesh(g, std(0xffffff, { flatShading: true }), pines.length));
  pines.forEach((t, i) => {
    q.setFromAxisAngle(up, rand() * 6.28);
    sc.setScalar(t.s);
    trunks.setMatrixAt(i, m4.compose(pos.set(t.x, 1.2 * t.s, t.z), q, sc));
    col.setHSL(0.29 + rand() * 0.06, 0.45 + rand() * 0.15, 0.17 + rand() * 0.08);
    leaves.forEach((li, j) => {
      li.setMatrixAt(i, m4.compose(pos.set(t.x, leafY[j] * t.s, t.z), q, sc));
      li.setColorAt(i, col);
    });
  });
  [trunks, ...leaves].forEach(finish);

  // Laubbäume mit runden Kronen in verschiedenen Grüntönen
  const oaks = trees.filter((t) => t.leafy);
  const oakTrunks = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.28, 0.42, 3, 8), std(0x6b4a30), oaks.length);
  const crownGeo = new THREE.IcosahedronGeometry(2.1, 1);
  const crowns = [0, 1, 2].map(() => new THREE.InstancedMesh(crownGeo, std(0xffffff, { flatShading: true }), oaks.length));
  const offs = [[0, 4.4, 0, 1], [0.9, 3.8, 0.6, 0.7], [-0.8, 3.9, -0.5, 0.75]];
  oaks.forEach((t, i) => {
    q.setFromAxisAngle(up, rand() * 6.28);
    sc.setScalar(t.s);
    oakTrunks.setMatrixAt(i, m4.compose(pos.set(t.x, 1.5 * t.s, t.z), q, sc));
    col.setHSL(0.2 + rand() * 0.08, 0.45 + rand() * 0.2, 0.25 + rand() * 0.1);
    crowns.forEach((cm, j) => {
      const [ox, oy, oz, k] = offs[j];
      sc.setScalar(t.s * k);
      cm.setMatrixAt(i, m4.compose(pos.set(t.x + ox * t.s, oy * t.s, t.z + oz * t.s), q, sc));
      cm.setColorAt(i, col);
    });
  });
  [oakTrunks, ...crowns].forEach(finish);

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
  finish(rockMesh);

}

// Teich mit Sandufer und Schilf
export const POND = { x: 52, z: 38, r: 9 };
function addPond(scene) {
  const { x, z, r } = POND;
  const sand = mesh(new THREE.CircleGeometry(r + 1.6, 40), std(0xd9c49a), x, 0.025, z);
  sand.rotation.x = -Math.PI / 2;
  const water = mesh(new THREE.CircleGeometry(r, 40),
    new THREE.MeshStandardMaterial({ color: 0x3a8fd0, roughness: 0.08, metalness: 0.35, transparent: true, opacity: 0.88 }), x, 0.05, z);
  water.rotation.x = -Math.PI / 2;
  water.castShadow = false;
  scene.add(sand, water);
  for (let k = 0; k < 9; k++) {   // Seerosen
    const a = rand() * Math.PI * 2, d = rand() * (r - 2);
    const pad = mesh(new THREE.CircleGeometry(0.45, 10), std(0x4caf50), x + Math.sin(a) * d, 0.07, z + Math.cos(a) * d);
    pad.rotation.x = -Math.PI / 2;
    scene.add(pad);
    if (k % 3 === 0) scene.add(mesh(new THREE.SphereGeometry(0.12, 6, 5), std(0xf8bbd0), pad.position.x, 0.14, pad.position.z));
  }
  const reed = std(0x6d8b3a);
  for (let k = 0; k < 40; k++) {
    const a = rand() * Math.PI * 2, d = r - 0.3 + rand() * 1.4;
    const h = 0.8 + rand() * 0.9;
    scene.add(mesh(new THREE.CylinderGeometry(0.03, 0.04, h, 4), reed, x + Math.sin(a) * d, h / 2, z + Math.cos(a) * d));
  }
  circles.push({ x, z, r: r - 0.5 });
}

// Himmel mit Farbverlauf, Sonne und langsam ziehenden Wolken
const clouds = [];
function addSky(scene, sunDir) {
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(700, 32, 16),
    new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      uniforms: { top: { value: new THREE.Color(0x3d8be0) }, bottom: { value: new THREE.Color(0xcfe9f7) } },
      vertexShader: 'varying vec3 vPos; void main(){ vPos = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: 'uniform vec3 top; uniform vec3 bottom; varying vec3 vPos; void main(){ float h = clamp(vPos.y * 1.6, 0.0, 1.0); gl_FragColor = vec4(mix(bottom, top, pow(h, 0.7)), 1.0); }',
    }),
  );
  sky.renderOrder = -10;
  scene.add(sky);

  const cv = document.createElement('canvas');
  cv.width = cv.height = 128;
  const ctx = cv.getContext('2d');
  const grd = ctx.createRadialGradient(64, 64, 4, 64, 64, 64);
  grd.addColorStop(0, 'rgba(255,255,240,1)');
  grd.addColorStop(0.25, 'rgba(255,245,200,0.9)');
  grd.addColorStop(1, 'rgba(255,230,160,0)');
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, 128, 128);
  const sun = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(cv), fog: false, depthWrite: false }));
  sun.position.copy(sunDir).multiplyScalar(600);
  sun.scale.setScalar(110);
  scene.add(sun);

  const white = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xdde8f0, emissiveIntensity: 0.35, flatShading: true, fog: false });
  const puff = new THREE.IcosahedronGeometry(1, 1);
  for (let k = 0; k < 16; k++) {
    const g = new THREE.Group();
    const n = 4 + Math.floor(rand() * 4);
    for (let j = 0; j < n; j++) {
      const m = new THREE.Mesh(puff, white);
      const s = 6 + rand() * 7;
      m.scale.set(s * 1.4, s * 0.7, s);
      m.position.set((j - n / 2) * 8 + rand() * 4, rand() * 3, (rand() - 0.5) * 8);
      g.add(m);
    }
    g.position.set((rand() - 0.5) * 700, 90 + rand() * 50, (rand() - 0.5) * 700);
    scene.add(g);
    clouds.push(g);
  }
}

// Wolken ziehen lassen (wird jeden Frame aufgerufen)
export function updateWorld(dt) {
  updateGrass(dt);
  for (const c of clouds) {
    c.position.x += dt * 2.5;
    if (c.position.x > 380) c.position.x = -380;
  }
}

export function buildWorld(scene, { low = false, sunDir = new THREE.Vector3(0.5, 0.8, 0.3) } = {}) {
  const before = new Set(scene.children);
  addSky(scene, sunDir.clone().normalize());
  const geo = new THREE.PlaneGeometry(WORLD * 2, WORLD * 2, 150, 150);
  const colors = [];
  const c = new THREE.Color();
  for (let i = 0; i < geo.attributes.position.count; i++) {
    c.setHSL(0.27 + rand() * 0.04, 0.5, 0.30 + rand() * 0.06);
    colors.push(c.r, c.g, c.b);
  }
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  grassTex.repeat.set(70, 70);
  const ground = mesh(geo, std(0xffffff, { vertexColors: true, map: grassTex }));
  ground.rotation.x = -Math.PI / 2;
  scene.add(ground);
  dirtTex.repeat.set(1.5, 38);
  const path = mesh(new THREE.PlaneGeometry(6, 152), std(0xffffff, { map: dirtTex }));
  path.rotation.x = -Math.PI / 2;
  path.position.set(0, 0.02, -6);
  scene.add(path);

  addHomeCastle(scene);
  addStall(scene);
  addEnemyCastle(scene);
  addVillage(scene);
  addMountains(scene);
  addPond(scene);
  addForest(scene, low);
  mergeStatic(scene, before);
  makeGrassField(scene, { low });
  makeFlowers(scene, { low, rand, isFree: (x, z) => freeSpot(x, z) && !blocked(x, z, 0.4) && !(Math.abs(x) < 3.5) });
}

// Alle festen Teile mit gleichem Material zu einem Objekt zusammenfassen:
// viel weniger Zeichenaufrufe, darum läuft es auch auf dem Handy flüssig
function mergeStatic(scene, before) {
  const groups = new Map();
  for (const m of [...scene.children]) {
    if (before.has(m) || !m.isMesh || m.isInstancedMesh || m.material.isShaderMaterial || m.material.transparent) continue;
    const attrs = Object.keys(m.geometry.attributes).sort().join(',');
    const key = m.material.uuid + '|' + attrs;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(m);
  }
  for (const list of groups.values()) {
    if (list.length < 2) continue;
    const geos = list.map((m) => {
      m.updateMatrixWorld(true);
      const g = (m.geometry.index ? m.geometry.toNonIndexed() : m.geometry.clone()).applyMatrix4(m.matrixWorld);
      return g;
    });
    const merged = mergeGeometries(geos, false);
    if (!merged) continue;
    const big = new THREE.Mesh(merged, list[0].material);
    big.castShadow = big.receiveShadow = true;
    list.forEach((m) => scene.remove(m));
    geos.forEach((g) => g.dispose());
    scene.add(big);
  }
}

import * as THREE from 'three';

// Schönes Gras, das trotzdem schnell ist (Ideen aus Three.js-Grastechniken):
// - Büschel aus schmalen, spitz zulaufenden Halmen statt einzelner Kegel
// - Farbverlauf von dunkel (unten, wirkt wie Schatten) nach hellgrün (Spitze), jedes Büschel leicht anders
// - Normalen zeigen nach oben, dann wird das Gras so weich beleuchtet wie der Boden
// - Wind im Vertex-Shader, die Spitzen bewegen sich am meisten, die Wurzeln bleiben stehen
// - Ein Grasfeld, das mit dem Spieler mitwandert: dicht in der Nähe, am Rand blendet es weich aus.
//   Damit braucht man nur ein paar tausend Büschel statt Gras auf der ganzen Welt.

const uniforms = {
  uTime: { value: 0 },
  uFocus: { value: new THREE.Vector2(0, 60) },
  uRadius: { value: 30 },
};

// Hier wächst kein Gras: Weg, Werkstatt, Stall, Ablade-Fläche, Teich und die Burghöfe
const MASK = /* glsl */ `
float grassMask(vec2 p) {
  if (abs(p.x) < 3.4 && p.y > -83.0 && p.y < 71.0) return 0.0;
  if (p.x > -23.0 && p.x < -9.0 && p.y > 53.0 && p.y < 67.0) return 0.0;
  if (p.x > 16.0 && p.x < 32.0 && p.y > 64.0 && p.y < 80.0) return 0.0;
  if (abs(p.x - 8.0) < 2.4 && abs(p.y - 62.0) < 2.4) return 0.0;
  if (length(p - vec2(52.0, 38.0)) < 10.8) return 0.0;
  if (abs(p.x) < 10.0 && p.y > 69.5 && p.y < 90.5) return 0.0;
  if (abs(p.x) < 19.0 && p.y > -119.0 && p.y < -81.0) return 0.0;
  return 1.0;
}
float hash12(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
`;

function bladeClump(blades, rand) {
  const pos = [], col = [], idx = [];
  const base = new THREE.Color(0x3b6b26), mid = new THREE.Color(0x67a83c), tip = new THREE.Color(0xc4e27a);
  const c = new THREE.Color();
  for (let b = 0; b < blades; b++) {
    const ox = (rand() - 0.5) * 0.35, oz = (rand() - 0.5) * 0.35;
    const h = 0.28 + rand() * 0.3, w = 0.04 + rand() * 0.025;
    const yaw = rand() * Math.PI * 2, lean = 0.12 + rand() * 0.2;
    const cs = Math.cos(yaw), sn = Math.sin(yaw);
    const start = pos.length / 3;
    // 3 Stufen: unten breit, oben spitz, leicht nach vorne gebogen
    const rows = [[0, 1], [0.45, 0.75], [0.8, 0.4], [1, 0]];
    rows.forEach(([t, wf], r) => {
      const y = t * h, bend = lean * t * t;
      for (const side of r === 3 ? [0] : [-1, 1]) {
        const lx = side * w * wf, lz = bend;
        pos.push(ox + lx * cs - lz * sn, y, oz + lx * sn + lz * cs);
        c.copy(base).lerp(t < 0.5 ? mid : tip, t < 0.5 ? t * 2 : (t - 0.5) * 2);
        if (t > 0.5) c.lerpColors(mid, tip, (t - 0.5) * 2);
        col.push(c.r, c.g, c.b);
      }
    });
    // Dreiecke: 0-1-2, 1-3-2, 2-3-4, 3-5-4, 4-5-6
    const s = start;
    idx.push(s, s + 1, s + 2, s + 1, s + 3, s + 2, s + 2, s + 3, s + 4, s + 3, s + 5, s + 4, s + 4, s + 5, s + 6);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(idx);
  return g;
}

export function makeGrassField(scene, { low = false } = {}) {
  let seed = 99;
  const rand = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const R = low ? 22 : 32;
  const count = low ? 2600 : 7500;
  uniforms.uRadius.value = R;

  const clump = bladeClump(low ? 4 : 5, rand);
  const geo = new THREE.InstancedBufferGeometry();
  geo.index = clump.index;
  geo.setAttribute('position', clump.attributes.position);
  geo.setAttribute('color', clump.attributes.color);
  const offsets = new Float32Array(count * 4);
  for (let i = 0; i < count; i++) {
    offsets[i * 4] = (rand() - 0.5) * 2 * R;
    offsets[i * 4 + 1] = (rand() - 0.5) * 2 * R;
    offsets[i * 4 + 2] = rand() * Math.PI * 2;
    offsets[i * 4 + 3] = 0.7 + rand() * 0.7;
  }
  geo.setAttribute('offset', new THREE.InstancedBufferAttribute(offsets, 4));
  geo.instanceCount = count;

  const mat = new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide });
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, uniforms);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute vec4 offset;\nuniform float uTime;\nuniform vec2 uFocus;\nuniform float uRadius;\n' + MASK)
      .replace('#include <beginnormal_vertex>', 'vec3 objectNormal = vec3(0.0, 1.0, 0.0);')
      .replace('#include <begin_vertex>', /* glsl */ `
        vec2 rel = mod(offset.xy - uFocus + uRadius, 2.0 * uRadius) - uRadius;
        vec2 wp = uFocus + rel;
        float s = offset.w * (1.0 - smoothstep(uRadius * 0.65, uRadius, length(rel))) * grassMask(wp);
        float cr = cos(offset.z), sr = sin(offset.z);
        vec3 p = vec3(position.x * cr - position.z * sr, position.y, position.x * sr + position.z * cr) * s;
        float h2 = position.y * position.y;
        float wind = sin(uTime * 1.6 + wp.x * 0.32 + wp.y * 0.21) + 0.45 * sin(uTime * 3.1 + wp.x * 0.9 - wp.y * 0.6);
        p.x += wind * 0.16 * h2 * s;
        p.z += wind * 0.08 * h2 * s;
        vec3 transformed = vec3(wp.x, 0.0, wp.y) + p;
      `)
      .replace('#include <color_vertex>', '#include <color_vertex>\nvColor.rgb *= 0.85 + 0.3 * hash12(floor(offset.xy * 0.5));');
    // Rückseiten nicht abdunkeln: Gras wird von beiden Seiten gleich beleuchtet
    sh.fragmentShader = sh.fragmentShader.replace('#include <normal_fragment_begin>', 'vec3 normal = normalize( vNormal );\nvec3 nonPerturbedNormal = normal;');
  };
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  mesh.receiveShadow = true;
  scene.add(mesh);
  return mesh;
}

// Blumen: Stiel mit Blättchen, gelbe Mitte und sechs Blütenblätter in verschiedenen Farben, in kleinen Gruppen
export function makeFlowers(scene, { low = false, isFree, rand }) {
  const stemGeo = (() => {
    const parts = [];
    const stem = new THREE.CylinderGeometry(0.012, 0.018, 0.5, 3, 1, true);
    stem.translate(0, 0.25, 0);
    const leaf = new THREE.PlaneGeometry(0.12, 0.05);
    leaf.rotateX(-Math.PI / 2);
    leaf.rotateZ(0.5);
    leaf.translate(0.05, 0.16, 0);
    const center = new THREE.OctahedronGeometry(0.06);
    center.translate(0, 0.52, 0);
    const colorize = (g, hex) => {
      const c = new THREE.Color(hex), n = g.attributes.position.count;
      g.setAttribute('color', new THREE.Float32BufferAttribute(Array.from({ length: n }, () => [c.r, c.g, c.b]).flat(), 3));
      return g.toNonIndexed();
    };
    parts.push(colorize(stem, 0x5f9f3a), colorize(leaf, 0x6fb043), colorize(center, 0xffc107));
    return mergeSimple(parts);
  })();
  const petalGeo = (() => {
    const parts = [];
    for (let k = 0; k < 6; k++) {
      const p = new THREE.PlaneGeometry(0.15, 0.085);
      p.rotateX(-Math.PI / 2 + 0.35);
      p.translate(0.095, 0.53, 0);
      p.rotateY((k / 6) * Math.PI * 2);
      parts.push(p.toNonIndexed());
    }
    return mergeSimple(parts);
  })();

  const count = low ? 450 : 1300;
  const stems = new THREE.InstancedMesh(stemGeo, new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide }), count);
  const petals = new THREE.InstancedMesh(petalGeo, new THREE.MeshLambertMaterial({ color: 0xffffff, side: THREE.DoubleSide }), count);
  const palette = [0xffeb3b, 0xffffff, 0xf06292, 0xba68c8, 0xff8a65, 0x64b5f6, 0xffd54f];
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
  const col = new THREE.Color();
  let i = 0;
  for (let n = 0; n < 4000 && i < count; n++) {
    const cx = (rand() - 0.5) * 280, cz = (rand() - 0.5) * 280;
    if (!isFree(cx, cz)) continue;
    const hex = palette[Math.floor(rand() * palette.length)];
    const k = 5 + Math.floor(rand() * 8);
    for (let j = 0; j < k && i < count; j++) {
      const x = cx + (rand() - 0.5) * 3, z = cz + (rand() - 0.5) * 3;
      if (!isFree(x, z)) continue;
      q.setFromAxisAngle(up, rand() * 6.28);
      s.setScalar(1.7 + rand() * 0.6);   // etwas größer als das Gras
      m4.compose(p.set(x, 0, z), q, s);
      stems.setMatrixAt(i, m4);
      petals.setMatrixAt(i, m4);
      petals.setColorAt(i, col.setHex(hex).offsetHSL(0, 0, (rand() - 0.5) * 0.08));
      i++;
    }
  }
  stems.count = petals.count = i;
  for (const m of [stems, petals]) {
    m.material.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, uniforms);
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nuniform float uTime;')
        .replace('#include <beginnormal_vertex>', 'vec3 objectNormal = vec3(0.0, 1.0, 0.0);')
        .replace('#include <begin_vertex>', `vec3 transformed = vec3(position);
          float sway = sin(uTime * 1.8 + instanceMatrix[3].x * 0.4 + instanceMatrix[3].z * 0.3);
          transformed.x += sway * 0.06 * position.y * position.y * 4.0;`);
      sh.fragmentShader = sh.fragmentShader.replace('#include <normal_fragment_begin>', 'vec3 normal = normalize( vNormal );\nvec3 nonPerturbedNormal = normal;');
    };
    m.receiveShadow = true;
    scene.add(m);
  }
}

function mergeSimple(geos) {
  const g = new THREE.BufferGeometry();
  for (const name of ['position', 'normal', 'color', 'uv']) {
    if (!geos.every((x) => x.attributes[name])) continue;
    const size = geos[0].attributes[name].itemSize;
    const arr = new Float32Array(geos.reduce((n, x) => n + x.attributes[name].count * size, 0));
    let o = 0;
    for (const x of geos) { arr.set(x.attributes[name].array, o); o += x.attributes[name].array.length; }
    g.setAttribute(name, new THREE.BufferAttribute(arr, size));
  }
  return g;
}

export function updateGrass(dt) {
  uniforms.uTime.value += dt;
}

// Vor jedem Bild: Gras um diese Stelle herum zeigen
export function setGrassFocus(x, z) {
  uniforms.uFocus.value.set(x, z);
}

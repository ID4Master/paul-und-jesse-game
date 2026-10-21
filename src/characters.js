import * as THREE from 'three';
import { std, metal, mesh } from './util.js';

const geos = {
  leg: new THREE.CapsuleGeometry(0.085, 0.62, 4, 8),
  boot: new THREE.BoxGeometry(0.17, 0.14, 0.3),
  torso: new THREE.CylinderGeometry(0.25, 0.2, 0.62, 12),
  skirt: new THREE.CylinderGeometry(0.22, 0.3, 0.32, 12),
  belt: new THREE.CylinderGeometry(0.225, 0.225, 0.06, 12),
  neck: new THREE.CylinderGeometry(0.06, 0.07, 0.12, 8),
  head: new THREE.SphereGeometry(0.15, 16, 12),
  eye: new THREE.SphereGeometry(0.022, 6, 6),
  nose: new THREE.SphereGeometry(0.03, 6, 6),
  hair: new THREE.SphereGeometry(0.162, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.55),
  arm: new THREE.CapsuleGeometry(0.065, 0.46, 4, 8),
  hand: new THREE.SphereGeometry(0.07, 8, 8),
  helmet: new THREE.SphereGeometry(0.175, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2),
};
const eyeMat = std(0x222222);

// ---------- Waffen ----------
function makeFork() {
  const g = new THREE.Group();
  const wood = std(0x8d6e4a), iron = metal(0x777777);
  const shaft = mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.9, 6), wood, 0, 0, 0.35);
  shaft.rotation.x = Math.PI / 2;
  g.add(shaft, mesh(new THREE.BoxGeometry(0.32, 0.03, 0.03), iron, 0, 0, 1.3));
  for (const fx of [-0.14, 0, 0.14]) {
    const tine = mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.4, 5), iron, fx, 0, 1.5);
    tine.rotation.x = Math.PI / 2;
    g.add(tine);
  }
  return g;
}

function makeBow(color = 0x6d4c2f) {
  const g = new THREE.Group();
  const arc = mesh(new THREE.TorusGeometry(0.55, 0.03, 6, 20, Math.PI), std(color));
  arc.rotation.set(0, -Math.PI / 2, -Math.PI / 2);   // senkrecht, Bogen zeigt nach vorne
  arc.position.z = -0.05;
  g.add(arc, mesh(new THREE.CylinderGeometry(0.006, 0.006, 1.1, 4), std(0xeeeeee), 0, 0, -0.05));
  return g;
}

function makeSword(glow) {
  const g = new THREE.Group();
  const blade = glow
    ? new THREE.MeshStandardMaterial({ color: 0xff7a1a, emissive: 0xff4400, emissiveIntensity: 1.5, roughness: 0.3 })
    : metal(0xd0d4d8);
  g.add(mesh(new THREE.BoxGeometry(0.05, 0.1, glow ? 1.2 : 0.9), blade, 0, 0, glow ? 0.7 : 0.55));
  g.add(mesh(new THREE.BoxGeometry(0.3, 0.05, 0.05), metal(0x8a6d2f), 0, 0, 0.08));
  return g;
}

function makeGun() {
  const g = new THREE.Group();
  const black = metal(0x222222);
  g.add(mesh(new THREE.BoxGeometry(0.12, 0.16, 0.6), black, 0, 0.05, 0.25));
  const barrel = mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.7, 8), black, 0, 0.07, 0.85);
  barrel.rotation.x = Math.PI / 2;
  g.add(barrel, mesh(new THREE.BoxGeometry(0.06, 0.25, 0.1), black, 0, -0.12, 0.2));
  g.add(mesh(new THREE.BoxGeometry(0.1, 0.12, 0.3), std(0x6d4c2f), 0, 0.02, -0.15));
  return g;
}

// ---------- Kinderfreundliche Sachen in der Hand ----------
const glow = (color, intensity = 1.5) => new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: intensity, roughness: 0.3 });

function starGeo(r) {
  const s = new THREE.Shape();
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2, rr = i % 2 ? r * 0.45 : r;
    const x = Math.sin(a) * rr, y = Math.cos(a) * rr;
    i ? s.lineTo(x, y) : s.moveTo(x, y);
  }
  return new THREE.ExtrudeGeometry(s, { depth: r * 0.3, bevelEnabled: false }).center();
}

function makeWand(tip) {
  const g = new THREE.Group();
  const stick = mesh(new THREE.CylinderGeometry(0.025, 0.035, 0.9, 8), std(0x7b4a2e), 0, 0, 0.35);
  stick.rotation.x = Math.PI / 2;
  g.add(stick);
  if (tip === 'star') g.add(mesh(starGeo(0.14), glow(0xffd54f), 0, 0, 0.85));
  else g.add(mesh(new THREE.SphereGeometry(0.1, 14, 10), glow(0x40c4ff), 0, 0, 0.85));
  return g;
}

function makeStarStaff() {
  const g = new THREE.Group();
  const stick = mesh(new THREE.CylinderGeometry(0.035, 0.035, 1.4, 8), metal(0xd4af37), 0, 0, 0.55);
  stick.rotation.x = Math.PI / 2;
  g.add(stick, mesh(starGeo(0.3), glow(0xffe082, 2), 0, 0, 1.3));
  return g;
}

function makeBubbler() {
  const g = new THREE.Group();
  const tube = mesh(new THREE.CylinderGeometry(0.08, 0.1, 0.7, 12), std(0xff8ac8), 0, 0.05, 0.3);
  tube.rotation.x = Math.PI / 2;
  const ring = mesh(new THREE.TorusGeometry(0.16, 0.025, 8, 20), std(0x7ee8fa), 0, 0.05, 0.7);
  const bubble = mesh(new THREE.SphereGeometry(0.14, 14, 10),
    new THREE.MeshStandardMaterial({ color: 0xbfefff, transparent: true, opacity: 0.45, roughness: 0.1 }), 0, 0.12, 0.85);
  g.add(tube, ring, bubble, mesh(new THREE.BoxGeometry(0.08, 0.2, 0.1), std(0xffd54f), 0, -0.1, 0.15));
  return g;
}

function makePillow() {
  const g = new THREE.Group();
  const pillow = mesh(new THREE.BoxGeometry(0.4, 0.14, 0.6), std(0xf5f0ff), 0, 0, 0.45);
  pillow.scale.set(1, 1, 1);
  g.add(pillow, mesh(new THREE.BoxGeometry(0.42, 0.04, 0.05), std(0xff8a80), 0, 0.05, 0.45));
  return g;
}

function makeSnowball() {
  const g = new THREE.Group();
  g.add(mesh(new THREE.SphereGeometry(0.11, 12, 10), std(0xffffff), 0, 0, 0.06));
  return g;
}

// Spitzer Zauberhut mit Sternen und weißer Bart für den bösen Zauberer
export function addWizardLook(h) {
  const purple = std(0x4a148c), gold = glow(0xffd54f, 1);
  const hat = mesh(new THREE.ConeGeometry(0.26, 0.75, 16), purple, 0, 2.25, -0.02);
  hat.rotation.x = -0.12;
  h.body.add(hat, mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.03, 20), purple, 0, 1.9, 0));
  for (const [x, y, z] of [[0.12, 2.15, 0.17], [-0.1, 2.35, 0.12], [0.03, 2.5, 0.08]]) {
    const st = mesh(starGeo(0.05), gold, x, y, z);
    h.body.add(st);
  }
  const beard = mesh(new THREE.ConeGeometry(0.13, 0.4, 10), std(0xeeeeee), 0, 1.55, 0.12);
  beard.rotation.x = Math.PI;
  h.body.add(beard);
  // langer Umhang statt Hose
  h.body.add(mesh(new THREE.CylinderGeometry(0.24, 0.42, 1.0, 14, 1, true), std(0x5e35b1, { side: THREE.DoubleSide }), 0, 0.5, 0));
}

// Käfig, in dem der Zauberer ein Tier gefangen hält
export function makeCage() {
  const g = new THREE.Group();
  const wood = std(0x6d4c2f), bar = metal(0x666666);
  g.add(mesh(new THREE.BoxGeometry(2.2, 0.15, 2.2), wood, 0, 0.075, 0));
  g.add(mesh(new THREE.BoxGeometry(2.3, 0.15, 2.3), wood, 0, 2.0, 0));
  for (let i = 0; i < 4; i++) {
    for (let k = -1; k <= 1; k += 0.4) {
      const b = mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.9, 5), bar);
      const side = [[k, 1.05], [k, -1.05], [1.05, k], [-1.05, k]][i];
      b.position.set(side[0], 1.0, side[1]);
      g.add(b);
    }
  }
  g.add(mesh(new THREE.BoxGeometry(0.3, 0.35, 0.12), glow(0xb388ff, 1.5), 0, 1.0, 1.12));   // Zauberschloss
  return g;
}

// Kleiner Frosch: so sehen verzauberte Schelme aus
export function makeFrog() {
  const g = new THREE.Group();
  const green = std(0x4caf50), white = std(0xffffff);
  const body = mesh(new THREE.SphereGeometry(0.3, 14, 10), green, 0, 0.25, 0);
  body.scale.set(1, 0.7, 1.2);
  g.add(body);
  for (const s of [-1, 1]) {
    g.add(mesh(new THREE.SphereGeometry(0.09, 10, 8), white, s * 0.12, 0.48, 0.2));
    g.add(mesh(new THREE.SphereGeometry(0.045, 8, 6), eyeMat, s * 0.12, 0.5, 0.28));
    const leg = mesh(new THREE.SphereGeometry(0.12, 10, 8), green, s * 0.25, 0.1, -0.15);
    leg.scale.set(0.7, 0.5, 1.3);
    g.add(leg);
  }
  const crown = mesh(new THREE.CylinderGeometry(0.08, 0.07, 0.07, 8, 1, true), metal(0xd4af37), 0, 0.5, 0.05);
  g.add(crown);
  return g;
}

// ---------- Menschen ----------
export function makeHuman(o) {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const mats = {
    skin: std(0xe0ac80), shirt: std(o.shirt), pants: std(o.pants),
    boots: std(0x3b2a1e), belt: std(0x4a3020), hair: std(o.hair),
  };
  const legs = [];
  for (const s of [-1, 1]) {
    const hip = new THREE.Group();
    hip.position.set(s * 0.11, 0.92, 0);
    hip.add(mesh(geos.leg, mats.pants, 0, -0.42, 0));
    hip.add(mesh(geos.boot, mats.boots, 0, -0.85, 0.05));
    body.add(hip);
    legs.push(hip);
  }
  const torso = mesh(geos.torso, mats.shirt, 0, 1.27, 0);
  torso.scale.z = 0.75;
  const skirt = mesh(geos.skirt, mats.shirt, 0, 0.88, 0);
  skirt.scale.z = 0.8;
  const belt = mesh(geos.belt, mats.belt, 0, 1.0, 0);
  belt.scale.z = 0.78;
  body.add(torso, skirt, belt, mesh(geos.neck, mats.skin, 0, 1.62, 0));
  const head = mesh(geos.head, mats.skin, 0, 1.78, 0);
  head.scale.y = 1.1;
  body.add(head, mesh(geos.eye, eyeMat, -0.055, 1.8, 0.135), mesh(geos.eye, eyeMat, 0.055, 1.8, 0.135),
           mesh(geos.nose, mats.skin, 0, 1.76, 0.15));
  const hair = mesh(geos.hair, mats.hair, 0, 1.8, -0.01);
  hair.rotation.x = -0.35;
  body.add(hair);
  const arms = [];
  for (const s of [-1, 1]) {
    const sh = new THREE.Group();
    sh.position.set(s * 0.3, 1.52, 0);
    sh.add(mesh(geos.arm, mats.shirt, 0, -0.27, 0));
    sh.add(mesh(geos.hand, mats.skin, 0, -0.58, 0));
    body.add(sh);
    arms.push(sh);
  }

  const h = { root, body, legs, arms, mats };

  if (o.strawHat) {
    const straw = std(0xd9b45a);
    h.strawHat = new THREE.Group();
    h.strawHat.add(mesh(new THREE.CylinderGeometry(0.34, 0.36, 0.03, 18), straw, 0, 1.93, 0));
    h.strawHat.add(mesh(new THREE.CylinderGeometry(0.12, 0.16, 0.15, 14), straw, 0, 2.01, 0));
    h.strawHat.add(mesh(new THREE.CylinderGeometry(0.162, 0.162, 0.035, 14), std(o.band), 0, 1.96, 0));
    body.add(h.strawHat);
  }
  if (o.helmet) {
    const steel = metal(0x9aa0a6);
    body.add(mesh(geos.helmet, steel, 0, 1.83, 0), mesh(new THREE.BoxGeometry(0.03, 0.12, 0.03), steel, 0, 1.79, 0.17));
  }
  if (o.hood) {
    const hood = mesh(new THREE.SphereGeometry(0.19, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.6), std(o.hood), 0, 1.8, -0.02);
    hood.rotation.x = -0.3;
    body.add(hood);
  }
  if (o.armor) addArmor(h, o.band);

  // Waffen in der rechten Hand (immer nur eine sichtbar)
  h.weapon = new THREE.Group();
  h.weapon.position.set(0, -0.58, 0);
  arms[1].add(h.weapon);
  h.weapons = {};
  const add = (name, g) => { h.weapons[name] = g; g.visible = false; h.weapon.add(g); };
  for (const w of o.weapons) {
    if (w === 'fork') add(w, makeFork());
    if (w === 'bow') add(w, makeBow());
    if (w === 'sword') add(w, makeSword(false));
    if (w === 'firesword') add(w, makeSword(true));
    if (w === 'gun') add(w, makeGun());
    if (w === 'wand') add(w, makeWand('star'));
    if (w === 'orbwand') add(w, makeWand('orb'));
    if (w === 'starstaff') add(w, makeStarStaff());
    if (w === 'bubbler') add(w, makeBubbler());
    if (w === 'pillow') add(w, makePillow());
    if (w === 'snowball') add(w, makeSnowball());
  }
  setWeapon(h, o.weapons[0]);
  if (o.shield) {
    const shield = mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.05, 20), std(o.shirt), 0.05, -0.38, 0.12);
    shield.rotation.x = Math.PI / 2;
    shield.rotation.z = 0.2;
    arms[0].add(shield, mesh(new THREE.SphereGeometry(0.06, 8, 8), metal(0xbbbbbb), 0.05, -0.38, 0.16));
  }

  collectMats(h);
  return h;
}

function collectMats(h) {
  const all = new Set();
  h.root.traverse((m) => { if (m.material && m.material !== eyeMat && m.material.emissive) all.add(m.material); });
  h.allMats = [...all].map((m) => ({ m, base: m.emissive.getHex() }));
}

export function setWeapon(h, name) {
  for (const [n, g] of Object.entries(h.weapons)) g.visible = n === name;
  h.currentWeapon = name;
}

// ---------- Rüstung, die mit dem Level besser wird ----------
const ARMOR_COLORS = [0x9aa0a6, 0x9aa0a6, 0xb8bec4, 0xc8ced4, 0xd0d6dc, 0xd4af37, 0x556b2f];

function addArmor(h, capeColor) {
  const armorMat = new THREE.MeshStandardMaterial({ color: 0x9aa0a6, roughness: 0.35, metalness: 0.8 });
  const gold = metal(0xd4af37);
  const a = { mat: armorMat };
  a.helmet = new THREE.Group();
  a.helmet.add(mesh(geos.helmet, armorMat, 0, 1.83, 0), mesh(new THREE.BoxGeometry(0.03, 0.13, 0.03), armorMat, 0, 1.79, 0.17));
  a.helmet.add(mesh(new THREE.TorusGeometry(0.175, 0.02, 6, 20).rotateX(Math.PI / 2), armorMat, 0, 1.83, 0));
  a.chest = mesh(new THREE.CylinderGeometry(0.28, 0.24, 0.6, 14), armorMat, 0, 1.28, 0);
  a.chest.scale.z = 0.82;
  a.pauldrons = h.arms.map((arm) => {
    const p = mesh(new THREE.SphereGeometry(0.14, 10, 8, 0, Math.PI * 2, 0, Math.PI / 2), armorMat, 0, -0.02, 0);
    p.scale.set(1.2, 0.9, 1.2);
    arm.add(p);
    return p;
  });
  a.capeMat = std(capeColor, { side: THREE.DoubleSide });
  a.cape = mesh(new THREE.PlaneGeometry(0.5, 1.1), a.capeMat, 0, 1.0, -0.21);
  a.cape.rotation.x = 0.12;
  a.crown = new THREE.Group();
  a.crown.add(mesh(new THREE.CylinderGeometry(0.17, 0.16, 0.12, 14, 1, true), gold, 0, 1.97, 0));
  for (let i = 0; i < 6; i++) {
    const ang = (i / 6) * Math.PI * 2;
    a.crown.add(mesh(new THREE.ConeGeometry(0.03, 0.1, 6), gold, Math.sin(ang) * 0.165, 2.08, Math.cos(ang) * 0.165));
  }
  h.body.add(a.helmet, a.chest, a.cape, a.crown);
  h.armor = a;
  setArmorLevel(h, 0);
}

export function setArmorLevel(h, level) {
  const a = h.armor;
  if (!a) return;
  a.mat.color.setHex(ARMOR_COLORS[level]);
  if (h.strawHat) h.strawHat.visible = level === 0;
  a.helmet.visible = level >= 1 && level !== 4 && level !== 5;
  a.chest.visible = level >= 1;
  a.pauldrons.forEach((p) => (p.visible = level >= 2));
  a.cape.visible = level >= 3;
  a.crown.visible = level === 4 || level === 5;
  if (level === 6) a.capeMat.color.setHex(0x3e4f24);
}

export function animateHuman(h, phase, moving, armR, armL) {
  const swing = moving ? Math.sin(phase) : 0;
  h.legs[0].rotation.x = swing * 0.7;
  h.legs[1].rotation.x = -swing * 0.7;
  h.arms[0].rotation.x = armL ?? -swing * 0.5;
  h.arms[1].rotation.x = armR + (moving ? swing * 0.2 : 0);
  h.body.position.y = moving ? Math.abs(Math.sin(phase)) * 0.05 : 0;
}

export function flash(h, color) {
  for (const { m, base } of h.allMats) m.emissive.setHex(color === 0 ? base : color);
}

// ---------- Tiere ----------
export function makeAnimal(type) {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const legs = [];
  let fur, legLen, legY;
  if (type === 'cow') {
    fur = std(0xf5f5f0);
    const spot = std(0x2a2a2a), pink = std(0xf4a6b0);
    const torso = mesh(new THREE.CapsuleGeometry(0.42, 0.9, 6, 12), fur, 0, 1.05, 0);
    torso.rotation.x = Math.PI / 2;
    torso.scale.set(1, 1, 0.95);
    body.add(torso);
    for (const [sx, sy, sz] of [[0.36, 1.15, 0.2], [-0.38, 1.0, -0.3], [0.1, 1.42, -0.25], [-0.3, 1.25, 0.35]]) {
      const sp = mesh(new THREE.SphereGeometry(0.2, 10, 8), spot, sx, sy, sz);
      sp.scale.set(0.35, 1, 1.2);
      sp.lookAt(0, 1.05, sz);
      body.add(sp);
    }
    const head = mesh(new THREE.BoxGeometry(0.42, 0.42, 0.5), fur, 0, 1.3, 0.9);
    const snout = mesh(new THREE.BoxGeometry(0.44, 0.24, 0.2), pink, 0, 1.18, 1.18);
    body.add(head, snout, mesh(new THREE.SphereGeometry(0.16, 10, 8), pink, 0, 0.62, -0.2));
    for (const s of [-1, 1]) {
      body.add(mesh(new THREE.SphereGeometry(0.04, 6, 6), eyeMat, s * 0.16, 1.4, 1.14));
      const horn = mesh(new THREE.ConeGeometry(0.04, 0.2, 6), std(0xe8dcc0), s * 0.18, 1.6, 0.85);
      horn.rotation.z = -s * 0.5;
      const ear = mesh(new THREE.BoxGeometry(0.2, 0.06, 0.12), fur, s * 0.3, 1.42, 0.82);
      body.add(horn, ear);
    }
    legLen = 0.75; legY = 0.78;
    for (const [lx, lz] of [[-0.24, 0.45], [0.24, 0.45], [-0.24, -0.45], [0.24, -0.45]]) {
      const hip = new THREE.Group();
      hip.position.set(lx, legY, lz);
      hip.add(mesh(new THREE.CylinderGeometry(0.08, 0.07, legLen, 8), fur, 0, -legLen / 2, 0));
      hip.add(mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.08, 8), std(0x3b2a1e), 0, -legLen + 0.04, 0));
      body.add(hip);
      legs.push(hip);
    }
  } else if (type === 'chicken') {
    fur = std(0xfafafa);
    const red = std(0xe53935), yellow = std(0xffb300);
    const torso = mesh(new THREE.SphereGeometry(0.25, 14, 10), fur, 0, 0.42, 0);
    torso.scale.set(0.9, 0.9, 1.15);
    const tail = mesh(new THREE.ConeGeometry(0.12, 0.25, 8), fur, 0, 0.55, -0.27);
    tail.rotation.x = -0.9;
    const head = mesh(new THREE.SphereGeometry(0.13, 12, 10), fur, 0, 0.72, 0.2);
    const beak = mesh(new THREE.ConeGeometry(0.04, 0.1, 6), yellow, 0, 0.7, 0.35);
    beak.rotation.x = Math.PI / 2;
    body.add(torso, tail, head, beak, mesh(new THREE.BoxGeometry(0.03, 0.1, 0.14), red, 0, 0.86, 0.2),
             mesh(new THREE.SphereGeometry(0.035, 6, 6), red, 0, 0.62, 0.3));
    for (const s of [-1, 1]) {
      body.add(mesh(new THREE.SphereGeometry(0.025, 6, 6), eyeMat, s * 0.09, 0.75, 0.29));
      const wing = mesh(new THREE.SphereGeometry(0.15, 10, 8), fur, s * 0.21, 0.45, -0.02);
      wing.scale.set(0.3, 0.7, 1);
      body.add(wing);
    }
    legLen = 0.2; legY = 0.22;
    for (const lx of [-0.08, 0.08]) {
      const hip = new THREE.Group();
      hip.position.set(lx, legY, 0);
      hip.add(mesh(new THREE.CylinderGeometry(0.015, 0.015, legLen, 5), yellow, 0, -legLen / 2, 0));
      hip.add(mesh(new THREE.BoxGeometry(0.08, 0.02, 0.1), yellow, 0, -legLen, 0.03));
      body.add(hip);
      legs.push(hip);
    }
    legs.push(new THREE.Group(), new THREE.Group());   // Hühner haben nur zwei Beine
  } else if (type === 'deer') {
    fur = std(0xa0703f);
    const torso = mesh(new THREE.CapsuleGeometry(0.25, 0.8, 6, 12), fur, 0, 0.98, 0);
    torso.rotation.x = Math.PI / 2;
    const neck = mesh(new THREE.CylinderGeometry(0.08, 0.11, 0.5, 8), fur, 0, 1.3, 0.5);
    neck.rotation.x = 0.6;
    const head = mesh(new THREE.SphereGeometry(0.13, 12, 10), fur, 0, 1.55, 0.66);
    head.scale.set(0.9, 0.9, 1.6);
    body.add(torso, neck, head);
    body.add(mesh(new THREE.SphereGeometry(0.03, 6, 6), eyeMat, 0, 1.53, 0.86));
    for (const s of [-1, 1]) {
      const ear = mesh(new THREE.ConeGeometry(0.05, 0.16, 6), fur, s * 0.1, 1.7, 0.6);
      ear.rotation.z = -s * 0.6;
      body.add(ear);
      if (Math.random() < 0.5) {   // Geweih
        const antler = mesh(new THREE.CylinderGeometry(0.015, 0.02, 0.4, 5), std(0xd8c8a8), s * 0.08, 1.85, 0.58);
        antler.rotation.z = -s * 0.4;
        const tip = mesh(new THREE.CylinderGeometry(0.012, 0.015, 0.2, 5), std(0xd8c8a8), s * 0.16, 1.9, 0.66);
        tip.rotation.x = 0.8;
        body.add(antler, tip);
      }
    }
    body.add(mesh(new THREE.SphereGeometry(0.08, 8, 8), std(0xf4f0e8), 0, 1.05, -0.58));
    legLen = 0.85; legY = 0.88;
    for (const [lx, lz] of [[-0.14, 0.38], [0.14, 0.38], [-0.14, -0.38], [0.14, -0.38]]) {
      const hip = new THREE.Group();
      hip.position.set(lx, legY, lz);
      hip.add(mesh(new THREE.CylinderGeometry(0.035, 0.045, legLen, 6), fur, 0, -legLen / 2, 0));
      hip.add(mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.06, 6), std(0x2a2a2a), 0, -legLen + 0.03, 0));
      body.add(hip);
      legs.push(hip);
    }
  } else {
    fur = std(0x4a3426);
    const torso = mesh(new THREE.CapsuleGeometry(0.34, 0.6, 6, 12), fur, 0, 0.65, 0);
    torso.rotation.x = Math.PI / 2;
    torso.scale.set(1, 1, 0.9);
    const head = mesh(new THREE.ConeGeometry(0.28, 0.55, 10), fur, 0, 0.62, 0.62);
    head.rotation.x = Math.PI / 2;
    const snout = mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.08, 10), std(0x8a6a5a), 0, 0.6, 0.9);
    snout.rotation.x = Math.PI / 2;
    body.add(torso, head, snout);
    for (const s of [-1, 1]) {
      body.add(mesh(new THREE.SphereGeometry(0.03, 6, 6), eyeMat, s * 0.1, 0.72, 0.68));
      const tusk = mesh(new THREE.ConeGeometry(0.02, 0.14, 5), std(0xf4f0e8), s * 0.08, 0.6, 0.86);
      tusk.rotation.x = -0.6;
      body.add(tusk);
      const ear = mesh(new THREE.ConeGeometry(0.06, 0.16, 5), fur, s * 0.13, 0.86, 0.48);
      ear.rotation.z = -s * 0.3;
      body.add(ear);
    }
    // borstiger Rücken
    const ridge = mesh(new THREE.BoxGeometry(0.06, 0.1, 0.8), std(0x2e2018), 0, 1.0, 0);
    body.add(ridge);
    legLen = 0.4; legY = 0.42;
    for (const [lx, lz] of [[-0.18, 0.3], [0.18, 0.3], [-0.18, -0.3], [0.18, -0.3]]) {
      const hip = new THREE.Group();
      hip.position.set(lx, legY, lz);
      hip.add(mesh(new THREE.CylinderGeometry(0.06, 0.06, legLen, 6), fur, 0, -legLen / 2, 0));
      body.add(hip);
      legs.push(hip);
    }
  }
  const a = { root, body, legs, type };
  collectMats(a);
  return a;
}

export function animateAnimal(a, phase, moving) {
  const s = moving ? Math.sin(phase) * 0.6 : 0;
  a.legs[0].rotation.x = s;
  a.legs[3].rotation.x = s;
  a.legs[1].rotation.x = -s;
  a.legs[2].rotation.x = -s;
}

// Kleines Waffenmodell, z. B. für Gegenstände am Boden
export function makeWeaponModel(name) {
  if (name === 'starstaff') return makeStarStaff();
  if (name === 'bubbler') return makeBubbler();
  if (name === 'gun') return makeGun();
  if (name === 'firesword') return makeSword(true);
  if (name === 'bow') return makeBow();
  return makeFork();
}

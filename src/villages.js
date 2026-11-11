import * as THREE from '../lib/three.module.js';
import { std, mesh, circles, boxes, move, blocked, WORLD } from './util.js';
import { addHouse, addWell, addHay, addFence, addFlag, HOME, ENEMY_CASTLE, POND, MOUNTAINS } from './world.js';
import { makeHuman, animateHuman, makeAnimal, animateAnimal } from './characters.js';
import { dirtTex } from './textures.js';
import { VILLAGES, LAKE, PATHS, PATH_W } from './map.js';

// ================= Drei neue Dörfer =================
// Mühlbach (Westen): Wer hat den Erdbeerkuchen geklaut? Leute fragen und den Dieb finden.
// Seedorf (Osten):   Die Schatzkiste vom Kapitän öffnet sich nur mit den Farbsteinen in der richtigen Reihenfolge.
// Hügelhausen (Süden): Oma Rosis Rätsel lösen und Bäuerin Friedas weggelaufene Hühner zurückbringen.

const V = Object.fromEntries(VILLAGES.map((v) => [v.id, v]));
const M = V.muehle, S = V.see, H = V.huegel;

export const PUZZLES = [
  { id: 'cake', name: 'Der Kuchendieb von Mühlbach', icon: '🍰' },
  { id: 'colors', name: 'Die Schatzkiste von Seedorf', icon: '🧰' },
  { id: 'riddles', name: 'Oma Rosis Rätsel', icon: '🧠' },
  { id: 'chickens', name: 'Friedas Hühner', icon: '🐔' },
];
// Wer gibt welches Rätsel? Über dieser Person schwebt ein ❓, solange das Rätsel offen ist.
const GIVER = { berta: 'cake', knut: 'colors', rosi: 'riddles', frieda: 'chickens' };

const PEN = { x1: H.x + 18, x2: H.x + 28, z1: H.z + 2, z2: H.z + 10, gate1: H.z + 4.5, gate2: H.z + 7.5 };
const inPen = (x, z) => x > PEN.x1 + 0.5 && x < PEN.x2 - 0.5 && z > PEN.z1 + 0.5 && z < PEN.z2 - 0.5;
const CHEST = { x: S.x, z: S.z + 1 };
const PLATES = [   // Reihenfolge in der Welt durcheinander, damit man nachdenken muss
  { color: 'red', name: 'Rot', hex: 0xe53935, x: S.x - 4, z: S.z - 3 },
  { color: 'blue', name: 'Blau', hex: 0x1e88e5, x: S.x + 4, z: S.z - 3 },
  { color: 'yellow', name: 'Gelb', hex: 0xfdd835, x: S.x - 4, z: S.z + 5 },
  { color: 'green', name: 'Grün', hex: 0x43a047, x: S.x + 4, z: S.z + 5 },
];
const ORDER = ['blue', 'green', 'yellow', 'red'];
const CHICKEN_SPOTS = [[H.x - 42, H.z - 18], [H.x + 40, H.z + 30], [H.x - 30, H.z + 44], [H.x + 46, H.z - 22]];
const WINDMILL = { x: M.x + 24, z: M.z };

// ================= Feste Teile (werden mit der Welt zusammengefasst) =================
function plaza(scene, x, z, r) {
  const tex = dirtTex.clone();
  tex.repeat.set(r / 3, r / 3);
  tex.needsUpdate = true;
  const m = mesh(new THREE.CircleGeometry(r, 32), std(0xffffff, { map: tex }), x, 0.018, z);
  m.rotation.x = -Math.PI / 2;
  m.castShadow = false;
  scene.add(m);
}

const wood = std(0x7a5a3a);
function rail(scene, ax, az, bx, bz) {
  const len = Math.hypot(bx - ax, bz - az);
  for (const y of [0.4, 0.8]) {
    const r = mesh(new THREE.BoxGeometry(len, 0.08, 0.06), wood, (ax + bx) / 2, y, (az + bz) / 2);
    r.rotation.y = -Math.atan2(bz - az, bx - ax);
    scene.add(r);
  }
  for (let t = 0; t <= len + 0.01; t += 1.5) scene.add(mesh(new THREE.BoxGeometry(0.12, 1, 0.12), wood, ax + ((bx - ax) * t) / len, 0.5, az + ((bz - az) * t) / len));
  boxes.push({ x1: Math.min(ax, bx) - 0.1, x2: Math.max(ax, bx) + 0.1, z1: Math.min(az, bz) - 0.1, z2: Math.max(az, bz) + 0.1 });
}

function barrel(scene, x, z) {
  scene.add(mesh(new THREE.CylinderGeometry(0.42, 0.42, 1, 12), std(0x8d6e4a), x, 0.5, z));
  circles.push({ x, z, r: 0.45 });
}

function buildMuehlbach(scene) {
  const { x, z } = M;
  plaza(scene, x, z, 11);
  addHouse(scene, x - 12, z - 13, 7, 6, 0xb5651d);   // Bäckerei
  addHouse(scene, x + 12, z - 13, 6, 6, 0x5d4037);   // Schmiede
  addHouse(scene, x - 14, z + 13, 6, 5, 0x7b4a2e);
  addHouse(scene, x + 10, z + 15, 6, 5, 0x8d2b2b);
  addHouse(scene, x - 26, z - 2, 5, 6, 0x6d5a3a);
  addWell(scene, x - 3, z + 1);
  // Amboss vor der Schmiede
  scene.add(mesh(new THREE.BoxGeometry(0.9, 0.5, 0.5), std(0x37474f, { roughness: 0.4, metalness: 0.6 }), x + 15.5, 0.7, z - 8.5));
  scene.add(mesh(new THREE.BoxGeometry(0.5, 0.45, 0.4), std(0x5d4037), x + 15.5, 0.22, z - 8.5));
  circles.push({ x: x + 15.5, z: z - 8.5, r: 0.6 });
  // Windmühle (die Flügel drehen sich, die kommen später dazu)
  const { x: wx, z: wz } = WINDMILL;
  scene.add(mesh(new THREE.CylinderGeometry(2.4, 3.3, 10, 16), std(0xeee3cf), wx, 5, wz));
  scene.add(mesh(new THREE.ConeGeometry(3, 3, 16), std(0x6d4c41, { roughness: 0.8 }), wx, 11.5, wz));
  scene.add(mesh(new THREE.BoxGeometry(1.2, 2, 0.1), std(0x5d3a1a), wx - 3.05, 1, wz).rotateY(Math.PI / 2));
  circles.push({ x: wx, z: wz, r: 3.3 });
  // Heuhaufen hinter der Mühle (da ist der Kuchendieb hingelaufen)
  addHay(scene, wx + 6, wz + 4);
  addHay(scene, wx + 7.5, wz + 5.5);
  addHay(scene, wx + 6.5, wz + 6.8);
  // Kuchenteller mit Krümeln im Heu
  scene.add(mesh(new THREE.CylinderGeometry(0.35, 0.3, 0.05, 16), std(0xffffff, { roughness: 0.3 }), wx + 5.2, 0.05, wz + 6.2));
  scene.add(mesh(new THREE.SphereGeometry(0.06, 6, 5), std(0xe53935), wx + 5.25, 0.1, wz + 6.25));
  addFence(scene, x - 30, z + 22, x - 18);
  addFlag(scene, x - 9, 0, z - 3, 0xffb300, 0.8);
}

function buildSeedorf(scene) {
  const { x, z } = S;
  plaza(scene, x, z, 11);
  // See mit Sandufer
  const sand = mesh(new THREE.CircleGeometry(LAKE.r + 2, 48), std(0xd9c49a), LAKE.x, 0.022, LAKE.z);
  sand.rotation.x = -Math.PI / 2;
  sand.castShadow = false;
  scene.add(sand);
  circles.push({ x: LAKE.x, z: LAKE.z, r: LAKE.r - 0.5 });
  // Steg und Boot
  for (let k = 0; k < 6; k++) scene.add(mesh(new THREE.BoxGeometry(1.8, 0.12, 0.9), std(0x8d6e4a), LAKE.x - LAKE.r + 1.5 + k, 0.35, LAKE.z + 4));
  scene.add(mesh(new THREE.BoxGeometry(3.4, 0.6, 1.4), std(0x6d4c41), LAKE.x - LAKE.r + 5, 0.25, LAKE.z + 7));
  for (const [hx, hz] of [[x - 14, z - 12], [x - 14, z + 14], [x + 4, z - 20], [x + 10, z + 22]]) addHouse(scene, hx, hz, 6, 5, 0x2e5e8a);
  for (const [bx, bz] of [[x + 15, z - 4], [x + 15.8, z - 3], [x + 15, z - 2.1], [x - 9, z + 9]]) barrel(scene, bx, bz);
  // Netze zum Trocknen
  for (const s of [0, 3]) scene.add(mesh(new THREE.BoxGeometry(0.12, 2.2, 0.12), wood, x + 12 + s, 1.1, z + 9));
  scene.add(mesh(new THREE.BoxGeometry(3, 1.5, 0.04), std(0xbcaaa4, { roughness: 1 }), x + 13.5, 1.3, z + 9));
  addFlag(scene, x - 6, 0, z - 8, 0x1e88e5, 0.8);
}

function buildHuegelhausen(scene) {
  const { x, z } = H;
  plaza(scene, x, z, 11);
  addHouse(scene, x - 14, z - 10, 6, 5, 0x7b4a2e);
  addHouse(scene, x + 13, z - 12, 6, 5, 0x6d5a3a);
  addHouse(scene, x - 15, z + 13, 6, 5, 0x8d2b2b);
  addHouse(scene, x + 2, z + 19, 7, 5, 0x6a1b9a);   // Oma Rosis Haus
  addWell(scene, x + 3, z - 2);
  // Hühnerstall mit Zaun, das Tor zeigt zum Dorfplatz
  rail(scene, PEN.x1, PEN.z1, PEN.x2, PEN.z1);
  rail(scene, PEN.x2, PEN.z1, PEN.x2, PEN.z2);
  rail(scene, PEN.x1, PEN.z2, PEN.x2, PEN.z2);
  rail(scene, PEN.x1, PEN.z1, PEN.x1, PEN.gate1);
  rail(scene, PEN.x1, PEN.gate2, PEN.x1, PEN.z2);
  const straw = mesh(new THREE.PlaneGeometry(PEN.x2 - PEN.x1, PEN.z2 - PEN.z1), std(0xc9b27a), (PEN.x1 + PEN.x2) / 2, 0.03, (PEN.z1 + PEN.z2) / 2);
  straw.rotation.x = -Math.PI / 2;
  scene.add(straw);
  scene.add(mesh(new THREE.BoxGeometry(2.4, 1.6, 1.8), std(0xa1887f), PEN.x2 - 1.8, 0.8, PEN.z2 - 1.5));
  addHay(scene, x - 20, z + 2);
  addFlag(scene, x - 6, 0, z - 6, 0x43a047, 0.8);
}

// Holzschild mit Schrift. face: Blickrichtung der Schrift (Winkel wie beim Spieler)
function sign(scene, x, z, face, lines, w = 3.6) {
  const cv = document.createElement('canvas');
  cv.width = 512; cv.height = 64 + lines.length * 60;
  const ctx = cv.getContext('2d');
  ctx.fillStyle = '#6d4c41';
  ctx.beginPath();
  ctx.roundRect(4, 4, 504, cv.height - 8, 18);
  ctx.fill();
  ctx.strokeStyle = '#3e2723';
  ctx.lineWidth = 6;
  ctx.stroke();
  ctx.textAlign = 'center';
  lines.forEach((t, i) => {
    ctx.font = `bold ${i === 0 ? 50 : 40}px system-ui, sans-serif`;
    ctx.fillStyle = i === 0 ? '#ffe082' : '#fff8e1';
    ctx.fillText(t, 256, 72 + i * 60);
  });
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  const h = (w * cv.height) / 512;
  const g = new THREE.Group();
  g.add(mesh(new THREE.BoxGeometry(0.18, 1.6 + h, 0.18), wood, 0, (1.6 + h) / 2, -0.06));
  g.add(new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: tex })).translateY(1.6 + h / 2));
  g.position.set(x, 0, z);
  g.rotation.y = face;
  scene.add(g);
  circles.push({ x, z, r: 0.3 });
}

export function buildVillages(scene) {
  buildMuehlbach(scene);
  buildSeedorf(scene);
  buildHuegelhausen(scene);
}

// ================= Bewegliche Teile, Bürger und Rätsel =================
let api = null;
const npcs = [];
const chickens = [];
let blades = null, chest = null, lakeWater = null;
const plateMats = [];
const st = { solved: {}, heard: new Set(), seq: 0, riddle: 0 };
let time = 0;

export const villageDebug = { npcs, chickens, st };
export const solvedCount = () => PUZZLES.filter((q) => st.solved[q.id]).length;

const page = (text, choices = [['Tschüss 👋']]) => ({ text, choices });
const more = (text, next) => page(text, [['Weiter ▶', next]]);
const others = (id) => VILLAGES.filter((v) => v.id !== id).map((v) => `${v.name} liegt ${v.dir}`).join('. ') + '.';
const directions = (id, hello) => page(hello, [
  ['Wo sind die anderen Dörfer?', () => page(`${others(id)} Auf der kleinen Karte oben rechts siehst du alle Dörfer als 🏘️, und ein ❓ zeigt dir, wo noch ein Rätsel auf dich wartet.`)],
  ['Tschüss 👋'],
]);

function solve(id, p) {
  if (st.solved[id]) return;
  st.solved[id] = true;
  api.reward(PUZZLES.find((q) => q.id === id), p, solvedCount(), PUZZLES.length);
}

// ---------- Mühlbach: der Kuchendieb ----------
const SUSPECTS = [['max', 'Müller Max'], ['karl', 'Schmied Karl'], ['hanna', 'Hirtin Hanna'], ['leo', 'Leo'], ['greta', 'Greta']];
function guess(id) {
  return (p) => {
    if (id !== 'leo') return page('Hmm, das glaube ich nicht. Hör noch mal genau hin, was die Leute erzählt haben! Wer hatte eine Kapuze, und wer ist so klein wie ein Kind?', [['Okay, ich frag noch mal 👍']]);
    return more('Leo? Wirklich? … LEO! Komm sofort her! 😠', () => {
      solve('cake', p);
      return page('Leo hat es zugegeben! Er hatte so großen Hunger. 😄 Danke, du bist ein richtiger Detektiv! 🕵️');
    });
  };
}
const TALK = {
  berta: (p) => {
    if (st.solved.cake) return page('Danke, dass du den Kuchendieb gefunden hast! Leo hilft mir jetzt jeden Morgen beim Backen. 🍰');
    if (!st.heard.has('berta')) {
      st.heard.add('berta');
      return more('Oh je, oh je! Mein großer Erdbeerkuchen ist weg! 🍰 Er stand heute Morgen zum Abkühlen auf dem Fensterbrett.',
        () => page('Kannst du herausfinden, wer ihn genommen hat? Frag die Leute hier im Dorf, ob jemand etwas gesehen hat. Am besten den Müller Max an der Windmühle und den Schmied Karl. Dann komm zurück zu mir!', [['Mach ich! 🕵️']]));
    }
    if (!(st.heard.has('max') && st.heard.has('karl'))) {
      return page('Hast du schon mit allen gesprochen? Der Müller Max steht an der Windmühle, der Schmied Karl an seinem Amboss. Die sind immer früh auf den Beinen!', [['Mach ich! 👍']]);
    }
    return page('Und? Weißt du jetzt, wer meinen Kuchen genommen hat?', [...SUSPECTS.map(([id, n]) => [n, guess(id)]), ['Weiß ich noch nicht']]);
  },
  max: () => {
    st.heard.add('max');
    if (st.solved.cake) return page('Die Mühle dreht sich, das Mehl ist gemahlen, der Dieb ist gefunden. Was für ein schöner Tag!');
    return more('Guten Tag! Ich bin Max, der Müller. Von oben aus meiner Windmühle sehe ich das ganze Dorf.',
      () => page('Heute Morgen habe ich jemanden mit einer KAPUZE gesehen. Die Person ist mit etwas Rotem in der Hand hinter meine Mühle zu den Heuhaufen gerannt. Ich selbst trage nie eine Kapuze, nur meinen Strohhut!'));
  },
  karl: () => {
    st.heard.add('karl');
    if (st.solved.cake) return page('Klong, klong! Gut gemacht, Detektiv!');
    return more('Klong, klong! Ich bin Karl, der Schmied. Ich stand heute Morgen die ganze Zeit hier an meinem Amboss.',
      () => page('Ich habe kurz jemanden am Fenster der Bäckerei gesehen. Die Person war ganz KLEIN, viel kleiner als ein Erwachsener. Ein Kind vielleicht?'));
  },
  hanna: () => {
    st.heard.add('hanna');
    return more('Hallo! Ich bin Hanna und passe auf die Schafe auf. Ja, ich trage eine Kapuze, aber ich war den ganzen Morgen mit Greta draußen auf der Wiese.',
      () => page('Übrigens: Leo wollte heute beim Mittagessen gar nichts essen. Er hatte überhaupt keinen Hunger. Komisch, oder?'));
  },
  greta: () => {
    st.heard.add('greta');
    return page('Ich war\'s nicht! Ich habe mit Hanna Schafe gezählt: 1, 2, 3 … 47 Schafe! Und eine Kapuze habe ich auch gar nicht.');
  },
  leo: () => {
    st.heard.add('leo');
    if (st.solved.cake) return page('Tut mir leid wegen dem Kuchen. Jetzt helfe ich Berta beim Backen, und ich darf die Schüssel ausschlecken! 😋');
    return page('Ich? Nein! Ich war … äh … spazieren. Hinter der Mühle. Ganz allein. *Hicks* … Warum schaust du so auf meinen roten Mund?');
  },
  otto: () => directions('muehle', 'Willkommen in Mühlbach! Ich bin Opa Otto. Unsere Bäckerin Berta ist ganz traurig, frag sie mal, was los ist.'),

  // ---------- Seedorf: die Farbsteine ----------
  knut: () => {
    if (st.solved.colors) return page('Meine alte Schatzkiste ist offen! Danke, mein Freund. Ahoi! ⚓');
    return more('Ahoi! Ich bin Kapitän Knut. 🧭 Siehst du meine alte Schatzkiste und die vier bunten Steine davor?',
      () => more('Die Kiste geht nur auf, wenn man nacheinander auf die vier Steine in der richtigen Reihenfolge tritt. Aber ich bin so alt, ich habe die Reihenfolge vergessen!',
        () => page('Die Leute im Dorf wissen es noch: Fischer Fiete am See, Nele die Netzflickerin und der kleine Jan. Und wenn du auf den falschen Stein trittst, einfach noch mal von vorne anfangen!')));
  },
  fiete: () => page('Moin! Ich bin Fiete, der Fischer. 🎣 Der Kapitän hat immer gesagt: Der ERSTE Stein hat die Farbe vom Wasser im See.'),
  nele: () => page('Hallo, ich bin Nele und flicke die Fischernetze. Ich weiß noch: Der rote Stein kommt ganz zum SCHLUSS, so wie die rote Abendsonne. 🌅'),
  jan: () => page('Ich bin Jan! Ich weiß was: Gelb kommt NICHT direkt nach Blau. Mehr verrate ich nicht! 🤫'),
  mia: () => directions('see', 'Willkommen in Seedorf! Ich bin Mia. Kapitän Knut braucht Hilfe mit seiner Schatzkiste, er steht auf dem Dorfplatz.'),

  // ---------- Hügelhausen: Rätsel und Hühner ----------
  rosi: () => {
    if (st.solved.riddles) return page('Du bist ein echter Rätselmeister! 🧠 Komm mich mal wieder besuchen.');
    if (st.riddle > 0) return riddlePage();
    return page(`Hallo, mein Kind! Ich bin Oma Rosi und ich liebe Rätsel. Wenn du alle ${RIDDLES.length} löst, bekommst du eine Belohnung!`, [['Los geht\'s! 🧠', riddlePage], ['Später']]);
  },
  frieda: () => {
    if (st.solved.chickens) return page('Alle meine Hühner sind wieder da! Gack gack, vielen Dank! 🐔');
    const n = chickens.filter((c) => c.state === 'pen').length;
    if (n) return page(`Schon ${n} von ${chickens.length} Hühnern sind wieder im Stall! Die anderen laufen noch auf den Wiesen rund ums Dorf herum.`);
    return more(`Hilfe! Ein Fuchs hat meine Hühner erschreckt und jetzt sind alle ${chickens.length} weggelaufen! 🐔`,
      () => page('Lauf zu einem Huhn hin, dann läuft es dir hinterher. Bring es hier in den Hühnerstall mit dem Zaun, das Tor ist auf der Seite zum Dorfplatz. Die Hühner sind irgendwo auf den Wiesen rund um das Dorf.'));
  },
  lina: () => page('Ich bin Lina! Ich habe vorhin ein Huhn ganz weit im Westen gesehen, und eins hinter Oma Rosis Haus. Die rennen echt überall herum! 🐔'),
  bodo: () => directions('huegel', 'Willkommen in Hügelhausen! Ich bin Bauer Bodo. Oma Rosi hat Rätsel für dich, und Bäuerin Frieda sucht ihre Hühner.'),
};

const RIDDLES = [
  { q: 'Es hat Zähne, aber es beißt nicht. Was ist das?', a: ['Ein Hund', 'Ein Kamm', 'Ein Hai'], ok: 1 },
  { q: 'Je mehr man davon wegnimmt, desto größer wird es. Was ist das?', a: ['Ein Loch', 'Ein Kuchen', 'Ein Berg'], ok: 0 },
  { q: 'Es hat einen Hals, aber keinen Kopf. Was ist das?', a: ['Eine Giraffe', 'Ein Baum', 'Eine Flasche'], ok: 2 },
  { q: 'Es wird nass, während es trocknet. Was ist das?', a: ['Ein Handtuch', 'Der Regen', 'Ein Fisch'], ok: 0 },
];
function riddlePage() {
  const r = RIDDLES[st.riddle];
  return page(`Rätsel ${st.riddle + 1} von ${RIDDLES.length}: ${r.q}`, [...r.a.map((a, k) => [a, (p) => {
    if (k !== r.ok) return page('Leider falsch! Denk noch mal nach. 🤔', [['Noch mal versuchen', riddlePage], ['Später']]);
    st.riddle++;
    api.sfx('pickup');
    if (st.riddle < RIDDLES.length) return more('Richtig! 🎉 Das war gar nicht so leicht.', riddlePage);
    solve('riddles', p);
    return page('Alle Rätsel richtig gelöst! Du bist ja schlauer als eine Eule! 🦉');
  }]), ['Später']]);
}

// Bürger: [id, Name, Dorf, x, z (zum Dorf), Blickrichtung, Aussehen]
const PEOPLE = [
  ['berta', 'Bäckerin Berta', M, -12, -9.2, 0, { shirt: 0xf8bbd0, pants: 0xfafafa, hair: 0x8d4a1f }],
  ['max', 'Müller Max', M, WINDMILL.x - M.x - 4.5, 2, -Math.PI / 2, { shirt: 0xf5f5f5, pants: 0xbdbdbd, hair: 0x4e342e, strawHat: true, band: 0xeeeeee }],
  ['karl', 'Schmied Karl', M, 14, -8.8, -0.4, { shirt: 0x37474f, pants: 0x3e2723, hair: 0x212121 }],
  ['hanna', 'Hirtin Hanna', M, -8, 8, 2.6, { shirt: 0x81c784, pants: 0x5d4037, hair: 0xd9b36a, hood: 0x558b2f }],
  ['leo', 'Leo', M, 6, 6, 3.4, { shirt: 0xffb74d, pants: 0x3949ab, hair: 0x6d4c41, hood: 0x1565c0, kid: true, redMouth: true }],
  ['greta', 'Greta', M, -3, -5, 0.5, { shirt: 0xba68c8, pants: 0x5e35b1, hair: 0xf9a825, kid: true }],
  ['otto', 'Opa Otto', M, 4, 22, Math.PI, { shirt: 0x8d6e63, pants: 0x4e342e, hair: 0xe0e0e0 }],
  ['knut', 'Kapitän Knut', S, 0, -2.5, 0, { shirt: 0x1a237e, pants: 0x263238, hair: 0xeeeeee }],
  ['fiete', 'Fischer Fiete', S, LAKE.x - LAKE.r - 3 - S.x, LAKE.z - S.z - 3, Math.PI / 2, { shirt: 0xffca28, pants: 0x37474f, hair: 0xbf8040, strawHat: true, band: 0x1e88e5 }],
  ['nele', 'Netzflickerin Nele', S, 11, 7, -1, { shirt: 0x4dd0e1, pants: 0x455a64, hair: 0x3e2723 }],
  ['jan', 'Jan', S, -7, 4, 1.2, { shirt: 0xef5350, pants: 0x1565c0, hair: 0xffcc80, kid: true }],
  ['mia', 'Mia', S, -3, 20, Math.PI, { shirt: 0x9ccc65, pants: 0x33691e, hair: 0x5d4037 }],
  ['rosi', 'Oma Rosi', H, 3, 14, Math.PI, { shirt: 0x8e24aa, pants: 0x4a148c, hair: 0xf5f5f5 }],
  ['frieda', 'Bäuerin Frieda', H, 15.5, 4, Math.PI / 2, { shirt: 0xa1887f, pants: 0x5d4037, hair: 0xe65100, strawHat: true, band: 0xe53935 }],
  ['lina', 'Lina', H, -6, 5, 2.4, { shirt: 0xff80ab, pants: 0x00897b, hair: 0x212121, kid: true }],
  ['bodo', 'Bauer Bodo', H, -3, -20, 0, { shirt: 0x6d8b3a, pants: 0x4e342e, hair: 0x795548, strawHat: true, band: 0x6d4c41 }],
];

function nameSprite(text) {
  const cv = document.createElement('canvas');
  cv.width = 512; cv.height = 96;
  const ctx = cv.getContext('2d');
  ctx.font = 'bold 46px system-ui, sans-serif';
  ctx.textAlign = 'center';
  const w = Math.min(500, ctx.measureText(text).width + 40);
  ctx.fillStyle = 'rgba(0,0,0,0.55)';
  ctx.beginPath();
  ctx.roundRect(256 - w / 2, 14, w, 68, 22);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.fillText(text, 256, 64);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true }));
  sp.scale.set(2.6, 0.49, 1);
  sp.renderOrder = 9;
  return sp;
}

// Goldenes Fragezeichen, das über der Person schwebt
let questTex = null;
function questSprite() {
  if (!questTex) {
    const cv = document.createElement('canvas');
    cv.width = cv.height = 128;
    const ctx = cv.getContext('2d');
    ctx.fillStyle = '#ffd54f';
    ctx.strokeStyle = '#5d4037';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(64, 64, 54, 0, 7);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#4e2a10';
    ctx.font = 'bold 92px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('?', 64, 70);
    questTex = new THREE.CanvasTexture(cv);
    questTex.colorSpace = THREE.SRGBColorSpace;
  }
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: questTex, transparent: true, fog: false }));
  sp.scale.set(0.95, 0.95, 1);
  sp.renderOrder = 8;
  return sp;
}

function freeAround(x, z) {
  for (let r = 0; r < 14; r += 0.75) {
    for (let a = 0; a < 6.28; a += 0.4) {
      const px = x + Math.sin(a) * r, pz = z + Math.cos(a) * r;
      if (!blocked(px, pz, 0.8)) return { x: px, z: pz };
    }
  }
  return { x, z };
}

export function setupVillages(scene, a) {
  api = a;
  for (const [id, name, vil, dx, dz, face, look] of PEOPLE) {
    const h = makeHuman({ weapons: [], ...look });
    const x = vil.x + dx, z = vil.z + dz;
    h.root.position.set(x, 0, z);
    h.root.rotation.y = face;
    if (look.kid) h.root.scale.setScalar(0.72);
    if (look.redMouth) h.body.add(mesh(new THREE.BoxGeometry(0.09, 0.025, 0.02), std(0xd50000), 0, 1.71, 0.15));
    const label = nameSprite('💬 ' + name);
    label.position.y = look.kid ? 3.1 : 2.45;
    label.visible = false;
    h.root.add(label);
    scene.add(h.root);
    circles.push({ x, z, r: 0.45 });
    const n = { id, name, h, root: h.root, face, yaw: face, label, phase: Math.random() * 6 };
    if (GIVER[id]) {
      n.quest = GIVER[id];
      n.mark = questSprite();
      h.root.add(n.mark);
    }
    npcs.push(n);
  }

  // Windmühlenflügel
  blades = new THREE.Group();
  const sail = std(0xfff8e1, { side: THREE.DoubleSide });
  for (let k = 0; k < 4; k++) {
    const arm = new THREE.Group();
    arm.rotation.z = (k * Math.PI) / 2;
    arm.add(mesh(new THREE.BoxGeometry(0.2, 7, 0.15), wood, 0, 3.5, 0), mesh(new THREE.BoxGeometry(1.4, 5.2, 0.05), sail, 0.8, 4.2, 0));
    blades.add(arm);
  }
  blades.position.set(WINDMILL.x - 3.2, 9, WINDMILL.z);
  blades.rotation.y = -Math.PI / 2;
  scene.add(blades);

  // See (durchsichtig, darum nicht mit der Welt zusammengefasst)
  lakeWater = mesh(new THREE.CircleGeometry(LAKE.r, 48),
    new THREE.MeshStandardMaterial({ color: 0x2f86c8, roughness: 0.08, metalness: 0.35, transparent: true, opacity: 0.88 }), LAKE.x, 0.05, LAKE.z);
  lakeWater.rotation.x = -Math.PI / 2;
  lakeWater.castShadow = false;
  scene.add(lakeWater);

  // Farbsteine und Schatzkiste
  for (const pl of PLATES) {
    const mat = new THREE.MeshStandardMaterial({ color: pl.hex, roughness: 0.5, emissive: pl.hex, emissiveIntensity: 0 });
    const m = mesh(new THREE.CylinderGeometry(1.3, 1.45, 0.16, 20), mat, pl.x, 0.08, pl.z);
    m.castShadow = false;
    scene.add(m);
    plateMats.push(mat);
  }
  chest = new THREE.Group();
  const chestWood = std(0x8d5a2b), gold = new THREE.MeshStandardMaterial({ color: 0xffd54f, emissive: 0xffa000, emissiveIntensity: 0.6, metalness: 0.5, roughness: 0.3 });
  chest.add(mesh(new THREE.BoxGeometry(1.6, 0.9, 1), chestWood, 0, 0.45, 0), mesh(new THREE.BoxGeometry(1.64, 0.12, 1.04), gold, 0, 0.8, 0));
  chest.lid = new THREE.Group();
  chest.lid.position.set(0, 0.9, -0.5);
  chest.lid.add(mesh(new THREE.BoxGeometry(1.6, 0.35, 1), chestWood, 0, 0.17, 0.5), mesh(new THREE.BoxGeometry(0.25, 0.3, 0.06), gold, 0, 0.05, 1.02));
  chest.add(chest.lid);
  chest.gems = new THREE.Group();
  [0x40c4ff, 0xff4081, 0x69f0ae, 0xffd740, 0xb388ff].forEach((c, k) => {
    chest.gems.add(mesh(new THREE.OctahedronGeometry(0.16), new THREE.MeshStandardMaterial({ color: c, emissive: c, emissiveIntensity: 1.2 }), -0.5 + k * 0.25, 0.95, (k % 2) * 0.2 - 0.1));
  });
  chest.gems.visible = false;
  chest.add(chest.gems);
  chest.position.set(CHEST.x, 0, CHEST.z);
  scene.add(chest);
  circles.push({ x: CHEST.x, z: CHEST.z, r: 0.9 });

  // Weggelaufene Hühner
  for (const [sx, sz] of CHICKEN_SPOTS) {
    const { x, z } = freeAround(sx, sz);
    const hh = makeAnimal('chicken');
    hh.root.position.set(x, 0, z);
    scene.add(hh.root);
    chickens.push({ h: hh, root: hh.root, home: { x, z }, state: 'wild', who: -1, walk: 0, moving: false, heading: Math.random() * 6, t: 0, tx: x, tz: z });
  }

  // Wegweiser
  sign(scene, 17.6, 60, -Math.PI / 2, ['🏘️ Zu den Dörfern ➡', 'Mühlbach · Seedorf', 'Hügelhausen']);
  sign(scene, 17, 100, Math.PI, ['Wegweiser', '➡ Mühlbach', '⬅ Seedorf', '⬆ Hügelhausen']);
  sign(scene, M.x + 7, M.z + 24, 0, ['Mühlbach', 'Wer hat den Kuchen geklaut?']);
  sign(scene, S.x + 3, S.z + 24, 0, ['Seedorf', 'Ahoi! ⚓']);
  sign(scene, H.x + 3, H.z - 24, Math.PI, ['Hügelhausen', 'Rätsel und Hühner']);
}

// ---------- Gespräche ----------
const dlg = {};   // Spieler-Nummer -> { npc, page, sel }
const choiceCount = (d) => d.page.choices.length;

function sendDialog(p) {
  const d = dlg[p.index];
  api.show(p.index, d ? { n: d.npc.name, t: d.page.text, c: d.page.choices.map((c) => c[0]), s: d.sel } : null);
}

function closeDialog(p) {
  if (!dlg[p.index]) return;
  delete dlg[p.index];
  p.holdAtk = true;   // erst loslassen, sonst wird sofort gezaubert
  p.cooldown = Math.max(p.cooldown, 0.3);
  sendDialog(p);
}

export function nearNpc(pos, r = 3.2) {
  let best = null, bd = r;
  for (const n of npcs) {
    const d = Math.hypot(n.root.position.x - pos.x, n.root.position.z - pos.z);
    if (d < bd) { best = n; bd = d; }
  }
  return best;
}

// Zaubern/Angreifen in der Nähe eines Bürgers: mit ihm sprechen
export function talkTo(p) {
  if (dlg[p.index]) return true;
  const n = nearNpc(p.root.position);
  if (!n) return false;
  const first = TALK[n.id](p);
  dlg[p.index] = { npc: n, page: first, sel: 0 };
  p.dlgPrev = { a: true, n: 0 };
  api.sfx('pickup');
  sendDialog(p);
  return true;
}

export function pickDialog(p, k) {
  const d = dlg[p.index];
  if (!d) return;
  const ch = d.page.choices[k];
  if (!ch) return;
  const next = ch[1] ? ch[1](p) : null;
  if (next && dlg[p.index] === d) { d.page = next; d.sel = 0; p.dlgPrev = { a: true, n: p.dlgPrev?.n || 0 }; sendDialog(p); }
  else closeDialog(p);
}

// Während eines Gesprächs: links/rechts (oder vor/zurück) wählt, Angriffstaste bestätigt. Gibt true zurück, solange geredet wird.
export function dialogStep(p) {
  const d = dlg[p.index];
  if (!d) return false;
  const inp = p.input;
  const nav = inp.turn > 0.5 || inp.fwd > 0.5 ? -1 : inp.turn < -0.5 || inp.fwd < -0.5 ? 1 : 0;
  const prev = p.dlgPrev || { a: false, n: 0 };
  if (nav && nav !== prev.n) { d.sel = (d.sel + nav + choiceCount(d)) % choiceCount(d); sendDialog(p); }
  const pressed = inp.attack && !prev.a;
  p.dlgPrev = { a: inp.attack, n: nav };
  if (pressed) pickDialog(p, d.sel);
  return true;
}

// ---------- Anzeige der Gespräche (auf jedem Gerät) ----------
const boxesEl = [0, 1].map((i) => {
  const el = document.createElement('div');
  el.className = 'dlg';
  el.id = 'dlg' + i;
  el.hidden = true;
  el.innerHTML = '<div class="dlgName"></div><div class="dlgText"></div><div class="dlgChoices"></div><div class="dlgHint"></div>';
  document.body.appendChild(el);
  return el;
});
let pickHandler = () => {};
export const onDialogPick = (fn) => (pickHandler = fn);

export function renderDialog(i, data, hint) {
  const el = boxesEl[i];
  if (!data) { el.hidden = true; el.dataset.key = ''; return; }
  el.hidden = false;
  const key = data.n + '|' + data.t + '|' + data.c.join('|');
  if (el.dataset.key !== key) {
    el.dataset.key = key;
    el.querySelector('.dlgName').textContent = data.n;
    el.querySelector('.dlgText').textContent = data.t;
    el.querySelector('.dlgHint').textContent = hint;
    const box = el.querySelector('.dlgChoices');
    box.innerHTML = '';
    data.c.forEach((label, k) => {
      const b = document.createElement('button');
      b.textContent = label;
      b.tabIndex = -1;
      b.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); pickHandler(i, k); });
      box.appendChild(b);
    });
  }
  [...el.querySelectorAll('.dlgChoices button')].forEach((b, k) => b.classList.toggle('sel', k === data.s));
}

// ---------- Logik (nur auf dem Gerät, das das Spiel rechnet) ----------
const entered = new Set();
export function updateVillages(dt, players) {
  for (const p of players) {
    if ((p.dead > 0 || p.out) && dlg[p.index]) closeDialog(p);
    if (p.holdAtk && !p.input.attack) p.holdAtk = false;
    const d = dlg[p.index];
    if (d && Math.hypot(d.npc.root.position.x - p.root.position.x, d.npc.root.position.z - p.root.position.z) > 6) closeDialog(p);
    // Begrüßung beim ersten Betreten eines Dorfes
    for (const v of VILLAGES) {
      const key = p.index + v.id;
      if (!entered.has(key) && Math.hypot(p.root.position.x - v.x, p.root.position.z - v.z) < v.r) {
        entered.add(key);
        api.msg(p.index, `🏘️ Willkommen in ${v.name}! Geh zu den Leuten hin und drück ${api.talkKey()}, um mit ihnen zu sprechen.`, 5000);
        api.sfx('levelUp');
      }
    }
  }
  updatePlates(players);
  updateChickens(dt, players);
}

const onPlate = {};
function updatePlates(players) {
  if (st.solved.colors) return;
  for (const p of players) {
    if (p.dead > 0 || p.out || p.root.position.y > 1) continue;
    const pos = p.root.position;
    const k = PLATES.findIndex((pl) => Math.hypot(pos.x - pl.x, pos.z - pl.z) < 1.35);
    if (k === onPlate[p.index]) continue;
    onPlate[p.index] = k;
    if (k < 0) continue;
    const pl = PLATES[k];
    const at = ORDER.indexOf(pl.color);
    if (at < st.seq) continue;   // leuchtet schon
    if (at === st.seq) {
      st.seq++;
      api.sfx('clink');
      api.float(`${pl.name}! ✨`, '#ffffff', pos);
      if (st.seq >= ORDER.length) {
        api.sfx('poof');
        api.float('Die Kiste geht auf! 🧰', '#ffd54f', CHEST);
        solve('colors', p);
      }
    } else {
      st.seq = 0;
      api.sfx('plop');
      api.msg(p.index, '❌ Falsche Reihenfolge! Alle Steine sind wieder aus. Fang noch mal von vorne an.', 3500);
    }
  }
}

function updateChickens(dt, players) {
  const followers = {};
  for (const c of chickens) {
    c.t += dt;
    const pos = c.root.position;
    let gx = null, gz = null, speed = 2;
    if (c.state === 'follow') {
      const p = players[c.who];
      if (!p || p.dead > 0 || p.out || Math.hypot(p.root.position.x - pos.x, p.root.position.z - pos.z) > 30) {
        c.state = 'wild'; c.who = -1;
      } else {
        const k = (followers[c.who] = (followers[c.who] || 0) + 1);
        const back = 1.4 + k * 0.9;
        gx = p.root.position.x - Math.sin(p.heading) * back;
        gz = p.root.position.z - Math.cos(p.heading) * back;
        speed = 10;
        // hängt das Huhn an einem Baum fest, hüpft es einfach hinterher
        if (Math.hypot(gx - pos.x, gz - pos.z) > 9 && !blocked(gx, gz, 0.3)) { pos.x = gx; pos.z = gz; }
        if (inPen(pos.x, pos.z)) {
          c.state = 'pen'; c.who = -1;
          api.sfx('poof');
          api.float('Gack! Zu Hause! 🐔', '#ffe0b2', pos);
          const n = chickens.filter((q) => q.state === 'pen').length;
          if (n >= chickens.length) solve('chickens', p);
          else api.msg(p.index, `🐔 Huhn zurück im Stall! Noch ${chickens.length - n} weggelaufen.`, 3500);
        }
      }
    }
    if (c.state === 'wild') {
      const p = players.find((q) => !(q.dead > 0) && !q.out && q.root.position.y < 1.5 && Math.hypot(q.root.position.x - pos.x, q.root.position.z - pos.z) < 2.6);
      if (p) {
        c.state = 'follow'; c.who = p.index;
        api.sfx('pickup');
        api.float('Gack gack! 🐔', '#ffe0b2', pos);
        api.msg(p.index, '🐔 Das Huhn läuft dir hinterher! Bring es zu Bäuerin Frieda in den Hühnerstall in Hügelhausen.', 4000);
      }
    }
    if (gx === null) {
      // ein bisschen herumpicken
      if (c.t > 2.5) {
        c.t = 0;
        const area = c.state === 'pen' ? { x: (PEN.x1 + PEN.x2) / 2, z: (PEN.z1 + PEN.z2) / 2, r: 3 } : { x: c.home.x, z: c.home.z, r: 4 };
        const a = Math.random() * 6.28, r = Math.random() * area.r;
        c.tx = area.x + Math.sin(a) * r; c.tz = area.z + Math.cos(a) * r;
      }
      gx = c.tx; gz = c.tz; speed = 1.5;
    }
    const dx = gx - pos.x, dz = gz - pos.z, dist = Math.hypot(dx, dz);
    c.moving = dist > 0.4;
    if (c.moving) {
      const sp = Math.min(speed, dist * 3) * dt;
      c.heading = Math.atan2(dx, dz);
      move(c.root, (dx / dist) * sp, (dz / dist) * sp, 0.25);
    }
  }
}

// ---------- Aussehen (auf jedem Gerät) ----------
export function poseVillages(dt, players) {
  time += dt;
  if (blades) blades.rotation.z -= dt * 0.8;
  for (const n of npcs) {
    let near = null, nd = 9;
    for (const p of players) {
      if (p.out) continue;
      const d = Math.hypot(p.root.position.x - n.root.position.x, p.root.position.z - n.root.position.z);
      if (d < nd) { near = p; nd = d; }
    }
    const want = near && nd < 6 ? Math.atan2(near.root.position.x - n.root.position.x, near.root.position.z - n.root.position.z) : n.face;
    let diff = (want - n.yaw) % (Math.PI * 2);
    if (diff > Math.PI) diff -= Math.PI * 2;
    if (diff < -Math.PI) diff += Math.PI * 2;
    n.yaw += diff * Math.min(1, dt * 5);
    n.root.rotation.y = n.yaw;
    n.label.visible = !!near;
    if (n.mark) {
      // schwebt und dreht sich ein bisschen, weg sobald das Rätsel gelöst ist
      n.mark.visible = !st.solved[n.quest];
      n.mark.position.y = (n.label.visible ? 3.25 : 2.75) + Math.sin(time * 2.5 + n.phase) * 0.12;
      n.mark.material.rotation = Math.sin(time * 1.8 + n.phase) * 0.15;
    }
    const wave = near && nd < 3.2 ? Math.sin(time * 6 + n.phase) * 0.35 - 2.4 : -0.15 + Math.sin(time * 1.5 + n.phase) * 0.05;
    animateHuman(n.h, 0, false, wave, -0.15);
  }
  // Steine leuchten, Kiste öffnet sich
  PLATES.forEach((pl, k) => {
    const lit = st.solved.colors || ORDER.indexOf(pl.color) < st.seq;
    plateMats[k].emissiveIntensity = lit ? 0.9 + Math.sin(time * 4) * 0.2 : 0.05;
  });
  if (chest) {
    const open = st.solved.colors;
    chest.lid.rotation.x += ((open ? -1.9 : 0) - chest.lid.rotation.x) * Math.min(1, dt * 3);
    chest.gems.visible = open;
    if (open) chest.gems.rotation.y += dt;
  }
  for (const c of chickens) {
    if (c.moving) c.walk += dt * 14;
    animateAnimal(c.h, c.walk, c.moving);
    let diff = (c.heading - c.root.rotation.y) % (Math.PI * 2);
    if (diff > Math.PI) diff -= Math.PI * 2;
    if (diff < -Math.PI) diff += Math.PI * 2;
    c.root.rotation.y += diff * Math.min(1, dt * 10);
  }
}

// ---------- Netzwerk: Zustand für den Mitspieler ----------
const r2 = (v) => Math.round(v * 100) / 100;
export const villageSnapshot = () => ({
  s: PUZZLES.map((q) => (st.solved[q.id] ? 1 : 0)),
  q: st.seq,
  c: chickens.map((c) => [r2(c.root.position.x), r2(c.root.position.z), r2(c.heading), c.moving ? 1 : 0]),
});
export function applyVillageSnapshot(v) {
  if (!v) return;
  PUZZLES.forEach((q, k) => (st.solved[q.id] = !!v.s[k]));
  st.seq = v.q;
  v.c.forEach(([x, z, h, m], k) => {
    const c = chickens[k];
    if (!c) return;
    c.root.position.x += (x - c.root.position.x) * 0.5;
    c.root.position.z += (z - c.root.position.z) * 0.5;
    c.heading = h; c.moving = !!m;
  });
}

// ---------- Speichern und Laden ----------
export const villageSave = () => ({
  solved: PUZZLES.filter((q) => st.solved[q.id]).map((q) => q.id),
  heard: [...st.heard],
  riddle: st.riddle,
  pen: chickens.map((c, k) => (c.state === 'pen' ? k : -1)).filter((k) => k >= 0),
});
export function villageLoad(s) {
  if (!s) return;
  for (const id of s.solved || []) if (PUZZLES.some((q) => q.id === id)) st.solved[id] = true;
  for (const h of s.heard || []) if (TALK[h]) st.heard.add(h);
  st.riddle = Math.max(0, Math.min(RIDDLES.length - 1, Math.round(Number(s.riddle) || 0)));
  if (st.solved.colors) st.seq = ORDER.length;
  const pen = st.solved.chickens ? chickens.map((_, k) => k) : (s.pen || []);
  for (const k of pen) {
    const c = chickens[k];
    if (!c) continue;
    c.state = 'pen';
    c.root.position.set((PEN.x1 + PEN.x2) / 2 + (Math.random() - 0.5) * 4, 0, (PEN.z1 + PEN.z2) / 2 + (Math.random() - 0.5) * 3);
    c.tx = c.root.position.x; c.tz = c.root.position.z;
  }
}

export function resetVillages(players) {
  for (const p of players) closeDialog(p);
  st.solved = {};
  st.heard.clear();
  st.seq = 0;
  st.riddle = 0;
  for (const c of chickens) {
    c.state = 'wild'; c.who = -1;
    c.root.position.set(c.home.x, 0, c.home.z);
    c.tx = c.home.x; c.tz = c.home.z;
  }
}

// ================= Kleine Karte oben rechts =================
const MAP_PX = 150;
let mapBase = null;
const toMap = (x, z) => [((x + WORLD) / (2 * WORLD)) * MAP_PX, ((z + WORLD) / (2 * WORLD)) * MAP_PX];
function drawMapBase() {
  const cv = document.createElement('canvas');
  cv.width = cv.height = MAP_PX * 2;
  const ctx = cv.getContext('2d');
  ctx.scale(2, 2);
  ctx.fillStyle = '#4f7f35';
  ctx.fillRect(0, 0, MAP_PX, MAP_PX);
  const k = MAP_PX / (2 * WORLD);
  ctx.strokeStyle = '#c8a46a';
  ctx.lineWidth = Math.max(1.5, PATH_W * k);
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(...toMap(0, 70)); ctx.lineTo(...toMap(0, -82));
  for (const [x1, z1, x2, z2] of PATHS) { ctx.moveTo(...toMap(x1, z1)); ctx.lineTo(...toMap(x2, z2)); }
  ctx.stroke();
  ctx.fillStyle = '#9e9a92';
  for (const m of MOUNTAINS) { ctx.beginPath(); ctx.arc(...toMap(m.x, m.z), m.r * k, 0, 7); ctx.fill(); }
  ctx.fillStyle = '#3a8fd0';
  for (const w of [POND, LAKE]) { ctx.beginPath(); ctx.arc(...toMap(w.x, w.z), w.r * k + 1, 0, 7); ctx.fill(); }
  const dot = (x, z, color, r) => { ctx.fillStyle = color; ctx.beginPath(); ctx.arc(...toMap(x, z), r, 0, 7); ctx.fill(); };
  dot(HOME.x, HOME.z, '#1e63d6', 5);
  dot(ENEMY_CASTLE.x, ENEMY_CASTLE.z, '#c62828', 6);
  ctx.font = '13px system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  for (const v of VILLAGES) ctx.fillText('🏘️', ...toMap(v.x, v.z));
  ctx.fillText('🏰', ...toMap(HOME.x, HOME.z));
  ctx.strokeStyle = '#000a';
  ctx.lineWidth = 3;
  ctx.strokeRect(0, 0, MAP_PX, MAP_PX);
  return cv;
}

const mapEls = [0, 1].map((i) => {
  const cv = document.createElement('canvas');
  cv.className = 'minimap';
  cv.id = 'map' + i;
  cv.width = cv.height = MAP_PX * 2;
  document.body.appendChild(cv);
  return cv;
});
const mapT = [0, 0];
export function drawMinimap(i, players, dt, extra = []) {
  if ((mapT[i] -= dt) > 0) return;
  mapT[i] = 0.15;
  if (!mapBase) mapBase = drawMapBase();
  const ctx = mapEls[i].getContext('2d');
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.drawImage(mapBase, 0, 0);
  ctx.scale(2, 2);
  // offene Rätsel: ein ❓ dort, wo man das Rätsel bekommt (gelöste verschwinden)
  const marks = npcs.filter((n) => n.quest && !st.solved[n.quest]).map((n) => toMap(n.root.position.x, n.root.position.z));
  for (let it = 0; it < 4; it++) {   // dicht beieinander? etwas auseinanderschieben
    for (let a = 0; a < marks.length; a++) for (let b = a + 1; b < marks.length; b++) {
      const dx = marks[b][0] - marks[a][0], dy = marks[b][1] - marks[a][1], d = Math.hypot(dx, dy) || 0.01;
      if (d >= 10) continue;
      const push = (10 - d) / 2;
      marks[a] = [marks[a][0] - (dx / d) * push, marks[a][1] - (dy / d) * push];
      marks[b] = [marks[b][0] + (dx / d) * push, marks[b][1] + (dy / d) * push];
    }
  }
  const pulse = 4.6 + Math.sin(time * 5) * 0.7;
  ctx.textBaseline = 'middle';
  for (const [x, y] of marks) {
    ctx.fillStyle = '#ffd54f';
    ctx.strokeStyle = '#3e2723';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.arc(x, y, pulse, 0, 7);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#3e2723';
    ctx.font = 'bold 8px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('?', x, y + 0.5);
  }
  ctx.font = '11px system-ui, sans-serif';
  for (const m of extra) ctx.fillText(m.icon, ...toMap(m.x, m.z).map((v, k) => v + (k ? -9 : 9)));
  ctx.textBaseline = 'alphabetic';
  // gelöste Dörfer bekommen einen Stern
  ctx.font = '10px system-ui, sans-serif';
  ctx.textAlign = 'center';
  const done = { muehle: st.solved.cake, see: st.solved.colors, huegel: st.solved.riddles && st.solved.chickens };
  for (const v of VILLAGES) if (done[v.id]) ctx.fillText('⭐', toMap(v.x, v.z)[0] + 9, toMap(v.x, v.z)[1] - 8);
  // Spieler zuletzt, damit sie über allem liegen
  for (const p of players) {
    if (p.out) continue;
    const [x, y] = toMap(p.root.position.x, p.root.position.z);
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(Math.PI - p.heading);
    ctx.fillStyle = p.index === i ? '#ffeb3b' : '#ff9800';
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, -6); ctx.lineTo(4.5, 5); ctx.lineTo(-4.5, 5); ctx.closePath();
    ctx.fill(); ctx.stroke();
    ctx.restore();
  }
}
export const showMinimap = (i, on) => (mapEls[i].style.display = on ? 'block' : 'none');

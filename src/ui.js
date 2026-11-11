import * as THREE from '../lib/three.module.js';

// ---------- Lebensleiste über dem Kopf ----------
export function makeBar(y = 2.35) {
  const cv = document.createElement('canvas');
  cv.width = 64; cv.height = 10;
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false }));
  sp.scale.set(1.1, 0.17, 1);
  sp.position.y = y;
  sp.renderOrder = 10;
  sp.userData = { cv, tex };
  return sp;
}

export const hpColor = (frac) => (frac > 0.5 ? '#3ecf4a' : frac > 0.25 ? '#f2c230' : '#e53935');

export function drawBar(sp, frac) {
  const { cv, tex } = sp.userData;
  const ctx = cv.getContext('2d');
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, 64, 10);
  ctx.fillStyle = hpColor(frac);
  ctx.fillRect(2, 2, 60 * Math.max(0, frac), 6);
  tex.needsUpdate = true;
}

// ---------- Schwebende Zahlen und Texte ----------
const floaters = [];
export function floatText(scene, text, color, pos, height = 2.6) {
  const cv = document.createElement('canvas');
  cv.width = 320; cv.height = 96;
  const ctx = cv.getContext('2d');
  ctx.font = 'bold 60px system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.lineWidth = 8;
  ctx.strokeStyle = '#000';
  ctx.strokeText(text, 160, 70);
  ctx.fillStyle = color;
  ctx.fillText(text, 160, 70);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true }));
  sp.scale.set(2, 0.6, 1);
  sp.position.set(pos.x + (Math.random() - 0.5) * 0.6, height, pos.z);
  sp.renderOrder = 11;
  scene.add(sp);
  floaters.push({ sp, t: 0 });
}

export function updateFloaters(scene, dt) {
  for (const f of [...floaters]) {
    f.t += dt;
    f.sp.position.y += dt * 1.3;
    f.sp.material.opacity = 1 - f.t;
    if (f.t >= 1) {
      scene.remove(f.sp);
      f.sp.material.map.dispose();
      f.sp.material.dispose();
      floaters.splice(floaters.indexOf(f), 1);
    }
  }
}

// ---------- Töne ----------
let actx;
export function initAudio() {
  if (!actx) actx = new AudioContext();
}
function beep(freq, dur, type = 'square', vol = 0.06, slide = 0, delay = 0) {
  if (!actx) return;
  const t = actx.currentTime + delay;
  const o = actx.createOscillator(), g = actx.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  if (slide) o.frequency.exponentialRampToValueAtTime(slide, t + dur);
  g.gain.setValueAtTime(vol, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  o.connect(g).connect(actx.destination);
  o.start(t);
  o.stop(t + dur);
}
export const sfx = {
  swing: () => beep(500, 0.12, 'triangle', 0.04, 200),
  bow: () => beep(900, 0.08, 'triangle', 0.04, 300),
  gun: () => beep(120, 0.05, 'square', 0.04, 60),
  hit: () => beep(200, 0.12, 'square', 0.07, 70),
  hurt: () => beep(140, 0.3, 'sawtooth', 0.07, 50),
  windup: () => beep(300, 0.25, 'sine', 0.03, 600),
  pickup: () => [660, 880].forEach((f, i) => beep(f, 0.1, 'square', 0.05, 0, i * 0.08)),
  levelUp: () => [523, 659, 784, 1047].forEach((f, i) => beep(f, 0.18, 'square', 0.05, 0, i * 0.12)),
  magic: () => [880, 1320, 1760].forEach((f, i) => beep(f, 0.08, 'sine', 0.04, 0, i * 0.04)),
  bubble: () => beep(600, 0.08, 'sine', 0.04, 1200),
  plop: () => beep(220, 0.15, 'sine', 0.08, 110),
  chop: () => beep(170, 0.09, 'square', 0.07, 80),
  clink: () => [1300, 900].forEach((f, i) => beep(f, 0.06, 'square', 0.04, 600, i * 0.05)),
  poof: () => [523, 784, 1047, 1568].forEach((f, i) => beep(f, 0.12, 'triangle', 0.05, 0, i * 0.06)),
  lifeLost: () => [392, 330, 262].forEach((f, i) => beep(f, 0.25, 'triangle', 0.06, 0, i * 0.2)),
};

// ---------- Nachrichten: eine Box unten, mit ◀ ▶ kann man ältere nochmal lesen ----------
// Alle längeren Hinweise merken, damit man sie unter 💡 Tipps nochmal lesen kann (neueste zuerst, doppelte nur einmal)
export const msgLog = [];
let split = false;   // zu zweit an einer Tastatur: jeder Spieler hat seine eigene Box
const boxes = [0, 1].map(makeBox);

function makeBox(i) {
  const el = document.createElement('div');
  el.className = 'mbox empty mini' + (i ? ' off' : '');
  el.id = 'mbox' + i;
  el.innerHTML = '<button class="mPrev" tabindex="-1" title="ältere Nachricht">◀</button><div class="mText"></div>' +
    '<button class="mNext" tabindex="-1" title="neuere Nachricht">▶</button><div class="mPage"></div>' +
    '<button class="mOpen" tabindex="-1" title="Nachrichten nochmal lesen">💬</button>';
  document.body.appendChild(el);
  const b = { el, hist: [], pos: 0, timer: 0 };
  const tap = (sel, fn) => el.querySelector(sel).addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); fn(); });
  tap('.mPrev', () => page(b, 1));
  tap('.mNext', () => page(b, -1));
  tap('.mOpen', () => { b.pos = 0; show(b, 8000); });
  return b;
}
function render(b) {
  const n = b.hist.length;
  b.el.querySelector('.mText').textContent = b.hist[b.pos] || '';
  b.el.querySelector('.mPage').textContent = b.pos ? `${n - b.pos} von ${n}` : n > 1 ? 'neu' : '';
  b.el.querySelector('.mPrev').disabled = b.pos >= n - 1;
  b.el.querySelector('.mNext').disabled = b.pos <= 0;
  b.el.querySelector('.mOpen').textContent = `💬 ${n}`;
  b.el.classList.toggle('empty', !n);
}
function show(b, ms) {
  render(b);
  b.el.classList.remove('mini');
  clearTimeout(b.timer);
  b.timer = setTimeout(() => { b.pos = 0; b.el.classList.add('mini'); render(b); }, ms);
}
function page(b, d) {
  if (!b.hist.length) return;
  if (b.el.classList.contains('mini')) b.pos = 0;
  else b.pos = Math.max(0, Math.min(b.hist.length - 1, b.pos + d));
  show(b, 8000);
}
// Taste N / Knopf: ältere Nachricht in der Box von Spieler i
export const pageMsg = (i, d = 1) => page(boxes[split ? i : 0], d);
export function setMsgSplit(on) {
  split = on;
  boxes[1].el.classList.toggle('off', !on);
}

// id: 'msg' (für alle), 'msg0' oder 'msg1' (nur für diesen Spieler)
export function showMsg(id, text, ms = 2500) {
  if (!text) return;
  if (ms > 2500) {
    const old = msgLog.indexOf(text);
    if (old >= 0) msgLog.splice(old, 1);
    msgLog.unshift(text);
    if (msgLog.length > 25) msgLog.length = 25;
  }
  const targets = !split ? [0] : id === 'msg1' ? [1] : id === 'msg0' ? [0] : [0, 1];
  for (const k of targets) {
    const b = boxes[k];
    if (b.hist[0] !== text) b.hist.unshift(text);
    if (b.hist.length > 30) b.hist.length = 30;
    b.pos = 0;
    show(b, Math.max(ms, 2500) + 1500);   // etwas länger stehen lassen, unten stört sie ja nicht
  }
}

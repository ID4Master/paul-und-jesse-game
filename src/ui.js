import * as THREE from 'three';

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
  lifeLost: () => [392, 330, 262].forEach((f, i) => beep(f, 0.25, 'triangle', 0.06, 0, i * 0.2)),
};

// ---------- Nachrichten auf dem Bildschirm ----------
const timers = {};
export function showMsg(id, text, ms = 2500) {
  const el = document.getElementById(id);
  el.textContent = text;
  el.style.opacity = 1;
  clearTimeout(timers[id]);
  timers[id] = setTimeout(() => (el.style.opacity = 0), ms);
}

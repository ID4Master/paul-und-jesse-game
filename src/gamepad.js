// ================= Game-Controller (Xbox, PlayStation, Switch Pro, ...) =================
// Der Browser kennt Controller über die Gamepad-API. Die meisten melden sich mit der
// "standard"-Belegung, dann sind die Knöpfe überall gleich nummeriert:
//   0 A/✕  1 B/○  2 X/□  3 Y/△  4 LB/L1  5 RB/R1  6 LT/L2  7 RT/R2
//   8 Back/Share  9 Start/Options  10 linker Stick drücken  11 rechter Stick drücken
//   12-15 Steuerkreuz hoch/runter/links/rechts
// Die Steuerung mit Tastatur und Touch bleibt, der Controller kommt nur dazu.

const BTN = { A: 0, B: 1, X: 2, Y: 3, LB: 4, RB: 5, LT: 6, RT: 7, BACK: 8, START: 9, L3: 10, R3: 11, UP: 12, DOWN: 13, LEFT: 14, RIGHT: 15 };

// ---------- Einstellungen (werden im Browser gemerkt) ----------
export const PAD_OPTS = {
  move: { label: '🕹️ Laufen mit', vals: [['both', 'Stick und Steuerkreuz'], ['stick', 'nur Stick'], ['dpad', 'nur Steuerkreuz']] },
  turn: { label: '↪️ Drehen', vals: [['0.55', 'langsam'], ['0.8', 'normal'], ['1', 'schnell']] },
  dead: { label: '🎯 Stick-Spiel', vals: [['0.15', 'klein'], ['0.25', 'mittel'], ['0.35', 'groß']] },
  right: { label: '🖐️ Rechter Stick dreht', vals: [['on', 'an'], ['off', 'aus']] },
};
export const padSet = { move: 'both', turn: '0.8', dead: '0.25', right: 'on' };
try { Object.assign(padSet, JSON.parse(localStorage.getItem('kic-pad') || '{}')); } catch (e) { /* egal */ }
for (const k in PAD_OPTS) if (!PAD_OPTS[k].vals.some(([v]) => v === padSet[k])) padSet[k] = PAD_OPTS[k].vals[0][0];
export function cyclePad(k) {
  const vals = PAD_OPTS[k].vals, i = vals.findIndex(([v]) => v === padSet[k]);
  padSet[k] = vals[(i + 1) % vals.length][0];
  try { localStorage.setItem('kic-pad', JSON.stringify(padSet)); } catch (e) { /* egal */ }
}
export const padLabel = (k) => `${PAD_OPTS[k].label}: ${PAD_OPTS[k].vals.find(([v]) => v === padSet[k])[1]}`;

// Was die Controller gerade für Spieler 1 und 2 drücken (wird in readLocalInput dazugezählt)
export const padIn = [0, 1].map(() => ({ fwd: 0, turn: 0, attack: false }));
const usedBy = [false, false];   // hat dieser Spieler schon mal einen Controller benutzt?
export const padUsed = (i) => !!usedBy[i];

let api = null;
const prev = {};                 // Knöpfe beim letzten Mal, je Controller
const blockA = {};               // A/RT erst wieder loslassen (nach Menü), sonst zaubert man sofort
let nav = { dir: 0, t: 0 };
let overlayWas = null, focusIdx = 0, focusEl = null;

// api: { started, mode, me, players, action(i, name), initAudio, onConnect(name) }
export function initGamepads(a) {
  api = a;
  addEventListener('gamepadconnected', (e) => api.onConnect?.(e.gamepad));
}

const pads = () => {
  const list = navigator.getGamepads ? [...navigator.getGamepads()] : [];
  return list.filter((g) => g && g.connected !== false).sort((a, b) => a.index - b.index);
};
const pressed = (g, i) => { const b = g.buttons[i]; return !!b && (b.pressed || b.value > 0.5); };
// Manche Controller (z. B. PS5 ohne "standard"-Belegung) melden die Schultertasten L2/R2 als Achse,
// die in Ruhe bei -1 steht. So eine Achse merken wir uns beim ersten Mal und lassen sie weg,
// sonst dreht sich die Figur von allein.
const rest = {};
function raw(g, i) {
  const v = g.axes[i];
  if (typeof v !== 'number' || !isFinite(v)) return 0;
  const r = rest[g.index] || (rest[g.index] = g.axes.map((a) => Math.abs(a) > 0.6));
  return r[i] ? 0 : v;
}
// Stick: runde Totzone (gegen Zittern und alte, ausgeleierte Sticks), danach fast gerade = ganz gerade,
// damit man beim Geradeauslaufen nicht nebenbei ein bisschen lenkt.
function stick(g, ax, ay) {
  const dead = +padSet.dead;
  let x = raw(g, ax), y = raw(g, ay);
  const len = Math.hypot(x, y);
  if (len < dead) return [0, 0];
  const k = Math.min(1, (len - dead) / (0.92 - dead)) / len;
  x *= k; y *= k;
  if (Math.abs(x) < Math.abs(y) * 0.4) x = 0;
  else if (Math.abs(y) < Math.abs(x) * 0.4) y = 0;
  return [x, y];
}
// Für Menüs: einfache Achse mit fester Schwelle
const axis = (g, i) => { const v = raw(g, i); return Math.abs(v) < 0.5 ? 0 : v; };
const clamp = (v) => Math.max(-1, Math.min(1, v));
const curve = (v) => Math.sign(v) * (0.35 * Math.abs(v) + 0.65 * v * v);   // feiner lenken bei wenig Ausschlag
const smooth = [0, 1].map(() => ({ fwd: 0, turn: 0 }));

// Welcher Spieler gehört zu welchem Controller?
// Zu zweit an einem Gerät: 1. Controller → Spieler 1, 2. Controller → Spieler 2. Sonst steuern alle den eigenen Spieler.
function playerFor(k) {
  if (api.mode() === 'local') return k < 2 ? k : -1;
  return api.me();
}

// ---------- Fenster und Menüs mit dem Controller bedienen ----------
const vis = (el) => !!el && !el.hidden && el.getClientRects().length > 0;
const OVERLAYS = [
  ['padBox', 'padClose'], ['gameMenu', 'gmResume'], ['worldMap', 'wmClose'], ['bagBox', 'bagClose'], ['tipsBox', 'tipsClose'], ['hudBox', 'hudClose'], ['menu', null],
];
function openOverlay() {
  for (const [id, close] of OVERLAYS) {
    const el = document.getElementById(id);
    if (vis(el)) return { el, id, close };
  }
  return null;
}
function focusables(el) {
  return [...el.querySelectorAll('button, summary, input:not([type=file])')].filter((b) => !b.disabled && vis(b) && b.tabIndex !== -1);
}
function setFocus(list, i) {
  if (focusEl) focusEl.classList.remove('padFocus');
  if (!list.length) { focusEl = null; return; }
  focusIdx = (i + list.length) % list.length;
  focusEl = list[focusIdx];
  focusEl.classList.add('padFocus');
  focusEl.focus({ preventScroll: true });
  focusEl.scrollIntoView({ block: 'nearest' });
}
function clearFocus() {
  if (focusEl) { focusEl.classList.remove('padFocus'); focusEl.blur(); }
  focusEl = null;
}

// Hoch/runter mit Wiederholung, wenn man den Stick festhält
function navStep(dir, dt) {
  if (!dir) { nav = { dir: 0, t: 0 }; return 0; }
  if (dir !== nav.dir) { nav = { dir, t: 0.4 }; return dir; }
  nav.t -= dt;
  if (nav.t <= 0) { nav.t = 0.18; return dir; }
  return 0;
}

function menuInput(ov, list, dt) {
  if (ov.id !== overlayWas) {
    overlayWas = ov.id;
    setFocus(focusables(ov.el), 0);
  }
  const items = focusables(ov.el);
  if (focusEl && !items.includes(focusEl)) setFocus(items, Math.min(focusIdx, items.length - 1));
  if (!focusEl && items.length) setFocus(items, 0);
  let dir = 0, a = false, b = false, start = false, sel = false;
  for (const { g, was } of list) {
    const y = axis(g, 1), x = axis(g, 0);
    if (pressed(g, BTN.DOWN) || pressed(g, BTN.RIGHT) || y > 0.5 || x > 0.5) dir = 1;
    if (pressed(g, BTN.UP) || pressed(g, BTN.LEFT) || y < -0.5 || x < -0.5) dir = -1;
    const edge = (i) => pressed(g, i) && !was[i];
    a = a || edge(BTN.A);
    b = b || edge(BTN.B);
    start = start || edge(BTN.START);
    sel = sel || edge(BTN.BACK);
    if (pressed(g, BTN.A) || pressed(g, BTN.RT)) blockA[g.index] = true;
  }
  const step = navStep(dir, dt);
  if (step) setFocus(items, focusIdx + step);
  if (a && focusEl) { focusEl.click(); return; }
  if (b || start || (sel && ov.id === 'worldMap')) {
    if (ov.id === 'menu') {
      const back = document.getElementById('btnBack');
      if (b && vis(back)) back.click();
    } else {
      document.getElementById(ov.close)?.click();
    }
  }
}

// Jedes Bild einmal aufrufen (auch wenn das Spiel wegen eines offenen Menüs angehalten ist)
export function pollGamepads(dt) {
  if (!api) return;
  const want = [0, 1].map(() => ({ fwd: 0, turn: 0 }));
  for (const p of padIn) p.attack = false;
  const list = pads().map((g) => {
    const was = prev[g.index] || [];
    prev[g.index] = g.buttons.map((b, i) => pressed(g, i));
    return { g, was };
  });
  const settle = () => [0, 1].forEach((i) => {
    // weich nachziehen statt springen: Stick-Rauschen und Zucken werden geglättet
    const s = smooth[i], k = Math.min(1, dt * 14);
    s.fwd += (want[i].fwd - s.fwd) * k;
    s.turn += (want[i].turn - s.turn) * k;
    if (!want[i].fwd && Math.abs(s.fwd) < 0.05) s.fwd = 0;
    if (!want[i].turn && Math.abs(s.turn) < 0.05) s.turn = 0;
    padIn[i].fwd = s.fwd;
    padIn[i].turn = s.turn;
  });
  if (!list.length) { clearFocus(); overlayWas = null; settle(); return; }
  for (const { g, was } of list) if (g.buttons.some((b, i) => pressed(g, i) && !was[i])) api.initAudio?.();

  const ov = openOverlay();
  if (ov) { menuInput(ov, list, dt); settle(); return; }
  if (overlayWas) { clearFocus(); overlayWas = null; }
  if (!api.started()) { settle(); return; }

  list.forEach(({ g, was }, k) => {
    const i = playerFor(k);
    const p = api.players()[i];
    if (i < 0 || !p) return;
    const inp = padIn[i];
    const edge = (b) => pressed(g, b) && !was[b];
    // Linker Stick oder Steuerkreuz: laufen. Rechter Stick links/rechts: umdrehen und umschauen.
    let fwd = 0, turn = 0;
    if (padSet.move !== 'dpad') {
      const [x, y] = stick(g, 0, 1);
      fwd -= y;
      turn -= curve(x);
    }
    // Den rechten Stick kennen wir nur bei der "standard"-Belegung sicher (Achse 2)
    if (padSet.right === 'on' && g.mapping === 'standard') turn -= curve(stick(g, 2, 3)[0]);
    if (padSet.move !== 'stick') {
      fwd += (pressed(g, BTN.UP) ? 1 : 0) - (pressed(g, BTN.DOWN) ? 1 : 0);
      turn += (pressed(g, BTN.LEFT) ? 1 : 0) - (pressed(g, BTN.RIGHT) ? 1 : 0);
    }
    want[i].fwd = clamp(want[i].fwd + fwd);
    want[i].turn = clamp(want[i].turn + turn * +padSet.turn);
    const atk = pressed(g, BTN.A) || pressed(g, BTN.RT);
    if (!atk) blockA[g.index] = false;
    if (atk && !blockA[g.index]) inp.attack = true;
    if (fwd || turn || atk || g.buttons.some((b, n) => pressed(g, n))) usedBy[i] = true;
    if (edge(BTN.X) || edge(BTN.LB) || edge(BTN.RB)) api.action(i, 'swap');
    if (edge(BTN.Y)) api.action(i, 'fort');
    if (edge(BTN.B)) api.action(i, 'bag');
    if (edge(BTN.BACK)) api.action(i, 'map');
    if (edge(BTN.START)) api.action(i, 'menu');
    if (edge(BTN.LT)) api.action(i, 'tips');
    if (edge(BTN.L3)) api.action(i, 'msgs');
    if (edge(BTN.R3)) api.action(i, 'hud');
  });
  settle();
}

export const PAD_HELP = 'Linker Stick oder Steuerkreuz: laufen, rechter Stick: umdrehen. A (✕) oder RT: zaubern und reden. X (□), LB oder RB: Zauber wechseln. Y (△): Festung. B (○): Rucksack. Back/Share: Weltkarte. Start/Options: Menü. LT: Tipps. Im Menü unter „Controller einstellen“ kannst du wählen, ob Stick oder Steuerkreuz zum Laufen zählen und wie schnell du dich drehst. In Fenstern und Menüs: Steuerkreuz wählen, A drücken, B schließt.';

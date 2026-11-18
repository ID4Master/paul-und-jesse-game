// ================= Game-Controller (Xbox, PlayStation, Switch Pro, ...) =================
// Der Browser kennt Controller über die Gamepad-API. Die meisten melden sich mit der
// "standard"-Belegung, dann sind die Knöpfe überall gleich nummeriert:
//   0 A/✕  1 B/○  2 X/□  3 Y/△  4 LB/L1  5 RB/R1  6 LT/L2  7 RT/R2
//   8 Back/Share  9 Start/Options  10 linker Stick drücken  11 rechter Stick drücken
//   12-15 Steuerkreuz hoch/runter/links/rechts
// Die Steuerung mit Tastatur und Touch bleibt, der Controller kommt nur dazu.

const BTN = { A: 0, B: 1, X: 2, Y: 3, LB: 4, RB: 5, LT: 6, RT: 7, BACK: 8, START: 9, L3: 10, R3: 11, UP: 12, DOWN: 13, LEFT: 14, RIGHT: 15 };
const DEAD = 0.25;

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
const axis = (g, i) => {
  const v = g.axes[i] || 0;
  return Math.abs(v) < DEAD ? 0 : Math.sign(v) * (Math.abs(v) - DEAD) / (1 - DEAD);
};
const clamp = (v) => Math.max(-1, Math.min(1, v));

// Welcher Spieler gehört zu welchem Controller?
// Zu zweit an einem Gerät: 1. Controller → Spieler 1, 2. Controller → Spieler 2. Sonst steuern alle den eigenen Spieler.
function playerFor(k) {
  if (api.mode() === 'local') return k < 2 ? k : -1;
  return api.me();
}

// ---------- Fenster und Menüs mit dem Controller bedienen ----------
const vis = (el) => !!el && !el.hidden && el.getClientRects().length > 0;
const OVERLAYS = [
  ['gameMenu', 'gmResume'], ['worldMap', 'wmClose'], ['bagBox', 'bagClose'], ['tipsBox', 'tipsClose'], ['hudBox', 'hudClose'], ['menu', null],
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
  for (const p of padIn) { p.fwd = 0; p.turn = 0; p.attack = false; }
  const list = pads().map((g) => {
    const was = prev[g.index] || [];
    prev[g.index] = g.buttons.map((b, i) => pressed(g, i));
    return { g, was };
  });
  if (!list.length) { clearFocus(); overlayWas = null; return; }
  for (const { g, was } of list) if (g.buttons.some((b, i) => pressed(g, i) && !was[i])) api.initAudio?.();

  const ov = openOverlay();
  if (ov) { menuInput(ov, list, dt); return; }
  if (overlayWas) { clearFocus(); overlayWas = null; }
  if (!api.started()) return;

  list.forEach(({ g, was }, k) => {
    const i = playerFor(k);
    const p = api.players()[i];
    if (i < 0 || !p) return;
    const inp = padIn[i];
    const edge = (b) => pressed(g, b) && !was[b];
    // Linker Stick oder Steuerkreuz: laufen. Rechter Stick links/rechts: umdrehen und umschauen.
    const fwd = -axis(g, 1) + (pressed(g, BTN.UP) ? 1 : 0) - (pressed(g, BTN.DOWN) ? 1 : 0);
    const turn = -axis(g, 0) - axis(g, 2) + (pressed(g, BTN.LEFT) ? 1 : 0) - (pressed(g, BTN.RIGHT) ? 1 : 0);
    inp.fwd = clamp(inp.fwd + fwd);
    inp.turn = clamp(inp.turn + turn);
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
}

export const PAD_HELP = 'Linker Stick oder Steuerkreuz: laufen, rechter Stick: umdrehen. A (✕) oder RT: zaubern und reden. X (□), LB oder RB: Zauber wechseln. Y (△): Festung. B (○): Rucksack. Back/Share: Weltkarte. Start/Options: Menü. LT: Tipps. In Fenstern und Menüs: Steuerkreuz wählen, A drücken, B schließt.';

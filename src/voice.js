// Sprachchat beim Spiel übers Internet.
// Die Stimme geht direkt (WebRTC) von Browser zu Browser, über dieselbe PeerJS-Verbindung wie das Spiel.
// Nichts wird gespeichert oder aufgenommen.

// Gleiche Mikrofon-Einstellungen wie im Sprachchat von RA-Skywalk: Echo- und Rauschunterdrückung an
const MIC = { audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, channelCount: 1 }, video: false };

const $ = (id) => document.getElementById(id);
let peer = null, remoteId = null, call = null, pendingCall = null;
let localStream = null, micOk = false, muted = false, hungUp = false, active = false;
let analyser = null, levelData = null;

async function getLocalStream() {
  if (localStream) return localStream;
  try {
    localStream = await navigator.mediaDevices.getUserMedia(MIC);
    micOk = true;
  } catch {
    // Kein Mikrofon erlaubt: stumme Leitung, dann kann man trotzdem zuhören
    micOk = false;
    localStream = new AudioContext().createMediaStreamDestination().stream;
  }
  applyMute();
  return localStream;
}

function applyMute() {
  localStream?.getAudioTracks().forEach((t) => (t.enabled = micOk && !muted));
  render();
}

function attach(c) {
  if (call && call !== c) call.close();
  call = c;
  setStatus('connecting');
  c.on('stream', (remote) => {
    const audio = $('vAudio');
    audio.srcObject = remote;
    audio.play().catch(() => {});
    watchLevel(remote);
    setStatus('on');
  });
  c.on('close', () => { if (call === c) { call = null; setStatus(hungUp ? 'off' : 'lost'); } });
  c.on('error', () => { if (call === c) { call = null; setStatus('lost'); } });
}

async function dial() {
  const s = await getLocalStream();
  if (!active) return;
  attach(peer.call(remoteId, s));
}

async function answer(c) {
  pendingCall = null;
  c.answer(await getLocalStream());
  attach(c);
}

// Lautstärke des Mitspielers anzeigen, damit man sieht, wer gerade spricht
function watchLevel(stream) {
  try {
    const ctx = new AudioContext();
    analyser = ctx.createAnalyser();
    analyser.fftSize = 256;
    levelData = new Uint8Array(analyser.frequencyBinCount);
    ctx.createMediaStreamSource(stream).connect(analyser);
  } catch { analyser = null; }
}
function levelLoop() {
  if (analyser && status === 'on') {
    analyser.getByteFrequencyData(levelData);
    const avg = levelData.reduce((a, b) => a + b, 0) / levelData.length;
    $('voice').classList.toggle('talking', avg > 18);
  } else $('voice').classList.remove('talking');
  requestAnimationFrame(levelLoop);
}

let status = 'off';
const STATUS_TEXT = {
  connecting: '🎙️ Sprachchat verbindet …',
  on: '🎙️ Sprachchat an',
  off: '🔕 Sprachchat aus',
  lost: '⚠️ Sprachchat getrennt',
  ringing: '📞 Dein Mitspieler möchte sprechen',
};
function setStatus(s) { status = s; render(); }

function render() {
  if (!active) return;
  $('vStatus').textContent = STATUS_TEXT[status];
  const talking = status === 'on' || status === 'connecting';
  const mute = $('vMute');
  mute.hidden = !talking;
  mute.textContent = !micOk ? '🚫 Kein Mikrofon (nur zuhören)' : muted ? '🔇 Stumm – antippen zum Sprechen' : '🎤 Mikro an';
  mute.classList.toggle('off', muted || !micOk);
  $('vHang').hidden = !talking;
  $('vCall').hidden = talking;
  $('vCall').textContent = status === 'ringing' ? '📞 Annehmen' : '📞 Wieder verbinden';
}

const noFocus = (fn) => (e) => { e.currentTarget.blur(); fn(); };   // sonst löst die Leertaste im Spiel den Knopf aus

export function startVoice(p, rid, isCaller) {
  peer = p;
  remoteId = rid;
  active = true;
  $('voice').hidden = false;
  $('vMute').onclick = noFocus(() => { muted = !muted; applyMute(); });
  $('vHang').onclick = noFocus(() => { hungUp = true; call?.close(); call = null; setStatus('off'); });
  $('vCall').onclick = noFocus(() => { hungUp = false; if (pendingCall) answer(pendingCall); else dial(); });
  peer.on('call', (c) => {
    // Wer den Sprachchat selbst beendet hat, wird nicht einfach wieder verbunden, sondern gefragt
    if (hungUp) { pendingCall = c; setStatus('ringing'); return; }
    answer(c);
  });
  levelLoop();
  if (isCaller) dial();
  else setStatus('connecting');
}

export function stopVoice() {
  if (!active) return;
  call?.close();
  call = null;
  localStream?.getTracks().forEach((t) => t.stop());
  localStream = null;
  active = false;
  $('voice').hidden = true;
}

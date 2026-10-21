// Netzwerkspiel über WebRTC (PeerJS). Der Ersteller des Spiels rechnet alles,
// der Mitspieler schickt nur seine Tasten und bekommt den Spielstand zurück.

const PEERJS_URL = 'https://unpkg.com/peerjs@1.5.4/dist/peerjs.min.js';
const PREFIX = 'paul-jesse-game-';

let loading;
function loadPeer() {
  if (window.Peer) return Promise.resolve(window.Peer);
  loading ??= new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = PEERJS_URL;
    s.onload = () => resolve(window.Peer);
    s.onerror = () => reject(new Error('PeerJS konnte nicht geladen werden'));
    document.head.appendChild(s);
  });
  return loading;
}

export function randomCode() {
  const letters = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  let code = '';
  for (let i = 0; i < 4; i++) code += letters[Math.floor(Math.random() * letters.length)];
  return code;
}

// Spiel erstellen: wartet auf einen Mitspieler
export async function hostGame(code, { onConnection, onError }) {
  const Peer = await loadPeer();
  const peer = new Peer(PREFIX + code.toLowerCase());
  peer.on('connection', (conn) => conn.on('open', () => onConnection(conn)));
  peer.on('error', (err) => onError(err));
  return peer;
}

// Spiel beitreten mit dem Code des Erstellers
export async function joinGame(code, { onOpen, onError }) {
  const Peer = await loadPeer();
  const peer = new Peer();
  peer.on('open', () => {
    const conn = peer.connect(PREFIX + code.trim().toLowerCase(), { reliable: true });
    conn.on('open', () => onOpen(conn));
    conn.on('error', (err) => onError(err));
  });
  peer.on('error', (err) => onError(err));
  return peer;
}

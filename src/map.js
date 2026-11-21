// Die große Karte: drei neue Dörfer weit draußen und Wege dorthin.
// Steht in einer eigenen Datei, damit Welt, Gras und Dörfer dieselben Zahlen benutzen.

export const VILLAGES = [
  { id: 'muehle', name: 'Mühlbach', x: -200, z: -60, r: 34, dir: 'im Westen, hinter den Bergen' },
  { id: 'see', name: 'Seedorf', x: 200, z: -160, r: 34, dir: 'im Osten, an einem großen See' },
  { id: 'huegel', name: 'Hügelhausen', x: 0, z: 220, r: 34, dir: 'im Süden, hinter eurer Burg' },
];

export const LAKE = { x: 238, z: -150, r: 17 };

// Großer See hinter den Teichwiesen: Hier fahren die Boote. Drei Inseln mit Schatztruhen.
// rough: 0 ruhiges Wasser, 1 hohe Wellen (erst mit dem Ruderboot), 2 Strudel (nur das Segelschiff schafft das)
// ring: bis zu diesem Abstand um die Insel reichen die Wellen oder der Strudel
export const SEE = { x: 106, z: 52, r: 22 };
export const ISLANDS = [
  { id: 'seerose', name: 'Seerosen-Insel', x: 98, z: 64, r: 2.6, ring: 0, rough: 0, loot: ['gold', 'gold', 'star', 'heart'] },
  { id: 'moewe', name: 'Möweninsel', x: 117.5, z: 42.4, r: 2.4, ring: 5, rough: 1, loot: ['gold', 'gold', 'gold', 'star', 'star', 'life'] },
  { id: 'schatz', name: 'Schatzinsel', x: 106, z: 52, r: 3.2, ring: 6.5, rough: 2, loot: ['gold', 'gold', 'gold', 'gold', 'gold', 'star', 'star', 'star', 'life', 'life'] },
];
// Bootswerft am Westufer (Holzboden mit den Bau-Flächen) und Steg ins Wasser
export const WERFT = { x1: 73, x2: 82.5, z1: 42, z2: 62 };

// Die ganze Welt ist eine Insel: rundherum Strand und Meer. Die Küste ist ein Quadrat mit runden Ecken,
// das mit ein paar Wellen ausgebeult wird, damit es wie eine echte Insel aussieht. Nur beim Hafen ist sie gerade.
export const COAST = { c: 286, r: 95, beach: 9, limit: 400 };
export function coastWobble(a) {
  const w = 5 + 9 * Math.sin(3 * a + 1) + 6 * Math.sin(5 * a + 2) + 3.5 * Math.sin(11 * a + 0.5) + 2 * Math.sin(17 * a + 4);
  let d = Math.abs(a - Math.PI / 2);   // Hafen im Süden (+z)
  if (d > Math.PI) d = Math.PI * 2 - d;
  return w * Math.min(1, Math.max(0, (d - 0.12) / 0.3));
}
// Abstand zur Küste: kleiner 0 = Land, größer 0 = Meer
export function coastDist(x, z) {
  const k = COAST.c - COAST.r;
  const qx = Math.abs(x) - k, qz = Math.abs(z) - k;
  return Math.hypot(Math.max(qx, 0), Math.max(qz, 0)) + Math.min(Math.max(qx, qz), 0) - COAST.r - coastWobble(Math.atan2(z, x));
}
// Punkt in Richtung a (Winkel wie atan2(z, x)), der off Meter vor (off > 0) oder hinter der Küste liegt
export function coastPoint(a, off = 0) {
  const dx = Math.cos(a), dz = Math.sin(a);
  let d = COAST.c + off;
  for (let n = 0; n < 8; n++) d -= coastDist(dx * d, dz * d) - off;
  return { x: dx * d, z: dz * d };
}
// Hafen im Süden, unterhalb von Hügelhausen. Stege gehen ins Meer hinaus.
export const HARBOR = { x1: -22, x2: 24, z1: 266, z2: 286.5, piers: [{ x: 0, z1: 283, z2: 300, w: 0.9 }, { x: 10, z1: 283, z2: 300, w: 0.9 }] };
// Inseln im Meer: je weiter draußen, desto höher die Wellen (out = Abstand zur Küste).
// Mit dem Ruderboot bis 18 m hinaus, mit dem Segelschiff bis 36 m, nur der Dreimaster fährt ganz raus.
// Lage: Winkel a (wie atan2(z, x)) und Abstand out vor der Küste. Die Pirateninsel ist eine richtige zweite Insel mit Strand.
export const SEA_ISLANDS = [
  { id: 'muschel', name: 'Muschelinsel', a: 1.36, out: 11, r: 3, loot: ['gold', 'gold', 'gold', 'star', 'heart'] },
  { id: 'leucht', name: 'Möwenfelsen', a: 1.95, out: 27, r: 3.2, loot: ['gold', 'gold', 'gold', 'gold', 'star', 'star', 'life'] },
  { id: 'pirat', name: 'Pirateninsel', a: 0.95, out: 62, r: 16, big: true, loot: ['gold', 'gold', 'gold', 'gold', 'gold', 'gold', 'star', 'star', 'star', 'life', 'life'] },
];
for (const i of SEA_ISLANDS) Object.assign(i, coastPoint(i.a, i.out));
export const SEA_ZONES = [18, 36];   // ab hier: hohe Wellen, dann Sturmwellen

export const nearSee = (x, z, extra = 0) =>
  coastDist(x, z) > -COAST.beach - 3 - extra ||
  (x > HARBOR.x1 - extra && x < HARBOR.x2 + extra && z > HARBOR.z1 - extra) ||
  Math.hypot(x - SEE.x, z - SEE.z) < SEE.r + 2 + extra || (x > WERFT.x1 - extra && x < WERFT.x2 + extra && z > WERFT.z1 - extra && z < WERFT.z2 + extra);

// Wege: [x1, z1, x2, z2], 4 breit
export const PATH_W = 4;
export const PATHS = [
  [3, 60, 14, 60], [14, 60, 14, 97],          // vom Burgtor zwischen Burg und Stall nach hinten
  [-14, 97, 42, 97],                          // hinter eurer Burg entlang
  [-14, 97, -176, 62], [-176, 62, -198, -36], // nach Mühlbach
  [42, 97, 182, 62], [182, 62, 198, -136],    // nach Seedorf
  [0, 97, 0, 198],                            // nach Hügelhausen
  [0, 252, 0, 268],                           // von Hügelhausen runter zum Hafen
];

// Abstand von einem Punkt zu einem Wegstück
export function pathDist(x, z) {
  let best = Infinity;
  for (const [x1, z1, x2, z2] of PATHS) {
    const dx = x2 - x1, dz = z2 - z1;
    const t = Math.max(0, Math.min(1, ((x - x1) * dx + (z - z1) * dz) / (dx * dx + dz * dz)));
    best = Math.min(best, Math.hypot(x - (x1 + dx * t), z - (z1 + dz * t)));
  }
  return best;
}

export const nearVillage = (x, z, extra = 0) =>
  VILLAGES.some((v) => Math.hypot(x - v.x, z - v.z) < v.r + extra) || Math.hypot(x - LAKE.x, z - LAKE.z) < LAKE.r + 3 + extra;

// Bauernhof: Getreidefeld östlich vom Stall und Platz für die Bäckerei dahinter
export const FIELD = { x1: 40, x2: 50, z1: 66, z2: 80 };
export const BAKERY = { x: 45, z: 88 };
export const nearFarm = (x, z, extra = 0) =>
  (x > FIELD.x1 - 2 - extra && x < FIELD.x2 + 6 + extra && z > FIELD.z1 - 4 - extra && z < BAKERY.z + 4 + extra);

// Früher wuchs die Welt hinter einer Nebelwand. Jetzt ist die ganze Insel von Anfang an offen, das Meer ist die Grenze.
export const WORLD_LEVELS = [300];
export const LEVEL_NEED = [0];

// Gebiete der Weltkarte. Jedes hat einen Reisestein; von Stein zu Stein kann man reisen.
// big: ein Riesenschatz versteckt sich dort (nur in den wilden Gebieten ganz draußen)
export const SECTORS = [
  { id: 'burg', name: 'Burgland', icon: '🏰', x: 0, z: 80, sx: 30, sz: 100 },
  { id: 'schelm', name: 'Schelmenburg', icon: '😈', x: 0, z: -100, sx: 32, sz: -34 },
  { id: 'teich', name: 'Teichwiesen', icon: '🌊', x: 60, z: 40, sx: 70, sz: 52 },
  { id: 'muehle', name: 'Mühlbach', icon: '🌾', x: -200, z: -60, sx: -186, sz: 0 },
  { id: 'see', name: 'Seedorf', icon: '⛵', x: 200, z: -160, sx: 190, sz: -60 },
  { id: 'huegel', name: 'Hügelhausen', icon: '⛰️', x: 0, z: 220, sx: 9, sz: 185 },
  { id: 'nebel', name: 'Nebelwald', icon: '🌲', x: -232, z: -232, sx: -226, sz: -220, big: true },
  { id: 'sonne', name: 'Sonnenhain', icon: '🌻', x: 262, z: 170, sx: 258, sz: 160, big: true },
];
// Ab welcher Stufe ist ein Gebiet offen?
export const sectorLevel = (s) => WORLD_LEVELS.findIndex((r) => Math.max(Math.abs(s.sx), Math.abs(s.sz)) + 8 < r && Math.max(Math.abs(s.x), Math.abs(s.z)) < r + 10);

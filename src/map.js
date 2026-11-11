// Die große Karte: drei neue Dörfer weit draußen und Wege dorthin.
// Steht in einer eigenen Datei, damit Welt, Gras und Dörfer dieselben Zahlen benutzen.

export const VILLAGES = [
  { id: 'muehle', name: 'Mühlbach', x: -200, z: -60, r: 34, dir: 'im Westen, hinter den Bergen' },
  { id: 'see', name: 'Seedorf', x: 200, z: -160, r: 34, dir: 'im Osten, an einem großen See' },
  { id: 'huegel', name: 'Hügelhausen', x: 0, z: 220, r: 34, dir: 'im Süden, hinter eurer Burg' },
];

export const LAKE = { x: 238, z: -150, r: 17 };

// Wege: [x1, z1, x2, z2], 4 breit
export const PATH_W = 4;
export const PATHS = [
  [3, 60, 14, 60], [14, 60, 14, 97],          // vom Burgtor zwischen Burg und Stall nach hinten
  [-14, 97, 42, 97],                          // hinter eurer Burg entlang
  [-14, 97, -176, 62], [-176, 62, -198, -36], // nach Mühlbach
  [42, 97, 182, 62], [182, 62, 198, -136],    // nach Seedorf
  [0, 97, 0, 198],                            // nach Hügelhausen
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

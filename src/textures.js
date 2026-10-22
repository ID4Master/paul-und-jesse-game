import * as THREE from 'three';

// Kleine, selbst gemalte Texturen (keine Bilddateien nötig, lädt sofort)
function canvasTex(size, draw, repeat = true) {
  const cv = document.createElement('canvas');
  cv.width = cv.height = size;
  draw(cv.getContext('2d'), size);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  if (repeat) tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.anisotropy = 4;
  return tex;
}

const rnd = (() => { let s = 7; return () => (s = (s * 16807) % 2147483647) / 2147483647; })();

function speckle(ctx, size, n, colors, rMax) {
  for (let i = 0; i < n; i++) {
    ctx.fillStyle = colors[Math.floor(rnd() * colors.length)];
    const r = 0.5 + rnd() * rMax;
    ctx.beginPath();
    ctx.arc(rnd() * size, rnd() * size, r, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Mauersteine, hell, damit die Materialfarbe sie einfärben kann
export const brickTex = canvasTex(256, (ctx, s) => {
  ctx.fillStyle = '#8f8a80';
  ctx.fillRect(0, 0, s, s);
  const rows = 8, bh = s / rows;
  for (let r = 0; r < rows; r++) {
    const bw = s / 4, off = r % 2 ? bw / 2 : 0;
    for (let c = -1; c < 5; c++) {
      const v = 200 + Math.floor(rnd() * 45);
      ctx.fillStyle = `rgb(${v},${v - 4},${v - 12})`;
      ctx.fillRect(c * bw + off + 3, r * bh + 3, bw - 6, bh - 6);
      ctx.fillStyle = 'rgba(0,0,0,0.06)';
      ctx.fillRect(c * bw + off + 3, r * bh + bh - 9, bw - 6, 6);
    }
  }
  speckle(ctx, s, 500, ['rgba(0,0,0,0.08)', 'rgba(255,255,255,0.1)'], 1.5);
});

// Dachziegel in Reihen
export const tileTex = canvasTex(128, (ctx, s) => {
  ctx.fillStyle = '#9a9a9a';
  ctx.fillRect(0, 0, s, s);
  const rows = 6, h = s / rows, w = s / 6;
  for (let r = 0; r < rows; r++) {
    for (let c = -1; c < 7; c++) {
      const x = c * w + (r % 2 ? w / 2 : 0), y = r * h;
      const v = 215 + Math.floor(rnd() * 40);
      ctx.fillStyle = `rgb(${v},${v},${v})`;
      ctx.beginPath();
      ctx.moveTo(x + 1, y);
      ctx.lineTo(x + w - 1, y);
      ctx.lineTo(x + w - 1, y + h * 0.6);
      ctx.quadraticCurveTo(x + w / 2, y + h + 2, x + 1, y + h * 0.6);
      ctx.fill();
    }
  }
});

// Gras: helle Sprenkel, die mit den Bodenfarben multipliziert werden
export const grassTex = canvasTex(256, (ctx, s) => {
  ctx.fillStyle = '#e8f0e0';
  ctx.fillRect(0, 0, s, s);
  speckle(ctx, s, 2500, ['#c9dbb8', '#f6fbef', '#b7cc9f', '#ffffff'], 1.8);
  ctx.strokeStyle = 'rgba(90,120,60,0.25)';
  for (let i = 0; i < 500; i++) {
    const x = rnd() * s, y = rnd() * s;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + (rnd() - 0.5) * 3, y - 3 - rnd() * 4);
    ctx.stroke();
  }
});

// Sandweg mit Kieseln
export const dirtTex = canvasTex(256, (ctx, s) => {
  ctx.fillStyle = '#c2a170';
  ctx.fillRect(0, 0, s, s);
  speckle(ctx, s, 1800, ['#b08e5e', '#d4b585', '#a8865a', '#cfae7c'], 2);
  speckle(ctx, s, 120, ['#8c8c84', '#a19f97', '#76746c'], 3.5);
});

// Holzbretter
export const plankTex = canvasTex(128, (ctx, s) => {
  for (let i = 0; i < 6; i++) {
    const v = 150 + Math.floor(rnd() * 40);
    ctx.fillStyle = `rgb(${v},${Math.floor(v * 0.72)},${Math.floor(v * 0.45)})`;
    ctx.fillRect(0, (i * s) / 6, s, s / 6 - 2);
    ctx.strokeStyle = 'rgba(60,35,15,0.25)';
    for (let k = 0; k < 4; k++) {
      ctx.beginPath();
      const y = (i * s) / 6 + rnd() * (s / 6);
      ctx.moveTo(0, y);
      ctx.bezierCurveTo(s * 0.3, y + 2, s * 0.6, y - 2, s, y + 1);
      ctx.stroke();
    }
  }
  ctx.fillStyle = 'rgba(40,20,10,0.6)';
  ctx.fillRect(0, 0, s, 2);
});

// UVs so strecken, dass 1 Wiederholung = 'unit' Meter ist (damit Steine überall gleich groß aussehen)
export function worldUVBox(geo, w, h, d, unit = 4) {
  const uv = geo.attributes.uv;
  const faces = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];   // +x, -x, +y, -y, +z, -z
  for (let f = 0; f < 6; f++) {
    for (let k = 0; k < 4; k++) {
      const i = f * 4 + k;
      uv.setXY(i, (uv.getX(i) * faces[f][0]) / unit, (uv.getY(i) * faces[f][1]) / unit);
    }
  }
  return geo;
}

export function worldUVCyl(geo, r, h, unitU = 4, unitV = 4) {
  const uv = geo.attributes.uv;
  const circ = Math.PI * 2 * r;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, (uv.getX(i) * circ) / unitU, (uv.getY(i) * h) / unitV);
  return geo;
}

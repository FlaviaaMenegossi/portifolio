// Equivalentes das funções de cor do Sass (rgba, darken, tint/shade do Bootstrap),
// gerando exatamente os mesmos valores que o compilador Sass produzia.

type Rgb = [number, number, number];

const format = (value: number) => String(Number(value.toFixed(10)));

const toRgbString = ([r, g, b]: Rgb) => `rgb(${format(r)}, ${format(g)}, ${format(b)})`;

export const hexToRgb = (hex: string): Rgb => {
  const value = hex.replace('#', '');
  const full = value.length === 3 ? [...value].map((c) => c + c).join('') : value;

  return [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16)) as Rgb;
};

/** `r, g, b` — formato das variáveis `--bs-*-rgb` do Bootstrap. */
export const rgbChannels = (hex: string) => hexToRgb(hex).join(', ');

/** Sass `rgba($color, $alpha)` */
export const rgba = (hex: string, alpha: number) => `rgba(${rgbChannels(hex)}, ${alpha})`;

const rgbToHsl = ([r, g, b]: Rgb): Rgb => {
  const [rn, gn, bn] = [r / 255, g / 255, b / 255];
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const l = (max + min) / 2;

  if (max === min) return [0, 0, l];

  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h: number;
  if (max === rn) h = (gn - bn) / d + (gn < bn ? 6 : 0);
  else if (max === gn) h = (bn - rn) / d + 2;
  else h = (rn - gn) / d + 4;

  return [h / 6, s, l];
};

const hslToRgb = ([h, s, l]: Rgb): Rgb => {
  if (s === 0) return [l * 255, l * 255, l * 255];

  const hueToRgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };

  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;

  return [hueToRgb(p, q, h + 1 / 3), hueToRgb(p, q, h), hueToRgb(p, q, h - 1 / 3)].map(
    (channel) => channel * 255,
  ) as Rgb;
};

/** Sass `darken($color, $amount)` — `amount` em porcentagem (ex.: 2 para 2%). */
export const darken = (hex: string, amount: number) => {
  const [h, s, l] = rgbToHsl(hexToRgb(hex));

  return toRgbString(hslToRgb([h, s, Math.max(0, l - amount / 100)]));
};

/** Sass `mix($color1, $color2, $weight)` — `weight` em porcentagem, aplicado à primeira cor. */
const mix = (color1: string, color2: string, weight: number) => {
  const a = hexToRgb(color1);
  const b = hexToRgb(color2);
  const w = weight / 100;

  return a.map((channel, i) => channel * w + b[i] * (1 - w)) as Rgb;
};

/** Bootstrap `tint-color($color, $weight)` */
export const tint = (hex: string, weight: number) => toRgbString(mix('#ffffff', hex, weight));

/** Bootstrap `shade-color($color, $weight)` */
export const shade = (hex: string, weight: number) => toRgbString(mix('#000000', hex, weight));

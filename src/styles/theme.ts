// Neon Purple Palette
const colors = {
  primaryNeon: '#bc13fe',
  secondaryNeon: '#7a16f0',
  accentNeon: '#ff00ff',
  // Variação clara do roxo para texto pequeno: 6,2:1 sobre o fundo (o #bc13fe fica em 4,4:1)
  primaryText: '#d05aff',
  bgDark: '#0a0a0a',
  bgCard: '#121212',
  bgRaised: '#18131d',
  border: '#2a2431',
  textWhite: '#ffffff',
  textSoft: '#ddd6e4',
  textMuted: '#a7a0b0',
  success: '#4fd1a5',
  danger: '#ff8fab',
};

export const theme = {
  colors,

  // Gradients
  gradients: {
    neon: `linear-gradient(135deg, ${colors.primaryNeon} 0%, ${colors.accentNeon} 100%)`,
    ring: `conic-gradient(from 0deg, ${colors.primaryNeon}, ${colors.accentNeon}, ${colors.secondaryNeon}, ${colors.primaryNeon})`,
  },
  glowBlur: '15px',

  fonts: {
    body: "'Inter Variable', 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif",
    mono: "'JetBrains Mono Variable', 'JetBrains Mono', ui-monospace, Consolas, monospace",
  },

  // Cantos: pílula para botões e chips, 20px para cartões e imagens, 12px para campos
  radii: {
    field: '12px',
    card: '20px',
    pill: '999px',
  },

  shadows: {
    card: '0 20px 40px -24px rgba(122, 22, 240, 0.45)',
    lift: '0 24px 48px -20px rgba(188, 19, 254, 0.45)',
  },

  layout: {
    maxWidth: '1200px',
    gutter: '24px',
    gutterMobile: '16px',
    headerHeight: '72px',
  },

  zIndex: {
    header: 100,
    progress: 110,
    palette: 200,
  },

  easing: {
    out: 'cubic-bezier(0.16, 1, 0.3, 1)',
  },

  // Breakpoints (Matching reference logic)
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
    large: '1200px',
  },
};

export type Theme = typeof theme;

import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0F1115',
        bg2: '#14171B',
        panel: '#1A1D20',
        ink: '#F8F9FA',
        ink2: '#4a443c',
        muted: '#A0AEC0',
        gold: '#D4AF37',
        gold2: '#C59B27',
        aqua: '#6FA8B0',
        paper: '#f7f3ea',
        card: '#fffdf8',
        shu: '#b3402e',
        deep: '#22392e',
        line: '#e2dbcc',
      },
      fontFamily: {
        mincho: ['var(--font-shippori)', '"Hiragino Mincho ProN"', 'serif'],
        en: ['var(--font-cormorant)', 'Georgia', 'serif'],
        gothic: ['var(--font-zenkaku)', '"Hiragino Kaku Gothic ProN"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;

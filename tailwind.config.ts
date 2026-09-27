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
        muted: '#A0AEC0',
        gold: '#D4AF37',
        gold2: '#C59B27',
        aqua: '#6FA8B0',
      },
    },
  },
  plugins: [],
};
export default config;

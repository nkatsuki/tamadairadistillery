import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink:         '#0E1013',
        char:        '#13161A',
        panel:       '#1A1E23',
        gold:        '#D4AF37',
        'gold-deep': '#C59B27',
        water:       '#8FBFB0',
        offwhite:    '#F8F9FA',
        muted:       '#A0AEC0',
      },
      fontFamily: {
        serif:  ['"Shippori Mincho B1"', '"Hiragino Mincho ProN"', 'serif'],
        latin:  ['"Cormorant Garamond"', 'serif'],
        gothic: ['"Zen Kaku Gothic New"', '"Hiragino Kaku Gothic ProN"', 'sans-serif'],
      },
      animation: {
        'drip':        'drip 3.5s ease-in-out infinite',
        'ripple':      'ripple 3.5s ease-in-out infinite',
        'fade-in-up':  'fadeInUp 0.8s ease forwards',
        'scroll-hint': 'scrollHint 2s ease-in-out infinite',
        'shimmer':     'shimmer 2.5s ease-in-out infinite',
        'pan':         'heroPan 20s ease-in-out infinite alternate',
      },
      keyframes: {
        drip: {
          '0%':   { transform: 'translateY(0) scaleY(1)', opacity: '0' },
          '15%':  { opacity: '1' },
          '70%':  { transform: 'translateY(220px) scaleY(1.4)', opacity: '.7' },
          '100%': { transform: 'translateY(260px) scaleY(.8)', opacity: '0' },
        },
        ripple: {
          '0%':   { transform: 'translateY(0) scale(1)', opacity: '0' },
          '30%':  { opacity: '.5' },
          '70%':  { transform: 'translateY(220px) scale(2.4)', opacity: '.2' },
          '100%': { transform: 'translateY(240px) scale(3)', opacity: '0' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        scrollHint: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '.6' },
          '50%':      { transform: 'translateY(10px)', opacity: '1' },
        },
        shimmer: {
          '0%, 100%': { opacity: '.4' },
          '50%':      { opacity: '1' },
        },
        heroPan: {
          '0%':   { transform: 'scale(1.06) translate(0,0)' },
          '100%': { transform: 'scale(1.06) translate(-1%,-1%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config

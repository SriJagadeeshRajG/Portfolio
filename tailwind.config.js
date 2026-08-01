/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          bg: '#141414',
          surface: '#1F1F1F',
          raised: '#262626',
          line: 'rgba(244, 242, 238, 0.08)',
          'line-strong': 'rgba(244, 242, 238, 0.14)',
        },
        copper: {
          DEFAULT: '#B87333',
          hover: '#D89C4A',
          soft: 'rgba(184, 115, 51, 0.14)',
          ring: 'rgba(184, 115, 51, 0.35)',
        },
        sage: {
          DEFAULT: '#6E8F85',
          hover: '#8FB0A4',
          soft: 'rgba(110, 143, 133, 0.14)',
          ring: 'rgba(110, 143, 133, 0.35)',
        },
        ink: {
          DEFAULT: '#F4F2EE',
          muted: '#B8B8B8',
          faint: '#7A7A7A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        tightish: '-0.02em',
        tighter2: '-0.03em',
        widest2: '0.18em',
      },
      maxWidth: {
        content: '1200px',
        prose: '720px',
      },
      boxShadow: {
        elevated: '0 1px 2px rgba(0,0,0,0.4), 0 12px 32px -12px rgba(0,0,0,0.6)',
        card: '0 1px 0 rgba(255,255,255,0.02) inset, 0 24px 48px -24px rgba(0,0,0,0.8)',
        glow: '0 0 0 1px rgba(184,115,51,0.18), 0 20px 60px -20px rgba(184,115,51,0.22)',
        glowSage: '0 0 0 1px rgba(110,143,133,0.18), 0 20px 60px -20px rgba(110,143,133,0.22)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'grid-drift': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '48px 48px' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease forwards',
        'grid-drift': 'grid-drift 18s linear infinite',
        'blink': 'blink 1.1s steps(2) infinite',
        'shimmer': 'shimmer 2.4s linear infinite',
      },
    },
  },
  plugins: [],
};

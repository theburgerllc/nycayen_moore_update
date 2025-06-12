/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mocha': {
          50: '#faf8f6',
          100: '#f5f0eb',
          200: '#e8ddd2',
          300: '#d9c6b5',
          400: '#c5a58a',
          500: '#8B6A47',
          600: '#7d5d3f',
          700: '#6b4d34',
          800: '#5a402b',
          900: '#4d3525',
        },
        'cream': {
          50: '#fdfcfb',
          100: '#F5F2EE',
          200: '#f0ebe4',
          300: '#e8e0d6',
          400: '#ddd1c3',
          500: '#d0c0ad',
          600: '#b8a086',
          700: '#9d8460',
          800: '#826b47',
          900: '#6b5638',
        },
        'rose-gold': {
          50: '#fef8f6',
          100: '#fdf0eb',
          200: '#faddd2',
          300: '#f6c4b5',
          400: '#f0a18a',
          500: '#E8B4A0',
          600: '#d19680',
          700: '#b57965',
          800: '#946354',
          900: '#795449',
        },
        'charcoal': {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#2C2C2C',
        },
        'emerald': {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0F4A3C',
          800: '#0C3D32',
          900: '#134e4a',
        },
        'glass': {
          light: 'rgba(255, 255, 255, 0.1)',
          medium: 'rgba(255, 255, 255, 0.2)',
          dark: 'rgba(0, 0, 0, 0.1)',
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glow': '0 0 20px rgba(139, 106, 71, 0.5)',
        'glow-emerald': '0 0 20px rgba(15, 74, 60, 0.5)',
        'glow-rose': '0 0 20px rgba(232, 180, 160, 0.5)',
        'floating': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'floating-lg': '0 35px 60px -12px rgba(0, 0, 0, 0.3)',
        'inner-glow': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        'gradient-shimmer': 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.2) 50%, transparent 70%)',
        'holographic': 'linear-gradient(45deg, #ff006e, #8338ec, #3a86ff, #06ffa5, #ffbe0b, #fb5607)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'tilt': 'tilt 10s infinite linear',
        'breathe': 'breathe 4s ease-in-out infinite',
        'particle-float': 'particleFloat 20s infinite linear',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%': { boxShadow: '0 0 20px rgba(139, 106, 71, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(139, 106, 71, 0.8)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        },
        particleFloat: {
          '0%': { transform: 'translateY(100vh) translateX(0px)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-10vh) translateX(100px)', opacity: '0' },
        },
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.perspective-2000': {
          perspective: '2000px',
        },
        '.preserve-3d': {
          transformStyle: 'preserve-3d',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
        '.glass-effect': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-dark': {
          background: 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.will-change-transform': {
          willChange: 'transform',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}
'use strict';

const path = require('path');
const replRoot = path.join(__dirname, '../../apps/repl');
const tutorialRoot = path.join(__dirname, '../../apps/tutorial');
const uiRoot = path.join(__dirname, '../../packages/limber-ui/addon');

module.exports = {
  content: [
    `${replRoot}/app/**/*.{js,ts,hbs,gjs,gts}`,
    `${replRoot}/public/**/*.md`,
    `${tutorialRoot}/app/**/*.{js,ts,hbs,gjs,gts}`,
    `${tutorialRoot}/docs/**/*.{md,gjs}`,
    `${uiRoot}/src/**/*.{js,ts,hbs,gjs,gts}`,
  ],
  theme: {
    variants: {
      xs: '465px',
      // => @media (min-width: 465px) { ... }
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '860px',
      // => @media (min-width: 860px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      'until-lg': { max: '1023px' },
      // => @media (max-width: 1023px) { ... }
    },
    fontFamily: {
      sans: ['system-ui', 'Helvetica', 'Arial', 'sans-serif'],
      mono: [
        'ui-monospace',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe WPC',
        'Segoe UI',
        'HelveticaNeue-Light',
        'Ubuntu',
        'Droid Sans',
        'sans-serif',
      ],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        ember: {
          brand: 'var(--ember-brand)',
          black: 'var(--ember-black)',
          'burnt-ember': 'var(--ember-burnt-ember)',
          gray: 'var(--ember-gray)',
          blue: 'var(--ember-blue)',
          'faint-gray': 'var(--ember-faint-gray)',
          'light-blue': 'var(--ember-light-blue)',
          linen: 'var(--ember-linen)',
          yellow: 'var(--ember-yellow)',
          white: 'var(--ember-white)',
        },
        'code-bg': 'var(--code-bg)',
        'horizon-lavender': 'var(--horizon-lavender)',
      },
      minWidth: {
        '1/3': '33%',
        3: '0.75rem',
      },
      gridTemplateRows: {
        editor: 'min-content 1fr',
        main: '1fr 1.5fr',
      },
      gridTemplateColumns: {
        main: '1fr 1.5fr',
        tutorial: 'min-content 1fr',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

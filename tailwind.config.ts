import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      main: {
        500: '#2b2c6e',
        300: '#53548a',
      },
      dark: {
        500: '#19142b',
      },
      light: {
        500: '#f5f6f8',
      },
      Walnut: '#582f11',
      Oak: '#DDB586',
      BlackWood: '#0A0401',
      Espresso: '#442109',
      Eclipse: '#1D1D1D',
      Twilight: '#999999',
      Solstice: '#F8F8F8',
    },
    extend: {
      fontFamily: {
        campton: ['var(--font-campton)'],
        larsseit: ['var(--font-larsseit)'],
        quincy: ['var(--font-quincy)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;

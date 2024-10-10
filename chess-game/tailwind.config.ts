// tailwind.config.ts
import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Adjust if your directories are different
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}', // Include if you have a pages directory
  ],
  theme: {
    extend: {
      colors: {
        'chess-dark': '#769656',
        'chess-light': '#eeeed2',
      },
    },
  },
  plugins: [],
};

export default config;
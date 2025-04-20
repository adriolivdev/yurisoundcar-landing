import { type Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Escaneia arquivos em src
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6600',    // Laranja vibrante (Yuri SoundCar)
        dark: '#000000',       // Preto para fundos ou textos
        light: '#f4f4f4',      // Cinza claro para contrastes
        brandGray: '#222222',  // Alternativa escura pro tema
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Fonte limpa e moderna
      },
    },
  },
  plugins: [],
};

export default config;

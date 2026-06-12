import type { Config } from 'tailwindcss';
const config: Config = { darkMode: ['class'], content: ['./src/**/*.{ts,tsx}'], theme: { extend: { fontFamily: { sans: ['Inter','Vazirmatn','sans-serif'] }, colors: { brand: {50:'#eef8ff',100:'#d9f0ff',500:'#1d9bf0',600:'#087fd0',900:'#08365a'}, mint:{500:'#28c995'}, sun:{500:'#ffd166'} }, boxShadow:{ soft:'0 20px 60px rgba(8,54,90,.12)' } } }, plugins: [] };
export default config;

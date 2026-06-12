import type { Config } from 'tailwindcss';
const config: Config = { content: ['./src/**/*.{ts,tsx}'], theme: { extend: { fontFamily: { sans: ['Inter','Vazirmatn','Tahoma','sans-serif'] }, colors: { ocean:'#087fd0', navy:'#08365a', mint:'#28c995', sand:'#ffd166', cloud:'#f6fbff' }, boxShadow:{soft:'0 24px 80px rgba(8,54,90,.12)'} } }, plugins: [] };
export default config;

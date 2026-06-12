import type { Config } from 'tailwindcss';
const config: Config={content:['./src/**/*.{ts,tsx}'],theme:{extend:{fontFamily:{sans:['Vazirmatn','Inter','Tahoma','sans-serif']},colors:{ink:'#071827',navy:'#08365A',ocean:'#087FD0',sky:'#E7F6FF',mint:'#22C992',lime:'#DBF7E9',sun:'#FFD166',rose:'#FF6B6B',cloud:'#F6FBFF',line:'#E3EEF7'},boxShadow:{soft:'0 24px 80px rgba(8,54,90,.12)',card:'0 12px 34px rgba(8,54,90,.10)'}}},plugins:[]};
export default config;

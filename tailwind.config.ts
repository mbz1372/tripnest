import type { Config } from 'tailwindcss';
export default { content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}','./lib/**/*.{ts,tsx}'], theme:{extend:{fontFamily:{sans:['Inter','Vazirmatn','system-ui']}, colors:{ink:'#07111f',brand:'#2563eb',mint:'#00b894',gold:'#f6c85f'}, boxShadow:{soft:'0 24px 80px rgba(15,23,42,.12)'}}}, plugins:[] } satisfies Config;

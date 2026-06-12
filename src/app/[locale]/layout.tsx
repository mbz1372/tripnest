import {Header} from '@/components/Header';import {Locale,locales} from '@/lib/data';
export function generateStaticParams(){return locales.map(locale=>({locale}))}
export default function LocaleLayout({children,params}:{children:React.ReactNode,params:{locale:Locale}}){const dir=params.locale==='fa'?'rtl':'ltr';return <div className={dir}>{<Header locale={params.locale}/>}<main>{children}</main><footer className="containerx py-10 text-center text-slate-500">TripNest Enterprise © 2026 — Ready for GitHub & Vercel</footer></div>}

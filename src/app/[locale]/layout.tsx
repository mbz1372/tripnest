import {Locale,locales} from '@/lib/data';import {Shell} from '@/components/Shell';
export function generateStaticParams(){return locales.map(locale=>({locale}))}
export default function LocaleLayout({children,params}:{children:React.ReactNode,params:{locale:Locale}}){return <Shell locale={params.locale}>{children}</Shell>}

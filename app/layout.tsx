import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title:'TripNest Enterprise — AI Travel SuperApp', description:'Persian-first AI OTA, hotel ecosystem, CRM, BI and operations platform.', manifest:'/manifest.json' };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fa" suppressHydrationWarning><body>{children}</body></html>}

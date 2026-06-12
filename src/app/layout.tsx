import type { Metadata } from 'next';import './globals.css';
export const metadata: Metadata = {title:'TripNest Enterprise Offline V26',description:'Travel super app: itinerary, hotels, flights, guides, travel mate, CMS and admin.',manifest:'/manifest.json'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fa"><body>{children}</body></html>}

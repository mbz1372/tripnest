import './globals.css';import type {Metadata} from 'next';
export const metadata:Metadata={title:'TripJet | Travel Booking Platform',description:'Bilingual travel booking, tour discovery and custom package builder.',metadataBase:new URL('https://tripjet.vercel.app')};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fa"><body>{children}</body></html>}

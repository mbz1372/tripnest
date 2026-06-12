import type {Metadata} from 'next';import './globals.css';
export const metadata:Metadata={title:'TripNest Enterprise',description:'Travel super app for itinerary, hotels, guides and admin CMS'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fa"><body>{children}</body></html>}

import type { MetadataRoute } from 'next';
export default function manifest(): MetadataRoute.Manifest { return { name:'TripNest Enterprise', short_name:'TripNest', description:'AI Travel SuperApp', start_url:'/fa', display:'standalone', background_color:'#f7f8fb', theme_color:'#2563eb', icons:[{src:'/icon.svg',sizes:'any',type:'image/svg+xml'}] } }

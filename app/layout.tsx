import './globals.css';
import type { Metadata } from 'next';
export const metadata:Metadata={title:'HeavyRent — Heavy Equipment, On Demand',description:'Rent cranes, dumpers, JCBs and construction equipment.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}

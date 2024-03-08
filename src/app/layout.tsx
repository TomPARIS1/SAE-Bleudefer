"use client"
import './globals.css';
import type {Metadata} from 'next';
import {Lexend} from 'next/font/google';
import {usePathname} from 'next/navigation';
import {Providers} from '../components/providers';
import {Footer} from '../components/footer'
import {Menu} from '../components/menu';

const font = Lexend({
    subsets: ['latin'],
    weight: ['400', '600']
});

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    const pathname = usePathname();
    return (
        <html lang="fr">
            <body className={font.className}>
                <Providers font={font}>
                    {pathname != "/dashboard" ? <Menu/> : <span></span>}

                    {children}
                </Providers>

                {pathname != "/dashboard" ? <Footer/> : <span></span>}
            </body>
        </html>
    )
}

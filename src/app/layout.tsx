import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond, Source_Code_Pro } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

const cormorantGaramond = Cormorant_Garamond({
    subsets: ['latin'],
    variable: '--font-cormorant-garamond',
});

const sourceCodePro = Source_Code_Pro({
    subsets: ['latin'],
    variable: '--font-source-code-pro',
    weight: ['400'],
});

export const metadata: Metadata = {
    title: 'Francesco Garel - Fullstack Developer & Web Designer',
    description:
        'A studio of one. Architecting high-performance, AI-powered web applications that bridge the gap between classical structure and modern intelligence.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`dark ${sourceCodePro.variable} ${inter.variable} ${cormorantGaramond.variable} tracking–[0.024em] leading-[1.52] antialiased`}
            >
                {children}
                <Toaster position="top-center" />
            </body>
        </html>
    );
}

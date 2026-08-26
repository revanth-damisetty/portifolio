import type { Metadata } from 'next';
import { Inter, Source_Code_Pro } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { MotionProvider } from '@/components/motion-provider';
import { CursorGlow } from '@/components/cursor-glow';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const sourceCodePro = Source_Code_Pro({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
    title: 'Revanth Damisetty | ML Engineer',
    description: 'Machine Learning Engineer building production-ready ML systems.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={cn(inter.variable, sourceCodePro.variable, "relative min-h-screen bg-background font-sans antialiased flex flex-col")}>
                <CursorGlow />
                <MotionProvider>
                    <Navbar />
                    <div className="flex-1">
                        {children}
                    </div>
                    <Footer />
                </MotionProvider>
            </body>
        </html>
    );
}

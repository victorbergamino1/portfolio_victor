import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '../context/LanguageContext';
import Navbar from '../Components/Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Victor Bergamino | Account Management, Customer Success & B2B Sales',
  description:
    'Bilingual Account Management, Customer Success & B2B Sales professional with AI-augmented workflow expertise.',
  openGraph: {
    title: 'Victor Bergamino | Account Management, Customer Success & B2B Sales',
    description:
      'Bilingual Account Management, Customer Success & B2B Sales professional with AI-augmented workflow expertise.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-neutral-950 text-neutral-100 antialiased selection:bg-blue-500 selection:text-white min-h-screen flex flex-col`}
      >
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '../context/LanguageContext';
import Navbar from '../Components/Navbar';
import './globals.css'; // <-- Corregido: está dentro de la misma carpeta /app

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Victor Bergamino | Growth Strategy & AI Integration',
  description:
    'Bilingual Growth Strategist, Account Manager, and AI Integration Specialist.',
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

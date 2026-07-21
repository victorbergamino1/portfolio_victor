'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Download, Globe, Calendar } from 'lucide-react';

export default function Navbar() {
  const { lang, toggleLanguage } = useLanguage();

  const navContent = {
    ES: {
      metrics: 'Impacto',
      cases: 'Casos STAR',
      aiStack: 'AI Stack',
      experience: 'Trayectoria',
      contact: 'Contacto',
      downloadCv: 'Descargar CV',
      bookCall: 'Agendar Llamada',
    },
    EN: {
      metrics: 'Impact',
      cases: 'STAR Cases',
      aiStack: 'AI Stack',
      experience: 'Experience',
      contact: 'Contact',
      downloadCv: 'Resume',
      bookCall: 'Book Call',
    },
  };

  const t = navContent[lang];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 sm:p-4"
    >
      <nav className="flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full bg-neutral-950/80 border border-neutral-800/80 backdrop-blur-xl w-full max-w-5xl text-xs sm:text-sm shadow-2xl">
        <a
          href="#"
          className="font-extrabold text-white tracking-tight text-sm sm:text-base hover:text-blue-400 transition-colors shrink-0"
        >
          Victor Bergamino
        </a>

        <div className="hidden md:flex items-center gap-5 text-neutral-300 text-xs font-medium">
          <a href="#metrics" className="hover:text-white transition-colors">
            {t.metrics}
          </a>
          <a href="#cases" className="hover:text-white transition-colors">
            {t.cases}
          </a>
          <a href="#ai-stack" className="hover:text-white transition-colors">
            {t.aiStack}
          </a>
          <a href="#experience" className="hover:text-white transition-colors">
            {t.experience}
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            {t.contact}
          </a>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Botón Descargar Resume */}
          <a
            href="/Victor_Bergamino_Resume.pdf"
            download="Victor_Bergamino_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-blue-400" />
            <span>{t.downloadCv}</span>
          </a>

          {/* Botón Agendar Llamada Navbar */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{t.bookCall}</span>
          </a>

          {/* Botón Selector de Idioma */}
          <button
            onClick={toggleLanguage}
            title={lang === 'EN' ? 'Cambiar a Español' : 'Switch to English'}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 border border-blue-400/40 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang}</span>
          </button>
        </div>
      </nav>
    </motion.header>
  );
}

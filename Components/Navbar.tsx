'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Download, Globe } from 'lucide-react';

export default function Navbar() {
  const { lang, toggleLanguage } = useLanguage();

  const navContent = {
    ES: {
      experience: 'Trayectoria',
      skills: 'Competencias',
      contact: 'Contacto',
      downloadCv: 'Descargar CV',
    },
    EN: {
      experience: 'Experience',
      skills: 'Skills',
      contact: 'Contact',
      downloadCv: 'Resume',
    },
  };

  const t = navContent[lang];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4"
    >
      <nav className="flex items-center justify-between px-6 py-3 rounded-full bg-neutral-900/80 border border-neutral-800/80 backdrop-blur-md w-full max-w-4xl text-sm shadow-xl">
        <a
          href="#"
          className="font-bold text-white tracking-tight text-base hover:text-blue-400 transition-colors"
        >
          Victor Bergamino
        </a>

        <div className="flex items-center gap-4 sm:gap-6 text-neutral-300 text-xs sm:text-sm">
          <a href="#experience" className="hover:text-white transition-colors">
            {t.experience}
          </a>
          <a href="#skills" className="hover:text-white transition-colors">
            {t.skills}
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            {t.contact}
          </a>

          {/* Botón Descargar Resume */}
          <a
            href="/Victor_Bergamino_Resume.pdf"
            download="Victor_Bergamino_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{t.downloadCv}</span>
          </a>

          {/* Botón de Selector de Idioma Llamativo con Ícono de Planeta */}
          <button
            onClick={toggleLanguage}
            title={lang === 'EN' ? 'Cambiar a Español' : 'Switch to English'}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 border border-blue-400/40 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang}</span>
          </button>
        </div>
      </nav>
    </motion.header>
  );
}

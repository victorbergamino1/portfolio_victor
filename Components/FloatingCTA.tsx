'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Download, Calendar, Mail } from 'lucide-react';

export default function FloatingCTA() {
  const { lang } = useLanguage();

  const ctaContent = {
    ES: {
      downloadCv: 'Descargar CV (PDF)',
      bookCall: 'Agendar Llamada',
    },
    EN: {
      downloadCv: 'Download Resume (PDF)',
      bookCall: 'Book a Call',
    },
  };

  const t = ctaContent[lang];

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 px-4 w-full max-w-fit pointer-events-auto"
    >
      <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-full bg-neutral-950/90 border border-blue-500/30 backdrop-blur-xl shadow-2xl shadow-blue-950/50">
        {/* Botón Descargar CV */}
        <a
          href="/Victor_Bergamino_Resume.pdf"
          download="Victor_Bergamino_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 transition-all hover:scale-105"
        >
          <Download className="w-3.5 h-3.5 text-blue-400" />
          <span>{t.downloadCv}</span>
        </a>

        {/* Botón Agendar Llamada */}
        <a
          href="#contact"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>{t.bookCall}</span>
        </a>
      </div>
    </motion.div>
  );
}

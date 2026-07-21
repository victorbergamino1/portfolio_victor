'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Bot, Sparkles, ArrowRight } from 'lucide-react';

export default function AiBannerCTA() {
  const { lang } = useLanguage();

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
        className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-blue-900/40 via-neutral-900 to-purple-900/30 border border-blue-500/30 shadow-2xl relative overflow-hidden backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-8"
      >
        {/* Luces de fondo */}
        <div className="absolute -top-24 -left-24 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="space-y-3 max-w-xl text-center md:text-left z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {lang === 'ES'
                ? 'Asistente Interactivo'
                : 'Interactive Assistant'}
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            {lang === 'ES'
              ? '¿Tienes preguntas sobre mi perfil o proyectos?'
              : 'Have questions about my background or project fit?'}
          </h3>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
            {lang === 'ES'
              ? 'Habla directamente con mi clon de IA personalizado para explorar detalles de mi experiencia, logros y metodologías en tiempo real.'
              : 'Chat directly with my custom AI clone to explore details about my background, impact metrics, and methodology in real time.'}
          </p>
        </div>

        {/* Botón CTA que activa el Bot */}
        <div className="z-10 shrink-0">
          <a
            href="#ai-assistant"
            onClick={(e) => {
              e.preventDefault();
              // Abre o enfoca el asistente flotante si existe
              const botBtn = document.querySelector(
                '[data-ai-button="true"]'
              ) as HTMLButtonElement;
              if (botBtn) botBtn.click();
            }}
            className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-xl shadow-blue-500/25 transition-all transform hover:-translate-y-0.5"
          >
            <Bot className="w-5 h-5" />
            <span>
              {lang === 'ES' ? "Preguntar a Victor's AI" : "Ask Victor's AI"}
            </span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

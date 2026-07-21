'use client';

import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
  const { lang } = useLanguage();

  const heroContent = {
    EN: {
      location: 'JERSEY CITY, NJ | BILINGUAL (EN/ES)',
      title: 'Victor Bergamino',
      subtitle: 'Growth Strategy, Account Management & AI Integration',
      description:
        'Driving measurable revenue growth through consultative client relations, cross-functional leadership, and CRM/AI process improvement across US & LATAM markets.',
      btnPrimary: 'View Impact & Cases',
      btnSecondary: 'Get in Touch',
    },
    ES: {
      location: 'JERSEY CITY, NJ | BILINGÜE (ES/EN)',
      title: 'Victor Bergamino',
      subtitle: 'Estrategia de Crecimiento, Gestión de Cuentas e IA',
      description:
        'Impulsando el crecimiento de ingresos medible mediante relaciones consultivas con clientes, liderazgo de equipos y optimización de procesos con CRM e Inteligencia Artificial en EE. UU. y Latinoamérica.',
      btnPrimary: 'Ver Trayectoria e Impacto',
      btnSecondary: 'Contactar',
    },
  };

  const t = heroContent[lang];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-12 relative overflow-hidden">
      {/* Sutil resplandor de fondo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <span className="text-xs uppercase tracking-widest text-blue-400 mb-4 font-mono bg-blue-950/40 border border-blue-800/40 px-3 py-1 rounded-full">
        {t.location}
      </span>

      <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-3">
        {t.title}
      </h1>

      <p className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent mb-6 max-w-3xl">
        {t.subtitle}
      </p>

      <p className="max-w-2xl text-neutral-300 text-sm sm:text-base mb-10 leading-relaxed font-normal">
        {t.description}
      </p>

      <div className="flex flex-wrap gap-4 justify-center items-center z-10">
        <a
          href="#experience"
          className="px-6 py-3.5 rounded-full text-sm font-semibold bg-white text-black hover:bg-neutral-200 transition-all flex items-center gap-2 shadow-lg hover:shadow-white/10"
        >
          <span>{t.btnPrimary}</span>
          <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href="#contact"
          className="px-6 py-3.5 rounded-full text-sm font-medium bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 transition-all flex items-center gap-2"
        >
          <Mail className="w-4 h-4 text-neutral-400" />
          <span>{t.btnSecondary}</span>
        </a>
      </div>
    </section>
  );
}

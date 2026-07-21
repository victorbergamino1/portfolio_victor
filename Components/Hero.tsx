'use client';

import { useLanguage } from '../context/LanguageContext';
import { Download, Calendar, TrendingUp, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const { lang } = useLanguage();

  const heroContent = {
    EN: {
      availability: 'Available for Account Management, Customer Success & Marketing Strategy Roles',
      location: 'JERSEY CITY, NJ | BILINGUAL (EN/ES)',
      roleBadge: 'ACCOUNT MANAGER | CUSTOMER SUCCESS MANAGER | B2B SALES',
      title: 'Victor Bergamino',
      subtitle: 'Driving Client Retention & Revenue Growth Through Account Management and AI-Assisted Process Improvement',
      description:
        'Bilingual Account Management and Customer Success professional specializing in client retention (93% CSAT), commercial workflow restructuring (+33% YoY revenue), multi-channel performance auditing (+30% ROAS), and AI-assisted process automation.',
      btnPrimary: 'Book a Call',
      btnSecondary: 'Download Resume (PDF)',
      btnTertiary: 'Explore Impact Metrics',
    },
    ES: {
      availability: 'Disponible para Roles de Account Management, Customer Success & Estrategia de Marketing',
      location: 'JERSEY CITY, NJ | BILINGÜE (ES/EN)',
      roleBadge: 'ACCOUNT MANAGER | CUSTOMER SUCCESS MANAGER | VENTAS B2B',
      title: 'Victor Bergamino',
      subtitle: 'Impulsando la Retención de Clientes y el Crecimiento de Ingresos mediante Gestión de Cuentas y Optimización con IA',
      description:
        'Profesional bilingüe en Account Management y Customer Success especializado en retención de clientes (93% CSAT), reestructuración de flujos comerciales (+33% crecimiento en ventas YoY), auditoría de pauta multicanal (+30% ROAS) y automatización con IA.',
      btnPrimary: 'Agendar Llamada',
      btnSecondary: 'Descargar CV (PDF)',
      btnTertiary: 'Ver Métricas de Impacto',
    },
  };

  const t = heroContent[lang];

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 pt-28 pb-16 relative overflow-hidden">
      {/* Sutil resplandor de fondo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Badge Dinámico de Disponibilidad con Punto Verde Parpadeante */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-semibold shadow-lg shadow-emerald-950/50 backdrop-blur-md"
      >
        <span className="flex h-2.5 w-2.5 relative shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span>{t.availability}</span>
      </motion.div>

      {/* Insignia de Ubicación & Rol */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex flex-wrap items-center justify-center gap-2 mb-6"
      >
        <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 bg-blue-950/60 border border-blue-800/60 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-blue-950/40">
          <Cpu className="w-3.5 h-3.5" />
          <span>{t.roleBadge}</span>
        </span>
        <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 bg-neutral-900/80 border border-neutral-800 px-3 py-1.5 rounded-full">
          {t.location}
        </span>
      </motion.div>

      {/* Nombre Principal */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white mb-4"
      >
        {t.title}
      </motion.h1>

      {/* Subtítulo de Posicionamiento */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent mb-6 max-w-4xl leading-tight"
      >
        {t.subtitle}
      </motion.p>

      {/* Descripción Resumen */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-2xl text-neutral-300 text-sm sm:text-base mb-10 leading-relaxed font-normal"
      >
        {t.description}
      </motion.p>

      {/* Botones de Acción Principales */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-wrap gap-4 justify-center items-center z-10"
      >
        <a
          href="#contact"
          className="px-6 py-3.5 rounded-full text-sm font-bold bg-blue-600 hover:bg-blue-500 text-white transition-all flex items-center gap-2 shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95"
        >
          <Calendar className="w-4 h-4" />
          <span>{t.btnPrimary}</span>
        </a>
        <a
          href="/Victor_Bergamino_Resume.pdf"
          download="Victor_Bergamino_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3.5 rounded-full text-sm font-semibold bg-neutral-900 border border-neutral-700 text-white hover:bg-neutral-800 transition-all flex items-center gap-2 shadow-md hover:scale-105"
        >
          <Download className="w-4 h-4 text-blue-400" />
          <span>{t.btnSecondary}</span>
        </a>
        <a
          href="#metrics"
          className="px-5 py-3.5 rounded-full text-sm font-medium bg-neutral-950/80 border border-neutral-800/80 text-neutral-300 hover:text-white hover:bg-neutral-900 transition-all flex items-center gap-2"
        >
          <TrendingUp className="w-4 h-4 text-emerald-400" />
          <span>{t.btnTertiary}</span>
        </a>
      </motion.div>
    </section>
  );
}

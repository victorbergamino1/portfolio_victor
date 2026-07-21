'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import {
  Sparkles,
  Users,
  Database,
  LineChart,
  Award,
  GraduationCap,
} from 'lucide-react';

export default function SkillsBento() {
  const { lang } = useLanguage();

  const aiTools = [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Prompt Engineering',
    'Workflow Automation',
    'AI-Driven Copy & Sales',
  ];

  const crmTools = [
    'HubSpot CRM',
    'Zoho CRM',
    'Pipeline Automation',
    'Lead Scoring',
    'Client Retention Systems',
  ];

  const performanceTools = [
    'Google Ads',
    'Meta Ads Manager',
    'SEO / SEM',
    'Google Analytics 4',
    'ROAS Optimization',
  ];

  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto">
      {/* Encabezado */}
      <div className="text-center mb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-2 block font-mono">
          TECH, METHODOLOGY & EDUCATION
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          {lang === 'ES'
            ? 'Stack Estratégico & Certificaciones'
            : 'Strategic Stack & Certifications'}
        </h2>
        <p className="text-neutral-400 text-sm md:text-base max-w-2xl mx-auto">
          {lang === 'ES'
            ? 'Integración de Inteligencia Artificial Generativa, gestión de CRM empresarial y arquitectura comercial basada en datos.'
            : 'Integrating Generative AI, enterprise CRM management, and data-driven commercial architecture.'}
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Bloque 1: AI & Prompt Engineering */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="md:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-blue-950/30 border border-neutral-800/80 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Sparkles className="w-32 h-32 text-blue-400" />
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                {lang === 'ES'
                  ? 'Inteligencia Artificial & Automatización'
                  : 'AI Integration & Workflow Optimization'}
              </h3>
              <p className="text-xs text-neutral-400">
                {lang === 'ES'
                  ? 'Aceleración de procesos comerciales y redacción ejecutiva'
                  : 'Operational speed & commercial decision acceleration'}
              </p>
            </div>
          </div>
          <p className="text-sm text-neutral-300 leading-relaxed mb-6 max-w-xl">
            {lang === 'ES'
              ? 'Aplicación de modelos de IA Generativa para agilizar la toma de decisiones, optimizar estrategias de prospección, estructurar respuestas a clientes y automatizar tareas repetitivas de marketing y ventas.'
              : 'Leveraging Generative AI models to accelerate decision-making, refine sales strategies, build client communication workflows, and automate complex execution.'}
          </p>
          <div className="flex flex-wrap gap-2">
            {aiTools.map((tool, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-xl text-xs font-medium bg-neutral-950/80 text-blue-300 border border-blue-500/20"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Bloque 2: Liderazgo & Retención */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="p-8 rounded-3xl bg-neutral-900/70 border border-neutral-800/80 backdrop-blur-md shadow-2xl flex flex-col justify-between"
        >
          <div>
            <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {lang === 'ES'
                ? 'Gestión de Cuentas B2B & Retención'
                : 'B2B Account Management & Success'}
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed mb-6">
              {lang === 'ES'
                ? 'Liderazgo de equipos comerciales, gestión de cuentas corporativas clave y diseño de procesos de fidelización de clientes (CSAT).'
                : 'Cross-functional team leadership, key account management, onboarding, and CSAT retention strategies.'}
            </p>
          </div>
          <div className="pt-4 border-t border-neutral-800/60 flex items-center justify-between text-xs text-neutral-400">
            <span>{lang === 'ES' ? 'Métrica clave' : 'Core Focus'}</span>
            <span className="text-emerald-400 font-semibold">
              93% CSAT Retention
            </span>
          </div>
        </motion.div>

        {/* Bloque 3: CRM & Automation */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="p-8 rounded-3xl bg-neutral-900/70 border border-neutral-800/80 backdrop-blur-md shadow-2xl"
        >
          <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 w-fit mb-4">
            <Database className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            {lang === 'ES'
              ? 'CRM & Flujos de Venta'
              : 'CRM Architecture & Pipelines'}
          </h3>
          <p className="text-sm text-neutral-300 leading-relaxed mb-6">
            {lang === 'ES'
              ? 'Diseño e implementación de embudos de ventas, cualificación de prospectos y automatización de procesos B2B.'
              : 'Designing sales funnels, lead scoring systems, and multi-channel automated workflows.'}
          </p>
          <div className="flex flex-wrap gap-2">
            {crmTools.map((tool, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-xl text-xs font-medium bg-neutral-950/80 text-purple-300 border border-purple-500/20"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Bloque 4: Performance Marketing */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="p-8 rounded-3xl bg-neutral-900/70 border border-neutral-800/80 backdrop-blur-md shadow-2xl"
        >
          <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 w-fit mb-4">
            <LineChart className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            {lang === 'ES'
              ? 'Performance & Auditoría'
              : 'Performance Marketing'}
          </h3>
          <p className="text-sm text-neutral-300 leading-relaxed mb-6">
            {lang === 'ES'
              ? 'Análisis de pauta publicitaria multicanal y auditoría de agencias para maximizar el ROAS.'
              : 'Multi-channel digital ad auditing and campaign optimization to drive maximum ROAS.'}
          </p>
          <div className="flex flex-wrap gap-2">
            {performanceTools.map((tool, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-xl text-xs font-medium bg-neutral-950/80 text-indigo-300 border border-indigo-500/20"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Bloque 5: Educación & Certificaciones */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="p-8 rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-amber-950/20 border border-neutral-800/80 shadow-2xl"
        >
          <div className="flex items-center gap-2 mb-4 text-amber-400">
            <Award className="w-5 h-5" />
            <h3 className="text-lg font-bold text-white">
              {lang === 'ES'
                ? 'Educación & Certificados'
                : 'Education & Credentials'}
            </h3>
          </div>
          <ul className="space-y-3 text-xs text-neutral-300">
            <li className="flex items-start gap-2">
              <GraduationCap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block">
                  Master's Degree, Digital Marketing
                </span>
                <span className="text-neutral-400">
                  CEUPE Business School, Madrid (2020)
                </span>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <GraduationCap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block">
                  Bachelor's Degree, Communications
                </span>
                <span className="text-neutral-400">
                  La Sabana University, Colombia (2017)
                </span>
              </div>
            </li>
            <li className="pt-2 border-t border-neutral-800 flex items-center justify-between">
              <span className="font-medium text-white">AI for Marketers</span>
              <span className="text-amber-400 font-mono text-[10px]">
                HubSpot 2026
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-medium text-white">Google Analytics</span>
              <span className="text-amber-400 font-mono text-[10px]">
                Google 2026
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

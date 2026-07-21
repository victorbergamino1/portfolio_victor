'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import {
  Briefcase,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  X,
  Building2,
  TrendingUp,
  Layers,
  Award,
  ArrowUpRight
} from 'lucide-react';

interface CaseStudy {
  id: string;
  company: string;
  location: string;
  period: string;
  role: string;
  summary: string;
  tag: string;
  star: {
    situation: string;
    strategy: string;
    action: string[];
    result: string;
  };
  metrics: { value: string; label: string }[];
  tools: string[];
}

export default function StarCaseStudies() {
  const { lang } = useLanguage();
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const casesData: Record<'ES' | 'EN', CaseStudy[]> = {
    ES: [
      {
        id: 'liberty',
        company: 'Liberty Prime Steakhouse',
        location: 'JERSEY CITY, NJ (EE. UU.)',
        period: 'MAYO 2021 – FEB 2026',
        role: 'Coordinador de Ventas & Client Relations Lead',
        summary: 'Optimización de retención de clientes corporativos y gestión comercial B2B para cuentas de alto valor.',
        tag: 'B2B ACCOUNT EXPANSION & CSAT',
        star: {
          situation:
            'Liberty Prime buscaba maximizar el ingreso de eventos corporativos de gran escala (hasta 200+ invitados) y estructurar un pipeline comercial predictivo para clientes empresariales.',
          strategy:
            'Diseño de paquetes ejecutivos escalonados, implementación de flujos de onboarding personalizados e integración de herramientas de IA para agilizar la cotización y seguimiento.',
          action: [
            'Auditoría y reestructuración del presupuesto publicitario en Google Ads, Meta y SEO.',
            'Establecimiento de un protocolo de resolución inmediata de contingencias en eventos corporativos.',
            'Implementación de sistema de medición continua de satisfacción del cliente (CSAT).',
          ],
          result:
            'Se logró un índice de Satisfacción del Cliente (CSAT) del 93%, gestionando más de 200 cuentas corporativas anuales con alta tasa de recurrencia.',
        },
        metrics: [
          { value: '93%', label: 'CSAT / Retención' },
          { value: '200+', label: 'Cuentas Anuales' },
          { value: 'Ciclo Completo', label: 'Ventas B2B' },
        ],
        tools: ['Google Ads', 'Meta Manager', 'CRM Workflows', 'AI Assistant'],
      },
      {
        id: 'clinica',
        company: 'Clínica Continental',
        location: 'LIMA, PERÚ',
        period: 'MAYO 2019 – ABR 2021',
        role: 'Líder de Estrategia Comercial & Marketing',
        summary: 'Implementación de Zoho CRM desde cero y dirección de equipo comercial de 15 personas.',
        tag: 'COMMERCIAL RESTRUCTURING & CRM',
        star: {
          situation:
            'El equipo comercial de 15 personas operaba sin un CRM centralizado, resultando en lentitud en el seguimiento de prospectos y falta de visibilidad del embudo de conversión.',
          strategy:
            'Diseño e implementación integral de Zoho CRM con reglas de puntuación de leads (Lead Scoring) y flujos automáticos de asignación comercial.',
          action: [
            'Capacitación y liderazgo directo del equipo comercial de 15 integrantes.',
            'Optimización de la tasa de conversión en los canales digitales y telefónicos.',
            'Entrenamiento de voceros profesionales para campañas mediáticas y de PR de alto impacto.',
          ],
          result:
            'Incremento sostenido del +33% en ventas anuales (YoY) y reducción del 30% en el tiempo de primera respuesta a potenciales clientes.',
        },
        metrics: [
          { value: '+33%', label: 'Ventas YoY' },
          { value: '30%', label: 'Respuesta más Rápida' },
          { value: '+45%', label: 'Alcance de Marca' },
        ],
        tools: ['Zoho CRM', 'Lead Scoring', 'PR Campaigns', 'Funnel Analytics'],
      },
      {
        id: 'increnta',
        company: 'Increnta',
        location: 'BOGOTÁ, COLOMBIA',
        period: 'ABR 2018 – ABR 2019',
        role: 'Estratega Digital & Ejecutivo de Cuentas B2B',
        summary: 'Gestión de portafolios corporativos en sectores regulados (Banca, Finanzas, Salud y Tech).',
        tag: 'PERFORMANCE MARKETING & ROAS LIFT',
        star: {
          situation:
            'Los clientes corporativos en industrias altamente reguladas requerían mejorar el rendimiento de sus inversiones digitales respetando estrictas normativas del sector.',
          strategy:
            'Desarrollo de una arquitectura Inbound B2B combinada con auditoría intensiva de pauta publicitaria multicanal (Paid Search & Social).',
          action: [
            'Modelado de atribución de pauta digital y optimización continua de presupuestos.',
            'Presentación mensual de informes de impacto ejecutivo a directores de marketing.',
            'Alineación de equipos de contenidos SEO con campañas de pauta de conversión.',
          ],
          result:
            'Aumento del +30% en el ROAS de las cuentas asignadas y crecimiento superior al 30% en interacciones de alta calidad.',
        },
        metrics: [
          { value: '+30%', label: 'Mejora en ROAS' },
          { value: '4 Sectores', label: 'Industrias Reguladas' },
          { value: '+30%', label: 'Engagement Growth' },
        ],
        tools: ['Google Analytics 4', 'SEO Strategy', 'B2B Inbound', 'ROAS Optimization'],
      },
    ],
    EN: [
      {
        id: 'liberty',
        company: 'Liberty Prime Steakhouse',
        location: 'JERSEY CITY, NJ (USA)',
        period: 'MAY 2021 – FEB 2026',
        role: 'Sales & Client Relations Coordinator',
        summary: 'B2B corporate account expansion and high-ticket client retention management.',
        tag: 'B2B ACCOUNT EXPANSION & CSAT',
        star: {
          situation:
            'Liberty Prime sought to scale large corporate event revenue (up to 200+ guests) and build a structured, predictable B2B sales pipeline.',
          strategy:
            'Created tiered corporate executive packages, streamlined onboarding workflows, and integrated AI tools for fast proposal drafting and client follow-up.',
          action: [
            'Audited external digital marketing budgets across Google Ads, Meta, and SEO.',
            'Established real-time escalation protocols during high-stakes corporate events.',
            'Implemented a structured Client Satisfaction (CSAT) measurement system.',
          ],
          result:
            'Achieved a 93% CSAT score, managing over 200 corporate accounts per year with strong repeat business.',
        },
        metrics: [
          { value: '93%', label: 'CSAT Retention' },
          { value: '200+', label: 'Annual Accounts' },
          { value: 'Full-Cycle', label: 'B2B Event Sales' },
        ],
        tools: ['Google Ads', 'Meta Manager', 'CRM Workflows', 'AI Assistant'],
      },
      {
        id: 'clinica',
        company: 'Clínica Continental',
        location: 'LIMA, PERU',
        period: 'MAY 2019 – APR 2021',
        role: 'Marketing & Sales Strategy Lead',
        summary: 'Deployed custom Zoho CRM from scratch and led a 15-member commercial team.',
        tag: 'COMMERCIAL RESTRUCTURING & CRM',
        star: {
          situation:
            'A 15-member sales team lacked a centralized CRM platform, leading to delayed lead follow-ups and uncoordinated conversion funnels.',
          strategy:
            'Designed and launched a custom Zoho CRM architecture with automated lead scoring and instant lead distribution rules.',
          action: [
            'Coached and directly managed the 15-member commercial and tele-sales team.',
            'Optimized lead conversion rates across digital and phone channels.',
            'Trained key medical spokespeople for high-visibility PR and media campaigns.',
          ],
          result:
            'Delivered +33% YoY revenue growth and reduced lead response times by 30%.',
        },
        metrics: [
          { value: '+33%', label: 'YoY Revenue Growth' },
          { value: '30%', label: 'Faster Response Time' },
          { value: '+45%', label: 'Brand Reach' },
        ],
        tools: ['Zoho CRM', 'Lead Scoring', 'PR Campaigns', 'Funnel Analytics'],
      },
      {
        id: 'increnta',
        company: 'Increnta',
        location: 'BOGOTÁ, COLOMBIA',
        period: 'APR 2018 – APR 2019',
        role: 'Digital Strategist & B2B Account Executive',
        summary: 'Managed corporate B2B portfolios in regulated sectors (Finance, Tech, Healthcare).',
        tag: 'PERFORMANCE MARKETING & ROAS LIFT',
        star: {
          situation:
            'Corporate accounts in strictly regulated industries required maximum ROAS under rigid compliance frameworks.',
          strategy:
            'Architected an integrated B2B Inbound framework coupled with multi-channel performance auditing (Paid Search & Social).',
          action: [
            'Modeled multi-touch attribution to reallocate ad spend towards high-ROI segments.',
            'Delivered monthly executive impact reports to C-level stakeholders.',
            'Aligned SEO content creation directly with performance paid acquisition campaigns.',
          ],
          result:
            'Increased account ROAS by +30% while driving over 30% growth in qualified engagement.',
        },
        metrics: [
          { value: '+30%', label: 'ROAS Improvement' },
          { value: '4 Sectors', label: 'Regulated Markets' },
          { value: '+30%', label: 'Engagement Growth' },
        ],
        tools: ['Google Analytics 4', 'SEO Strategy', 'B2B Inbound', 'ROAS Optimization'],
      },
    ],
  };

  const cases = casesData[lang];

  return (
    <section id="cases" className="py-24 px-4 max-w-6xl mx-auto relative">
      {/* Resplandor decorativo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-blue-600/5 blur-3xl pointer-events-none rounded-full" />

      {/* Encabezado */}
      <div className="text-center mb-16 relative z-10">
        <span className="text-xs uppercase tracking-widest text-blue-400 font-mono mb-2 block">
          {lang === 'ES' ? 'METODOLOGÍA STAR' : 'STAR METHODOLOGY'}
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          {lang === 'ES' ? 'Casos de Éxito Interactivos' : 'Interactive Case Studies'}
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          {lang === 'ES'
            ? 'Explora mis proyectos principales desglosados en Situación, Estrategia, Acción y Resultado cuantificable.'
            : 'Explore key growth initiatives structured under Situation, Strategy, Action, and Quantifiable Results.'}
        </p>
      </div>

      {/* Grid de Tarjetas STAR */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {cases.map((c) => (
          <motion.div
            key={c.id}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="p-8 rounded-3xl bg-neutral-900/70 border border-neutral-800/80 backdrop-blur-md shadow-2xl flex flex-col justify-between group relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider px-3 py-1 rounded-full bg-blue-950/40 border border-blue-800/40">
                  {c.tag}
                </span>
                <Building2 className="w-5 h-5 text-neutral-500 group-hover:text-blue-400 transition-colors" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                {c.company}
              </h3>
              <p className="text-xs font-mono text-neutral-400 mb-1">{c.role}</p>
              <p className="text-[11px] text-neutral-500 font-mono mb-6">{c.location} • {c.period}</p>

              <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
                {c.summary}
              </p>

              {/* Minipíldoras STAR */}
              <div className="space-y-2 mb-6">
                <div className="p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800/80 flex items-center justify-between text-xs">
                  <span className="text-neutral-400 font-mono text-[11px]">STAR Structure</span>
                  <span className="text-emerald-400 font-semibold text-[11px]">Detailed breakdown</span>
                </div>
              </div>
            </div>

            <div>
              {/* Métricas destacadas */}
              <div className="grid grid-cols-3 gap-2 py-4 border-t border-b border-neutral-800/80 mb-6 text-center">
                {c.metrics.map((m, idx) => (
                  <div key={idx}>
                    <span className="text-base font-extrabold text-emerald-400 block tracking-tight">
                      {m.value}
                    </span>
                    <span className="text-[9px] text-neutral-400 uppercase font-mono">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setSelectedCase(c)}
                className="w-full py-3.5 rounded-2xl bg-neutral-800 hover:bg-blue-600 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-blue-600/20"
              >
                <span>{lang === 'ES' ? 'Explorar Caso Completo (STAR)' : 'Explore STAR Case Study'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal de Detalle STAR */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-neutral-900 border border-neutral-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative text-white"
            >
              {/* Botón Cerrar */}
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Encabezado del Modal */}
              <div className="mb-8">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/60 inline-block mb-3">
                  {selectedCase.tag}
                </span>
                <h3 className="text-3xl font-extrabold tracking-tight mb-2">
                  {selectedCase.company}
                </h3>
                <p className="text-sm font-semibold text-neutral-300">
                  {selectedCase.role}
                </p>
                <p className="text-xs text-neutral-500 font-mono">
                  {selectedCase.location} • {selectedCase.period}
                </p>
              </div>

              {/* Desglose STAR */}
              <div className="space-y-6">
                {/* Situación */}
                <div className="p-5 rounded-2xl bg-neutral-950/80 border border-neutral-800">
                  <div className="flex items-center gap-2 mb-2 text-amber-400 text-xs font-mono uppercase tracking-wider font-semibold">
                    <Briefcase className="w-4 h-4" />
                    <span>{lang === 'ES' ? '1. Situación (Situation)' : '1. Situation'}</span>
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {selectedCase.star.situation}
                  </p>
                </div>

                {/* Estrategia */}
                <div className="p-5 rounded-2xl bg-neutral-950/80 border border-neutral-800">
                  <div className="flex items-center gap-2 mb-2 text-blue-400 text-xs font-mono uppercase tracking-wider font-semibold">
                    <Layers className="w-4 h-4" />
                    <span>{lang === 'ES' ? '2. Estrategia & Solución (Strategy)' : '2. Strategy'}</span>
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {selectedCase.star.strategy}
                  </p>
                </div>

                {/* Acciones Ejecutadas */}
                <div className="p-5 rounded-2xl bg-neutral-950/80 border border-neutral-800">
                  <div className="flex items-center gap-2 mb-3 text-purple-400 text-xs font-mono uppercase tracking-wider font-semibold">
                    <Sparkles className="w-4 h-4" />
                    <span>{lang === 'ES' ? '3. Acciones Clave (Actions)' : '3. Key Actions'}</span>
                  </div>
                  <ul className="space-y-2">
                    {selectedCase.star.action.map((act, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resultado */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-neutral-950 to-neutral-950 border border-emerald-500/30">
                  <div className="flex items-center gap-2 mb-2 text-emerald-400 text-xs font-mono uppercase tracking-wider font-semibold">
                    <TrendingUp className="w-4 h-4" />
                    <span>{lang === 'ES' ? '4. Resultado Cuantificable (Result)' : '4. Quantifiable Result'}</span>
                  </div>
                  <p className="text-sm text-neutral-200 font-medium leading-relaxed mb-4">
                    {selectedCase.star.result}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-neutral-800">
                    {selectedCase.tools.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-xl text-[11px] font-mono bg-neutral-900 border border-neutral-700 text-neutral-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA del Modal */}
              <div className="mt-8 pt-6 border-t border-neutral-800 flex justify-end">
                <button
                  onClick={() => setSelectedCase(null)}
                  className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors"
                >
                  {lang === 'ES' ? 'Cerrar Vista' : 'Close View'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

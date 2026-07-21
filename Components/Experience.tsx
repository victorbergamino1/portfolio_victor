'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Experience() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const sectionContent = {
    EN: {
      tag: 'CASE STUDIES & IMPACT',
      title: 'Impact, by the Numbers',
      subtitle:
        'Three roles, three distinct markets, one consistent throughline: strategy backed by data.',
      roles: [
        {
          company: 'Liberty Prime Steakhouse',
          location: 'JERSEY CITY, NJ',
          period: 'MAY 2021 – FEB 2026',
          title: 'Sales & Client Relations Coordinator',
          description:
            'Managed full-cycle sales and account retention for corporate clients representing 200+ attendees. Pitched tiered event packages, guided client onboarding, resolved real-time escalations, and audited external digital ad spend across Google Ads, Meta, and SEO.',
          stats: [
            { value: '93%', label: 'Client Satisfaction (CSAT)' },
            { value: '200+', label: 'Corporate Accounts Managed/Year' },
            { value: 'Full-Cycle', label: 'B2B Event Sales & Onboarding' },
          ],
        },
        {
          company: 'Clínica Continental',
          location: 'LIMA, PERU',
          period: 'MAY 2019 – APR 2021',
          title: 'Marketing & Sales Strategy Lead',
          description:
            'Directed a 15-member multidisciplinary commercial team and deployed a custom Zoho CRM pipeline from scratch. Restructured sales workflows, coached professionals for PR/media campaigns, and drove significant YoY revenue growth.',
          stats: [
            { value: '+33%', label: 'YoY Sales Increase' },
            { value: '30%', label: 'Faster Lead Response Time' },
            { value: '+45%', label: 'Brand Visibility Growth' },
          ],
        },
        {
          company: 'Increnta',
          location: 'BOGOTÁ, COLOMBIA',
          period: 'APR 2018 – APR 2019',
          title: 'Digital Strategist & Account Executive',
          description:
            'Managed B2B corporate portfolios in highly regulated sectors (Banking, Finance, Healthcare, Tech). Analyzed multi-channel performance data, led client reporting, and optimized paid/organic strategies to boost ROAS.',
          stats: [
            { value: '+30%', label: 'Increase in ROAS' },
            { value: '4 Key', label: 'Regulated Industries Served' },
            { value: '30%+', label: 'Engagement Growth' },
          ],
        },
      ],
    },
    ES: {
      tag: 'CASOS DE ÉXITO E IMPACTO',
      title: 'Impacto en Números',
      subtitle:
        'Tres roles, tres mercados, una constante: estrategia respaldada por datos.',
      roles: [
        {
          company: 'Liberty Prime Steakhouse',
          location: 'JERSEY CITY, NJ',
          period: 'MAYO 2021 – FEB 2026',
          title: 'Coordinador de Ventas y Relaciones con Clientes',
          description:
            'Gestión comercial integral y retención de cuentas corporativas para eventos de más de 200 asistentes. Cotización de paquetes ejecutivos, acompañamiento desde la consulta hasta la ejecución, resolución de contingencias y auditoría de inversión en pauta digital (Google, Meta, SEO).',
          stats: [
            { value: '93%', label: 'Satisfacción al Cliente (CSAT)' },
            { value: '200+', label: 'Cuentas Corporativas Anuales' },
            { value: 'Ciclo Completo', label: 'Ventas B2B y Retención' },
          ],
        },
        {
          company: 'Clínica Continental',
          location: 'LIMA, PERÚ',
          period: 'MAYO 2019 – ABR 2021',
          title: 'Líder de Estrategia Comercial y Marketing',
          description:
            'Dirección de un equipo multidisciplinario de 15 personas e implementación desde cero de Zoho CRM. Reestructuración de canales de venta, entrenamiento de voceros para medios masivos y optimización del embudo comercial.',
          stats: [
            { value: '+33%', label: 'Crecimiento de Ventas YoY' },
            { value: '30%', label: 'Respuesta más Rápida a Leads' },
            { value: '+45%', label: 'Aumento en Visibilidad de Marca' },
          ],
        },
        {
          company: 'Increnta',
          location: 'BOGOTÁ, COLOMBIA',
          period: 'ABR 2018 – ABR 2019',
          title: 'Estratega Digital y Ejecutivo de Cuentas B2B',
          description:
            'Gestión de cuentas corporativas en sectores regulados (Banca, Finanzas, Salud y Tecnología). Análisis de métricas multicanal, presentación de informes ejecutivos y optimización de pauta para maximizar el retorno de inversión.',
          stats: [
            { value: '+30%', label: 'Aumento en ROAS' },
            { value: '4 Sectores', label: 'Industrias Reguladas' },
            { value: '30%+', label: 'Incremento de Engagement' },
          ],
        },
      ],
    },
  };

  const t = sectionContent[lang];
  const currentRole = t.roles[activeTab];

  return (
    <section id="experience" className="py-24 px-4 max-w-5xl mx-auto">
      {/* Encabezado */}
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-widest text-blue-500 font-mono mb-2 block">
          {t.tag}
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-3">
          {t.title}
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base max-w-lg mx-auto">
          {t.subtitle}
        </p>
      </div>

      {/* Pestañas de Selección */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {t.roles.map((role, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 ${
              activeTab === idx
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            {role.company}
          </button>
        ))}
      </div>

      {/* Tarjeta de Contenido */}
      <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-md shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + lang}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Texto de la Izquierda */}
            <div className="lg:col-span-7">
              <p className="text-xs font-mono uppercase text-blue-400 tracking-wider mb-2">
                {currentRole.company} • {currentRole.location}
              </p>
              <p className="text-xs text-neutral-500 font-mono mb-4">
                {currentRole.period}
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                {currentRole.title}
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                {currentRole.description}
              </p>
            </div>

            {/* Tarjetas de Métricas de la Derecha */}
            <div className="lg:col-span-5 space-y-3">
              {currentRole.stats.map((stat, sIdx) => (
                <div
                  key={sIdx}
                  className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800/80 flex items-center justify-between shadow-sm"
                >
                  <div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 block tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-xs text-neutral-400 font-medium">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

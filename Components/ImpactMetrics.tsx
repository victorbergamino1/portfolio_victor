'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { TrendingUp, Users, Target, Zap, Building2, Award } from 'lucide-react';

interface MetricProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  color: string;
}

function CounterCard({ value, prefix = '', suffix = '', label, sublabel, icon, color }: MetricProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(value);

  useEffect(() => {
    if (!isInView) return;

    let frame = 0;
    const end = value;
    const duration = 1200;
    const frameTime = 1000 / 60;
    const totalFrames = Math.round(duration / frameTime);

    setCount(0);

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.round(end * (1 - Math.pow(1 - progress, 2)));

      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(currentCount);
      }
    }, frameTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="p-6 sm:p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-md shadow-2xl relative overflow-hidden group flex flex-col justify-between hover:border-blue-500/50 hover:shadow-blue-500/10 hover:shadow-2xl transition-all duration-300"
    >
      <div className={`absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-25 group-hover:scale-110 transition-all duration-300 ${color}`}>
        {icon}
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-2xl bg-neutral-950 border border-neutral-800 ${color} group-hover:border-blue-500/40 group-hover:scale-105 transition-all duration-300`}>
            {icon}
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-neutral-950/80 border border-neutral-800 text-neutral-400 group-hover:text-blue-300 group-hover:border-blue-500/30 transition-all">
            Verified Impact
          </span>
        </div>

        <div className="flex items-baseline gap-1 my-2">
          <span className="text-4xl sm:text-5xl font-black text-white tracking-tight group-hover:text-blue-100 transition-colors">
            {prefix}{count}{suffix}
          </span>
        </div>

        <h3 className="text-base font-bold text-white mb-1 tracking-tight">
          {label}
        </h3>
        <p className="text-xs text-neutral-400 leading-relaxed font-normal">
          {sublabel}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center gap-2 text-[11px] text-neutral-400 font-mono group-hover:border-neutral-700 transition-colors">
        <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
        <span>Data-Driven Strategy Result</span>
      </div>
    </motion.div>
  );
}

export default function ImpactMetrics() {
  const { lang } = useLanguage();

  const metricsContent = {
    ES: {
      tag: 'IMPACTO CUANTIFICABLE',
      title: 'Métricas de Crecimiento e Impacto',
      subtitle:
        'Resultados reales logrados mediante la combinación de estrategia comercial, retención de clientes y automatización con IA.',
      items: [
        {
          value: 33,
          prefix: '+',
          suffix: '%',
          label: 'Crecimiento de Ingresos YoY',
          sublabel: 'Aumento sostenido en ventas anuales dirigiendo estrategia comercial en Clínica Continental.',
          icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
          color: 'text-emerald-400',
        },
        {
          value: 93,
          suffix: '%',
          label: 'Satisfacción y Retención (CSAT)',
          sublabel: 'Tasa de retención en cuentas corporativas B2B de alto valor en Liberty Prime.',
          icon: <Users className="w-6 h-6 text-blue-400" />,
          color: 'text-blue-400',
        },
        {
          value: 30,
          prefix: '+',
          suffix: '%',
          label: 'Optimización de ROAS',
          sublabel: 'Incremento en el retorno de inversión publicitaria en campañas B2B para Increnta.',
          icon: <Target className="w-6 h-6 text-purple-400" />,
          color: 'text-purple-400',
        },
        {
          value: 200,
          suffix: '+',
          label: 'Cuentas Corporativas / Año',
          sublabel: 'Gestión integral de clientes de alto presupuesto en EE. UU. (Liberty Prime).',
          icon: <Building2 className="w-6 h-6 text-amber-400" />,
          color: 'text-amber-400',
        },
        {
          value: 30,
          suffix: '%',
          label: 'Respuesta Más Rápida a Leads',
          sublabel: 'Reducción de tiempos de atención comercial mediante arquitectura Zoho CRM + IA.',
          icon: <Zap className="w-6 h-6 text-cyan-400" />,
          color: 'text-cyan-400',
        },
      ],
    },
    EN: {
      tag: 'QUANTIFIABLE IMPACT',
      title: 'Growth & Performance Metrics',
      subtitle:
        'Real-world results delivered across revenue growth, account retention, and AI workflow optimization.',
      items: [
        {
          value: 33,
          prefix: '+',
          suffix: '%',
          label: 'YoY Revenue Increase',
          sublabel: 'Sustained top-line growth heading commercial strategy at Clínica Continental.',
          icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
          color: 'text-emerald-400',
        },
        {
          value: 93,
          suffix: '%',
          label: 'Client Satisfaction (CSAT)',
          sublabel: 'Account retention rate across high-ticket B2B corporate accounts at Liberty Prime.',
          icon: <Users className="w-6 h-6 text-blue-400" />,
          color: 'text-blue-400',
        },
        {
          value: 30,
          prefix: '+',
          suffix: '%',
          label: 'ROAS Lift on Digital Ads',
          sublabel: 'Increase in return on ad spend for regulated B2B corporate clients at Increnta.',
          icon: <Target className="w-6 h-6 text-purple-400" />,
          color: 'text-purple-400',
        },
        {
          value: 200,
          suffix: '+',
          label: 'Corporate Accounts / Year',
          sublabel: 'Full-cycle account strategy and high-ticket event sales management in the US.',
          icon: <Building2 className="w-6 h-6 text-amber-400" />,
          color: 'text-amber-400',
        },
        {
          value: 30,
          suffix: '%',
          label: 'Faster Lead Response Time',
          sublabel: 'Workflow speed acceleration deploying custom Zoho CRM pipeline + AI qualification.',
          icon: <Zap className="w-6 h-6 text-cyan-400" />,
          color: 'text-cyan-400',
        },
      ],
    },
  };

  const t = metricsContent[lang];

  return (
    <section id="metrics" className="py-20 px-4 max-w-6xl mx-auto relative">
      <div className="text-center mb-14">
        <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono mb-2 block">
          {t.tag}
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          {t.title}
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.items.map((item, idx) => (
          <CounterCard key={idx} {...item} />
        ))}

        {/* Bloque resumen con hover glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -6, scale: 1.02 }}
          className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-950/40 via-neutral-900 to-indigo-950/30 border border-blue-500/30 shadow-2xl flex flex-col justify-between hover:border-blue-400/60 hover:shadow-blue-500/20 hover:shadow-2xl transition-all duration-300"
        >
          <div>
            <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 w-fit mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {lang === 'ES' ? 'Enfoque Holístico de Crecimiento' : 'Holistic Growth Approach'}
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed mb-4">
              {lang === 'ES'
                ? 'Conecto la adquisición de clientes con el análisis de pauta, la arquitectura CRM y agentes de IA para construir embudos comerciales de alto rendimiento.'
                : 'Bridging acquisition, performance auditing, CRM architecture, and AI agents to build high-converting growth engines.'}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 bg-blue-950/60 border border-blue-800/40 px-3.5 py-2 rounded-xl">
            <span>{lang === 'ES' ? 'Estrategia + Ejecución Tecnológica' : 'Strategy + Technical Execution'}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

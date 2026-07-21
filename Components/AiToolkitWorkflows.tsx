'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import {
  Sparkles,
  Zap,
  ArrowRight,
  Database,
  CheckCircle,
  Brain,
  Workflow,
  Cpu
} from 'lucide-react';

export default function AiToolkitWorkflows() {
  const { lang } = useLanguage();
  const [activeWorkflow, setActiveWorkflow] = useState(0);

  const aiStack = [
    {
      name: 'ChatGPT & Claude 3.5',
      category: lang === 'ES' ? 'Razonamiento Estratégico, Copywriting & Código' : 'Strategic Reasoning, Copywriting & Code',
    },
    {
      name: 'Gemini Pro & Perplexity',
      category: lang === 'ES' ? 'Investigación Profunda, Analítica & Multimodal' : 'Deep Research, Analytics & Multi-Modal',
    },
    {
      name: 'Nano Banana 2 & Canva AI',
      category: lang === 'ES' ? 'Iteración Rápida de Contenido & Recursos Creativos' : 'Rapid Content Iteration & Creative Assets',
    },
    {
      name: 'Prompt Engineering',
      category: lang === 'ES' ? 'Pensamiento en Cadena & Arquitectura de Prompts' : 'Chain-of-Thought & System Architecture',
    },
    {
      name: 'Vercel & StackBlitz',
      category: lang === 'ES' ? 'Prototipado con IA & Despliegue en la Nube' : 'AI-Assisted Prototyping & Cloud Deployment',
    },
    {
      name: 'Custom AI Agents',
      category: lang === 'ES' ? 'Flujos Integrados & Automatización Interactiva' : 'Integrated Workflows & Interactive Automation',
    },
  ];

  const workflows = [
    {
      title: lang === 'ES' ? 'Embudos de Ventas & Cualificación Automática con IA' : 'AI Lead Qualification & Pipeline Automation',
      description:
        lang === 'ES'
          ? 'Captura de prospectos en tiempo real, análisis de intención con IA, puntuación automática en CRM y alerta inmediata para ejecutivos.'
          : 'Real-time lead ingestion, AI intent analysis, automated CRM scoring, and instant high-value alerts.',
      steps: [
        {
          stage: lang === 'ES' ? '1. INGESTIÓN' : '1. INGESTION',
          title: lang === 'ES' ? 'Captura Multicanal' : 'Multi-Channel Ingestion',
          detail: lang === 'ES' ? 'Lead ingresa por Web / Meta Ads' : 'Inbound lead from Web / Meta Ads',
          icon: <Database className="w-4 h-4 text-blue-400" />,
        },
        {
          stage: lang === 'ES' ? '2. PROCESAMIENTO IA' : '2. AI PROCESSING',
          title: lang === 'ES' ? 'Agente Cualificador' : 'AI Intent & Scoring Agent',
          detail: lang === 'ES' ? 'Evaluación de presupuesto e intención' : 'Evaluates budget, timeline & intent',
          icon: <Brain className="w-4 h-4 text-purple-400" />,
        },
        {
          stage: lang === 'ES' ? '3. INTEGRACIÓN CRM' : '3. CRM INTEGRATION',
          title: lang === 'ES' ? 'Registro en Zoho/HubSpot' : 'CRM Pipeline Update',
          detail: lang === 'ES' ? 'Enrutamiento y Lead Scoring' : 'Auto lead scoring & owner assignment',
          icon: <Workflow className="w-4 h-4 text-emerald-400" />,
        },
        {
          stage: lang === 'ES' ? '4. ACCIÓN COMERCIAL' : '4. COMMERCIAL ACTION',
          title: lang === 'ES' ? 'Respuesta en < 5 min' : 'Instant Outreach (< 5m)',
          detail: lang === 'ES' ? 'Respuesta personalizada lista' : 'Custom pitch & alert sent to rep',
          icon: <Zap className="w-4 h-4 text-amber-400" />,
        },
      ],
    },
    {
      title: lang === 'ES' ? 'Auditoría de Pauta & Bucle de Optimización de ROAS' : 'Paid Media Audit & ROAS Optimization Loop',
      description:
        lang === 'ES'
          ? 'Análisis continuo de rendimiento publicitario con IA para ajustar presupuestos, creativos y maximizar el retorno en campañas B2B.'
          : 'Continuous performance auditing using LLMs to reallocate budgets, test ad copy, and scale high-ROAS channels.',
      steps: [
        {
          stage: lang === 'ES' ? '1. RECOLECCIÓN' : '1. DATA COLLECTION',
          title: lang === 'ES' ? 'Métricas GA4 & Ads' : 'GA4 & Ad Managers Data',
          detail: lang === 'ES' ? 'Extracción de CPA, CTR y ROAS' : 'Pulls CPA, CTR, and ROAS metrics',
          icon: <Database className="w-4 h-4 text-blue-400" />,
        },
        {
          stage: lang === 'ES' ? '2. DIAGNÓSTICO IA' : '2. AI DIAGNOSIS',
          title: lang === 'ES' ? 'Análisis de Anomalías' : 'AI Pattern Analysis',
          detail: lang === 'ES' ? 'Detección de fricciones y fugas' : 'Identifies decay & high-ROAS angles',
          icon: <Brain className="w-4 h-4 text-purple-400" />,
        },
        {
          stage: lang === 'ES' ? '3. ITERACIÓN COPY' : '3. COPY ITERATION',
          title: lang === 'ES' ? 'Generación de Variaciones' : 'AI Copy & Variant Gen',
          detail: lang === 'ES' ? 'Nuevos ángulos comerciales' : 'Generates high-converting angles',
          icon: <Sparkles className="w-4 h-4 text-emerald-400" />,
        },
        {
          stage: lang === 'ES' ? '4. REASIGNACIÓN' : '4. BUDGET REALLOCATION',
          title: lang === 'ES' ? 'Presupuesto Optimizado' : 'Budget Reallocation',
          detail: lang === 'ES' ? 'Inversión en canales top' : 'Scales top performing channels',
          icon: <Zap className="w-4 h-4 text-amber-400" />,
        },
      ],
    },
    {
      title: lang === 'ES' ? 'Propuestas Corporativas & Onboarding Ejecutivo' : 'Corporate Proposal & Client Onboarding Engine',
      description:
        lang === 'ES'
          ? 'Automatización en la elaboración de cotizaciones personalizadas de alto ticket e inserción directa en el flujo de retención (CSAT).'
          : 'Automated executive proposal creation and seamless transition into client onboarding and CSAT tracking.',
      steps: [
        {
          stage: lang === 'ES' ? '1. REQUERIMIENTO' : '1. REQUIREMENT',
          title: lang === 'ES' ? 'Brief del Cliente B2B' : 'B2B Client Brief',
          detail: lang === 'ES' ? 'Especificaciones y aforo' : 'Event specifications & headcount',
          icon: <Database className="w-4 h-4 text-blue-400" />,
        },
        {
          stage: lang === 'ES' ? '2. REDACCIÓN IA' : '2. AI DRAFTING',
          title: lang === 'ES' ? 'Generador de Propuesta' : 'AI Proposal Drafting',
          detail: lang === 'ES' ? 'Cotización escalonada rápida' : 'Rapid tiered package drafting',
          icon: <Brain className="w-4 h-4 text-purple-400" />,
        },
        {
          stage: lang === 'ES' ? '3. APROBACIÓN' : '3. APPROVAL',
          title: lang === 'ES' ? 'Envío & Firma Digital' : 'Contract & Delivery',
          detail: lang === 'ES' ? 'Transición a Onboarding' : 'Direct handoff to onboarding team',
          icon: <CheckCircle className="w-4 h-4 text-emerald-400" />,
        },
        {
          stage: lang === 'ES' ? '4. FIDELIZACIÓN' : '4. RETENTION & LOYALTY',
          title: lang === 'ES' ? 'Encuesta & Retención' : 'CSAT & Retention Flow',
          detail: lang === 'ES' ? 'Medición de satisfacción 93%' : 'Sustains 93% client satisfaction',
          icon: <Zap className="w-4 h-4 text-amber-400" />,
        },
      ],
    },
  ];

  return (
    <section id="ai-stack" className="py-24 px-4 max-w-6xl mx-auto relative">
      {/* Encabezado */}
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-widest text-purple-400 font-mono mb-2 block">
          {lang === 'ES' ? 'IA & FLUJOS COMERCIALES' : 'AI & COMMERCIAL WORKFLOWS'}
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          {lang === 'ES' ? 'AI Toolkit & Arquitectura de Automatización' : 'AI Toolkit & Automation Architecture'}
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          {lang === 'ES'
            ? 'Cómo integro modelos de Inteligencia Artificial para acelerar la ejecución estratégica, cualificar prospectos y multiplicar la productividad.'
            : 'How I leverage Generative AI and automated workflows to accelerate execution, qualify leads, and scale commercial productivity.'}
        </p>
      </div>

      {/* Grid del Stack de Herramientas IA con micro-interacciones hover */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-16">
        {aiStack.map((tool, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -4, scale: 1.02 }}
            className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm flex items-start gap-3 hover:border-purple-500/50 hover:shadow-purple-500/10 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-800/40 text-purple-400 shrink-0 group-hover:scale-110 group-hover:border-purple-400 transition-all duration-300">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-0.5 group-hover:text-purple-200 transition-colors">{tool.name}</h3>
              <p className="text-[11px] text-neutral-400 font-mono leading-tight">{tool.category}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Visualizador Interactivo de Flujos de Automatización */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-purple-950/20 border border-neutral-800 shadow-2xl">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div>
            <span className="text-xs font-mono uppercase text-purple-400 tracking-wider block mb-1">
              {lang === 'ES' ? 'VISUALIZADOR DE FLUJOS' : 'WORKFLOW VISUALIZER'}
            </span>
            <h3 className="text-2xl font-bold text-white">
              {lang === 'ES' ? 'Procesos de IA en Acción' : 'AI Processes in Action'}
            </h3>
          </div>

          {/* Botones de Selección de Flujo */}
          <div className="flex gap-2 flex-wrap">
            {workflows.map((wf, idx) => (
              <button
                key={idx}
                onClick={() => setActiveWorkflow(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                  activeWorkflow === idx
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                    : 'bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-white hover:border-purple-500/40'
                }`}
              >
                {lang === 'ES' ? `Flujo ${idx + 1}` : `Workflow ${idx + 1}`}
              </button>
            ))}
          </div>
        </div>

        {/* Contenido del Flujo Seleccionado */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeWorkflow + lang}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-lg font-bold text-purple-300 mb-2">
              {workflows[activeWorkflow].title}
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 mb-8 max-w-2xl">
              {workflows[activeWorkflow].description}
            </p>

            {/* Diagrama en Pasos Sequential con hover glow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
              {workflows[activeWorkflow].steps.map((step, sIdx) => (
                <motion.div
                  key={sIdx}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-5 rounded-2xl bg-neutral-950/80 border border-neutral-800/90 relative flex flex-col justify-between hover:border-purple-500/60 hover:shadow-purple-500/20 hover:shadow-xl transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider font-semibold">
                        {step.stage}
                      </span>
                      <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 group-hover:border-purple-500/40 group-hover:scale-110 transition-all duration-300">
                        {step.icon}
                      </div>
                    </div>
                    <h5 className="text-sm font-bold text-white mb-1 group-hover:text-purple-200 transition-colors">{step.title}</h5>
                    <p className="text-xs text-neutral-400">{step.detail}</p>
                  </div>

                  {sIdx < 3 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-neutral-900 border border-neutral-800 text-purple-400 shadow-md">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

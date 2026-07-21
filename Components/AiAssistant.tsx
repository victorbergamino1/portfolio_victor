'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Sparkles, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PRESET_QUESTIONS = {
  ES: [
    {
      q: '¿Cuál es el perfil estratégico de Víctor?',
      a: 'Víctor es un profesional bilingüe en Gestión de Cuentas B2B, Customer Success y Estrategia de Crecimiento (Growth) con más de 8 años de experiencia impulsando ingresos medibles en EE. UU. y Latinoamérica.',
    },
    {
      q: '¿Qué logros y métricas clave destacan en su experiencia?',
      a: 'Destacan un 93% de satisfacción (CSAT) gestionando 200+ cuentas corporativas anuales en Jersey City, un aumento del 33% YoY en ventas tras estructurar un equipo de 15 personas en Clínica Continental, y un +30% en ROAS en agencia B2B.',
    },
    {
      q: '¿Qué herramientas de IA, CRM y certificaciones domina?',
      a: 'Domina IA Generativa (ChatGPT, Claude, Gemini) para automatización de workflows, además de HubSpot y Zoho CRM. Cuenta con certificaciones en AI for Marketers (HubSpot 2026) y Google Analytics (2026).',
    },
  ],
  EN: [
    {
      q: "What is Victor's professional profile?",
      a: 'Victor is a bilingual Account Management, Customer Success, and Growth professional with 8+ years of experience driving measurable revenue across US and LATAM markets.',
    },
    {
      q: 'What key metrics support his track record?',
      a: 'Key achievements include a 93% CSAT managing 200+ annual corporate accounts in Jersey City, a +33% YoY sales increase at Clínica Continental, and a +30% boost in ROAS managing B2B corporate portfolios.',
    },
    {
      q: 'What AI, CRM, and certifications does he have?',
      a: 'He specializes in Generative AI tools (ChatGPT, Claude, Gemini) for workflow automation, alongside HubSpot and Zoho CRM. He holds 2026 certifications in AI for Marketers (HubSpot) and Google Analytics.',
    },
  ],
};

const WELCOME_MESSAGES = {
  ES: '¡Hola! Soy el asistente virtual de Víctor. ¿Qué te gustaría saber sobre su experiencia en Gestión de Cuentas, IA o Liderazgo Comercial?',
  EN: "Hello! I'm Victor's AI assistant. What would you like to know about his background in Account Management, AI, or Sales Strategy?",
};

export default function AiAssistant() {
  const { lang } = useLanguage();
  const currentLang = (lang as 'ES' | 'EN') || 'EN';
  const [isOpen, setIsOpen] = useState(false);

  const currentQuestions = PRESET_QUESTIONS[currentLang];
  const welcomeMessage = WELCOME_MESSAGES[currentLang];

  const [chatHistory, setChatHistory] = useState<
    { role: 'user' | 'assistant'; content: string }[]
  >([]);

  const handleSelectQuestion = (q: string, a: string) => {
    setChatHistory((prev) => [
      ...prev,
      { role: 'user', content: q },
      { role: 'assistant', content: a },
    ]);
  };

  return (
    <>
      {/* Botón Flotante Launcher */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          data-ai-button="true"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-2xl hover:shadow-blue-500/25 border border-blue-400/30 transition-all text-sm backdrop-blur-md"
        >
          <Bot className="w-5 h-5 animate-pulse" />
          <span className="hidden sm:inline">Ask Victor&apos;s AI</span>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
        </motion.button>
      </div>

      {/* Ventana Modal del Chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-[400px] h-[520px] bg-slate-900/95 border border-slate-800 rounded-2xl shadow-2xl backdrop-blur-xl flex flex-col overflow-hidden text-left"
          >
            {/* Header */}
            <div className="p-4 border-b border-slate-800/80 flex items-center justify-between bg-slate-950/40">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Victor&apos;s AI Assistant
                  </h3>
                  <p className="text-xs text-slate-400">
                    {currentLang === 'ES'
                      ? 'Bilingüe • En línea'
                      : 'Bilingual • Online'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Mensajes */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
              <div className="flex gap-3 justify-start">
                <div className="w-6 h-6 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="p-3 rounded-xl max-w-[80%] leading-relaxed bg-slate-800/80 text-slate-200 border border-slate-700/50 rounded-bl-none">
                  {welcomeMessage}
                </div>
              </div>

              {chatHistory.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-3 ${
                    msg.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-6 h-6 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}
                  <div
                    className={`p-3 rounded-xl max-w-[80%] leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-slate-800/80 text-slate-200 border border-slate-700/50 rounded-bl-none'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Preguntas Sugeridas */}
            <div className="p-3 border-t border-slate-800/80 bg-slate-950/30 space-y-1.5">
              <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold px-1">
                {currentLang === 'ES'
                  ? 'Preguntas frecuentes:'
                  : 'Suggested questions:'}
              </p>
              <div className="space-y-1 max-h-[120px] overflow-y-auto">
                {currentQuestions.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelectQuestion(item.q, item.a)}
                    className="w-full text-left p-2 rounded-lg bg-slate-800/40 hover:bg-slate-800 text-slate-300 text-[11px] border border-slate-700/30 flex items-center justify-between group transition"
                  >
                    <span className="truncate">{item.q}</span>
                    <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-blue-400 flex-shrink-0 ml-1" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

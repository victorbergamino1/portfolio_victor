'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export default function Contact() {
  const { lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const contactContent = {
    EN: {
      title: 'Get In Touch',
      subtitle: "Let's connect! Send me a message or reach out directly.",
      nameLabel: 'Name',
      namePlaceholder: 'Your Name',
      emailLabel: 'Email',
      emailPlaceholder: 'you@example.com',
      messageLabel: 'Message',
      messagePlaceholder: 'How can I help you?',
      sendBtn: 'Send Message',
      successMsg: 'Thank you! Your message has been sent successfully.',
      directContact: 'Direct Contact',
      location: 'Jersey City, NJ',
    },
    ES: {
      title: 'Contacto',
      subtitle: '¡Conectemos! Envíame un mensaje o contáctame directamente.',
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu Nombre',
      emailLabel: 'Correo Electrónico',
      emailPlaceholder: 'tu@ejemplo.com',
      messageLabel: 'Mensaje',
      messagePlaceholder: '¿En qué puedo ayudarte?',
      sendBtn: 'Enviar Mensaje',
      successMsg: '¡Gracias! Tu mensaje ha sido enviado con éxito.',
      directContact: 'Contacto Directo',
      location: 'Jersey City, NJ',
    },
  };

  const t = contactContent[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white tracking-tight mb-3">
          {t.title}
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base max-w-md mx-auto">
          {t.subtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Formulario */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm"
        >
          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              {t.nameLabel}
            </label>
            <input
              type="text"
              required
              placeholder={t.namePlaceholder}
              className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              {t.emailLabel}
            </label>
            <input
              type="email"
              required
              placeholder={t.emailPlaceholder}
              className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              {t.messageLabel}
            </label>
            <textarea
              rows={4}
              required
              placeholder={t.messagePlaceholder}
              className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-500 transition-colors"
          >
            {t.sendBtn}
          </button>
          {submitted && (
            <p className="text-xs text-green-400 text-center mt-2 font-medium">
              {t.successMsg}
            </p>
          )}
        </motion.form>

        {/* Tarjeta de Información Directa */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm flex flex-col justify-between"
        >
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              {t.directContact}
            </h3>
            <div className="space-y-4 text-sm text-neutral-300">
              <p className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{t.location}</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href="tel:5513259457"
                  className="hover:text-white transition-colors"
                >
                  (551) 325-9457
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href="mailto:victorbergamino1@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  victorbergamino1@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-800">
            <a
              href="https://linkedin.com/in/victor-bergamino"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

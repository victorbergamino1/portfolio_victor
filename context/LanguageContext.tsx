'use client';

import React, { createContext, useContext, useState } from 'react';

type Language = 'ES' | 'EN';

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Idioma por defecto configurado en Inglés ('EN')
  const [lang, setLang] = useState<Language>('EN');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'EN' ? 'ES' : 'EN'));
  };

  const setLanguage = (newLang: Language) => {
    setLang(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe usarse dentro de un LanguageProvider');
  }
  return context;
}

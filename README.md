This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
npm install framer-motion lucide-react clsx
"use client";

import React, { createContext, useContext, useState } from "react";

type Language = "ES" | "EN";

interface LanguageContextType {
lang: Language;
toggleLanguage: () => void;
setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
const [lang, setLang] = useState<Language>("ES");

const toggleLanguage = () => {
setLang((prev) => (prev === "ES" ? "EN" : "ES"));
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
throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
}
return context;
}

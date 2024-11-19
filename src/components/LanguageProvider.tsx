"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

type Language = "DE" | "EN";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "DE",
  toggleLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export default function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguage] = useState<Language>("DE");

  const toggleLanguage = () => {
    setLanguage(language === "DE" ? "EN" : "DE");
  };
  React.useEffect(() => {
    console.log("langaugae", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

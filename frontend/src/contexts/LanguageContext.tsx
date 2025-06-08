import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Language, LanguageContextType } from "../types/translations";
import { en } from "../translations/en";
import { vi } from "../translations/vi";

const translations = {
  en,
  vi,
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  // Get saved language from localStorage or default to English
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("nestlux-language");
    return saved === "vi" || saved === "en" ? saved : "en";
  });

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem("nestlux-language", language);
  }, [language]);

  // Get current translations
  const t = translations[language];

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export default LanguageContext;

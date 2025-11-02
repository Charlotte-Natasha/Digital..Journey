import React, { createContext, useState, useContext, useEffect } from "react";
import i18n from "../../i18n";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const storedLang = localStorage.getItem('appLanguage');
    if (storedLang) {
      // Make sure i18n is also set to the stored language on init
      i18n.changeLanguage(storedLang);
      return storedLang;
    }
    const browserLang = navigator.language.substring(0, 2);
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('appLanguage', language);
  }, [language]);

  const changeLanguage = (lang) => {
    if (lang) {
      const normalizedLang = lang.toLowerCase();
      setLanguage(normalizedLang);
      i18n.changeLanguage(normalizedLang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
        {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
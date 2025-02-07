import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import no from "./no.json";

const savedLanguage = localStorage.getItem("i18nLanguage") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    no: { translation: no },
  },
  lng: savedLanguage, // Default language
  fallbackLng: "en", // Fallback if the selected language is missing
  interpolation: { escapeValue: false },
});

export default i18n;

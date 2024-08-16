import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json"; // English translations
import si from "./locales/si/translation.json"; // Sinhala translations
import ta from "./locales/ta/translation.json"; // Tamil translations

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    si: { translation: si },
    ta: { translation: ta },
  },
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

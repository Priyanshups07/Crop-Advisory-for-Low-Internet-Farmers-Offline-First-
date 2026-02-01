import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

// Single, clean i18n init that prefers stored language and loads from /public/locales/*.json
// This works offline when those files are cached by the PWA service worker.

const detectionOptions = {
  // Prefer explicit user setting persisted in localStorage
  order: ['localStorage', 'navigator'],
  lookupLocalStorage: 'lang',
  caches: ['localStorage'],
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpBackend)
  .init({
    fallbackLng: 'en',
    debug: false,
    interpolation: { escapeValue: false },
    detection: detectionOptions,
    backend: {
      // Served from public/locales/{lng}.json
      loadPath: '/locales/{{lng}}.json'
    }
  });

export default i18next;

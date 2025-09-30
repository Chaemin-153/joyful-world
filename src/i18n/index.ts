import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  KOR: {
    common: await import('../locales/KOR/common.json'),
  },
  ENG: {
    common: await import('../locales/ENG/common.json'),
  },
};

// localStorage 키 통일
const LANG_STORAGE_KEY = 'app.lang';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    // namespaces
    ns: ['common'],
    defaultNS: 'common',
    // 초기 언어: localStorage > 브라우저 감지 > Fallback
    lng: localStorage.getItem(LANG_STORAGE_KEY) || undefined,
    fallbackLng: 'ENG',
    supportedLngs: ['KOR', 'ENG'],
    interpolation: { escapeValue: false },
    detection: {
      // 순서: localStorage > htmlTag > navigator
      order: ['localStorage', 'htmlTag', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: LANG_STORAGE_KEY,
    },
    react: { useSuspense: false },
  });

// <html lang="ko/en"> 동기화
const updateHtmlLang = (lng?: string) => {
  document.documentElement.lang = lng === 'KOR' ? 'ko' : 'en';
};
updateHtmlLang(i18n.resolvedLanguage);
i18n.on('languageChanged', (lng) => updateHtmlLang(lng));

export default i18n;

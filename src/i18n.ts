import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: { home: 'Home', product: 'Product' },
      hero: {
        title: 'Your Company, Simply Clear',
        subtitle: 'We build things customers love.',
      },
      cta: 'Contact Us',
      product: {
        title: 'Our Product',
        desc: 'Fast, reliable, and easy to use.',
      },
    },
  },
  ko: {
    translation: {
      nav: { home: '홈', product: '제품' },
      hero: {
        title: '심플하고 명확한 회사 소개',
        subtitle: '고객이 사랑하는 것을 만듭니다.',
      },
      cta: '문의하기',
      product: {
        title: '우리의 제품',
        desc: '빠르고, 안정적이며, 사용이 쉽습니다.',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ko',
    // "몽골어 추가 예정" supportedLngs: ['en', 'ko', 'mn'],
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;

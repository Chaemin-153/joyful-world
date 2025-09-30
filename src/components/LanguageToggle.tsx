import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type Lang = 'KOR' | 'ENG';

export default function LanguageToggle({
  closeAndFocus,
}: {
  closeAndFocus?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage as Lang) || 'KOR';

  // 외부 클릭 시 닫힘
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = async (value: Lang) => {
    await i18n.changeLanguage(value);
    localStorage.setItem('app.lang', value);
    setOpen(false);
  };

  return (
    <div className="relative" ref={wrapperRef}>
      {/* 버튼 */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1 text-xs md:text-sm hover:cursor-pointer"
      >
        {lang === 'KOR' ? (
          <img src="icon_korea.png" alt="lng_kor" className="w-6" />
        ) : (
          <img src="icon_us.png" alt="lng_eng" className="w-6" />
        )}
        <ChevronDown size={14} />
      </button>

      {/* 드롭다운 박스 */}
      {open && (
        <div className="absolute md:right-0 -top-22 md:top-6 mt-1 w-28 bg-white text-brown rounded-md shadow-md border border-gray-200 text-sm overflow-hidden z-50">
          <button
            type="button"
            className="w-full px-3 py-2 text-left hover:bg-gray-100"
            onClick={() => {
              handleSelect('KOR');
              closeAndFocus?.();
            }}
          >
            한국어
          </button>
          <button
            type="button"
            className="w-full px-3 py-2 text-left hover:bg-gray-100"
            onClick={() => {
              handleSelect('ENG');
              closeAndFocus?.();
            }}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
}

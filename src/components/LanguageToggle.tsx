import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function LanguageToggle() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<'KOR' | 'ENG'>('KOR'); // 현재 언어 상태
  const wrapperRef = useRef<HTMLDivElement>(null);

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

  const handleSelect = (value: 'KOR' | 'ENG') => {
    setLang(value);
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
        <div className="absolute right-0 mt-1 w-28 bg-white text-brown rounded-md shadow-md border border-gray-200 text-sm overflow-hidden z-50">
          <button
            type="button"
            className="w-full px-3 py-2 text-left hover:bg-gray-100"
            onClick={() => handleSelect('KOR')}
          >
            한국어
          </button>
          <button
            type="button"
            className="w-full px-3 py-2 text-left hover:bg-gray-100"
            onClick={() => handleSelect('ENG')}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
}

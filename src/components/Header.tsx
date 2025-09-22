import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MenuButton from './MenuButton';
import SidePannel from './SidePannel';
import LanguageToggle from './LanguageToggle';

// 재사용 Nav 컴포넌트
function Nav({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `hover:text-orange ${isActive ? 'font-semibold' : ''}`
      }
    >
      {children}
    </NavLink>
  );
}

const Header = () => {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  // ESC로 닫기
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // 열렸을 때 배경 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const closeAndFocus = () => {
    setOpen(false);
    btnRef.current?.focus();
  };

  return (
    <>
      <header className="fixed top-0 left-0 pb-2 w-full bg-brown backdrop-blur z-[100] text-white">
        {/* Top Header */}
        <div className="w-full bg-brown-dark hidden md:block">
          <div className="mx-auto max-w-6xl px-4 h-8 flex items-center justify-end gap-4 text-sm md:text-base text-white">
            <a
              href="https://www.instagram.com/joyful_jjam/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <img
                src="/fav-instagram.png"
                alt="instagram"
                className="w-4 h-4 object-contain"
              />
              <span>INSTAGRAM</span>
            </a>
            <a
              href="https://smartstore.naver.com/honeyjjam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <img
                src="/fav-shopping.png"
                alt="shop"
                className="w-4 h-4 object-contain"
              />
              <span>SHOP</span>
            </a>
            <LanguageToggle />
          </div>
        </div>

        {/* Main Header */}
        <div className="mx-auto max-w-6xl pt-2 px-4 h-16 flex items-center justify-between">
          {/* 로고(Home 버튼) */}
          <Link to="/" className="flex items-center font-bold text-lg">
            <img
              src="/logo_background.png"
              alt="brand_logo"
              className="h-12 md:h-16 w-auto"
            />
          </Link>

          {/* 데스크탑: 네비게이션 */}
          <nav className="hidden md:flex md:text-lg gap-6">
            <Nav to="/">Home</Nav>
            <Nav to="/about-us">About Us</Nav>
            <Nav to="/contact">Contact</Nav>
            <Nav to="/brand-story">Brand Story</Nav>
            <Nav to="/product">Products</Nav>
            <Nav to="/community">Community</Nav>
          </nav>

          {/* 모바일: 햄버거 버튼 */}
          <MenuButton
            open={open}
            onOpen={() => setOpen(true)}
            btnRef={btnRef}
          />
        </div>
      </header>

      {/* 사이드 패널 */}
      <SidePannel open={open} closeAndFocus={closeAndFocus} />
    </>
  );
};

export default Header;

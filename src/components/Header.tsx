import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MenuButton from './MenuButton';
import SidePannel from './SidePannel';

// 재사용 Nav 컴포넌트
function Nav({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `hover:underline ${isActive ? 'font-semibold underline' : ''}`
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
      <header className="fixed top-0 left-0 w-full bg-brown backdrop-blur z-[100] text-white">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          {/* 로고(Home 버튼) */}
          <Link to="/" className="flex items-center font-bold text-lg">
            <img
              src="/logo_background.png"
              alt="brand_logo"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* 데스크탑: 네비게이션 */}
          <nav className="hidden md:flex gap-6">
            <Nav to="/">Home</Nav>
            <Nav to="/about-us">About Us</Nav>
            <Nav to="/partner">Partner</Nav>
            <Nav to="/brand-story">Brand Story</Nav>
            <Nav to="/product">Product</Nav>
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

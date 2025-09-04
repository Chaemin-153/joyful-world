import { NavLink } from 'react-router-dom';

type SidePannelProps = {
  open: boolean;
  closeAndFocus: () => void;
};

// 모바일 사이드바 Nav (클릭 시 닫힘)
function MobileNav({
  to,
  onNavigate,
  children,
}: {
  to: string;
  onNavigate: () => void;
  children: React.ReactNode;
}) {
  return (
    <NavLink
      to={to}
      onClick={onNavigate}
      className={({ isActive }) =>
        `px-2 py-3 rounded hover:bg-gray-100 ${
          isActive ? 'font-semibold bg-gray-100' : ''
        }`
      }
    >
      {children}
    </NavLink>
  );
}
const SidePannel = ({ open, closeAndFocus }: SidePannelProps) => {
  return (
    <>
      {/* ---- 모바일 사이드바 & 오버레이 ---- */}
      {/* 오버레이: 다른 곳 클릭 시 닫힘 */}
      <div
        className={`md:hidden fixed inset-0 transition-opacity ${
          open
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!open}
        onClick={closeAndFocus}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      {/* 사이드 패널 */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`md:hidden fixed top-0 right-0 h-dvh w-72 max-w-[85vw] bg-white text-gray-900 shadow-xl border-l transition-transform duration-200 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        // 패널 내부 클릭 시 오버레이 onClick 버블링 막기
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-16 px-4 border-b flex items-center justify-between">
          <span className="font-semibold">Menu</span>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border px-2 py-1 text-sm"
            aria-label="Close menu"
            onClick={closeAndFocus}
          >
            ✕
          </button>
        </div>

        <nav className="px-4 py-4 flex flex-col">
          <MobileNav to="/" onNavigate={closeAndFocus}>
            Home
          </MobileNav>
          <MobileNav to="/about-us" onNavigate={closeAndFocus}>
            About Us
          </MobileNav>
          <MobileNav to="/partner" onNavigate={closeAndFocus}>
            Partner
          </MobileNav>
          <MobileNav to="/brand-story" onNavigate={closeAndFocus}>
            Brand Story
          </MobileNav>
          <MobileNav to="/product" onNavigate={closeAndFocus}>
            Product
          </MobileNav>
          <MobileNav to="/community" onNavigate={closeAndFocus}>
            Community
          </MobileNav>
        </nav>
      </aside>
    </>
  );
};

export default SidePannel;

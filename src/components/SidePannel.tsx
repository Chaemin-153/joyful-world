import { NavLink } from 'react-router-dom';
import LanguageToggle from './LanguageToggle';

type SidePannelProps = {
  open: boolean;
  closeAndFocus: () => void;
};

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
      {/* Overlay */}
      <div
        className={`md:hidden fixed inset-0 transition-opacity z-50 ${
          open
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!open}
        onClick={closeAndFocus}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Side panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`md:hidden fixed top-0 right-0 h-dvh w-2/3 max-w-[85vw] bg-white text-gray-900 shadow-xl transition-transform duration-200 z-50 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 세로 플렉스 컨테이너: 위(nav) - 아래(footer) */}
        <div className="flex flex-col h-full pt-16">
          {/* NAV (스크롤 가능) */}
          <nav className="px-4 py-4 flex flex-col gap-1 flex-1">
            <MobileNav to="/" onNavigate={closeAndFocus}>
              Home
            </MobileNav>
            <MobileNav to="/about-us" onNavigate={closeAndFocus}>
              About Us
            </MobileNav>
            <MobileNav to="/contact" onNavigate={closeAndFocus}>
              Contact
            </MobileNav>
            <MobileNav to="/brand-story" onNavigate={closeAndFocus}>
              Brand Story
            </MobileNav>
            <MobileNav to="/products" onNavigate={closeAndFocus}>
              Products
            </MobileNav>
            <MobileNav to="/community" onNavigate={closeAndFocus}>
              Community
            </MobileNav>
          </nav>

          {/* FOOTER (항상 하단 고정) */}
          <div className="px-4 py-4">
            <LanguageToggle closeAndFocus={closeAndFocus} />
          </div>
        </div>
      </aside>
    </>
  );
};

export default SidePannel;

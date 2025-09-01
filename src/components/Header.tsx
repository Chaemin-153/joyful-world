import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-brown backdrop-blur z-100 text-white">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        {/* 로고(Home 버튼) */}
        <Link to="/" className="font-bold text-lg">
          <img src="/logo_background.png" alt="brand_logo" className="w-30" />
        </Link>

        {/* 페이지 이동 버튼 */}
        <nav className="flex gap-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about-us">About Us</NavLink>
          <NavLink to="/partner">Partner</NavLink>
          <NavLink to="/brand-story">Brand Story</NavLink>
          <NavLink to="/product">Product</NavLink>
          <NavLink to="/community">Community</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;

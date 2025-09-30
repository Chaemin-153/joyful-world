import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollTopButton from '../components/ScrollTopButton';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1 mx-auto w-full max-w-6xl px-4 pt-16">
        <Outlet />
      </main>
      <ScrollTopButton />
      <Footer />
    </div>
  );
};

export default Layout;

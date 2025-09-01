import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1 mx-auto w-full max-w-6xl px-4 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

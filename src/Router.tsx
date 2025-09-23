import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import BrandStoryPage from './pages/BrandStoryPage';
import AboutUsPage from './pages/AboutUsPage';
import ProductPage from './pages/ProductPage';
import ScrollToTop from './components/ScrollToTop';

const AppRouter = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Home 페이지 */}
        <Route index element={<HomePage />} />
        {/* About Us 페이지 */}
        <Route path="/about-us" element={<AboutUsPage />} />
        {/* Contact 페이지 */}
        <Route path="/contact" element={<ContactPage />} />
        {/* Brand Story 페이지 */}
        <Route path="/brand-story" element={<BrandStoryPage />} />
        {/* Product 페이지 */}
        <Route path="/product" element={<ProductPage />} />
        {/* Community 페이지 */}
        {/* <Route path="/community" element={<CommunityPage />} /> */}
      </Route>
      {/* Not Found */}
    </Routes>
  </BrowserRouter>
);

export default AppRouter;

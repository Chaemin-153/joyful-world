import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="w-full border-t bg-gray-50">
      <div className="flex flex-col md:flex-row justify-between gap-6 mx-auto max-w-6xl px-4 py-6 text-sm text-brown ">
        <Link to="/" className="font-bold text-lg">
          <img src="/logo_background.png" alt="brand_logo" className="w-36" />
        </Link>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <img
              src="/fav-email.png"
              alt="fav-email"
              className="w-4 h-4 object-contain"
            />
            <span>joyful_honeyjam@naver.com</span>
          </div>
          <a
            href="https://www.instagram.com/joyful_jjam/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <img
              src="/fav-instagram.png"
              alt="instagram"
              className="w-4 h-4 object-contain"
            />
            <span>INSTAGRAM</span>
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <div>{t('footer.cs_center')}</div>
          <div>{t('footer.working')}</div>
          <div>{t('footer.lunch')}</div>
          <div>{t('footer.holiday')}</div>
        </div>
        <div className="flex flex-col gap-2">
          <Link to="/about-us" className="underline">
            About Us
          </Link>
          <Link to="/contact" className="underline">
            Contact
          </Link>
          <Link to="/brand-story" className="underline">
            Brand Story
          </Link>
          <Link to="/products" className="underline">
            Products
          </Link>
          <Link to="/community" className="underline">
            Community
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-brown flex flex-col gap-2">
        <span>
          {t('footer.business_report_number')}{' '}
          <br className="block md:hidden" />
          <span className="hidden md:inline">|</span>{' '}
          {t('footer.mail_report_number')}{' '}
          <span className="hidden md:inline">| </span>{' '}
          <br className="block md:hidden" />
          {t('footer.ceo')}
        </span>
        <span>
          {t('footer.address')} <span className="hidden md:inline">| </span>
          <br className="block md:hidden" />
          COPYRIGHT© 잼있는 세상 ALL RIGHT RESERVED.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

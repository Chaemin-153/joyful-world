import { Link } from 'react-router-dom';

const Footer = () => {
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
          <div>고객센터 0507-1404-6835</div>
          <div>월-금 10:00 ~ 16:00</div>
          <div>점심시간 12:00 ~ 13:00</div>
          <div>주말 및 공휴일 휴무</div>
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
          <Link to="/product" className="underline">
            Product
          </Link>
          <Link to="/community" className="underline">
            Community
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-brown flex flex-col gap-2">
        <span>
          잼있는 세상 | 사업자등록번호 721-34-01365{' '}
          <br className="block md:hidden" />
          <span className="hidden md:inline">| </span> 통신판매업신고번호 제
          2024-서울광진-1525 <span className="hidden md:inline">| </span>{' '}
          <br className="block md:hidden" />
          대표 이지은
        </span>
        <span>
          주소 | 서울특별시 광진구 아차산로 294 4층 청년쿡비즈니스센터{' '}
          <span className="hidden md:inline">| </span>
          <br className="block md:hidden" />
          COPYRIGHT© 잼있는 세상 ALL RIGHT RESERVED.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

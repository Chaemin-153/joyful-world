import { Link } from 'react-router-dom';
import ContactPage from './ContactPage';
import AboutUsPage from './AboutUsPage';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center gap-8 text-brown text-center">
      <AboutUsPage />
      {/* 3. Our Products */}
      <div className="flex flex-col gap-12 mt-[-6rem] w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-orange">
          Our Products
        </h1>
        <div className="w-full flex justify-center">
          <div className="h-[3px] w-20 bg-orange"></div>
        </div>
        {/* Our Products Boxes */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-4 text-left text-white">
            {/* Box-1 : Joyful Jam */}
            <div className="relative w-full max-w-md">
              <img
                src="jam_sample2.png"
                alt="OurProduct_JoyfulJam"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/40 rounded-lg flex flex-col gap-6 items-start justify-start px-8 py-14">
                <h4 className="text-2xl font-bold">인생꿀잼(Joyful Jam)</h4>
                <p>맛있고 즐거운 디저트로 특별한 미식 경험을 제공합니다</p>
                <Link
                  to={'/product'}
                  className="bg-yellow text-black font-bold text:md md:text-lg rounded-sm px-6 md:px-8 py-3"
                >
                  제품 바로가기
                </Link>
              </div>
            </div>
            {/* Box-2 : WISE */}
            <div className="relative w-full max-w-md">
              <img
                src="ourproducts_wise.jpg"
                alt="OurProduct_Wise"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/40 rounded-lg flex flex-col gap-6 items-start justify-start px-8 py-14">
                <h4 className="text-2xl font-bold">와이즈(WISE)</h4>
                <p>좋은 원재료와 영양성분으로 똑똑한 식습관을 도와줍니다</p>
                <Link
                  to={'/product'}
                  className="bg-yellow text-black font-bold text:md md:ttext-lg rounded-sm px-6 md:px-8 py-3"
                >
                  제품 바로가기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactPage />
    </div>
  );
};

export default HomePage;

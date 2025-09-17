const AboutUsPage = () => {
  return (
    <div className="flex flex-col items-center py-8 md:py-12 mb-12 md:mb-32 gap-8 text-brown text-center">
      <img
        src="wallpaper_background.png"
        alt="wallpaper_background"
        className="w-full h-56 md:h-[50vh] object-cover -z-10 absolute top-16"
      />
      {/* 1. 회사 소개글 */}
      <div className="flex flex-col gap-12 mt-60 md:mt-128">
        <h1 className="text-3xl md:text-4xl font-bold text-orange">
          지친 일상에 즐거움을 <br className="block md:hidden" />
          선물합니다
        </h1>
        <h1 className="text-2xl md:text-4xl font-bold text-brown">
          건강하고 맛있는 식경험으로
          <br />
          <span className="text-orange">즐거움</span>을 더하는{' '}
          <br className="block md:hidden" />
          잼있는 세상입니다
        </h1>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            (B2C) <br className="block md:hidden" />
            간편식 및 간식
            <br className="block md:hidden" />
            제조 전문 기업
          </h2>
          <p>
            모든 제품은
            <span className="font-bold"> 자연에서 온 천연재료</span>와
            <br className="block md:hidden" />
            <span className="font-bold"> 직접 연구・개발한 레시피</span>로
            만들어집니다. <br />
            건강하고 맛있는 즐거움을 위해
            <br className="block md:hidden" />
            식품전문가가 정성을 다해 만듭니다.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            (B2B) <br className="block md:hidden" />
            맞춤형 식품 레시피
            <br className="block md:hidden" /> 개발 전문 기업
          </h2>
          <p>
            고객사의 요청에 따라 시장성과 품질을 모두
            <br className="block md:hidden" />
            고려한
            <span className="font-bold"> 맞춤형 레시피</span>를 개발해 드립니다.
            <br />
            제품 기획부터 샘플 테스트,
            <br className="block md:hidden" />
            레시피 확정까지 전 과정을
            <br className="block md:hidden" />
            <span className="font-bold"> 식품영양전문가</span>가 체계적으로
            관리합니다.
          </p>
        </div>
      </div>
      {/* 2. Our Value */}
      <div className="flex flex-col gap-12 mt-12 pt-16 border-t-4 border-dotted border-brown w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-orange">
          Our Value
        </h1>
        <div className="flex flex-col gap-8">
          <h2 className="text-xl italic">
            “<span className="font-bold">Dear friend</span>,
            <br className="block md:hidden" />I pray that you may enjoy
            <span className="font-bold"> good health</span>
            <br className="block md:hidden" /> and that
            <span className="font-bold"> all may go well with you</span>,
            <br />
            even as your soul is getting along well.”
          </h2>
          <p>
            <span className="font-bold">JOYFUL WORLD</span>는
            <br className="block md:hidden" />한 고객이
            <span className="font-bold"> 범사에 잘되고 건강하기를</span>{' '}
            <br className="block md:hidden" />
            진심으로 바라며
            <br />
            정성과 진심을 다해
            <br className="block md:hidden" />
            제품을 만들고 있습니다.
          </p>
        </div>
        {/* Our Value Boxes */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-4">
            {/* Box-1 : JOYFUL Well-Being */}
            <div className="flex flex-col gap-4 p-6 border-3 rounded-lg border-orange w-full md:w-1/3">
              <h4 className="text-2xl font-bold">JOYFUL Well-Being</h4>
              <p className="pt-4 md:p-2">
                안심하며 즐기실 수 있도록,
                <br />
                믿을 수 있는
                <span className="font-bold"> 천연 재료 </span>,
                <br />
                철저하게 관리된
                <span className="font-bold"> 위생 시설</span>,
                <br />한 치의 타협 없는 꼼꼼한
                <span className="font-bold"> 품질 관리</span>를
                <br />
                고집합니다.
              </p>
            </div>
            {/* Box-2 : JOYFUL FLAVOR */}
            <div className="flex flex-col gap-4 p-6 border-3 rounded-lg border-orange w-full md:w-1/3">
              <h4 className="text-2xl font-bold">JOYFUL FLAVOR</h4>
              <p className="pt-4 md:p-2">
                <span className="font-bold">즐거운 식경험 제공</span>을 위해,
                <br />
                끊임없이 제품을 연구 및 개발합니다.
                <br />
                일관된 맛과 품질로 고객들에게
                <br />
                맛의 즐거움을 제공합니다.
              </p>
            </div>
            {/* Box-3 : JOYFUL LIFE */}
            <div className="flex flex-col gap-4 p-6 border-3 rounded-lg border-orange w-full md:w-1/3">
              <h4 className="text-2xl font-bold">JOYFUL LIFE</h4>
              <p className="pt-4 md:p-2">
                인생이 가치있다는 메시지를
                <br />
                제품에 녹아 내어 일상 곳곳에
                <br />
                메시지를 전합니다.
                <br />
                지친 일상에 한 입의 위로와
                <br />
                즐거움을 선물합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;

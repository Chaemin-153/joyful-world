const BrandStoryPage = () => {
  return (
    <div className="flex flex-col items-center my-12 md:my-24 px-4 gap-16 text-brown">
      {/* 1. 인생꿀잼 */}
      <section className="w-full max-w-6xl flex flex-col items-center gap-16">
        {/* 인생꿀잼 Section_1 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-center md:text-left">
          <img
            src="jam_sample1.png"
            alt="jam_sample1"
            className="w-full md:w-1/2"
          />
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <blockquote className="text-xl md:text-2xl font-bold italic text-orange">
              “Be joyful always”
            </blockquote>
            <p className="text-base md:text-lg font-bold">
              일상에 즐거움을 선물합니다.
              <br />
              오늘 하루도 인생꿀잼하세요 :)
            </p>
            <p>
              “인생이 재미없다…”
              <br />
              어느 날 친구의 푸념 같은 말이, <br className="block md:hidden" />
              깊이 마음에 남았습니다.
            </p>
            <p>
              그 말에 우리는 질문을 던졌습니다.
              <br />
              <span className="font-bold">
                ‘소중한 인생을 조금 더 기분 좋게 만들 수는 없을까?’
              </span>
            </p>
            <p className="font-bold">
              인생꿀잼은 삶의 매일에
              <br />
              달콤한 위로와 따뜻한 메시지를 <br className="block md:hidden" />
              더하고 싶은 마음에서 <br className="hidden md:block" />
              시작되었습니다.
            </p>
          </div>
        </div>

        {/* 인생꿀잼 Section_2 */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-12 text-center md:text-left">
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-bold text-orange">
              🧡 청년세대에게 전하고 싶은 메시지
            </h2>
            <div className="flex flex-col gap-2 font-bold">
              <p>“우리의 인생은 소중하고 가치 있습니다.”</p>
              <p>그리고 그 인생에 꿀처럼 달콤한 순간들이</p>
              <p>조금 더 자주, 조금 더 선명하게</p>
              <p>찾아오기를 바라는 마음으로,</p>
              <p>
                <span className="text-orange">인생꿀잼</span>이 응원하겠습니다.
              </p>
            </div>
          </div>
          <img
            src="jam_sample2.png"
            alt="jam_sample2"
            className="w-full md:w-1/2"
          />
        </div>
      </section>

      {/* 2. 와이즈 */}
      <section className="w-full max-w-6xl flex flex-col items-center gap-16">
        {/* 와이즈 Section_1 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-center md:text-left">
          <img
            src="wise_sample1.png"
            alt="wise_sample1"
            className="w-full md:w-1/2"
          />
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <blockquote className="text-xl md:text-2xl font-bold italic text-orange">
              “Live not as unwise but as wise”
            </blockquote>
            <p className="text-base md:text-lg font-bold">
              똑똑한 이들을 위한, 똑똑한 습관
            </p>
            <p>
              와이즈(WISE)는 <br className="block md:hidden" />
              지혜로운 라이프스타일을 추구하는 이들을 위해
              <br />
              <span className="font-bold">간편함, 영양, 맛 </span>
              모두를 고려한
              <br className="block md:hidden" />
              <span className="font-bold"> 식사 대용 간식</span>을 제안합니다.
            </p>
          </div>
        </div>

        {/* 와이즈 Section_2 (모바일 세로, 데스크탑 우측 이미지) */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 text-center md:text-left">
          <div className="w-full md:w-1/2 flex flex-col gap-2 md:gap-4 font-bold">
            <p>똑똑한 당신의 하루가</p>
            <p>똑똑한 선택으로 채워질 수 있도록,</p>
            <p>와이즈(WISE)가 함께하겠습니다.</p>
          </div>
          <img
            src="wise_sample2.png"
            alt="wise_sample2"
            className="w-full md:w-1/2"
          />
        </div>
      </section>
    </div>
  );
};

export default BrandStoryPage;

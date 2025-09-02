const BrandStoryPage = () => {
  return (
    <div className="p-10 space-y-20 text-brown text-center">
      {/* 1. 인생꿀잼 */}
      <div className="flex flex-col gap-12">
        <h1 className="text-6xl font-bold text-brown">인생꿀잼</h1>
        <p className="text-orange font-bold">
          일상에 꿀잼을 더하다.
          <br />
          오늘 하루도 인생꿀잼하세요 :)
        </p>
        <p>
          “인생이 재미없다…”
          <br />
          어느 날 친구의 푸념 같은 말이, 생각보다 깊이 마음에 남았습니다.
        </p>
        <p>
          그 말에 우리는 질문을 던졌습니다.
          <br />
          <span className="font-bold text-orange">
            ‘소중한 인생을 조금 더 기분 좋게 만들 수는 없을까?’
          </span>
        </p>
        <p className="font-bold">
          인생꿀잼은 삶의 매일에
          <br />
          달콤한 위로와 따뜻한 메시지를 더하고 싶은 마음에서
          <br />
          시작되었습니다.
        </p>
        <h2 className="text-3xl font-bold">
          🧡 청년세대에게 전하고 싶은 메시지
        </h2>
        <p className="font-bold">
          “우리의 인생은 소중하고 가치 있습니다.”
          <br />
          그리고 그 인생에 꿀처럼 달콤한 순간들이
          <br />
          조금 더 자주, 조금 더 선명하게
          <br />
          찾아오기를 바라는 마음으로,
          <br />
          <span className="text-orange">인생꿀잼</span>이 응원하겠습니다.
        </p>
        <p className="italic">
          “Be joyful always”
          <br />
          항상 기뻐하라
        </p>
      </div>
      {/* 2. 와이즈 */}
      <div className="flex flex-col gap-10 border-t-4 border-dotted border-brown pt-12">
        <h1 className="text-6xl font-bold text-brown">와이즈</h1>
        <p className="text-orange font-bold">똑똑한 이들을 위한, 똑똑한 습관</p>
        <p>
          와이즈(WISE)는
          <br />
          지혜로운 라이프스타일을 추구하는 이들을 위해
          <br />
          <span className="font-bold">간편함, 영양, 맛</span>
          <br />
          모두를 고려한
          <span className="font-bold"> 식사 대용 간식</span>을 제안합니다.
        </p>
        <p className="font-bold">
          똑똑한 당신의 하루가
          <br />
          똑똑한 선택으로 채워질 수 있도록,
          <br />
          <span className="text-orange">와이즈(WISE)</span>가 함께하겠습니다.
        </p>
        <p className="italic">
          “Live not as unwise but as wise”
          <br />
          지혜 없는 자 같이 하지 말고, 지혜 있는 자 같이 하라
        </p>
      </div>
    </div>
  );
};

export default BrandStoryPage;

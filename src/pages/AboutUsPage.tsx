const AboutUsPage = () => {
  return (
    <div className="flex flex-col items-center p-12 gap-8 text-brown text-center">
      <img src="logo_nobackground.png" alt="logo" className="w-1/3" />
      {/* 1. 회사 소개글 */}
      <div className="flex flex-col gap-12">
        <h1 className="text-4xl font-bold text-orange">
          맛있고 건강하고 즐거운 식경험을 제안하는
          <br />
          잼있는 세상입니다.
        </h1>
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">
            (B2C) 식사대용 간식 제조 전문 기업
          </h2>
          <p>
            우리의 모든 제품은
            <span className="font-bold">자연에서 온 원료</span>와
            <span className="font-bold">직접 연구・개발한 레시피</span>로
            만들어집니다. <br />
            간식 이상의 건강과 즐거움을 위해 식품전문가가 정성을 다해 만듭니다.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">
            (B2B) 맞춤형 식품 레시피 개발 전문 기업
          </h2>
          <p>
            고객사의 요청에 따라 시장성과 품질을 모두 고려한
            <span className="font-bold"> 맞춤형 레시피</span>를 개발해 드립니다.
            <br />
            제품 기획부터 샘플 테스트, 레시피 확정까지 전 과정을
            <span className="font-bold"> 식품전문가</span>가 체계적으로
            관리합니다.
          </p>
        </div>
      </div>
      {/* 2. 비전/미션 */}
      <div className="flex flex-col gap-8 mt-12 pt-12 border-t-4 border-dotted border-brown w-5/6">
        <h1 className="text-4xl font-bold text-orange">비전 / 미션</h1>
        <div className="flex flex-col gap-12">
          <h2 className="text-2xl font-bold italic">
            “사랑하는 자여, 네 영혼이 잘 됨 같이 네가 범사에 잘되고
            <br />
            강건하기를 내가 간구하노라(요한삼서 1:2)”
          </h2>
          <p>
            <span className="font-bold">JOYFUL WORLD</span>
            는 사람을 사랑합니다.
            <br />
            그렇기에 그 삶이 <span className="font-bold">범사에 잘되고</span>,
            <br />
            무엇보다 <span className="font-bold">건강하기를</span> 진심으로
            바랍니다.
          </p>
          <p>
            <span className="font-bold">JOYFUL WORLD</span>
            는 최선을 다합니다.
            <br />
            고객분들이 <span className="font-bold">건강하고 풍성한 삶</span>을
            살아가실 수 있도록
            <br />
            정성과 진심을 다해 제품을 만들고 있습니다.
          </p>
        </div>
      </div>
      {/* 3. 핵심가치 */}
      <div className="flex flex-col gap-8 mt-12 pt-12 border-t-4 border-dotted border-brown w-5/6">
        <h1 className="text-4xl font-bold text-orange">핵심가치</h1>
        <div className="flex flex-col gap-6">
          {/* 3-1 정직(Integrity) */}
          <h2 className="text-2xl font-bold">1. 정직 (Integrity)</h2>
          <p>
            입에 들어가는 것이기에, 무엇보다
            <span className="font-bold"> 정직합니다.</span>
            <br />
            믿을 수 있는 <span className="font-bold">좋은 재료</span>, 안심할 수
            있는<span className="font-bold"> 위생 시설</span>,
            <br />한 치의 타협 없이 철저한
            <span className="font-bold"> 품질 관리</span>를 고집합니다.
          </p>
          {/* 3-2 사랑 (Love) */}
          <h2 className="text-2xl font-bold">2. 사랑 (Love)</h2>
          <p>
            우리는 사랑을 바탕으로 일합니다.
            <br />
            <span className="font-bold">직원 간의 존중과 배려</span>,{' '}
            <span className="font-bold">고객의 건강과 만족</span>,
            <br />
            그리고 우리가 사는 <span className="font-bold">사회와 나라</span>에
            대한 <br />
            따뜻한 마음을 실천합니다.
          </p>
          {/* 3-3 상생 (Co-Growth) */}
          <h2 className="text-2xl font-bold">3. 상생 (Co-Growth)</h2>
          <p>
            함께 가야, 멀리 갈 수 있습니다.
            <br />
            내부 구성원은 물론, 고객사 및 파트너사와의
            <br />
            <span className="font-bold">지속가능한 동반 성장</span>을
            추구합니다.
          </p>
        </div>
      </div>
      {/* 4. 대표자 */}
      <div className="flex flex-col gap-8 mt-12 pt-12 border-t-4 border-dotted border-brown w-5/6">
        <h1 className="text-4xl font-bold text-orange">대표자</h1>
        <div className="flex flex-col gap-4 items-center">
          <h2 className="text-3xl font-bold">이지은</h2>
          <div className="flex flex-col gap-2 items-start">
            <div>| 연세대학교 식품영양학과 졸업</div>
            <div>| 영양사 면허증 보유</div>
            <div>| 다수 레시피 개발</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;

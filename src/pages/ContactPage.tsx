const ContactPage = () => {
  return (
    <div className="p-10 space-y-20">
      <h1 className="text-6xl text-brown">Partner</h1>
      {/* 1. 레시피 위탁 개발 */}
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-medium">맞춤형 식품 레시피 개발 전문</h2>
          <p>
            고객사의 요청에 따라 시장성과 품질을 모두 고려한 맞춤형 레시피를
            개발해 드립니다.
          </p>
        </div>
        {/* 1-1 개발 프로세스 */}
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-medium">🔁 개발 프로세스</h3>
          <div className="flex justify-between gap-4">
            {/* 개발 프로세스 Box-1 */}
            <div className="border-3 border-brown space-y-2 w-1/3">
              <h4 className="border-b-2 border-brown p-4">
                01. 기초 기획 및 사전 협의
              </h4>
              <div className="p-4 space-y-2">
                <li>고객사 니즈 파악</li>
                <li>개발 범위 및 조건 협의</li>
                <li>계약 체결 및 작업 기준 수립</li>
              </div>
            </div>
            {/* 개발 프로세스 Box-2 */}
            <div className="border-3 border-brown space-y-2 w-1/3">
              <h4 className="border-b-2 border-brown p-4">
                02. 샘플 제작 및 1~2차 테스트
              </h4>
              <div className="p-4 space-y-2">
                <li>시제품(샘플) 제작</li>
                <li>관능 및 품질 테스트 (*최대 2회 제공)</li>
              </div>
            </div>
            {/* 개발 프로세스 Box-2 */}
            <div className="border-3 border-brown space-y-2 w-1/3">
              <h4 className="border-b-2 border-brown p-4">
                03. 레시피 확정 및 납품
              </h4>
              <div className="p-4 space-y-2">
                <li>레시피 최종 확정</li>
                <li>레시피 파일 납품</li>
                <li>계약 조건에 따라 ODM 생산 연계 가능</li>
              </div>
            </div>
          </div>
        </div>
        {/* 1-2 저희가 다릅니다 */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-medium">📌 저희가 다릅니다</h3>
            <p>
              제품 개발 과정에서는 다음과 같은 요소를 종합적으로 고려합니다:
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center place-items-center">
            <div className="border-3 border-brown py-12 w-5/6">
              <span>제품의 물성(식감과 형태 안정성)</span>
            </div>
            <div className="border-3 border-brown py-12 w-5/6">
              <span>트렌디한 맛과 소비자 선호도</span>
            </div>
            <div className="border-3 border-brown py-12 w-5/6">
              <span>영양 성분 및 표시 기준</span>
            </div>
            <div className="border-3 border-brown py-12 w-5/6">
              <span>원재료 수급과 단가 구조</span>
            </div>
          </div>
          <p className="font-bold text-orange">
            막연한 시도는 시간과 비용만 낭비하게 됩니다. 검증된 식품 전문가에게
            맡기세요.
          </p>
        </div>
        {/* 1-3 이런 고객사에 적합합니다 */}
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-medium">📈 이런 고객사에 적합합니다</h3>
          <div className="flex justify-between gap-4">
            <div className="flex items-center border-3 border-brown w-1/3 p-12 text-center">
              <span>기존 원료를 활용한 신제품 라인업을 기획 중인 업체</span>
            </div>
            <div className="flex items-center border-3 border-brown w-1/3 p-12 text-center">
              <span>PB/ODM 제품을 준비 중이나 내부 R&D 인력이 부족한 업체</span>
            </div>
            <div className="flex items-center border-3 border-brown w-1/3 p-12 text-center">
              <span>
                초기 제품 개발에 대한 컨설팅부터 레시피 납품까지 일괄 진행을
                원하는 기업
              </span>
            </div>
          </div>
        </div>
        {/* 1-4 식품개발자 이력 */}
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-medium">👩‍🔬 식품개발자 이력</h3>
          <div className="flex flex-col border-3 border-brown p-8">
            <li>연세대학교 식품영양학과 졸업</li>
            <li>영양사 면허 보유</li>
            <li>
              수제잼(기타잼류), 구움과자(머핀, 마들렌, 휘낭시에), 에너지바 및
              그래놀라 등 자체 개발 레시피 다수 보유
            </li>
            <li>다수의 소비재 식품 개발 경험 보유</li>
          </div>
        </div>
      </div>
      {/* 2. 협업 사례 */}
      <div className="flex flex-col gap-12">
        <h2 className="text-4xl font-medium border-t-4 border-dotted border-brown pt-12">
          협업 사례
        </h2>

        {/* 2-1 PICKY PICKER */}
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-medium">1) PICKY PICKER</h3>
          <div className="flex justify-between gap-4 text-center ">
            <div className="border-3 border-brown space-y-2 w-1/3">
              <h4 className="border-b-2 border-brown p-4 font-bold">
                주요 제품
              </h4>
              <div className="p-4 space-y-2">흑삼 원료</div>
            </div>
            <div className="border-3 border-brown space-y-2 w-1/3">
              <h4 className="border-b-2 border-brown p-4 font-bold">
                개발 목표
              </h4>
              <div className="p-4 space-y-2">
                건강 기능 원료인 삼을 활용한 건강 간식 라인업 구축
              </div>
            </div>
            <div className="border-3 border-brown space-y-2 w-1/3">
              <div className="flex flex-col">
                <h4 className="border-b-2 border-brown p-4 font-bold">
                  개발 결과
                </h4>
                <div className="p-4 space-y-2">
                  <li>
                    인삼을 주원료로 한 프리미엄 쿠키 레시피 개발 인삼 + 견과류
                  </li>
                  <li>조합의 고단백 견과바 레시피 설계</li>
                </div>
              </div>
            </div>
          </div>
          <p className="text-orange font-bold">
            “삼의 깊은 영양을 젊은 세대가 간편하게 즐길 수 있도록 트렌디한
            제형으로 완성하였습니다.”
          </p>
        </div>

        {/* 2-2 ACHIMIDANG (아치미당) */}
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-medium">2) ACHIMIDANG (아치미당)</h3>
          <div className="flex justify-between gap-4 text-center ">
            <div className="border-3 border-brown space-y-2 w-1/3">
              <h4 className="border-b-2 border-brown p-4 font-bold">
                주요 제품
              </h4>
              <div className="p-4 space-y-2">4종의 수제잼</div>
            </div>
            <div className="border-3 border-brown space-y-2 w-1/3">
              <h4 className="border-b-2 border-brown p-4 font-bold">
                개발 목표
              </h4>
              <div className="p-4 space-y-2">
                주원료(잼)를 활용한 글루텐 프리 디저트 제품화
              </div>
            </div>
            <div className="border-3 border-brown space-y-2 w-1/3">
              <div className="flex flex-col">
                <h4 className="border-b-2 border-brown p-4 font-bold">
                  개발 결과
                </h4>
                <div className="p-4 space-y-2">
                  <li>잼을 활용한 쌀 마들렌 레시피 개발</li>
                  <li>잼의 원재료를 활용한 쌀 휘낭시에 레시피 설계</li>
                </div>
              </div>
            </div>
          </div>
          <p className="text-orange font-bold">
            “브랜드 방향성과 유통 채널의 고객 니즈, 글루텐 프리 트렌드를 반영해
            최적의 원재료를 선정하고, 고급 디저트 라인을 기획하였습니다.”
          </p>
        </div>
      </div>
      {/* 3. 제휴 및 협업 문의 */}
      <div className="flex flex-col gap-8">
        <h2 className="text-4xl font-medium border-t-4 border-dotted border-brown pt-12">
          제휴 및 협업 문의
        </h2>
        <div className="flex items-center gap-2">
          <img src="/fav-email.png" alt="email" />
          <p>joyful_honeyjam@naver.com</p>
        </div>
        <p className="font-bold text-orange">
          함께 시너지를 만들 파트너를 기다립니다.
        </p>
      </div>
    </div>
  );
};

export default ContactPage;

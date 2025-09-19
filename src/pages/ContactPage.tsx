const ContactPage = () => {
  return (
    <div className="flex flex-col items-center my-12 md:my-20 gap-16 text-center">
      {/* Contact */}
      <div className="flex flex-col items-center gap-10 text-center">
        <h1 className="text-6xl text-brown">Contact</h1>
        <div className="w-full flex justify-center">
          <div className="h-[3px] w-20 bg-orange"></div>
        </div>
        <div className="flex items-center gap-2">
          <img src="fav-email.png" alt="fav-email" />
          <p>joyful_honeyjam@naver.com</p>
        </div>
        <p className="text-brown">함께 시너지를 만들 파트너를 기다립니다</p>
        {/* Contact - Icons */}
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 w-full max-w-4xl">
            {/* Contact - Icon-1 */}
            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <img src="icon_shop.png" alt="icon_shop" />
              <span className="md:text-xl font-bold">
                온/오프라인 입점 문의
              </span>
            </div>
            {/* Contact - Icon-2 */}
            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <img src="icon_earth.png" alt="icon_earth" />
              <span className="md:text-xl font-bold">해외 입점 문의</span>
            </div>
            {/* Contact - Icon-3 */}
            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <img src="icon_speaker.png" alt="icon_speaker" />
              <span className="md:text-xl font-bold">마케팅, 제휴 관련</span>
            </div>
            {/* Contact - Icon-4 */}
            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <img src="icon_headphone.png" alt="icon_headphone" />
              <span className="md:text-xl font-bold">제품, 품질 문의</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="h-[3px] w-20 bg-orange"></div>
      </div>

      {/* 1. 레시피 위탁 개발 */}
      <div className="flex flex-col gap-12 w-full">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-medium">맞춤형 식품 레시피 개발 전문</h2>
          <p className="text-brown">
            고객사의 요청에 따라 시장성과 품질을 모두 고려한
            <br className="block md:hidden" />
            <span className="font-bold"> 맞춤형 레시피</span>를 개발해 드립니다.
          </p>
          {/* 1-1 개발 프로세스 */}
          <div>
            <h2 className="text-3xl font-medium mt-16 mb-8">개발 프로세스</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              {/* 개발 프로세스 - 1 */}
              <div className="flex flex-col items-center justify-center gap-4 w-full md:w-1/3 h-60 bg-gray-200/50 rounded-xl py-6">
                <img src="icon_edit.png" alt="icon_edit" />
                <h3 className="text-xl font-bold text-brown">
                  01. 기초 기획 및 사전 협의
                </h3>
                <div>
                  <ol>- 고객사 니즈 파악</ol>
                  <ol>- 개발 범위 및 조건 협의</ol>
                  <ol>- 계약 체결 및 작업 기준 수립</ol>
                </div>
              </div>
              {/* 개발 프로세스 - 2 */}
              <div className="flex flex-col items-center justify-start gap-4 w-full md:w-1/3 h-60 bg-gray-200/50 rounded-xl py-6">
                <img src="icon_chemical.png" alt="icon_chemical" />
                <h3 className="text-xl font-bold text-brown">
                  02. 샘플 제작 및 1~2차 테스트
                </h3>
                <div>
                  <ol>- 시제품(샘플) 제작</ol>
                  <ol>- 관능 및 품질 테스트 (*최대 2회 제공)</ol>
                </div>
              </div>
              {/* 개발 프로세스 - 3 */}
              <div className="flex flex-col items-center justify-center gap-4 w-full md:w-1/3 h-60 bg-gray-200/50 rounded-xl py-6">
                <img src="icon_handshake.png" alt="icon_handshake" />
                <h3 className="text-xl font-bold text-brown">
                  03. 레시피 확정 및 납품
                </h3>
                <div>
                  <ol>- 레시피 최종 확정</ol>
                  <ol>- 레시피 파일 납품</ol>
                  <ol>- 계약 조건에 따라 ODM 생산 연계 가능</ol>
                </div>
              </div>
            </div>
          </div>
          {/* 1-2 믿고 맡길 수 있습니다 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium mt-16 mb-4">
              믿고 맡길 수 있습니다
            </h2>
            <p className="text-brown">
              제품 개발 과정에서 다음과 같은 요소를{' '}
              <br className="block md:hidden" />
              종합적으로 고려하여,
              <br />
              고객사의 필요를 채우고 있습니다.
            </p>
            <div className="flex justify-center items-start mt-4 gap-4 flex-wrap">
              {/* 믿고 맡길 수 있습니다 - 1 */}
              <div className="flex flex-col items-center justify-center gap-4 w-44 md:w-1/3 h-48 md:h-40 bg-gray-200/50 rounded-xl py-6">
                <img src="icon_cookie.png" alt="icon_cookie" />
                <h3 className="text-lg font-bold">
                  제품의 물성
                  <br />
                  (식감과 형태 안정성)
                </h3>
              </div>
              {/* 믿고 맡길 수 있습니다 - 2 */}
              <div className="flex flex-col items-center justify-center gap-4 w-44 md:w-1/3 h-48 md:h-40 bg-gray-200/50 rounded-xl py-6">
                <img src="icon_taste.png" alt="icon_taste" />
                <h3 className="text-lg font-bold">
                  트렌디한 맛과 <br className="block md:hidden" />
                  소비자 선호도
                </h3>
              </div>
              {/* 믿고 맡길 수 있습니다 - 3 */}
              <div className="flex flex-col items-center justify-center gap-4 w-44 md:w-1/3 h-48 md:h-40 bg-gray-200/50 rounded-xl py-6">
                <img src="icon_tag.png" alt="icon_tag" />
                <h3 className="text-lg font-bold">
                  영양 성분 및 <br className="block md:hidden" />
                  표시 기준
                </h3>
              </div>
              {/* 믿고 맡길 수 있습니다 - 4 */}
              <div className="flex flex-col items-center justify-center gap-4 w-44 md:w-1/3 h-48 md:h-40 bg-gray-200/50 rounded-xl py-6">
                <img src="icon_coin.png" alt="icon_coin" />
                <h3 className="text-lg font-bold">
                  원재료 수급과 <br className="block md:hidden" />
                  단가 구조
                </h3>
              </div>
            </div>
          </div>
          {/* 1-3 이런 고객사를 찾고 있습니다 */}
          <div className="flex flex-col gap-12">
            <h2 className="text-3xl font-medium mt-16">
              이런 고객사를 찾고 있습니다
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              {/* 이런 고객사를 찾고 있습니다 - 1 */}
              <div className="w-full md:w-1/4  h-40 bg-gray-200/50 rounded-xl py-6 flex items-center justify-center">
                <h3 className="text-lg font-bold">
                  기존 원료를 활용한
                  <br />
                  신제품 라인업을 기획 중인 업체
                </h3>
              </div>
              {/* 이런 고객사를 찾고 있습니다 - 2 */}
              <div className="w-full md:w-1/4  h-40 bg-gray-200/50 rounded-xl py-6 flex items-center justify-center">
                <h3 className="text-lg font-bold">
                  PB/ODM 제품을 준비 중이나
                  <br />
                  내부 R&D 인력이 부족한 업체
                </h3>
              </div>
              {/* 이런 고객사를 찾고 있습니다 - 3 */}
              <div className="w-full md:w-1/4  h-40 bg-gray-200/50 rounded-xl py-6 flex items-center justify-center">
                <h3 className="text-lg font-bold">
                  초기 제품 개발에 대한
                  <br /> 컨설팅부터 레시피 납품까지 <br />
                  일괄 진행을 원하는 기업
                </h3>
              </div>
            </div>
          </div>
          {/* 1-4 식품개발자 이력 */}
          <div className="flex flex-col justify-center items-center gap-8">
            <h2 className="text-3xl font-medium mt-16">👩‍🔬 식품개발자 이력</h2>
            <div className="flex flex-col items-start gap-2 text-left w-full md:w-5/6 h-60 md:h-48 bg-gray-200/50 rounded-xl py-8 px-12">
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
      </div>
      <div className="w-full flex justify-center">
        <div className="h-[3px] w-20 bg-orange"></div>
      </div>
      {/* 2. 협업 사례 */}
      <section className="flex flex-col gap-10 w-full">
        <h2 className="text-4xl font-medium">협업 사례</h2>

        {/* === Case: PICKY PICKER === */}
        <article className="w-full rounded-2xl border border-brown/30 bg-white shadow-sm overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-brown/5">
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-semibold text-brown">
                PICKY PICKER
              </h3>
            </div>
            <span className="inline-flex items-center rounded-full bg-orange/10 text-orange px-3 py-1 text-xs font-semibold">
              건강 간식 R&D
            </span>
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 text-center">
            {/* 주요 제품 */}
            <div className="rounded-xl border border-brown/20">
              <h4 className="border-b-2 border-brown/20 p-4 font-bold text-brown">
                주요 제품
              </h4>
              <div className="p-4">흑삼 원료</div>
            </div>

            {/* 개발 목표 */}
            <div className="rounded-xl border border-brown/20">
              <h4 className="border-b-2 border-brown/20 p-4 font-bold text-brown">
                개발 목표
              </h4>
              <div className="p-4">
                건강 기능 원료인 삼을 활용한
                <br />
                건강 간식 라인업 구축
              </div>
            </div>

            {/* 개발 결과 */}
            <div className="rounded-xl border border-brown/20 text-left">
              <h4 className="border-b-2 border-brown/20 p-4 font-bold text-brown text-center">
                개발 결과
              </h4>
              <ul className="p-4 space-y-2 list-disc list-inside">
                <li>
                  인삼을 주원료로 한 프리미엄 쿠키 레시피
                  <br />
                  개발 (인삼 + 견과류)
                </li>
                <li>고단백 견과바 레시피 설계</li>
              </ul>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="px-6 pb-6">
            <p className="text-orange font-bold text-center">
              “삼의 깊은 영양을 젊은 세대가 간편하게 즐길 수 있도록 트렌디한
              제형으로 완성하였습니다.”
            </p>
          </blockquote>
        </article>

        {/* === Case: ACHIMIDANG === */}
        <article className="w-full rounded-2xl border border-brown/30 bg-white shadow-sm overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-brown/5">
            <div className="flex items-center gap-3">
              {/* <img src="/achimidang_logo.png" alt="ACHIMIDANG" className="h-8 w-auto object-contain" /> */}
              <h3 className="text-2xl font-semibold text-brown">
                ACHIMIDANG
                <br className="block md:hidden" />
                (아치미당)
              </h3>
            </div>
            <span className="inline-flex items-center rounded-full bg-orange/10 text-orange px-3 py-1 text-xs font-semibold">
              글루텐 프리 디저트
            </span>
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 text-center">
            {/* 주요 제품 */}
            <div className="rounded-xl border border-brown/20">
              <h4 className="border-b-2 border-brown/20 p-4 font-bold text-brown">
                주요 제품
              </h4>
              <div className="p-4">4종의 수제잼</div>
            </div>

            {/* 개발 목표 */}
            <div className="rounded-xl border border-brown/20">
              <h4 className="border-b-2 border-brown/20 p-4 font-bold text-brown">
                개발 목표
              </h4>
              <div className="p-4">
                주원료(잼)를 활용한 <br className="block md:hidden" />
                글루텐 프리 디저트 제품화
              </div>
            </div>

            {/* 개발 결과 */}
            <div className="rounded-xl border border-brown/20 text-left">
              <h4 className="border-b-2 border-brown/20 p-4 font-bold text-brown text-center">
                개발 결과
              </h4>
              <ul className="p-4 space-y-2 list-disc list-inside">
                <li>잼을 활용한 쌀 마들렌 레시피 개발</li>
                <li>
                  잼의 원재료를 활용한 쌀 휘낭시에 레시피
                  <br />
                  설계
                </li>
              </ul>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="px-6 pb-6">
            <p className="text-orange font-bold text-center">
              “브랜드 방향성과 유통 채널의 고객 니즈,{' '}
              <br className="block md:hidden" />
              글루텐 프리 트렌드를 반영해 최적의 원재료를{' '}
              <br className="block md:hidden" />
              선정하고, 고급 디저트 라인을 기획하였습니다.”
            </p>
          </blockquote>
        </article>
      </section>
    </div>
  );
};

export default ContactPage;

import { Trans, useTranslation } from 'react-i18next';

const BrandStoryPage = () => {
  const { t } = useTranslation('common');

  // 섹션2의 bullet/문장 나열형은 배열로 받아오기
  const lifejamLines = t('brand.lifejam.section2.lines', {
    returnObjects: true,
  }) as string[];

  const wiseLines = t('brand.wise.section2.lines', {
    returnObjects: true,
  }) as string[];

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
              {t('brand.lifejam.section1.quote')}
            </blockquote>

            <p className="text-base md:text-lg font-bold">
              <Trans
                i18nKey="brand.lifejam.section1.lead"
                components={[<></>, <></>, <></>, <br />]} // <3/>
              />
            </p>

            <p>
              <Trans
                i18nKey="brand.lifejam.section1.p1"
                components={[
                  <></>, // <0> 미사용
                  <br className="block md:hidden" />, // <1/>
                  <></>,
                  <br />, // <3/>
                ]}
              />
            </p>

            <p>
              <Trans
                i18nKey="brand.lifejam.section1.p2"
                components={[
                  <span className="font-bold" />, // <0>
                  <br className="block md:hidden" />, // <1/>
                  <></>,
                  <br />, // <3/>
                ]}
              />
            </p>

            <p className="font-bold">
              <Trans
                i18nKey="brand.lifejam.section1.p3"
                components={[
                  <span className="text-orange" />, // <0> 인생꿀잼/ Honey-Joy
                  <br className="block md:hidden" />, // <1/>
                  <br className="hidden md:block" />, // <2/>
                  <br />, // <3/>
                ]}
              />
            </p>
          </div>
        </div>

        {/* 인생꿀잼 Section_2 */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-12 text-center md:text-left">
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-bold text-orange">
              {t('brand.lifejam.section2.title')}
            </h2>
            <div className="flex flex-col gap-2 font-bold">
              {lifejamLines.map((_, i) => (
                <p key={i}>
                  <Trans
                    i18nKey={`brand.lifejam.section2.lines.${i}`}
                    components={[<span className="text-orange" />]}
                  />
                </p>
              ))}
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
            src="wise_sample1.jpg"
            alt="wise_sample1"
            className="w-full md:w-1/2"
          />
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <blockquote className="text-xl md:text-2xl font-bold italic text-orange">
              {t('brand.wise.section1.quote')}
            </blockquote>

            <p className="text-base md:text-lg font-bold">
              {t('brand.wise.section1.lead')}
            </p>

            <p>
              <Trans
                i18nKey="brand.wise.section1.body"
                components={[
                  <span className="font-bold" />, // <0>간편함, 영양, 맛 / smart choices
                  <br className="block md:hidden" />, // <1/>
                  <></>,
                  <br />, // <3/>
                ]}
              />
            </p>
          </div>
        </div>

        {/* 와이즈 Section_2 */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 text-center md:text-left">
          <div className="w-full md:w-1/2 flex flex-col gap-2 md:gap-4 font-bold">
            {wiseLines.map((_, i) => (
              <p key={i}>{_}</p>
            ))}
          </div>

          <img
            src="wise_sample2.jpg"
            alt="wise_sample2"
            className="w-full md:w-1/2"
          />
        </div>
      </section>
    </div>
  );
};

export default BrandStoryPage;

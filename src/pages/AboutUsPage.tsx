import { Trans, useTranslation } from 'react-i18next';

const AboutUsPage = () => {
  const { t } = useTranslation('common');

  return (
    <div className="flex flex-col items-center py-8 md:py-12 mb-12 md:mb-32 gap-8 text-brown text-center">
      <img
        src="wallpaper_background_header.png"
        alt="wallpaper_background_header"
        className="w-full h-56 md:h-[32vh] object-cover -z-10 absolute top-16 md:top-24"
      />
      {/* 1. 회사 소개글 */}
      {/* 1) HERO */}
      <div className="flex flex-col gap-12 mt-60 md:mt-92">
        <h1 className="text-3xl md:text-4xl font-bold text-orange">
          <Trans
            i18nKey="about.hero.title1"
            components={[<br className="block md:hidden" />]}
          />
        </h1>
        <h1 className="text-2xl md:text-4xl font-bold text-brown">
          <Trans
            i18nKey="about.hero.title2"
            components={[
              <span className="text-orange" />, // <0>즐거움</0>
              <br className="block md:hidden" />, // <1/>
              <></>, // <2>는 안씀 (자리 채움용)
              <br />, // <3/>
            ]}
          />
        </h1>

        {/* (B2C) */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            <Trans
              i18nKey="about.b2c.title"
              components={[
                <></>,
                <br className="block md:hidden" />, // <1/>
              ]}
            />
          </h2>
          <p>
            <Trans
              i18nKey="about.b2c.body"
              components={[
                <span className="font-bold" />, // <0>
                <br className="block md:hidden" />, // <1/>
                <span className="font-bold" />, // <2>
                <br />, // <3/>
              ]}
            />
          </p>
        </div>

        {/* (B2B) */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            <Trans
              i18nKey="about.b2b.title"
              components={[
                <></>,
                <br className="block md:hidden" />, // <1/>
              ]}
            />
          </h2>
          <p>
            <Trans
              i18nKey="about.b2b.body"
              components={[
                <span className="font-bold" />, // <0>
                <br className="block md:hidden" />, // <1/>
                <span className="font-bold" />, // <2>
                <br />, // <3/>
              ]}
            />
          </p>
        </div>
      </div>

      {/* 2) Our Value */}
      <div className="flex flex-col gap-12 pt-20 w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-orange">
          {t('about.value.heading')}
        </h1>

        <div className="flex flex-col gap-8">
          {/* 인용문 */}
          <h2 className="text-xl italic">
            <Trans
              i18nKey="about.value.quote"
              components={[
                <span className="font-bold" />, // <0>
                <br className="block md:hidden" />, // <1/>
                <span className="font-bold" />, // <2>
                <span className="font-bold" />, // <3>
                <br />, // <4/> (필요 시)
              ]}
            />
          </h2>

          {/* 본문 */}
          <p>
            <Trans
              i18nKey="about.value.body"
              components={[
                <span className="font-bold" />, // <0>
                <br className="block md:hidden" />, // <1/>
                <span className="font-bold" />, // <2>
                <br />, // <3/>
              ]}
            />
          </p>
        </div>

        {/* Our Value Boxes */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-4">
            {/* Box-1 */}
            <div className="flex flex-col gap-4 p-6 border-3 rounded-lg border-orange w-full md:w-1/3">
              <h4 className="text-2xl font-bold">
                {t('about.boxes.wellbeing_title')}
              </h4>
              <p className="pt-4 md:p-2">
                <Trans
                  i18nKey="about.boxes.wellbeing_body"
                  components={[
                    <span className="font-bold" />, // <0>
                    <span className="font-bold" />, // <1>
                    <span className="font-bold" />, // <2>
                    <br />, // <3/>
                  ]}
                />
              </p>
            </div>

            {/* Box-2 */}
            <div className="flex flex-col gap-4 p-6 border-3 rounded-lg border-orange w-full md:w-1/3">
              <h4 className="text-2xl font-bold">
                {t('about.boxes.flavor_title')}
              </h4>
              <p className="pt-4 md:p-2">
                <Trans
                  i18nKey="about.boxes.flavor_body"
                  components={[
                    <span className="font-bold" />, // <0>
                    <br />, // <1/>
                  ]}
                />
              </p>
            </div>

            {/* Box-3 */}
            <div className="flex flex-col gap-4 p-6 border-3 rounded-lg border-orange w-full md:w-1/3">
              <h4 className="text-2xl font-bold">
                {t('about.boxes.life_title')}
              </h4>
              <p className="pt-4 md:p-2">
                <Trans
                  i18nKey="about.boxes.life_body"
                  components={[
                    <br />, // <0/>
                  ]}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;

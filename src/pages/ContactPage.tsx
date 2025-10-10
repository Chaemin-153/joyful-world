import { Trans, useTranslation } from 'react-i18next';

const ContactPage = () => {
  const { t } = useTranslation('common');

  const useTArray = () => {
    return (key: string) => t(key, { returnObjects: true }) as string[];
  };

  return (
    <div className="flex flex-col items-center my-12 md:my-20 gap-16 text-center">
      {/* Contact */}
      <div className="flex flex-col items-center gap-10 text-center">
        <h1 className="text-6xl text-brown">{t('contact.title')}</h1>

        <div className="w-full flex justify-center">
          <div className="h-[3px] w-20 bg-orange"></div>
        </div>

        <div className="flex items-center gap-2">
          <img src="fav-email.png" alt="fav-email" />
          <p>{t('contact.email')}</p>
        </div>

        <p className="text-brown">
          <Trans
            i18nKey="contact.tagline"
            components={[<br className="block md:hidden" />]}
          />
        </p>

        {/* Contact - Icons */}
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 w-full max-w-4xl">
            {/* Contact - Icon-1 */}
            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <img src="icon_shop.png" alt="icon_shop" />
              <span className="md:text-xl font-bold">
                {t('contact.icons.shop')}
              </span>
            </div>
            {/* Contact - Icon-2 */}
            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <img src="icon_earth.png" alt="icon_earth" />
              <span className="md:text-xl font-bold">
                {t('contact.icons.earth')}
              </span>
            </div>
            {/* Contact - Icon-3 */}
            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <img src="icon_speaker.png" alt="icon_speaker" />
              <span className="md:text-xl font-bold">
                {t('contact.icons.speaker')}
              </span>
            </div>
            {/* Contact - Icon-4 */}
            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <img src="icon_headphone.png" alt="icon_headphone" />
              <span className="md:text-xl font-bold">
                {t('contact.icons.headphone')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full flex justify-center">
        <div className="h-[3px] w-20 bg-orange"></div>
      </div>

      {/* 1. 레시피 위탁 개발 */}
      <div className="flex flex-col gap-12 w-full">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-medium">
            {t('contact.recipe_dev.title')}
          </h2>

          <p className="text-brown">
            <Trans
              i18nKey="contact.recipe_dev.desc"
              components={[
                <span className="font-bold" />, // <0>
                <br className="block md:hidden" />, // <1/>
              ]}
            />
          </p>

          {/* 1-1 개발 프로세스 */}
          <div>
            <h2 className="text-3xl font-medium mt-16 mb-8">
              {t('contact.recipe_dev.process_title')}
            </h2>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              {/* 개발 프로세스 - 1 */}
              <div className="flex flex-col items-center justify-center gap-4 w-full md:w-1/3 h-60 bg-gray-200/50 rounded-xl py-6">
                <img src="icon_edit.png" alt="icon_edit" />
                <h3 className="text-xl font-bold text-brown">
                  {t('contact.recipe_dev.p1_title')}
                </h3>
                <div>
                  {useTArray()('contact.recipe_dev.p1_list').map(
                    (_, idx: number) => (
                      <ol key={idx}>{_}</ol>
                    )
                  )}
                </div>
              </div>

              {/* 개발 프로세스 - 2 */}
              <div className="flex flex-col items-center justify-start gap-4 w-full md:w-1/3 h-60 bg-gray-200/50 rounded-xl py-6">
                <img src="icon_chemical.png" alt="icon_chemical" />
                <h3 className="text-xl font-bold text-brown">
                  {t('contact.recipe_dev.p2_title')}
                </h3>
                <div>
                  {useTArray()('contact.recipe_dev.p2_list').map(
                    (_, idx: number) => (
                      <ol key={idx}>{_}</ol>
                    )
                  )}
                </div>
              </div>

              {/* 개발 프로세스 - 3 */}
              <div className="flex flex-col items-center justify-center gap-4 w-full md:w-1/3 h-60 bg-gray-200/50 rounded-xl py-6">
                <img src="icon_handshake.png" alt="icon_handshake" />
                <h3 className="text-xl font-bold text-brown">
                  {t('contact.recipe_dev.p3_title')}
                </h3>
                <div>
                  {useTArray()('contact.recipe_dev.p3_list').map(
                    (_, idx: number) => (
                      <ol key={idx}>{_}</ol>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* 1-2 믿고 맡길 수 있습니다 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium mt-16 mb-4">
              {t('contact.trust.title')}
            </h2>

            <p className="text-brown">
              <Trans
                i18nKey="contact.trust.desc"
                components={[
                  <></>,
                  <br className="block md:hidden" />, // <1/>
                  <></>,
                  <br />, // <3/>
                ]}
              />
            </p>

            <div className="flex justify-center items-start mt-4 gap-4 flex-wrap">
              {/* 믿고 맡길 수 있습니다 - 1 */}
              <div className="flex flex-col items-center justify-center gap-4 w-44 md:w-1/3 h-48 md:h-40 bg-gray-200/50 rounded-xl py-6">
                <img src="icon_cookie.png" alt="icon_cookie" />
                <h3 className="text-lg font-bold">
                  <Trans
                    i18nKey="contact.trust.c1"
                    components={[
                      <></>,
                      <br className="block md:hidden" />,
                      <br />,
                    ]}
                  />
                </h3>
              </div>

              {/* 2 */}
              <div className="flex flex-col items-center justify-center gap-4 w-44 md:w-1/3 h-48 md:h-40 bg-gray-200/50 rounded-xl py-6">
                <img src="icon_taste.png" alt="icon_taste" />
                <h3 className="text-lg font-bold">
                  <Trans
                    i18nKey="contact.trust.c2"
                    components={[<></>, <br className="block md:hidden" />]} // <1/>
                  />
                </h3>
              </div>

              {/* 3 */}
              <div className="flex flex-col items-center justify-center gap-4 w-44 md:w-1/3 h-48 md:h-40 bg-gray-200/50 rounded-xl py-6">
                <img src="icon_tag.png" alt="icon_tag" />
                <h3 className="text-lg font-bold">
                  <Trans
                    i18nKey="contact.trust.c3"
                    components={[<></>, <br className="block md:hidden" />]} // <1/>
                  />
                </h3>
              </div>

              {/* 4 */}
              <div className="flex flex-col items-center justify-center gap-4 w-44 md:w-1/3 h-48 md:h-40 bg-gray-200/50 rounded-xl py-6">
                <img src="icon_coin.png" alt="icon_coin" />
                <h3 className="text-lg font-bold">
                  <Trans
                    i18nKey="contact.trust.c4"
                    components={[<></>, <br className="block md:hidden" />]} // <1/>
                  />
                </h3>
              </div>
            </div>
          </div>

          {/* 1-3 이런 고객사를 찾고 있습니다 */}
          <div className="flex flex-col gap-12">
            <h2 className="text-3xl font-medium mt-16">
              {t('contact.looking.title')}
            </h2>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              {/* 카드 1 */}
              <div className="w-full md:w-1/4 h-40 bg-gray-200/50 rounded-xl py-6 flex items-center justify-center">
                <h3 className="text-lg font-bold">
                  <Trans
                    i18nKey="contact.looking.c1"
                    components={[<></>, <br />]}
                  />
                </h3>
              </div>

              {/* 카드 2 */}
              <div className="w-full md:w-1/4 h-40 bg-gray-200/50 rounded-xl py-6 flex items-center justify-center">
                <h3 className="text-lg font-bold">
                  <Trans
                    i18nKey="contact.looking.c2"
                    components={[<></>, <br />]}
                  />
                </h3>
              </div>

              {/* 카드 3 */}
              <div className="w-full md:w-1/4 h-40 bg-gray-200/50 rounded-xl py-6 flex items-center justify-center">
                <h3 className="text-lg font-bold text-center">
                  <Trans
                    i18nKey="contact.looking.c3"
                    components={[<></>, <br />]}
                  />
                </h3>
              </div>
            </div>
          </div>

          {/* 1-4 식품개발자 이력 */}
          <div className="flex flex-col justify-center items-center gap-8">
            <h2 className="text-3xl font-medium mt-16">
              {t('contact.resume.title')}
            </h2>

            <div className="flex flex-col items-start gap-2 text-left w-full md:w-5/6 h-60 md:h-48 bg-gray-200/50 rounded-xl py-8 px-12 overflow-auto">
              <ul className="list-disc list-inside space-y-1">
                {useTArray()('contact.resume.list').map((_, idx: number) => (
                  <li key={idx}>{_}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full flex justify-center">
        <div className="h-[3px] w-20 bg-orange"></div>
      </div>

      {/* 2. 협업 사례 */}
      <section className="flex flex-col gap-10 w-full">
        <h2 className="text-4xl font-medium">{t('contact.cases.title')}</h2>

        {/* === Case: PICKY PICKER === */}
        <article className="w-full rounded-2xl border border-brown/30 bg-white shadow-sm overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-6 pt-4 bg-brown/5">
            <div className="flex items-center gap-3">
              <img
                src="logo_picky.png"
                alt="logo_pickypicker"
                className="w-16"
              />
              <h3 className="text-2xl font-semibold text-brown">
                {t('contact.cases.picky.name')}
              </h3>
            </div>
            <span className="inline-flex items-center rounded-full bg-orange/10 text-orange px-3 py-1 text-xs font-semibold">
              {t('contact.cases.picky.chip')}
            </span>
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 text-center">
            {/* 주요 제품 */}
            <div className="rounded-xl border border-brown/20">
              <h4 className="border-b-2 border-brown/20 p-4 font-bold text-brown">
                {t('contact.cases.picky.sec1_title')}
              </h4>
              <div className="p-4">{t('contact.cases.picky.sec1_body')}</div>
            </div>

            {/* 개발 목표 */}
            <div className="rounded-xl border border-brown/20">
              <h4 className="border-b-2 border-brown/20 p-4 font-bold text-brown">
                {t('contact.cases.picky.sec2_title')}
              </h4>
              <div className="p-4">
                <Trans
                  i18nKey="contact.cases.picky.sec2_body"
                  components={[<br />]}
                />
              </div>
            </div>

            {/* 개발 결과 */}
            <div className="rounded-xl border border-brown/20 text-left">
              <h4 className="border-b-2 border-brown/20 p-4 font-bold text-brown text-center">
                {t('contact.cases.picky.sec3_title')}
              </h4>
              <ul className="p-4 space-y-2 list-disc list-inside">
                {useTArray()('contact.cases.picky.sec3_list').map(
                  (_, idx: number) => (
                    <li key={idx}>
                      <Trans
                        i18nKey={`contact.cases.picky.sec3_list.${idx}`}
                        components={[<br />]}
                      />
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="px-6 pb-6">
            <p className="text-orange font-bold text-center">
              {t('contact.cases.picky.quote')}
            </p>
          </blockquote>
        </article>

        {/* === Case: Locial Company === */}
        <article className="w-full rounded-2xl border border-brown/30 bg-white shadow-sm overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-6 pt-4 bg-brown/5">
            <div className="flex items-center gap-3">
              <img src="logo_locial.png" alt="logo_locial" className="w-16" />
              <h3 className="text-2xl font-semibold text-brown">
                <Trans
                  i18nKey="contact.cases.locial.name"
                  components={[<br className="block md:hidden" />]}
                />
              </h3>
            </div>
            <span className="inline-flex items-center rounded-full bg-orange/10 text-orange px-3 py-1 text-xs font-semibold">
              {t('contact.cases.locial.chip')}
            </span>
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 text-center">
            {/* 주요 제품 */}
            <div className="rounded-xl border border-brown/20">
              <h4 className="border-b-2 border-brown/20 p-4 font-bold text-brown">
                {t('contact.cases.locial.sec1_title')}
              </h4>
              <div className="p-4">{t('contact.cases.locial.sec1_body')}</div>
            </div>

            {/* 개발 목표 */}
            <div className="rounded-xl border border-brown/20">
              <h4 className="border-b-2 border-brown/20 p-4 font-bold text-brown">
                {t('contact.cases.locial.sec2_title')}
              </h4>
              <div className="p-4">
                <Trans
                  i18nKey="contact.cases.locial.sec2_body"
                  components={[<br />]}
                />
              </div>
            </div>

            {/* 개발 결과 */}
            <div className="rounded-xl border border-brown/20 text-left">
              <h4 className="border-b-2 border-brown/20 p-4 font-bold text-brown text-center">
                {t('contact.cases.locial.sec3_title')}
              </h4>
              <ul className="p-4 space-y-2 list-disc list-inside">
                {useTArray()('contact.cases.locial.sec3_list').map(
                  (_, idx: number) => (
                    <li key={idx}>
                      <Trans
                        i18nKey={`contact.cases.locial.sec3_list.${idx}`}
                        components={[<br />]}
                      />
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="px-6 pb-6">
            <p className="text-orange font-bold text-center">
              <Trans
                i18nKey="contact.cases.locial.quote"
                components={[<br className="block md:hidden" />, <br />]}
              />
            </p>
          </blockquote>
        </article>
      </section>
    </div>
  );
};

export default ContactPage;

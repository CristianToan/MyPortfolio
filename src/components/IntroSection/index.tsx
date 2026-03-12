import { HOME_INTRO, STATISTICIAL } from "../../data/home";
import { useLang } from "../../hook/useLang";
import CountUp from "./CountUp";

const IntroSection = ({ id }: { id: string }) => {
  const { lang, t } = useLang();

  return (
    <section id={id} className="bg-[url('/images/background-intro.webp')] bg-no-repeat bg-cover bg-center pt-10 md:pt-36.25 scroll-mt-20.75">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 items-stretch gap-6 md:gap-4">
          
          <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <div className="flex flex-col h-full justify-between">
              
              <div className="flex flex-col gap-3 lg:gap-6">
                <span className="bg-title-portfolio bg-clip-text text-transparent font-medium text-xxl md:text-[32px] 2xl:text-3xxl ff-abhaya">
                  {HOME_INTRO.sub_title}
                </span>

                <h5 className="uppercase bg-title-portfolio bg-clip-text text-transparent font-medium text-xl md:text-[38px] 2xl:text-[48px]">
                  {t(HOME_INTRO.title)}
                </h5>

                <div className="text-sm md:text-lg  mb-4 md:mb-0">
                  {t("home.intro")}
                </div>
              </div>

              <div className="bg-secondary p-3 2xl:p-6 max-w-133.5 mt-3 lg:mt-0">
                <div className="grid grid-cols-3 gap-4 2xl:gap-7.5">
                  {STATISTICIAL.map((item, index) => {
                    return (
                      <div
                        key={`intro-statisticial_${index}`}
                        className="flex flex-col gap-3 border-r border-main md:pr-1 lg:pr-3 ff-lato last:border-r-0 last:pr-0"
                      >
                        <div className="text-number text-2xl font-extrabold">
                          <span>
                            <CountUp value={item.number} lang={lang} />
                          </span>
                          <span>{item.unit}</span>
                        </div>

                        <p className="2xl:text-xl lg:text-md text-sm font-bold">
                          {t(item.label)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-7 flex">
            <div className="relative w-full border-2 border-transparent border-gold-radial-img-l max-w-198.5 ml-auto ">
              <div className="relative w-full border-2 border-transparent border-gold-radial-img-r">
                <img
                  src={HOME_INTRO.image.src}
                  alt={HOME_INTRO.image.alt}
                  className="object-contain aspect-856/701 max-h-138.75 relative z-1"
                  decoding="async"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute right-0 2xl:right-3.25 top-0 2xl:top-4 z-0 ">
                  <img src="/images/mask.webp" alt="mask"  className="object-contain aspect-487/490 w-full max-h-50 md:max-h-80 2xl:max-h-122.5"/>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntroSection;

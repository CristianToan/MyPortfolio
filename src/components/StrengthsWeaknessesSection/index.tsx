import { useLang } from "../../hook/useLang";
import { STRENGTHWEAKNESSES } from "../../data/home";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import StrengthItem from "./StrengthItem";
import type { TStrength } from "../../type/data_type";


const StrengthsWeaknessesSection = ({ id }: { id: string }) => {
  const { t } = useLang();
  return (
    <section id={id} className="scroll-mt-20.75">
      <div className="container mx-auto px-4 flex flex-col gap-5 md:pt-23.25 md:pb-15 py-8">
        <h2 className="bg-title-portfolio bg-clip-text text-transparent font-bold text-xl md:text-xxl uppercase">{t("home.strengthsWeaknesses.title")}</h2>
        <div className="">
          <Swiper
              grabCursor
              spaceBetween={20}
              slidesPerView={1.5}
              loop
              modules={[Autoplay]} 
              autoplay={{
                delay: 2000,             
                disableOnInteraction: false, 
                pauseOnMouseEnter: true, 
              }}
              speed={1800}
              breakpoints={{
                0: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2.5,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 79,
                },
              }}
            >
            {STRENGTHWEAKNESSES.map((item: TStrength) => (
              <SwiperSlide  key={`strength_${item.id}`}>
                <StrengthItem item={item} t={t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default StrengthsWeaknessesSection

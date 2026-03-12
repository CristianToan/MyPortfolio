import { useLang } from "../../hook/useLang";
import { LIST_SKILL } from "../../data/home";
import type { TSkill } from "../../type/data_type";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SkillItem from "./SkillItem";
import { Autoplay } from "swiper/modules";

const SkillSection = ({ id }: { id: string }) => {
  const { t } = useLang();
  return (
    <section id={id} className="py-5 md:pt-16.75 md:pb-12.5 scroll-mt-20.75">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-3">
            <h2 className="uppercase bg-title-portfolio bg-clip-text text-transparent font-bold text-xl md:text-xxl tracking-[3%]">{t("home.skill.title")}</h2>
          </div>
          <div className="col-span-12 md:col-span-9">
            <div>
              <Swiper
                  grabCursor
                  modules={[Autoplay]} 
                  spaceBetween={14}
                  slidesPerView={2}
                  loop
                  autoplay={{
                    delay: 2000,             
                    disableOnInteraction: false, 
                    pauseOnMouseEnter: true, 
                  }}
                  speed={1800}
                  breakpoints={{
                    0: {
                      slidesPerView: 3
                    },
                    640: {
                      slidesPerView: 4
                    },
                    1024: {
                      slidesPerView: 5
                    },
                  }}
                >
                {LIST_SKILL.map((item: TSkill) => (
                  <SwiperSlide key={`skill_${item.id}`}>
                    <SkillItem item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillSection

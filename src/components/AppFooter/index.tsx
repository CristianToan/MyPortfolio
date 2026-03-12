import { LIST_SOCIAL } from "../../data/home"
import { useLang } from "../../hook/useLang"
import type { TSocial } from "../../type/data_type"
import Icon from "../IconBase"
const AppFooter = () => {
  const {t} = useLang()
  return (
    <section className="pt-4 pb-18.75">
      <div className="container mx-auto px-4 flex flex-col gap-2.5 justify-center items-center">
				<h2 className="uppercase bg-title-portfolio bg-clip-text text-transparent font-bold text-xl md:text-xxl tracking-[3.5%]">{t("home.footer.title")}</h2>
				<div className="text-sm md:text-[18px] tracking-[3] leading-12.5">{t('home.footer.description')}</div>
        {
          LIST_SOCIAL.length > 0 && (
            <ul className="pl-0 mb-0 flex gap-x-3 md:gap-x-8">
              {
                LIST_SOCIAL.map((item: TSocial) =>(
                  <li key={`social_${item.id}`}>
                    <a target="_blank" href={item.link} className="border-gold-led border-2 border-transparent relative p-3 inline-block">
                      <Icon name={item.icon} className="w-6.75 h-5.75" />
                    </a>
                  </li>
                ))
              }
            </ul>
          )
        }
			</div>
    </section>
  )
}

export default AppFooter

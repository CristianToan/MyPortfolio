import { useSearchParams } from "react-router-dom"
import { DEFAULT_TYPE, PROFILE_MAP } from "../../data/home"
import { useLang } from "../../hook/useLang"
import Icon from "../IconBase"

const ProfileSection = ({ id }: { id: string }) => {
	const {t} = useLang()
	 const [searchParams] = useSearchParams()
	 const rawType = searchParams.get("type")

  const typeNumber = Number(rawType)

  const profile =
    Number.isInteger(typeNumber) && typeNumber in PROFILE_MAP
      ? PROFILE_MAP[typeNumber as keyof typeof PROFILE_MAP]
      : PROFILE_MAP[DEFAULT_TYPE]

  return (
	<section id={id} className="pb-4 scroll-mt-20.75">
	  <div className="container mx-auto px-4">
		<h2 className="uppercase bg-title-portfolio bg-clip-text text-transparent font-bold text-xl md:text-xxl tracking-[3.5%] mb-4 lg:mb-8.5">{t("home.profile.title_section")}</h2>
				<div className="grid grid-cols-12 gap-x-4 2xl:gap-x-35.75 items-center">
					<div className="col-span-12 md:col-span-6 lg:col-span-5">
						<div className="w-fit mx-auto relative">
							<img src={t(profile.image)} alt="cv" className="object-contain" width={571} height={791} />
							{/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.8)_70%)]">
							</div> */}
						</div>
					</div>
					<div className="col-span-12 md:col-span-6 lg:col-span-7">
						<div className="flex flex-col gap-6.25 justify-center items-center">
							<h3 className="text-center uppercase bg-title-portfolio bg-clip-text text-transparent font-bold text-xl md:text-xxl lg:text-[32px] 2xl:text-[42px] tracking-[3.5%]">
								{t("home.profile.title_download")}
							</h3>
							<div className="text-center uppercase text-sm md:text-md leading-9.5" dangerouslySetInnerHTML={{
									__html: t("home.profile.desc_download")
								}}
							></div>
							<a href={t(profile.link_cv)} target="_blank" className="p-3.75 uppercase flex gap-1.5 text-button bg-title-portfolio rounded-[5px] text-md font-medium">
								<Icon name="download" className="size-4.5 text-button" />
								<span className="tracking-[4.5%]">Download</span>
							</a>
						</div>
					</div>
				</div>
	  </div>
	</section>
  )
}

export default ProfileSection

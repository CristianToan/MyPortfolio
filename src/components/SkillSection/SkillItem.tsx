import type { TSkill } from "../../type/data_type"

const SkillItem = ({item}: {item: TSkill}) => {
  return (
    <div className="flex flex-col gap-y-5 lg:gap-y-15 aspect-201/179 justify-center items-center">
      <img src={item.icon} alt={item.title} className="aspect-150/90 object-contain max-w-20 md:max-w-37.5" decoding="async" loading="lazy" width={150} height={90} />
      <h4 className="uppercase font-medium text-sm md:text-md 2xl:text-xl">{item.title}</h4>
    </div>
  )
}

export default SkillItem

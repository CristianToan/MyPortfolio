import type { TStrength } from "../../type/data_type";


const StrengthItem = ({ item, t }: { item: TStrength; t: (key: string) => string }) => {
  const { image, title } = item;
  return (
    <div className="flex flex-col gap-4 w-full relative border-2 border-transparent border-gold-led">
      <div className="border-gold-led">
        <img
          src={image}
          alt={t(title)}
          className="w-full aspect-450/337 object-cover rounded-xl bg-gold-light"
          decoding="async"
          loading="lazy"
          width={445}
          height={333}
        />
      </div>
      <h4 className="text-sm lg:text-md 2xl:text-lg font-light absolute bottom-0 left-0 pl-5 bg-title w-full 2xl:leading-12.5 tracking-[3.5%]">{t(title)}</h4>
    </div>
  );
};

export default StrengthItem;

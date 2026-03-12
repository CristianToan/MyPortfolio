import type { IconName } from "../components/IconBase";
import type { Lang } from "../i18n/config";

export type MenuItem =
  | {
      id: string;
      label: string;
      type: "scroll";
      target: string;
    }
  | {
      id: string;
      label: string;
      type: "route";
      to: string;
    };

export type LanguageItem = {
  code: Lang;
  label: string;
  flag: string;
};

export type TStatistical = {
  number: number;
  unit: string;
  label: string;
}
export type CountUpProps = {
  value: number;
  duration?: number;
  lang: string;
};

export type TStrength = {
  id: number;
  image: string;
  title: string;
}

export type TSkill = {
  id: number;
  icon: string;
  title: string;
}

export type TCategory = {
  id: number;
  category: string;
}

export type TProject = {
  id: number;
  name_project: string;
  image: string;
  category_ids: number[];
  detail?: string;
}

export type TProfile = {
  image: string;
  link_cv: string;
}

export type TSocial = {
  id: number;
  link: string;
  icon: IconName;
}
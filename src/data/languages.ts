import type { LanguageItem } from "../type/data_type";
import viFlag from "../assets/flags/vn.webp";
import enFlag from "../assets/flags/en.avif";

export const LANGUAGES: LanguageItem[] = [
  {
    code: "vi",
    label: "Vietnamese",
    flag: viFlag,
  },
  {
    code: "en",
    label: "English",
    flag: enFlag,
  },
];
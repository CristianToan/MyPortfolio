import { createContext } from "react";
import type { Lang } from "../i18n/config";
import { DEFAULT_LANG } from "../i18n/config";

export type LangContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

export const LangContext = createContext<LangContextType>({
  lang: DEFAULT_LANG,
  setLang: () => {},
});

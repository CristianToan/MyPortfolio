import { useParams } from "react-router-dom";
import { LANGUAGES, DEFAULT_LANG, type Lang } from "../i18n/config";
import { translate } from "../i18n";

export const useLang = () => {
  const { lang } = useParams<{ lang?: string }>();

  const currentLang: Lang = LANGUAGES.includes(lang as Lang)
    ? (lang as Lang)
    : DEFAULT_LANG;

  return {
    lang: currentLang,
    t: (key: string) => translate(currentLang, key),
  };
};

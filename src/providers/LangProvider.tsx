import { useState } from "react";
import { LangContext } from "../contexts/LangContext";
import { LANGUAGES, DEFAULT_LANG, type Lang } from "../i18n/config";

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang] = useState<Lang>(() => {
    const first = location.pathname.split("/")[1] as Lang;
    return LANGUAGES.includes(first) ? first : DEFAULT_LANG;
  });

  return (
    <LangContext.Provider value={{ lang, setLang: () => {} }}>
      {children}
    </LangContext.Provider>
  );
};

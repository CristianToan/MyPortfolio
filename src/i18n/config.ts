export const LANGUAGES = ["vi", "en"] as const;

export type Lang = typeof LANGUAGES[number];

export const DEFAULT_LANG: Lang = "vi";

export function getLangPath(lang: Lang, path: string = "") {
  const cleanPath = path.replace(/^\/+/, "");

  if (lang === DEFAULT_LANG) {
    return cleanPath ? `/${cleanPath}` : "/";
  }

  return cleanPath ? `/${lang}/${cleanPath}` : `/${lang}`;
}

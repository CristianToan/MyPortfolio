import viMenu from "./vi/menu.json";
import enMenu from "./en/menu.json";
import viHome from "./vi/home.json";
import enHome from "./en/home.json";
import { DEFAULT_LANG, type Lang } from "./config";

/**
 * Dictionary value:
 * - string: text
 * - object: nested dictionary
 */
export type DictionaryValue = string | DictionarySection;

export type DictionarySection = {
  [key: string]: DictionaryValue;
};

/**
 * Dictionary có nhiều scope: menu, home, common, footer, ...
 */
export type Dictionary = Record<string, DictionarySection>;

export const dictionaries: Record<string, Dictionary> = {
  vi: { menu: viMenu, home: viHome },
  en: { menu: enMenu, home: enHome },
};

/**
 * Get nested value by dot path
 * VD: getByPath(obj, "statistical.experiences")
 */
function getByPath(
  obj: DictionarySection | undefined,
  path: string
): string | undefined {
  if (!obj || !path) return undefined;

  let current: DictionaryValue | undefined = obj;

  for (const key of path.split(".")) {
    if (
      typeof current !== "object" ||
      current === null ||
      !(key in current)
    ) {
      return undefined;
    }

    current = current[key];
  }

  return typeof current === "string" ? current : undefined;
}

export function translate(lang: Lang, key: string): string {
  const [scope, ...rest] = key.split(".");
  const path = rest.join(".");

  return (
    getByPath(dictionaries[lang]?.[scope], path) ??
    getByPath(dictionaries[DEFAULT_LANG]?.[scope], path) ??
    key
  );
}

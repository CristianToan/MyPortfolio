import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLang } from "../../hook/useLang";
import { MENU } from "../../data/menu";
import { DEFAULT_LANG, getLangPath, type Lang } from "../../i18n/config";
import { LANGUAGES } from "../../data/languages";
import { TITLE_PAGE } from "../../data/home";
import { useState } from "react";
import type { MenuItem } from "../../type/data_type";

const AppHeader = () => {
  const { lang, t } = useLang();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeId, setActiveId] = useState<string | null>(null);

  const switchLang = (nextLang: Lang) => {
    if (nextLang === lang) return;

    const basePath = nextLang === DEFAULT_LANG ? "/" : `/${nextLang}`;

    navigate({
      pathname: basePath,
      search: location.search,
    });
  };
  const handleMenuClick = (item: MenuItem) => {
    setActiveId(item.id);

    if (item.type === "scroll") {
      const element = document.getElementById(item.target);
      element?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate(getLangPath(lang, item.to));
    }
  };

  return (
    <header className="py-3 md:py-5 backdrop-blur-[25px] border-b border-secondary sticky top-0 z-9">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 items-center gap-4">
          <div className="col-span-8 md:col-span-4">
            <h1>
              <Link
                to={{
                  pathname: getLangPath(lang),
                  search: location.search,
                }}
                className="uppercase text-xl md:text-xxl bg-title-portfolio bg-clip-text text-transparent font-light"
              >
                {TITLE_PAGE.title_page}
              </Link>
            </h1>
          </div>
          <div className="col-span-4 md:col-span-8 ">
            <nav className="flex items-center justify-end gap-8">
              <ul className=" gap-6 hidden md:flex">
                {MENU.map((item) => (
                  <li key={item.id}>
                    {item.type === "scroll" ? (
                      <a
                        onClick={() => handleMenuClick(item)}
                        className={`cursor-pointer text-white text-sm lg:text-md ${
                          activeId === item.id ? "active" : ''
                        }`}
                      >
                        {t(item.label)}
                      </a>
                    ) : (
                      <Link
                        to={getLangPath(lang, item.to)}
                        onClick={() => setActiveId(item.id)}
                       className={`text-white text-sm lg:text-md ${
                        activeId === item.id ? "active" : ''
                        }`}
                      >
                        {t(item.label)}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3">
                {LANGUAGES.filter((lng) => lng.code !== lang).map((lng) => (
                  <button
                    key={lng.code}
                    onClick={() => switchLang(lng.code)}
                    title={lng.label}
                    aria-label={lng.label}
                    className="opacity-60 hover:opacity-100 transition cursor-pointer"
                  >
                    <img
                      src={lng.flag}
                      alt={lng.label}
                      className="w-8 h-6 object-cover rounded"
                    />
                  </button>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="fixed right-4 top-34.25 -translate-y-1/2 flex flex-col gap-4 z-50 md:hidden">
        {MENU.map((item) => (
          <button
            key={item.id}
            onClick={() => handleMenuClick(item)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeId === item.id
                ? "bg-title-portfolio scale-125"
                : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </header>
  );
};

export default AppHeader;

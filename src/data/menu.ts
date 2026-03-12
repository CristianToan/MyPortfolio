import type { MenuItem } from "../type/data_type";

export const MENU: MenuItem[] = [
    {
    id: "about",
    label: "menu.about",
    type: "scroll",
    target: "about",
  },
  // {
  //   id: "core",
  //   label: "menu.core",
  //   type: "scroll",
  //   target: "core-srengths",
  // },
  {
    id: "skills",
    label: "menu.skills",
    type: "scroll",
    target: "skills",
  },
  {
    id: "projects",
    label: "menu.projects",
    type: "scroll",
    target: "projects",
  },
  {
    id: "contact",
    label: "menu.contact",
    type: "scroll",
    target: "contact",
  },
];

export const SECTION_ID = Object.fromEntries(
  MENU
    .filter((item): item is Extract<MenuItem, { type: "scroll" }> => 
      item.type === "scroll"
    )
    .map((item) => [item.id, item.target])
) as Record<string, string>;
import type { NavItem, Section } from "./types";
import { introSection } from "./intro";
import { blsSections } from "./bls";
import { alsSections } from "./als";
import { appendixSections } from "./appendix";

export const sections: Section[] = [
  introSection,
  ...blsSections,
  ...alsSections,
  ...appendixSections,
];

export const sectionsById: Record<string, Section> = Object.fromEntries(
  sections.map((s) => [s.id, s]),
);

export const nav: NavItem[] = sections.map((s) => ({
  id: s.id,
  title: s.title,
  chapter: s.chapter,
}));

export const chapterMeta: Record<
  Section["chapter"],
  { label: string; roman: string }
> = {
  intro: { label: "Введение", roman: "00" },
  bls: { label: "Глава 1 · BLS", roman: "I" },
  als: { label: "Глава 2 · ALS", roman: "II" },
  appendix: { label: "Приложения", roman: "III" },
};

export function neighbors(id: string): {
  prev?: NavItem;
  next?: NavItem;
} {
  const i = nav.findIndex((n) => n.id === id);
  return {
    prev: i > 0 ? nav[i - 1] : undefined,
    next: i >= 0 && i < nav.length - 1 ? nav[i + 1] : undefined,
  };
}

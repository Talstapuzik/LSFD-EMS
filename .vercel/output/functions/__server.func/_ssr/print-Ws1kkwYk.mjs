import { X as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as chapterMeta, o as sections, t as Button } from "./progress-Bpk95inA.mjs";
import { a as Printer } from "../_libs/lucide-react.mjs";
import { n as CrossMark } from "./shell-DVPHyRFj.mjs";
import { t as Blocks } from "./blocks-CBsMLM7t.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/print-Ws1kkwYk.js
var import_jsx_runtime = require_jsx_runtime();
function PrintPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "print-root min-h-dvh bg-background text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "no-print sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-border bg-background px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					children: "На обложку"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: () => window.print(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {}), "Печать / сохранить PDF"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[42rem] px-5 py-10 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "print-avoid border-b-2 border-primary pb-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrossMark, { className: "size-8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-sans text-[11px] uppercase tracking-[0.22em]",
								children: "Los Santos EMS · Fire Department"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-6 font-serif text-4xl font-semibold tracking-tight",
							children: "Руководство сотрудника EMS"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-serif text-xl",
							children: "Basic Life Support (BLS) и Advanced Life Support (ALS)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-serif text-base text-ink-soft",
							children: "Актуализировано по рекомендациям American Heart Association и European Resuscitation Council (2025). При печати документ идёт шрифтом Times New Roman, 14 pt, как учебная методичка."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8 print-avoid",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl font-semibold",
						children: "Оглавление"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-3 list-decimal space-y-1 pl-5 font-serif",
						children: sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							chapterMeta[s.chapter].label,
							": ",
							s.title
						] }, s.id))
					})]
				}),
				sections.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: i === 0 ? "mt-12" : "print-break mt-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-[11px] uppercase tracking-[0.16em] text-muted-foreground",
							children: s.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-serif text-3xl font-semibold tracking-tight",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 mb-6 font-serif text-lg text-ink-soft",
							children: s.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Blocks, { blocks: s.blocks })
					]
				}, s.id)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
					className: "mt-16 border-t border-border pt-6 font-serif text-sm text-muted-foreground",
					children: "Документ собран из шести исходных методичек подразделения и исправлен там, где алгоритмы расходились с AHA/ERC. Локальный SOP имеет приоритет на смене."
				})
			]
		})]
	});
}
//#endregion
export { PrintPage as component };

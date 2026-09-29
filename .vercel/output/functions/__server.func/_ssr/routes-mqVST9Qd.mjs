import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { X as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as useProgress, n as chapterMeta, o as sections, t as Button } from "./progress-Bpk95inA.mjs";
import { a as Printer, c as BookOpen, l as ArrowRight, r as Shield } from "../_libs/lucide-react.mjs";
import { n as CrossMark } from "./shell-DVPHyRFj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-mqVST9Qd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	(0, import_react.useEffect)(() => {
		useProgress.persist.rehydrate();
	}, []);
	const read = useProgress((s) => s.read);
	const quizBest = useProgress((s) => s.quizBest);
	const total = sections.length;
	const done = read.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-dvh bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid min-h-dvh max-w-[1120px] lg:grid-cols-[220px_minmax(0,1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "hidden border-r border-primary bg-primary text-primary-foreground lg:flex lg:flex-col lg:justify-between lg:px-6 lg:py-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrossMark, { className: "size-9" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 font-sans text-xs uppercase tracking-[0.22em] opacity-80",
						children: "Los Santos EMS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-16 font-serif text-4xl leading-none tracking-tight",
						children: [
							"Field",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Manual"
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-sans text-xs uppercase tracking-[0.18em] opacity-80",
					children: "AHA / ERC 2025"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "px-5 py-8 sm:px-10 sm:py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-xs font-medium uppercase tracking-[0.2em] text-primary",
						children: "Учебное пособие сотрудника EMS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 max-w-[18ch] font-serif text-4xl leading-[1.08] font-semibold tracking-tight sm:text-5xl",
						children: "Basic Life Support и Advanced Life Support"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-[62ch] font-serif text-lg leading-relaxed text-ink-soft",
						children: "Единый курс для людей без медицинского образования: что случилось с пострадавшим, что делать руками, в каком порядке — и где проходит граница между сумкой BLS и работой парамедика."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/guide/$slug",
									params: { slug: "intro" },
									children: ["Открыть пособие", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/quiz",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {}), "Зачёт на 12 вопросов"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "ghost",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/print",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {}), "Печать методички"]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-10 grid max-w-lg grid-cols-3 gap-3",
						children: [
							["Глав", "2 + приложения"],
							["Тем", String(total)],
							["Зачёт", quizBest ? `${quizBest}/12` : "не сдан"]
						].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[var(--radius-md)] border border-border bg-card px-3 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-sans text-xs uppercase tracking-[0.14em] text-muted-foreground",
								children: k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-serif text-xl font-semibold tabular-nums",
								children: v
							})]
						}, k))
					}),
					done > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 font-sans text-sm text-muted-foreground",
						children: [
							"Прочитано ",
							done,
							" из ",
							total,
							". Продолжайте с оглавления."
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-12 border-t border-border pt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "flex items-center gap-2 font-serif text-2xl font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-5 text-primary" }), "Оглавление"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 grid gap-3 sm:grid-cols-2",
							children: [
								"intro",
								"bls",
								"als",
								"appendix"
							].map((ch) => {
								const items = sections.filter((s) => s.chapter === ch);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-[var(--radius-lg)] border border-border bg-card p-4 shadow-page",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-sans text-xs uppercase tracking-[0.16em] text-muted-foreground",
										children: [
											chapterMeta[ch].roman,
											" · ",
											chapterMeta[ch].label
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-3 space-y-2",
										children: items.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/guide/$slug",
											params: { slug: s.id },
											className: "font-serif text-base text-foreground no-underline hover:text-primary",
											children: s.title
										}) }, s.id))
									})]
								}, ch);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-10 max-w-[62ch] font-sans text-xs leading-relaxed text-muted-foreground",
						children: "Собрано из рабочих документов BLS, LSMC, EMT Paramedic, ALS FD и методички осмотра. Протоколы сверены с рекомендациями American Heart Association и European Resuscitation Council 2025. Не заменяет очный сертификационный курс и локальный SOP подразделения."
					})
				]
			})]
		})
	});
}
//#endregion
export { Home as component };

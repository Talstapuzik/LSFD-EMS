import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as useNavigate, X as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as useProgress, i as nav, n as chapterMeta, o as sections, r as cn, t as Button } from "./progress-Bpk95inA.mjs";
import { a as Printer, c as BookOpen, i as Search, o as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shell-DVPHyRFj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-[var(--radius-sm)] border border-input bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring", className),
		...props
	});
}
function CrossMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className,
		"aria-hidden": true,
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 2h6v7h7v6h-7v7H9v-7H2V9h7V2Z" })
	});
}
function AppHeader({ onMenu, query, onQuery }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "no-print sticky top-0 z-30 border-b border-border bg-background/92 backdrop-blur-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 px-3 py-2 sm:px-4",
			children: [
				onMenu ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					onClick: onMenu,
					"aria-label": "Меню",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex min-w-0 items-center gap-2 text-foreground no-underline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-8 items-center justify-center rounded-[var(--radius-sm)] bg-primary text-primary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrossMark, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate font-sans text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
							children: "EMS Field Manual"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate font-serif text-sm font-semibold leading-tight",
							children: "BLS и ALS"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-2 hidden min-w-0 flex-1 md:block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: query,
						onChange: (e) => onQuery(e.target.value),
						placeholder: "Поиск по пособию",
						className: "pl-9",
						"aria-label": "Поиск"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/quiz",
							children: "Зачёт"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "sm",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/print",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: "Печать / PDF"
							})]
						})
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-3 pb-2 md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: query,
					onChange: (e) => onQuery(e.target.value),
					placeholder: "Поиск",
					className: "pl-9"
				})]
			})
		})]
	});
}
function NavList({ current, onPick }) {
	const read = useProgress((s) => s.read);
	const grouped = (0, import_react.useMemo)(() => {
		return [
			"intro",
			"bls",
			"als",
			"appendix"
		].map((ch) => ({
			ch,
			items: nav.filter((i) => i.chapter === ch)
		})).filter((g) => g.items.length > 0);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Оглавление",
		className: "px-3 py-4",
		children: grouped.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-2 pb-1.5 font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground",
				children: chapterMeta[g.ch].label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-0.5",
				children: g.items.map((item) => {
					const active = item.id === current;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/guide/$slug",
						params: { slug: item.id },
						onClick: onPick,
						className: cn("flex items-start gap-2 rounded-[var(--radius-sm)] px-2 py-2 text-sm leading-snug no-underline", active ? "bg-muted font-medium text-foreground" : "text-ink-soft hover:bg-muted/70"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("mt-1.5 size-1.5 shrink-0 rounded-full", read.includes(item.id) ? "bg-bls" : "bg-rule") }), item.title]
					}) }, item.id);
				})
			})]
		}, g.ch))
	});
}
function SearchHits({ query, onClose }) {
	const navigate = useNavigate();
	const q = query.trim().toLowerCase();
	if (q.length < 2) return null;
	const hits = sections.map((s) => {
		const hay = `${s.title} ${s.summary} ${s.blocks.map((b) => {
			if ("text" in b) return b.text;
			if ("body" in b) return b.body;
			if ("items" in b) return Array.isArray(b.items) ? b.items.map((it) => typeof it === "string" ? it : it.title).join(" ") : "";
			return "";
		}).join(" ")}`.toLowerCase();
		const idx = hay.indexOf(q);
		if (idx < 0) return null;
		const start = Math.max(0, idx - 42);
		const snippet = hay.slice(start, start + 110).trim();
		return {
			id: s.id,
			title: s.title,
			snippet
		};
	}).filter(Boolean).slice(0, 8);
	if (!hits.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "no-print border-b border-border bg-card px-4 py-3 font-sans text-sm text-muted-foreground",
		children: [
			"Ничего не найдено по запросу «",
			query,
			"»"
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "no-print border-b border-border bg-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "divide-y divide-border",
			children: hits.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "flex w-full flex-col items-start px-4 py-3 text-left hover:bg-muted",
				onClick: () => {
					onClose();
					navigate({
						to: "/guide/$slug",
						params: { slug: h.id }
					});
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-sans text-sm font-medium",
					children: h.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mt-0.5 line-clamp-2 font-serif text-sm text-muted-foreground",
					children: [
						"…",
						h.snippet,
						"…"
					]
				})]
			}) }, h.id))
		})
	});
}
function GuideChrome({ slug, children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [query, setQuery] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		useProgress.persist.rehydrate();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppHeader, {
				onMenu: () => setOpen(true),
				query,
				onQuery: setQuery
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchHits, {
				query,
				onClose: () => setQuery("")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-[1200px] lg:grid-cols-[272px_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "no-print hidden min-h-[calc(100dvh-57px)] border-r border-border lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sticky top-[57px] max-h-[calc(100dvh-57px)] overflow-y-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavList, { current: slug })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children })]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "no-print fixed inset-0 z-40 lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "absolute inset-0 bg-foreground/35",
					"aria-label": "Закрыть меню",
					onClick: () => setOpen(false)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-y-0 left-0 flex w-[min(100%,20rem)] flex-col bg-background shadow-page",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-border px-3 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2 font-sans text-sm font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-4" }), " Оглавление"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							onClick: () => setOpen(false),
							"aria-label": "Закрыть",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 overflow-y-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavList, {
							current: slug,
							onPick: () => setOpen(false)
						})
					})]
				})]
			}) : null
		]
	});
}
//#endregion
export { SearchHits as i, CrossMark as n, GuideChrome as r, AppHeader as t };

import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { X as require_jsx_runtime, Y as notFound, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as neighbors, c as useProgress, r as cn, s as sectionsById, t as Button } from "./progress-Bpk95inA.mjs";
import { l as ArrowRight, s as Check, u as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as Route } from "./router-BgDbVGQr.mjs";
import { t as Blocks } from "./blocks-CBsMLM7t.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/guide._slug-CKw4sBi9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Badge({ className, tone = "muted", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.14em]", tone === "muted" && "bg-muted text-muted-foreground", tone === "primary" && "bg-primary text-primary-foreground", tone === "bls" && "bg-bls text-bls-fg", tone === "als" && "bg-als text-als-fg", className),
		...props
	});
}
function SectionPage() {
	const { slug } = Route.useParams();
	const section = sectionsById[slug];
	if (!section) throw notFound();
	const { prev, next } = neighbors(slug);
	useProgress((s) => s.markRead);
	const read = useProgress((s) => s.read.includes(slug));
	(0, import_react.useEffect)(() => {
		useProgress.persist.rehydrate().then(() => {
			useProgress.getState().markRead(slug);
		});
	}, [slug]);
	const tone = section.chapter === "bls" ? "bls" : section.chapter === "als" ? "als" : "muted";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "px-4 py-8 sm:px-8 lg:px-12 lg:py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-xl sm:max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone,
						children: section.kicker
					}), read ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1 font-sans text-xs text-bls",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }), " прочитано"]
					}) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-serif text-3xl leading-tight font-semibold tracking-tight sm:text-4xl",
					children: section.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-serif text-lg text-ink-soft",
					children: section.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-8 h-px bg-rule" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Blocks, { blocks: section.blocks }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:justify-between",
					children: [prev ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						asChild: true,
						className: "justify-start",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/guide/$slug",
							params: { slug: prev.id },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {}), prev.title]
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), next ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "sm:justify-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/guide/$slug",
							params: { slug: next.id },
							children: [next.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/quiz",
							children: ["К зачёту", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					})]
				})
			]
		})
	});
}
//#endregion
export { SectionPage as component };

import { X as require_jsx_runtime, g as Outlet, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as GuideChrome } from "./shell-DVPHyRFj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/guide-9hVYXS9F.js
var import_jsx_runtime = require_jsx_runtime();
function GuideLayout() {
	const parts = useRouterState({ select: (s) => s.location.pathname }).split("/").filter(Boolean);
	const slug = parts[0] === "guide" ? parts[1] : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuideChrome, {
		slug,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
//#endregion
export { GuideLayout as component };

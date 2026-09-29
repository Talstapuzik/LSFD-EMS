import {
  createFileRoute,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import { GuideChrome } from "@/components/handbook/shell";

export const Route = createFileRoute("/guide")({
  component: GuideLayout,
});

function GuideLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const parts = pathname.split("/").filter(Boolean);
  const slug = parts[0] === "guide" ? parts[1] : undefined;
  return (
    <GuideChrome slug={slug}>
      <Outlet />
    </GuideChrome>
  );
}

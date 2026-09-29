import { createRouter, Link } from "@tanstack/react-router";
import { AppErrorComponent } from "@/lib/error-component";
import { routeTree } from "./routeTree.gen";

function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-3 bg-background px-6 text-center text-foreground">
      <p className="font-sans text-xs uppercase tracking-[0.18em] text-muted-foreground">
        404
      </p>
      <h1 className="font-serif text-2xl font-semibold">Раздел не найден</h1>
      <Link to="/" className="text-sm text-primary">
        На обложку пособия
      </Link>
    </main>
  );
}

export function getRouter() {
  return createRouter({
    routeTree,
    defaultErrorComponent: AppErrorComponent,
    defaultNotFoundComponent: NotFound,
  });
}

import { Link, useNavigate } from "@tanstack/react-router";
import { BookOpen, Menu, Printer, Search, X } from "lucide-react";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { chapterMeta, nav, sections } from "@/lib/handbook/nav";
import { useProgress } from "@/lib/handbook/progress";
import type { Section } from "@/lib/handbook/types";
import { cn } from "@/lib/utils";

export function CrossMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      fill="currentColor"
    >
      <path d="M9 2h6v7h7v6h-7v7H9v-7H2V9h7V2Z" />
    </svg>
  );
}

export function AppHeader({
  onMenu,
  query,
  onQuery,
}: {
  onMenu?: () => void;
  query: string;
  onQuery: (v: string) => void;
}) {
  return (
    <header className="no-print sticky top-0 z-30 border-b border-border bg-background/92 backdrop-blur-sm">
      <div className="flex items-center gap-2 px-3 py-2 sm:px-4">
        {onMenu ? (
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onMenu}
            aria-label="Меню"
          >
            <Menu />
          </Button>
        ) : null}
        <Link
          to="/"
          className="flex min-w-0 items-center gap-2 text-foreground no-underline"
        >
          <span className="flex size-8 items-center justify-center rounded-[var(--radius-sm)] bg-primary text-primary-foreground">
            <CrossMark className="size-4" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-sans text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              EMS Field Manual
            </span>
            <span className="block truncate font-serif text-sm font-semibold leading-tight">
              BLS и ALS
            </span>
          </span>
        </Link>
        <div className="relative mx-2 hidden min-w-0 flex-1 md:block">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            placeholder="Поиск по пособию"
            className="pl-9"
            aria-label="Поиск"
          />
        </div>
        <div className="ml-auto flex items-center gap-1">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/quiz">Зачёт</Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link to="/print">
              <Printer />
              <span className="hidden sm:inline">Печать / PDF</span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="px-3 pb-2 md:hidden">
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            placeholder="Поиск"
            className="pl-9"
          />
        </div>
      </div>
    </header>
  );
}

export function NavList({
  current,
  onPick,
}: {
  current?: string;
  onPick?: () => void;
}) {
  const read = useProgress((s) => s.read);
  const grouped = useMemo(() => {
    const order: Section["chapter"][] = ["intro", "bls", "als", "appendix"];
    return order
      .map((ch) => ({
        ch,
        items: nav.filter((i) => i.chapter === ch),
      }))
      .filter((g) => g.items.length > 0);
  }, []);

  return (
    <nav aria-label="Оглавление" className="px-3 py-4">
      {grouped.map((g) => (
        <div key={g.ch} className="mb-5">
          <div className="px-2 pb-1.5 font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {chapterMeta[g.ch].label}
          </div>
          <ul className="space-y-0.5">
            {g.items.map((item) => {
              const active = item.id === current;
              return (
                <li key={item.id}>
                  <Link
                    to="/guide/$slug"
                    params={{ slug: item.id }}
                    onClick={onPick}
                    className={cn(
                      "flex items-start gap-2 rounded-[var(--radius-sm)] px-2 py-2 text-sm leading-snug no-underline",
                      active
                        ? "bg-muted font-medium text-foreground"
                        : "text-ink-soft hover:bg-muted/70",
                    )}
                  >
                    <span
                      className={cn(
                        "mt-1.5 size-1.5 shrink-0 rounded-full",
                        read.includes(item.id) ? "bg-bls" : "bg-rule",
                      )}
                    />
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

export function SearchHits({
  query,
  onClose,
}: {
  query: string;
  onClose: () => void;
}) {
  const navigate = useNavigate();
  const q = query.trim().toLowerCase();
  if (q.length < 2) return null;
  const hits = sections
    .map((s) => {
      const hay = `${s.title} ${s.summary} ${s.blocks
        .map((b) => {
          if ("text" in b) return b.text;
          if ("body" in b) return b.body;
          if ("items" in b)
            return Array.isArray(b.items)
              ? b.items
                  .map((it) => (typeof it === "string" ? it : it.title))
                  .join(" ")
              : "";
          return "";
        })
        .join(" ")}`.toLowerCase();
      const idx = hay.indexOf(q);
      if (idx < 0) return null;
      const start = Math.max(0, idx - 42);
      const snippet = hay.slice(start, start + 110).trim();
      return { id: s.id, title: s.title, snippet };
    })
    .filter(Boolean)
    .slice(0, 8) as { id: string; title: string; snippet: string }[];

  if (!hits.length) {
    return (
      <div className="no-print border-b border-border bg-card px-4 py-3 font-sans text-sm text-muted-foreground">
        Ничего не найдено по запросу «{query}»
      </div>
    );
  }

  return (
    <div className="no-print border-b border-border bg-card">
      <ul className="divide-y divide-border">
        {hits.map((h) => (
          <li key={h.id}>
            <button
              type="button"
              className="flex w-full flex-col items-start px-4 py-3 text-left hover:bg-muted"
              onClick={() => {
                onClose();
                void navigate({
                  to: "/guide/$slug",
                  params: { slug: h.id },
                });
              }}
            >
              <span className="font-sans text-sm font-medium">{h.title}</span>
              <span className="mt-0.5 line-clamp-2 font-serif text-sm text-muted-foreground">
                …{h.snippet}…
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function GuideChrome({
  slug,
  children,
}: {
  slug?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    void useProgress.persist.rehydrate();
  }, []);

  return (
    <div className="min-h-dvh bg-background">
      <AppHeader
        onMenu={() => setOpen(true)}
        query={query}
        onQuery={setQuery}
      />
      <SearchHits query={query} onClose={() => setQuery("")} />
      <div className="mx-auto grid max-w-[1200px] lg:grid-cols-[272px_minmax(0,1fr)]">
        <aside className="no-print hidden min-h-[calc(100dvh-57px)] border-r border-border lg:block">
          <div className="sticky top-[57px] max-h-[calc(100dvh-57px)] overflow-y-auto">
            <NavList current={slug} />
          </div>
        </aside>
        <div className="min-w-0 overflow-x-hidden">{children}</div>
      </div>

      {open ? (
        <div className="no-print fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-foreground/35"
            aria-label="Закрыть меню"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 flex w-[min(100%,20rem)] flex-col bg-background shadow-page">
            <div className="flex items-center justify-between border-b border-border px-3 py-2">
              <span className="flex items-center gap-2 font-sans text-sm font-medium">
                <BookOpen className="size-4" /> Оглавление
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
                aria-label="Закрыть"
              >
                <X />
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <NavList current={slug} onPick={() => setOpen(false)} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

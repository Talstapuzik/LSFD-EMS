import { createFileRoute, Link } from "@tanstack/react-router";
import { Printer } from "lucide-react";
import { Blocks } from "@/components/handbook/blocks";
import { CrossMark } from "@/components/handbook/shell";
import { Button } from "@/components/ui/button";
import { chapterMeta, sections } from "@/lib/handbook/nav";

export const Route = createFileRoute("/print")({ component: PrintPage });

function PrintPage() {
  return (
    <div className="print-root min-h-dvh bg-background text-foreground">
      <div className="no-print sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-border bg-background px-4 py-3">
        <Button variant="outline" asChild>
          <Link to="/">На обложку</Link>
        </Button>
        <Button onClick={() => window.print()}>
          <Printer />
          Печать / сохранить PDF
        </Button>
      </div>

      <div className="mx-auto max-w-[42rem] px-5 py-10 sm:px-8">
        <header className="print-avoid border-b-2 border-primary pb-8">
          <div className="flex items-center gap-3 text-primary">
            <CrossMark className="size-8" />
            <span className="font-sans text-[11px] uppercase tracking-[0.22em]">
              Los Santos EMS · Fire Department
            </span>
          </div>
          <h1 className="mt-6 font-serif text-4xl font-semibold tracking-tight">
            Руководство сотрудника EMS
          </h1>
          <p className="mt-2 font-serif text-xl">
            Basic Life Support (BLS) и Advanced Life Support (ALS)
          </p>
          <p className="mt-4 font-serif text-base text-ink-soft">
            Актуализировано по рекомендациям American Heart Association и
            European Resuscitation Council (2025). При печати документ идёт
            шрифтом Times New Roman, 14 pt, как учебная методичка.
          </p>
        </header>

        <section className="mt-8 print-avoid">
          <h2 className="font-serif text-2xl font-semibold">Оглавление</h2>
          <ol className="mt-3 list-decimal space-y-1 pl-5 font-serif">
            {sections.map((s) => (
              <li key={s.id}>
                {chapterMeta[s.chapter].label}: {s.title}
              </li>
            ))}
          </ol>
        </section>

        {sections.map((s, i) => (
          <section
            key={s.id}
            className={i === 0 ? "mt-12" : "print-break mt-12"}
          >
            <p className="font-sans text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              {s.kicker}
            </p>
            <h2 className="mt-1 font-serif text-3xl font-semibold tracking-tight">
              {s.title}
            </h2>
            <p className="mt-2 mb-6 font-serif text-lg text-ink-soft">
              {s.summary}
            </p>
            <Blocks blocks={s.blocks} />
          </section>
        ))}

        <footer className="mt-16 border-t border-border pt-6 font-serif text-sm text-muted-foreground">
          Документ собран из шести исходных методичек подразделения и исправлен
          там, где алгоритмы расходились с AHA/ERC. Локальный SOP имеет
          приоритет на смене.
        </footer>
      </div>
    </div>
  );
}

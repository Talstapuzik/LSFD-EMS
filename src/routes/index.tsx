import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Printer, Shield } from "lucide-react";
import { useEffect } from "react";
import { CrossMark } from "@/components/handbook/shell";
import { Button } from "@/components/ui/button";
import { chapterMeta, sections } from "@/lib/handbook/nav";
import { useProgress } from "@/lib/handbook/progress";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  useEffect(() => {
    void useProgress.persist.rehydrate();
  }, []);
  const read = useProgress((s) => s.read);
  const quizBest = useProgress((s) => s.quizBest);
  const total = sections.length;
  const done = read.length;

  return (
    <div className="min-h-dvh bg-background">
      <div className="mx-auto grid min-h-dvh max-w-[1120px] lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="hidden border-r border-primary bg-primary text-primary-foreground lg:flex lg:flex-col lg:justify-between lg:px-6 lg:py-10">
          <div>
            <CrossMark className="size-9" />
            <p className="mt-8 font-sans text-xs uppercase tracking-[0.22em] opacity-80">
              Los Santos EMS
            </p>
            <p className="mt-16 font-serif text-4xl leading-none tracking-tight">
              Field
              <br />
              Manual
            </p>
          </div>
          <p className="font-sans text-xs uppercase tracking-[0.18em] opacity-80">
            AHA / ERC 2025
          </p>
        </aside>

        <main className="px-5 py-8 sm:px-10 sm:py-12">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Учебное пособие сотрудника EMS
          </p>
          <h1 className="mt-3 max-w-[18ch] font-serif text-4xl leading-[1.08] font-semibold tracking-tight sm:text-5xl">
            Basic Life Support и Advanced Life Support
          </h1>
          <p className="mt-5 max-w-[62ch] font-serif text-lg leading-relaxed text-ink-soft">
            Единый курс для людей без медицинского образования: что случилось с
            пострадавшим, что делать руками, в каком порядке — и где проходит
            граница между сумкой BLS и работой парамедика.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/guide/$slug" params={{ slug: "intro" }}>
                Открыть пособие
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/quiz">
                <Shield />
                Зачёт на 12 вопросов
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link to="/print">
                <Printer />
                Печать методички
              </Link>
            </Button>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-3">
            {[
              ["Глав", "2 + приложения"],
              ["Тем", String(total)],
              ["Зачёт", quizBest ? `${quizBest}/12` : "не сдан"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="rounded-[var(--radius-md)] border border-border bg-card px-3 py-3"
              >
                <dt className="font-sans text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {k}
                </dt>
                <dd className="mt-1 font-serif text-xl font-semibold tabular-nums">
                  {v}
                </dd>
              </div>
            ))}
          </dl>

          {done > 0 ? (
            <p className="mt-4 font-sans text-sm text-muted-foreground">
              Прочитано {done} из {total}. Продолжайте с оглавления.
            </p>
          ) : null}

          <section className="mt-12 border-t border-border pt-8">
            <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold">
              <BookOpen className="size-5 text-primary" />
              Оглавление
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {(["intro", "bls", "als", "appendix"] as const).map((ch) => {
                const items = sections.filter((s) => s.chapter === ch);
                return (
                  <div
                    key={ch}
                    className="rounded-[var(--radius-lg)] border border-border bg-card p-4 shadow-page"
                  >
                    <div className="font-sans text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {chapterMeta[ch].roman} · {chapterMeta[ch].label}
                    </div>
                    <ul className="mt-3 space-y-2">
                      {items.map((s) => (
                        <li key={s.id}>
                          <Link
                            to="/guide/$slug"
                            params={{ slug: s.id }}
                            className="font-serif text-base text-foreground no-underline hover:text-primary"
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>

          <p className="mt-10 max-w-[62ch] font-sans text-xs leading-relaxed text-muted-foreground">
            Собрано из рабочих документов BLS, LSMC, EMT Paramedic, ALS FD и
            методички осмотра. Протоколы сверены с рекомендациями American Heart
            Association и European Resuscitation Council 2025. Не заменяет
            очный сертификационный курс и локальный SOP подразделения.
          </p>
        </main>
      </div>
    </div>
  );
}

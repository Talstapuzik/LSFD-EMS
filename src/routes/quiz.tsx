import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { AppHeader, SearchHits } from "@/components/handbook/shell";
import { Button } from "@/components/ui/button";
import { quizQuestions } from "@/lib/handbook/quiz";
import { useProgress } from "@/lib/handbook/progress";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/quiz")({ component: QuizPage });

function tally(answers: Array<number | null>): number {
  let n = 0;
  for (let i = 0; i < answers.length; i += 1) {
    if (answers[i] === quizQuestions[i].answer) n += 1;
  }
  return n;
}


function QuizPage() {
  const [query, setQuery] = useState("");
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Array<number | null>>(() =>
    Array.from({ length: quizQuestions.length }, () => null),
  );
  const setQuizBest = useProgress((s) => s.setQuizBest);
  const done = step >= quizQuestions.length;
  const q = quizQuestions[Math.min(step, quizQuestions.length - 1)];

  useEffect(() => {
    void useProgress.persist.rehydrate();
  }, []);

  const score = useMemo(() => tally(answers), [answers]);

  function lock() {
    if (picked === null) return;
    const next = [...answers];
    next[step] = picked;
    setAnswers(next);
    if (step + 1 >= quizQuestions.length) {
      setQuizBest(tally(next));
      setStep(quizQuestions.length);
    } else {
      setStep(step + 1);
      setPicked(null);
    }
  }

  return (
    <div className="min-h-dvh bg-background">
      <AppHeader query={query} onQuery={setQuery} />
      <SearchHits query={query} onClose={() => setQuery("")} />
      <main className="mx-auto max-w-xl px-4 py-8 sm:px-6">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.18em] text-primary">
          Контроль знаний
        </p>
        <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight">
          Зачёт BLS / ALS
        </h1>
        <p className="mt-2 font-serif text-ink-soft">
          12 вопросов. После выбора варианта сразу видно, почему это так. Не
          экзамен департамента — проверка, что пособие прочитано.
        </p>

        {done ? (
          <div className="mt-8 rounded-[var(--radius-lg)] border border-border bg-card p-5 shadow-page">
            <p className="font-sans text-sm text-muted-foreground">Результат</p>
            <p className="mt-1 font-serif text-4xl font-semibold tabular-nums">
              {score} / {quizQuestions.length}
            </p>
            <p className="mt-3 font-serif text-lg">
              {score >= 10
                ? "Достаточно для допуска к отработке на сцене. Повторите ошибки из приложения В."
                : score >= 7
                  ? "База есть, но дыры опасны. Откройте CPR, жгут и «нельзя» ещё раз."
                  : "Сначала глава BLS целиком, потом зачёт снова. Не выходите на сцену на угадывании."}
            </p>
            <ul className="mt-5 space-y-3">
              {quizQuestions.map((item, i) => (
                <li key={item.id} className="border-t border-border pt-3">
                  <div className="font-serif text-base">{item.prompt}</div>
                  <div
                    className={cn(
                      "mt-1 font-sans text-sm",
                      answers[i] === item.answer ? "text-bls" : "text-primary",
                    )}
                  >
                    {answers[i] === item.answer ? "Верно. " : "Ошибка. "}
                    {item.explain}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button
                onClick={() => {
                  setStep(0);
                  setPicked(null);
                  setAnswers(
                    Array.from({ length: quizQuestions.length }, () => null),
                  );
                }}
              >
                Пройти снова
              </Button>
              <Button variant="outline" asChild>
                <Link to="/guide/$slug" params={{ slug: "errors" }}>
                  К ошибкам
                </Link>
              </Button>
            </div>
          </div>
        ) : (
          <div className="mt-8">
            <div className="mb-4 flex items-center justify-between font-sans text-xs uppercase tracking-[0.14em] text-muted-foreground">
              <span>
                Вопрос {step + 1} из {quizQuestions.length}
              </span>
              <span className="tabular-nums">
                {Math.round((step / quizQuestions.length) * 100)}%
              </span>
            </div>
            <div className="mb-6 h-1 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full bg-primary transition-[width] duration-200"
                style={{ width: `${(step / quizQuestions.length) * 100}%` }}
              />
            </div>
            <h2 className="font-serif text-2xl font-semibold leading-snug">
              {q.prompt}
            </h2>
            <ul className="mt-5 space-y-2">
              {q.options.map((opt, i) => {
                const chosen = picked === i;
                return (
                  <li key={opt}>
                    <button
                      type="button"
                      onClick={() => setPicked(i)}
                      className={cn(
                        "w-full rounded-[var(--radius-md)] border px-4 py-3 text-left font-serif text-base",
                        chosen
                          ? "border-primary bg-stop-bg"
                          : "border-border bg-card hover:bg-muted",
                      )}
                    >
                      {opt}
                    </button>
                  </li>
                );
              })}
            </ul>
            {picked !== null ? (
              <p className="mt-4 rounded-[var(--radius-md)] bg-update-bg px-4 py-3 font-serif text-base">
                {picked === q.answer ? "Верно. " : "Пока нет. "}
                {q.explain}
              </p>
            ) : null}
            <Button className="mt-5" disabled={picked === null} onClick={lock}>
              {step + 1 === quizQuestions.length ? "Завершить" : "Дальше"}
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}

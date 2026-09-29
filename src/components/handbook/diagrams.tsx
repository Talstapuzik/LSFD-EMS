import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

function Node({
  children,
  tone = "ink",
}: {
  children: ReactNode;
  tone?: "ink" | "primary" | "bls" | "als";
}) {
  return (
    <div
      className={cn(
        "min-w-0 rounded-[var(--radius-sm)] border px-2.5 py-2 text-center text-xs font-medium leading-snug sm:px-3 sm:text-sm",
        tone === "ink" && "border-border bg-card text-foreground",
        tone === "primary" && "border-primary bg-primary text-primary-foreground",
        tone === "bls" && "border-bls bg-bls text-bls-fg",
        tone === "als" && "border-als bg-als text-als-fg",
      )}
    >
      {children}
    </div>
  );
}

function Arrow() {
  return (
    <div
      aria-hidden
      className="flex items-center justify-center py-1 text-muted-foreground"
    >
      <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
        <path
          d="M6 1v12M2 9.5 6 14l4-4.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function Row({ children }: { children: ReactNode }) {
  return <div className="grid gap-2 md:grid-cols-2">{children}</div>;
}

export function Diagram({
  name,
}: {
  name:
    | "pipeline"
    | "cpr"
    | "aed"
    | "abcde"
    | "arrest"
    | "bleed"
    | "fast"
    | "march";
}) {
  if (name === "pipeline") {
    return (
      <figure className="print-avoid my-6">
        <div className="grid gap-0">
          {[
            ["Пострадавший", "ink"],
            ["Оценка сцены и угроз", "ink"],
            ["BLS: кровь, CPR, AED, кислород", "bls"],
            ["Передача: цифры, время, что сделано", "ink"],
            ["ALS: монитор, пути, лекарства", "als"],
            ["Расширенное лечение в пути", "als"],
            ["Транспортировка в МЦ", "primary"],
          ].map(([label, tone], i) => (
            <div key={label}>
              {i > 0 ? <Arrow /> : null}
              <Node tone={tone as "ink" | "primary" | "bls" | "als"}>
                {label}
              </Node>
            </div>
          ))}
        </div>
        <figcaption className="mt-3 text-center font-sans text-xs text-muted-foreground">
          Цепочка помощи. Каждый следующий шаг не отменяет предыдущий.
        </figcaption>
      </figure>
    );
  }

  if (name === "cpr") {
    return (
      <figure className="print-avoid my-6 grid gap-4 lg:grid-cols-[minmax(0,220px)_1fr] lg:items-center">
        <div className="mx-auto w-full max-w-[220px]">
          <svg viewBox="0 0 200 260" className="w-full text-foreground">
            <rect
              x="58"
              y="18"
              width="84"
              height="64"
              rx="32"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M40 92c18-10 102-10 120 0v78c0 38-24 62-60 62s-60-24-60-62V92Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M78 118h44M78 132h44"
              stroke="currentColor"
              strokeWidth="1.2"
              opacity="0.45"
            />
            <rect
              x="86"
              y="148"
              width="28"
              height="36"
              rx="4"
              fill="var(--color-primary)"
            />
            <rect
              x="90"
              y="152"
              width="20"
              height="28"
              rx="3"
              fill="var(--color-card)"
              stroke="currentColor"
              strokeWidth="1"
            />
            <text
              x="100"
              y="248"
              textAnchor="middle"
              fontSize="11"
              fill="currentColor"
              fontFamily="IBM Plex Sans, sans-serif"
            >
              нижняя половина грудины
            </text>
          </svg>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          <Node tone="primary">Центр груди, не на мечевидный отросток</Node>
          <Node>Руки прямые, плечи над ладонями</Node>
          <Node>5–6 см · 100–120 / мин</Node>
          <Node>Полный возврат · паузы минимальны</Node>
          <div className="sm:col-span-2">
            <Node tone="bls">30 компрессий → 2 вдоха → снова</Node>
          </div>
        </div>
        <figcaption className="text-center font-sans text-xs text-muted-foreground lg:col-span-2">
          Положение рук: нижняя половина грудины, пальцы не давят на рёбра.
        </figcaption>
      </figure>
    );
  }

  if (name === "aed") {
    const steps = [
      "Включить AED",
      "Наклеить электроды",
      "Анализ — не касаться",
      "Разряд по команде",
      "Сразу CPR 2 мин",
    ];
    return (
      <figure className="print-avoid my-6">
        <div className="flex flex-col">
          {steps.map((label, i) => (
            <div key={label}>
              {i > 0 ? <Arrow /> : null}
              <Node tone={i === 3 ? "primary" : "ink"}>{label}</Node>
            </div>
          ))}
        </div>
        <p className="mt-4 font-sans text-sm text-ink-soft">
          Электроды: правый — под ключицей справа от грудины; левый — левая
          боковая линия на уровне нижних рёбер.
        </p>
      </figure>
    );
  }

  if (name === "abcde") {
    return (
      <figure className="print-avoid my-6 grid gap-2">
        {[
          ["A", "Airway", "Путь воздуха открыт?"],
          ["B", "Breathing", "Грудь поднимается, хватает кислорода?"],
          ["C", "Circulation", "Есть пульс и нет фонтана крови?"],
          ["D", "Disability", "Мозг: сознание, зрачки, сахар"],
          ["E", "Exposure", "Раздеть, найти скрытое, согреть"],
        ].map(([letter, en, ru]) => (
          <div
            key={letter}
            className="grid grid-cols-[48px_1fr] overflow-hidden rounded-[var(--radius-md)] border border-border bg-card"
          >
            <div className="flex items-center justify-center bg-secondary font-sans text-lg font-medium text-secondary-foreground">
              {letter}
            </div>
            <div className="px-3 py-2">
              <div className="font-sans text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {en}
              </div>
              <div className="font-serif text-sm">{ru}</div>
            </div>
          </div>
        ))}
      </figure>
    );
  }

  if (name === "arrest") {
    return (
      <figure className="print-avoid my-6">
        <Node tone="primary">
          Остановка: нет сознания, нет дыхания, нет пульса
        </Node>
        <Arrow />
        <Node tone="bls">CPR + кислород / мешок</Node>
        <Arrow />
        <Node tone="als">Анализ ритма</Node>
        <Arrow />
        <Row>
          <Node tone="primary">
            Шоковый (ФЖ / ЖТ без пульса) → разряд → CPR 2 мин
          </Node>
          <Node>
            Нешоковый (асистолия / PEA) → CPR + адреналин, искать причину
          </Node>
        </Row>
        <Arrow />
        <Node>
          Каждые 2 минуты: ритм, смена качающего, лекарства по протоколу
        </Node>
        <figcaption className="mt-3 text-center font-sans text-xs text-muted-foreground">
          Разряд не отменяет компрессии — он вставляется между двухминутными
          циклами.
        </figcaption>
      </figure>
    );
  }

  if (name === "bleed") {
    return (
      <figure className="print-avoid my-6">
        <Node tone="primary">Кровь идёт сильно</Node>
        <Arrow />
        <Node>Прямое давление ладонью</Node>
        <Arrow />
        <Node>Тампонада канала (гемостатик, если есть)</Node>
        <Arrow />
        <Node>Давящая повязка с валиком</Node>
        <Arrow />
        <Node tone="primary">
          Конечность: турникет 5–8 см выше раны. Время на жгуте.
        </Node>
      </figure>
    );
  }

  if (name === "fast") {
    return (
      <figure className="print-avoid my-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["F", "Face", "Попросите улыбнуться — уголок рта «висит»?"],
          ["A", "Arm", "Поднять обе руки — одна падает?"],
          ["S", "Speech", "Повторить фразу — каша, поиск слов?"],
          ["T", "Time", "Время начала. Срочная доставка, ничего в рот."],
        ].map(([l, en, ru]) => (
          <div
            key={l}
            className="rounded-[var(--radius-md)] border border-border bg-card p-3"
          >
            <div className="font-sans text-2xl font-medium text-primary">{l}</div>
            <div className="mt-1 font-sans text-xs uppercase tracking-[0.14em] text-muted-foreground">
              {en}
            </div>
            <p className="mt-2 font-serif text-sm leading-snug">{ru}</p>
          </div>
        ))}
      </figure>
    );
  }

  return (
    <figure className="print-avoid my-6 grid gap-2">
      {[
        ["M", "Massive hemorrhage", "Сначала фонтан крови"],
        ["A", "Airway", "Затем путь воздуха"],
        ["R", "Respiration", "Дыхание и герметизация груди"],
        ["C", "Circulation", "Пульс, CPR, шок"],
        ["H", "Hypothermia / Head", "Не дать остыть, беречь шею и голову"],
      ].map(([l, en, ru]) => (
        <div
          key={l}
          className="grid grid-cols-[48px_1fr] overflow-hidden rounded-[var(--radius-md)] border border-border bg-card"
        >
          <div className="flex items-center justify-center bg-primary font-sans text-lg font-medium text-primary-foreground">
            {l}
          </div>
          <div className="px-3 py-2">
            <div className="font-sans text-xs uppercase tracking-[0.14em] text-muted-foreground">
              {en}
            </div>
            <div className="font-serif text-sm">{ru}</div>
          </div>
        </div>
      ))}
    </figure>
  );
}

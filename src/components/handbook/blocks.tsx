import type { Block, CalloutKind } from "@/lib/handbook/types";
import { Diagram } from "./diagrams";
import { cn } from "@/lib/utils";

const calloutMeta: Record<
  CalloutKind,
  { label: string; box: string; bar: string }
> = {
  warn: {
    label: "Важно помнить",
    box: "bg-warn-bg text-foreground",
    bar: "bg-warn",
  },
  stop: {
    label: "Частые ошибки · нельзя",
    box: "bg-stop-bg text-foreground",
    bar: "bg-primary",
  },
  tip: {
    label: "Якорь памяти",
    box: "bg-tip-bg text-foreground",
    bar: "bg-bls",
  },
  bls: {
    label: "Уровень BLS",
    box: "bg-bls-bg text-foreground",
    bar: "bg-bls",
  },
  als: {
    label: "Уровень ALS",
    box: "bg-als-bg text-foreground",
    bar: "bg-als",
  },
  rp: {
    label: "Отработка на сцене",
    box: "bg-rp-bg text-foreground",
    bar: "bg-muted-foreground",
  },
  update: {
    label: "Актуализация протокола",
    box: "bg-update-bg text-foreground",
    bar: "bg-secondary",
  },
};

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="font-serif text-[17px] leading-[1.55] text-foreground">
      {blocks.map((block, i) => (
        <BlockView key={i} block={block} />
      ))}
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "lead":
      return (
        <p className="mb-6 text-[19px] leading-[1.5] text-ink-soft">{block.text}</p>
      );
    case "p":
      return <p className="mb-4">{block.text}</p>;
    case "h2":
      return (
        <h2 className="mt-10 mb-3 font-serif text-[1.65rem] font-semibold tracking-tight text-foreground first:mt-0">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-7 mb-2 font-serif text-xl font-semibold tracking-tight">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul className="mb-5 list-disc space-y-1.5 pl-5 marker:text-primary">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="mb-5 list-decimal space-y-1.5 pl-5 marker:font-sans marker:text-sm marker:text-muted-foreground">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      );
    case "callout": {
      const meta = calloutMeta[block.kind];
      return (
        <aside
          className={cn(
            "print-avoid my-5 overflow-hidden rounded-[var(--radius-lg)]",
            meta.box,
          )}
        >
          <div className="grid grid-cols-[6px_1fr]">
            <div className={meta.bar} />
            <div className="px-4 py-3 sm:px-5 sm:py-4">
              <div className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-ink-soft">
                {meta.label}
                {block.title ? ` · ${block.title}` : ""}
              </div>
              <p className="mt-1.5 text-[16px] leading-relaxed">{block.body}</p>
            </div>
          </div>
        </aside>
      );
    }
    case "table":
      return (
        <div className="print-avoid my-5 w-full max-w-full overflow-x-auto rounded-[var(--radius-md)] border border-border bg-card">
          {block.caption ? (
            <div className="border-b border-border px-3 py-2 font-sans text-xs uppercase tracking-[0.14em] text-muted-foreground">
              {block.caption}
            </div>
          ) : null}
          <table className="w-full min-w-xl border-collapse text-left text-sm sm:text-base">
            <thead>
              <tr className="bg-muted/80">
                {block.headers.map((h) => (
                  <th
                    key={h}
                    className="border-b border-border px-3 py-2 font-sans text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className="align-top">
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="border-b border-border px-3 py-2.5 last:border-0"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "steps":
      return (
        <ol className="my-5 space-y-3">
          {block.items.map((item, i) => (
            <li
              key={item.title}
              className="print-avoid grid grid-cols-[2.25rem_1fr] gap-3"
            >
              <div className="flex size-9 items-center justify-center rounded-full bg-primary font-sans text-sm font-medium text-primary-foreground">
                {i + 1}
              </div>
              <div>
                <div className="font-serif text-lg font-semibold">{item.title}</div>
                <p className="mt-1 text-[16px] leading-relaxed text-ink-soft">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      );
    case "diagram":
      return <Diagram name={block.name} />;
    case "split":
      return (
        <div className="print-avoid my-5 grid gap-3 md:grid-cols-2">
          <div className="rounded-[var(--radius-lg)] border border-bls/30 bg-bls-bg p-4">
            <div className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-bls">
              {block.leftTitle}
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-4 text-[16px] marker:text-bls">
              {block.left.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[var(--radius-lg)] border border-als/30 bg-als-bg p-4">
            <div className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-als">
              {block.rightTitle}
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-4 text-[16px] marker:text-als">
              {block.right.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      );
  }
}

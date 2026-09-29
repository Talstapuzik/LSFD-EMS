import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useEffect } from "react";
import { Blocks } from "@/components/handbook/blocks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { neighbors, sectionsById } from "@/lib/handbook/nav";
import { useProgress } from "@/lib/handbook/progress";

export const Route = createFileRoute("/guide/$slug")({
  component: SectionPage,
});

function SectionPage() {
  const { slug } = Route.useParams();
  const section = sectionsById[slug];
  if (!section) throw notFound();
  const { prev, next } = neighbors(slug);
  const read = useProgress((s) => s.read.includes(slug));

  useEffect(() => {
    void useProgress.persist.rehydrate().then(() => {
      useProgress.getState().markRead(slug);
    });
  }, [slug]);

  const tone =
    section.chapter === "bls"
      ? "bls"
      : section.chapter === "als"
        ? "als"
        : "muted";

  return (
    <article className="min-w-0 px-4 py-8 sm:px-8 lg:px-12 lg:py-10">
      <div className="mx-auto w-full min-w-0 max-w-2xl">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone={tone}>{section.kicker}</Badge>
          {read ? (
            <span className="inline-flex items-center gap-1 font-sans text-xs text-bls">
              <Check className="size-3.5" /> прочитано
            </span>
          ) : null}
        </div>
        <h1 className="mt-3 font-serif text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
          {section.title}
        </h1>
        <p className="mt-3 font-serif text-lg text-ink-soft">{section.summary}</p>
        <div className="my-8 h-px bg-rule" />
        <Blocks blocks={section.blocks} />

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:justify-between">
          {prev ? (
            <Button variant="outline" asChild className="max-w-full justify-start text-left whitespace-normal">
              <Link to="/guide/$slug" params={{ slug: prev.id }}>
                <ArrowLeft />
                {prev.title}
              </Link>
            </Button>
          ) : (
            <span />
          )}
          {next ? (
            <Button asChild className="max-w-full text-left whitespace-normal sm:justify-end">
              <Link to="/guide/$slug" params={{ slug: next.id }}>
                {next.title}
                <ArrowRight />
              </Link>
            </Button>
          ) : (
            <Button asChild>
              <Link to="/quiz">
                К зачёту
                <ArrowRight />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}

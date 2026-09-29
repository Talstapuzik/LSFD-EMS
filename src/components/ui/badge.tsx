import { cn } from "@/lib/utils";

export function Badge({
  className,
  tone = "muted",
  ...props
}: React.ComponentProps<"span"> & {
  tone?: "muted" | "primary" | "bls" | "als";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.14em]",
        tone === "muted" && "bg-muted text-muted-foreground",
        tone === "primary" && "bg-primary text-primary-foreground",
        tone === "bls" && "bg-bls text-bls-fg",
        tone === "als" && "bg-als text-als-fg",
        className,
      )}
      {...props}
    />
  );
}

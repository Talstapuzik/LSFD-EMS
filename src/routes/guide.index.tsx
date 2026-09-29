import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/guide/")({
  component: () => <Navigate to="/guide/$slug" params={{ slug: "intro" }} />,
});

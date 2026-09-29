export type CalloutKind = "warn" | "stop" | "tip" | "bls" | "als" | "rp" | "update";

export type Block =
  | { type: "lead"; text: string }
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | {
      type: "callout";
      kind: CalloutKind;
      title: string;
      body: string;
    }
  | {
      type: "table";
      caption?: string;
      headers: string[];
      rows: string[][];
    }
  | {
      type: "steps";
      items: { title: string; body: string }[];
    }
  | {
      type: "diagram";
      name:
        | "pipeline"
        | "cpr"
        | "aed"
        | "abcde"
        | "arrest"
        | "bleed"
        | "fast"
        | "march";
    }
  | {
      type: "split";
      leftTitle: string;
      rightTitle: string;
      left: string[];
      right: string[];
    };

export type Section = {
  id: string;
  chapter: "intro" | "bls" | "als" | "appendix";
  kicker: string;
  title: string;
  summary: string;
  blocks: Block[];
};

export type NavItem = {
  id: string;
  title: string;
  chapter: Section["chapter"];
};

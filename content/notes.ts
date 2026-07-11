export interface Note {
  month: string;
  year: number;
  entries: string[];
}

export const notes: Note[] = [
  {
    month: "July",
    year: 2026,
    entries: [
      "Started building HanNeng.net.",
      "Launched on Cloudflare Pages.",
      "Planning AWS Lambda integration.",
    ],
  },
];

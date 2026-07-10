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
      "Deployed the first version on Cloudflare Pages.",
      "Began learning AWS Lambda for future backend services.",
      "Continued developing What Should I Wear Today.",
    ],
  },
];

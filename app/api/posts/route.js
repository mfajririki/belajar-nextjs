import { NextResponse } from "next/server";

const posts = [
  { id: 1, title: "Belajar Next.js", content: "Step by step 🚀" },
  { id: 2, title: "Belajar Tailwind", content: "Styling cepat & rapi 🎨" },
  {
    id: 3,
    title: "Belajar API Routes",
    content: "Fullstack dengan Next.js 🔥",
  },
];

export async function GET() {
  return NextResponse.json(posts);
}

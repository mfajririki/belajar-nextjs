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

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const post = posts.find((p) => p.id === parseInt(params.id));
  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }
  return NextResponse.json(post);
}

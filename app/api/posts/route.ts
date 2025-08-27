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

// GET semua posts
export async function GET() {
  return NextResponse.json(posts);
}

// POST tambah post
export async function POST(req: Request) {
  const body = await req.json();
  const newPost = {
    id: posts.length + 1,
    title: body.title,
    content: body.content,
  };
  posts.push(newPost);
  return NextResponse.json(newPost, { status: 201 });
}

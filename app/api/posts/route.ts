import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET semua post
export async function GET() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(posts);
}

// POST buat post baru
export async function POST(req: Request) {
  const body = await req.json();
  const newPost = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
    },
  });
  return NextResponse.json(newPost);
}

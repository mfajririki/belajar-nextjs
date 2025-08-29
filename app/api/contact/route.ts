import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  // 🚨 validasi sederhana
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  // Simulasi simpan ke database
  console.log("📩 New message:", body);

  return NextResponse.json({
    success: true,
    message: "Message received!",
  });
}

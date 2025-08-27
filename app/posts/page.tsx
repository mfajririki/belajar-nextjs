"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function PostsPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Daftar Posts (dari API Lokal)</h1>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id} className="p-3 border rounded">
            <Link
              href={`/posts/${post.id}`}
              className="font-semibold text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
            <p className="text-gray-600">{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

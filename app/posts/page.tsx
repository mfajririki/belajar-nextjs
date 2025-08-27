"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

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
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Daftar Posts</h1>
        <Link
          href="/posts/new"
          className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
        >
          + Tambah
        </Link>
      </div>

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

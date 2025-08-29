"use client";

import { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  content: string | null;
  createdAt: string;
};

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Ambil data dari API
  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  // Submit Post baru
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });
    const newPost = await res.json();
    setPosts([newPost, ...posts]); // update list tanpa reload
    setTitle("");
    setContent("");
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>

      {/* Form buat post */}
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full mb-2 rounded"
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border p-2 w-full mb-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Post
        </button>
      </form>

      {/* List posts */}
      <div>
        {posts.map((post) => (
          <div key={post.id} className="border-b py-2">
            <h2 className="font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-600">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

interface PostPageProps {
  params: { id: string };
}

export default async function PostPage({ params }: PostPageProps) {
  const res = await fetch(`http://localhost:3000/api/posts/${params.id}`, {
    cache: "no-store", // biar SSR
  });

  if (!res.ok) {
    return <h1 className="text-red-600">Post tidak ditemukan</h1>;
  }

  const post = await res.json();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-700">{post.content}</p>
    </div>
  );
}

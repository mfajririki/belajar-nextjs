/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function PostsPage() {
  // fetch ke public API
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const posts = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Daftar Posts</h1>
      <ul className="space-y-2">
        {posts.slice(0, 5).map((post: any) => (
          <li key={post.id} className="p-3 border rounded">
            <h2 className="font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users (SSG)",
};

interface User {
  id: number;
  name: string;
  email: string;
}

async function getUsersSSG(): Promise<User[]> {
  // 🚀 pakai cache bawaan Next.js
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 0 }, // 0 = pure SSG (dibuild sekali)
  });
  return res.json();
}

export default async function UsersSSGPage() {
  const users = await getUsersSSG();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users (SSG)</h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <li
            key={user.id}
            className="border p-3 rounded-lg shadow hover:bg-gray-50"
          >
            <p className="font-semibold">{user.name}</p>
            <p className="text-gray-600 text-sm">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

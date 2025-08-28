import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users (ISR)",
};

interface User {
  id: number;
  name: string;
  email: string;
}

async function getUsersISR(): Promise<User[]> {
  // 🚀 Re-generate setiap 60 detik
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 60 }, // refresh data tiap 60 detik
  });
  return res.json();
}

export default async function UsersISRPage() {
  const users = await getUsersISR();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users (ISR, 60s)</h1>
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

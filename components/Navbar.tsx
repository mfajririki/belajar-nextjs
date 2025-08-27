"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Dashboard", path: "/dashboard" },
];

export default function Navbar() {
  const pathname = usePathname(); // ambil path saat ini

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex gap-6">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`${
                isActive
                  ? "font-bold border-b-2 border-yellow-400"
                  : "hover:text-yellow-300"
              } transition-colors`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

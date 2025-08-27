import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Belajar Next.js",
  description: "Website belajar Next.js step by step",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* HEADER */}
        <Navbar />

        {/* CONTENT */}
        <main className="container mx-auto p-6">{children}</main>

        {/* FOOTER */}
        <footer className="bg-gray-800 text-gray-200 p-4 text-center mt-10">
          <p>
            © {new Date().getFullYear()} Belajar Next.js. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}

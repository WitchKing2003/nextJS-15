"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navLinks = [
    { href: "/login", label: "Login" },
    { href: "/register", label: "Register" },
    { href: "/forgot-password", label: "Forgot Password" },
  ];
  const pathname = usePathname();
  const [input, setInput] = useState("");
  return (
    <html lang="en">
      <body>
        <div className="">
          <input
            type="text"
            placeholder="Search..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="">
          {navLinks.map((link) => {
            const isAuthPage =
              pathname === link.href ||
              (pathname.startsWith(link.href) && link.href !== "/");

            return (
              <>
                <div className="flex items-center justify-center">
                  <Link
                    className={` ${isAuthPage ? "underline text-blue-500 font-bold" : "text-gray-700 hover:bg-gray-200"}`}
                    key={link.href}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </div>
              </>
            );
          })}
        </div>
        {children}
        <footer>Footer Auth</footer>
      </body>
    </html>
  );
}

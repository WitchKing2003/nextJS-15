"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
  return (
    <html lang="en">
      <body>
        <div className="">
          {navLinks.map((link) => {
            const isAuthPage =
              pathname === link.href ||
              (pathname.startsWith(link.href) && link.href !== "/");

            return (
              <Link
                className={`flex ${isAuthPage ? "underline text-blue-500 font-bold" : "text-gray-700 hover:bg-gray-200"}`}
                key={link.href}
                href={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        {children}
        <footer>Footer Auth</footer>
      </body>
    </html>
  );
}

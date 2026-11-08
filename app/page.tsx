import Link from "next/link";

export default function Home() {
  return (
    <h1>
      Welcome to Next.js!
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <Link href="/blog">Go to Blog</Link>
        <Link href="/about">Go to About</Link>
      </div>
    </h1>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <h1>
      Welcome to Next.js!
      <div className="flex min-h-screen justify-center p-12 gap-6">
        <Link href="/blog">Go to Blog</Link>
        <Link href="/about">Go to About</Link>
        <Link href="/articles/breaking-news-123?lang=en" prefetch={false}>
          Go to Articles English
        </Link>
        <Link href="/articles/breaking-news-123?lang=fr" prefetch={false}>
          Go to Articles French
        </Link>
      </div>
    </h1>
  );
}

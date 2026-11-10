"use client";

import Link from "next/link";
import { use } from "react";

export default function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "fr" | "es" }>;
}) {
  const { articleId } = use(params);
  const { lang } = use(searchParams);
  return (
    <>
      <h1 className="text-2xl font-bold">News Article {articleId}</h1>
      <p className="text-lg text-gray-700">Reading in language: {lang}</p>

      <div className="flex space-x-4">
        <Link href={`/articles/${articleId}?lang=en`}>
          Go to Articles English
        </Link>
        <Link href={`/articles/${articleId}?lang=fr`}>
          Go to Articles French
        </Link>
        <Link href={`/articles/${articleId}?lang=es`}>
          Go to Articles Spanish
        </Link>
      </div>
    </>
  );
}

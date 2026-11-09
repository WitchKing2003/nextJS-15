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
    <div className="">
      <h1>News Article {articleId}</h1>
      <p>Reading in language: {lang}</p>

      <div className="">
        <Link href={`/articles/${articleId}?lang=en`} prefetch={false}>
          Go to Articles English
        </Link>
        <Link href={`/articles/${articleId}?lang=fr`} prefetch={false}>
          Go to Articles French
        </Link>
        <Link href={`/articles/${articleId}?lang=es`} prefetch={false}>
          Go to Articles Spanish
        </Link>
      </div>
    </div>
  );
}

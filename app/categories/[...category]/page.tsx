"use client";

import { use } from "react";

export default function CategoryDetail({
  params,
}: {
  params: Promise<{ category: string[] }>;
}) {
  const { category } = use(params);

  return (
    <div className="p-24">
      <h1 className="text-2xl font-bold">Category: {category[0]}</h1>
    </div>
  );
}

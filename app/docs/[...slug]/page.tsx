"use client";

import { use } from "react";

export default function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = use(params);

  if (slug.length === 1) {
    return <div className="">{slug[0]}</div>;
  } else if (slug.length === 2) {
    return (
      <div className="">
        {slug[0]} / {slug[1]}
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold">Docs</h1>
    </div>
  );
}

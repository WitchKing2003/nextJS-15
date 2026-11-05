"use client";

import { use } from "react";

export default function ReviewDetail({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = use(params);
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold">
        Review Detail {reviewId} with Product ID {productId}
      </h1>
    </div>
  );
}

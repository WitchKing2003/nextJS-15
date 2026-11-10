import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "This is the blog page",
};

export default async function Blog() {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("intentional delay");
    }, 2000),
  );
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      Blog
    </div>
  );
}

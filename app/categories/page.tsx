import Link from "next/link";

export default function Categories() {
  return (
    <div className="flex min-h-screen items-center justify-center gap-4">
      <Link href="/categories/phone">Phone</Link>
      <Link href="/categories/laptop">Laptop</Link>
      <Link href="/categories/ipad">iPad</Link>
    </div>
  );
}

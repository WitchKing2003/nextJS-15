"use client";
import { useRouter } from "next/navigation";
export default function OrderProductPage() {
  const router = useRouter();
  const handleOrder = () => {
    // Handle order logic here
    console.log("Order placed!");
    router.push("/"); // Redirect to confirmation page
  };
  return (
    <div>
      <h1>Order Product Page</h1>
      <p>This is the order product page.</p>
      <button onClick={handleOrder} className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
        Place Order
      </button>
    </div>
  );
}

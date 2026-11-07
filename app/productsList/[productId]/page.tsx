import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Product Detail ${id}`);
    }, 1000);
  });

  return {
    title: `Product Detail ${title}`,
  };
};

export default async function ProductDetail({ params }: Props) {
  const productId = (await params).productId;
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold">Product Detail {productId}</h1>
    </div>
  );
}

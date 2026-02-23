import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  console.log(product);
  const imageUrl = product?.images?.length
    ? product.images.join("/")
    : "https://placehold.co/600x400/png";
  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      <Card className="relative rounded-2xl border border-[#E7E7E3] p-4">
        <span className="absolute left-2 top-2 z-10 flex items-start justify-start w-[58px] h-[38px] bg-[#4A69E2] rounded-[24px_0_24px_0] px-4 py-3 gap-[10px]">
          <span className="text-[12px] font-semibold leading-[14px] text-white">
            New
          </span>
        </span>

        <div className="relative h-32 md:h-40 w-full">
          <Image
            src={imageUrl}
            alt={product.title}
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      </Card>
      <div>
        <p className="mt-3 text-xs md:text-sm font-semibold text-dark">
          {product.title}
        </p>

        <Link href={`/products/${product?.id}`}>
          <Button className="mt-3 w-full bg-dark">
            VIEW PRODUCT —
            <span className="text-[#FFA52F] ml-1">${product.price}</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}

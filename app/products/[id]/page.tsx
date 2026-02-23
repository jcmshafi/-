import { Button } from "@/components/ui/button";
import { getProduct } from "@/services/product.service";
import Image from "next/image";

type Props = {
  params: { id: string };
};

export default async function ProductDetailsPage({ params }: Props) {
  const { id } = await params;
  const product = await getProduct(id);
    // console.log(product)
  const images =
    product?.images?.length > 0
      ? product.images
      : ["https://placehold.co/600x400/png"];

  return (
    <section className="grid lg:grid-cols-3 max-w-7xl py-8 grid-cols-1 gap-10 lg:gap-16">
      {/* LEFT — GALLERY */}
      <div className="col-span-2 flex flex-wrap gap-6">
        {images.map((img: string, i: number) => (
          <div
            key={i}
            className="relative w-107.25 h-127.5 rounded-[48px_0_0_0] bg-[#E5E5E5] overflow-hidden"
          >
            <Image
              src={img}
              alt={`${product.title}-${i}`}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        ))}
      </div>

      {/* RIGHT — DETAILS */}
      <div className="col-span-1 flex flex-col gap-6">
        <div>
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            {product.category?.name}
          </p>

          <h1 className="text-3xl sm:text-4xl font-black text-[#1D1D1B] uppercase">
            {product.title}
          </h1>

          <p className="text-2xl font-bold text-[#4A90D9] mt-2">
            ${product.price}
          </p>
        </div>

        <div className="h-px bg-neutral-200" />

        <div className="flex flex-col gap-3">
          <Button className="flex-1 h-12 bg-[#1D1D1B] text-white rounded-xl">
            Add to Cart
          </Button>
          <Button className="flex-1 h-12 bg-primary text-white rounded-xl">
            Buy Now
          </Button>
        </div>

        <div className="h-px bg-neutral-200" />

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest mb-2">
            About Product
          </h3>

          <p className="text-sm text-neutral-500 leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>
    </section>
  );
}

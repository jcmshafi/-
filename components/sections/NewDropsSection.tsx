import ProductCard from "@/components/product/ProductCard";
import ProductCardSkeleton from "@/components/product/ProductCardSkeleton";
import { getProducts } from "@/services/product.service";
import { Suspense } from "react";
import { Button } from "../ui/button";

async function ProductsGrid() {
  const products = await getProducts();

  // If API returns empty array → show empty UI instead of crashing
  if (!products?.length) {
    return (
      <p className="mt-6 text-sm text-neutral-500">
        No products available right now.
      </p>
    );
  }

  return (
    <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
      {products.slice(0, 4).map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

function LoadingGrid() {
  return (
    <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}


export default function NewDropsSection() {
  return (
    <section className="mt-6 lg:mt-22.5 mb-4 lg:mb-32">
      {/* HEADER */}
      <div className="flex items-center lg:items-end justify-between">
        <h2 className="uppercase font-semibold text-[24px] leading-normal text-dark lg:text-[74px] lg:leading-[0.95] lg:max-w-147.25">
          DON’T MISS OUT <br /> NEW DROPS
        </h2>

        <Button className="px-4 lg:px-8 py-2 bg-[#4A69E2] text-white text-sm font-medium uppercase rounded-2xl">
          SHOP NOW
        </Button>
      </div>

      {/* STREAMING PRODUCTS */}
      <Suspense fallback={<LoadingGrid />}>
        <ProductsGrid />
      </Suspense>
    </section>
  );
}
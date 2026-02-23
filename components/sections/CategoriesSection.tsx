import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getCategories } from "@/services/product.service";
import Image from "next/image";

export default async function CategoriesSection() {
  const categories = await getCategories();

  if (!categories?.length) {
    return (
      <section className="bg-black text-white px-8 py-10 rounded-lg">
        <h2 className="text-2xl lg:text-[74px] font-semibold">CATEGORIES</h2>
        <p className="mt-4 text-gray-300">No categories available.</p>
      </section>
    );
  }

  return (
    <section className="bg-black text-white px-8 py-10 rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl lg:text-[74px] font-semibold">CATEGORIES</h2>
        <div className="flex gap-2">
          <Button className="bg-gray-200 text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="11"
              viewBox="0 0 6 11"
              fill="none"
            >
              <path
                d="M5.25 9.75L0.75 5.25L5.25 0.75"
                stroke="#232321"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <Button className="bg-gray-200 text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M6 3.5L10.5 8L6 12.5"
                stroke="#232321"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>

      <ScrollArea className="overflow-x-auto">
        <div className="flex gap-x-6 flex-nowrap">
          {categories.slice(0, 2).map((cat) => (
            <div
              key={cat.id}
              className="relative w-64 flex-shrink-0 bg-white rounded-xl text-black p-4 hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={cat.image || "/images/placeholder.png"}
                  alt="categories"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold">{cat.name}</h3>
              <Button
                className="bg-dark absolute bottom-4 right-4 p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M10.1668 9.10565H22.8947V21.8336M22.0108 9.98954L9.10615 22.8942"
                    stroke="#E7E7E3"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Button>
            </div>
          ))}
        </div>
      </ScrollArea>
    </section>
  );
}

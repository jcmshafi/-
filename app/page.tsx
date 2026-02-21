import { getCategories, getProduct, getProducts } from "@/services/product.service";

export default async function Home() {
  const allProducts = await getProducts();
  const product = await getProduct("22")
  const allCategories = await getCategories()
  // console.log(allCategories)
  console.log(product);
  // console.log(allProducts);
  return <div></div>;
}

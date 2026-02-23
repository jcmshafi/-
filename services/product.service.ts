import { api } from "./api";
import { Product, Category } from "@/types/product";

export const getProducts = async (): Promise<Product[]> => {
  const { data } = await api.get("/products", {
    next: { revalidate: 60 },
  });

  return data;
};

export const getProduct = async (id: string): Promise<Product> => {
  const { data } = await api.get(`/products/${id}`);
  return data;
};

export const getCategories = async (): Promise<Category[]> => {
  const { data } = await api.get("/categories");
  return data;
};
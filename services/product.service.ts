import { api } from "./api";
import { Product, Category } from "@/types/product";

export const getProducts = async (): Promise<Product[]> => {
  const { data } = await api.get("/products");

  return data;
};

export const getProduct = async (id: string): Promise<Product> => {
  try {
    const { data } = await api.get(`/products/${id}`);
    return data;
  } catch (error) {
    throw new Error("Failed to fetch product");
  }
};

export const getCategories = async (): Promise<Category[]> => {
  const { data } = await api.get("/categories");
  return data;
};
import { useUnit } from "effector-react";
import { $products, fetchProductsEvent } from "../../entities/Products";

export const useProducts = () => {
  const [products, fetch] = useUnit([$products, fetchProductsEvent]);

  const getById = (productId: number) => {
    const product = products.find((p) => p.id === productId);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  };

  return {
    products,
    fetch,
    getById,
  };
};

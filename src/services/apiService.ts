import { initialProducts } from "../assets/fakedata";
import { Product } from "../shared/types";

export const fetchProducts = async () => {
  return new Promise<Product[]>((resolve) => {
    setTimeout(() => {
      resolve(initialProducts);
    }, 600);
  });
};

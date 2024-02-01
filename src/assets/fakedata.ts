import { Product } from "../shared/types";

const createProductsArray = (n: number) =>
  Array.from({ length: n }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: Math.floor(Math.random() * 1000) + 100,
    description: `This is product ${index + 1} description`,
    image: {
      src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      alt: `Product ${index + 1}`,
    },
    category: `Category ${(index % 3) + 1}`,
    views: Math.floor(Math.random() * 10000),
  }));

export const initialProducts: Product[] = createProductsArray(25);

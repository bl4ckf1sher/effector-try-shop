type ImageType = {
  src: string;
  alt: string;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: ImageType;
  category: string;
  views: number;
};

export type ProductID = number;

export type CartProducts = Record<ProductID, number>;

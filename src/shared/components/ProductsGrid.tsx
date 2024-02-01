import { Product } from "../types/index.ts";
import ProductCard from "./ProductCard.tsx";

type ProductsGridProps = {
  products: Product[];
};

const ProductsGrid: React.FC<ProductsGridProps> = ({ products }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "3rem",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductsGrid;

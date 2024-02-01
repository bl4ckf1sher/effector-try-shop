import { useEffect } from "react";
import ProductsGrid from "../../shared/components/ProductsGrid.tsx";
import { useProducts } from "../../controllers/Products/index.ts";

const ProductsPage: React.FC = () => {
  const { products, fetch } = useProducts();

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <>
      <h1 style={{ paddingBottom: 30 }}>Товары</h1>
      {products ? (
        <ProductsGrid products={products} />
      ) : (
        <p>Products not found</p>
      )}
    </>
  );
};

export default ProductsPage;

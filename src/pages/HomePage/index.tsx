import { useEffect } from "react";
import ProductsGrid from "../../shared/components/ProductsGrid";
import { useProducts } from "../../controllers/Products";

const HomePage: React.FC = () => {
  const { products, fetch } = useProducts();

  useEffect(() => {
    fetch();
  }, [fetch]);

  // top 3 products based on number of views
  const topProducts = [...products]
    .sort((a, b) => b.views - a.views)
    .slice(0, 3);

  return (
    <>
      <h1 style={{ paddingBottom: 30 }}>Главная</h1>
      <h2 style={{ paddingBottom: 30, color: "#1f83e1" }}>
        Добро пожаловать в Micro Shop
      </h2>
      {topProducts ? (
        <>
          <h3 style={{ paddingBottom: 30 }}>Трендовые товары</h3>
          <ProductsGrid products={topProducts} />
        </>
      ) : (
        <p>Трендовых товаров нема</p>
      )}
    </>
  );
};

export default HomePage;

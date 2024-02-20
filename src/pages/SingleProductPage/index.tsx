import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Button } from "antd";
import { Product } from "../../shared/types";
import { useCart } from "../../controllers/Cart";
import { useProducts } from "../../controllers/Products";
import QuantityChanger from "../../shared/components/QuantityChanger";

export const SingleProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const urlProductId = useMemo(() => Number(productId), [productId]);
  const { products } = useProducts();
  const { isInCart, addToCart, removeFromCart } = useCart();

  const product = useMemo(
    () => products.find((p: Product) => p.id === urlProductId),
    [products, urlProductId]
  );

  const onAddToCartClick = () => {
    if (product) {
      addToCart(product.id);
    }
  };

  const onRemoveFromCartClick = () => {
    if (product) {
      removeFromCart(product.id);
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <h1 style={{ paddingBottom: 30 }}>{product.name} Page</h1>
      {!isInCart(product!.id) ? (
        <Button onClick={onAddToCartClick}>Добавить в корзину</Button>
      ) : (
        <>
          <QuantityChanger productId={product!.id} />
          <Button onClick={onRemoveFromCartClick}>Удалить из корзины</Button>
        </>
      )}
    </>
  );
};

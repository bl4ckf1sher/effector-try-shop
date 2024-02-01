import { useMemo } from "react";
import { Button } from "antd";
import QuantityChanger from "../../shared/components/QuantityChanger";
import "./styles.css";
import { useCart } from "../../controllers/Cart";
import { useProducts } from "../../controllers/Products";

const CartPage: React.FC = () => {
  const { getById } = useProducts();
  const { getCartItems, removeFromCart, countTotalCartPrice } = useCart();

  const cart = getCartItems();

  const cartProducts = getCartItems();

  const onRemoveFromCartClick = (productId: number) => () => {
    if (cart) {
      removeFromCart(productId);
    } else {
      throw new Error("Product or context not found");
    }
  };

  const totalOrderPrice = countTotalCartPrice();

  const productIds = useMemo(
    () => Object.keys(cartProducts).map(Number),
    [cartProducts]
  );

  return (
    <>
      <h1 style={{ paddingBottom: 30 }}>Корзина</h1>
      {!productIds.length ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          <ul>
            {productIds.map((productId) => (
              <li key={productId}>
                {getById(productId).name} - {getById(productId).price}
                <Button
                  style={{ margin: "0 10px" }}
                  onClick={onRemoveFromCartClick(productId)}
                >
                  Удалить
                </Button>
                <QuantityChanger productId={productId} />
              </li>
            ))}
          </ul>
          <h3 style={{ margin: "20px 0" }}>
            Стоимость заказа: {totalOrderPrice}
          </h3>
        </>
      )}
    </>
  );
};

export default CartPage;

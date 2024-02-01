import React, { useCallback, useMemo } from "react";
import { Button } from "antd";
import { useCart } from "../../controllers/Cart";

type QuantityChangerProps = {
  productId: number;
};

const QuantityChanger: React.FC<QuantityChangerProps> = React.memo(
  ({ productId }) => {
    const { getCartItems, changeCartItemQuantity } = useCart();

    const onDecreaseQuantityClick = useCallback(
      (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        try {
          changeCartItemQuantity(productId, -1);
        } catch (error) {
          throw new Error(`Product or context not found. ${error}`);
        }
      },
      [productId, changeCartItemQuantity]
    );

    const onIncreaseQuantityClick = useCallback(
      (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        try {
          changeCartItemQuantity(productId, 1);
        } catch (error) {
          console.error("Product or context not found", error);
        }
      },
      [productId, changeCartItemQuantity]
    );

    const productQuantity = useMemo(() => {
      const productQuantity = getCartItems()[productId];
      return productQuantity;
    }, [getCartItems, productId]);

    return (
      <>
        <Button className="quantityButton" onClick={onDecreaseQuantityClick}>
          -
        </Button>
        <span style={{ color: "black", margin: "0 10px" }}>
          {productQuantity}
        </span>
        <Button className="quantityButton" onClick={onIncreaseQuantityClick}>
          +
        </Button>
      </>
    );
  }
);

export default QuantityChanger;

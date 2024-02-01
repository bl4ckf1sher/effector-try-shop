import React, { MouseEvent, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { DeleteOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Product } from "../types";
import QuantityChanger from "./QuantityChanger";
import { useCart } from "../../controllers/Cart";

const { Meta } = Card;

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = React.memo(({ product }) => {
  const navigate = useNavigate();

  const { isInCart, addToCart, removeFromCart } = useCart();

  const handleProductCardClick = useCallback((): void => {
    navigate(`/products/${product.id}`);
  }, [navigate, product.id]);

  const onAddToCartClick = useCallback(
    (event: MouseEvent<HTMLElement>): void => {
      event.stopPropagation();
      try {
        addToCart(product.id);
      } catch (error) {
        console.error("Failed to add product to cart:", error);
      }
    },
    [addToCart, product]
  );

  const onRemoveFromCartClick = useCallback(
    (event: MouseEvent<HTMLElement>): void => {
      event.stopPropagation();
      try {
        removeFromCart(product.id);
      } catch (error) {
        console.error("Failed to remove product from cart:", error);
      }
    },
    [removeFromCart, product.id]
  );

  const cartActions = useMemo(() => {
    return isInCart(product.id)
      ? [
          <DeleteOutlined
            key="delete"
            onClick={onRemoveFromCartClick}
            style={{ fontSize: 24 }}
          />,
          <QuantityChanger key="quantity" productId={product.id} />,
        ]
      : [
          <ShoppingCartOutlined
            key="add"
            onClick={onAddToCartClick}
            style={{ fontSize: 24 }}
          />,
        ];
  }, [isInCart, product.id, onAddToCartClick, onRemoveFromCartClick]);

  return (
    <Card
      onClick={handleProductCardClick}
      style={{ width: 300 }}
      cover={<img alt={product.image.alt} src={product.image.src} />}
      hoverable
      actions={cartActions}
    >
      <Meta
        title={`${product.name}
        Price: ${product.price}`}
        description={product.description}
      />
    </Card>
  );
});

export default ProductCard;

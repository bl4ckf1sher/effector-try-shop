import { useUnit } from "effector-react";
import {
  $cart,
  addToCartEvent,
  removeFromCartEvent,
  changeCartQuantityEvent,
} from "../../entities/Cart";
import { ProductID } from "../../shared/types";
import { $products } from "../../entities/Products";

export const useCart = () => {
  const [cart, add, remove, changeQuantity] = useUnit([
    $cart,
    addToCartEvent,
    removeFromCartEvent,
    changeCartQuantityEvent,
  ]);

  const products = useUnit($products);

  const isInCart = (productId: ProductID) => {
    return Boolean(cart[productId]);
  };

  const addToCart = (productId: ProductID) => {
    if (isInCart(productId)) {
      throw new Error("Product already in cart");
    }

    add({
      ...cart,
      [productId]: 1,
    });
  };

  const removeFromCart = (productId: number) => {
    if (!isInCart(productId)) {
      throw new Error("Product is not in cart. Removal");
    }
    remove(productId);
  };

  const changeCartItemQuantity = (productId: number, quantityDelta: number) => {
    if (!isInCart(productId)) {
      throw new Error("Product is not in cart. Increase");
    }
    const currentQuantity = cart[productId]! + quantityDelta;

    if (currentQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    changeQuantity({
      productId: productId,
      quantityDelta: currentQuantity,
    });
  };

  const countTotalCartPrice = () => {
    return Object.keys(cart).reduce(
      (accumulator, productId) =>
        accumulator +
        cart[Number(productId)]! *
          products.find((p) => p.id === Number(productId))!.price,
      0
    );
  };

  const getCartItems = () => {
    return { ...cart };
  };

  return {
    isInCart,
    addToCart,
    removeFromCart,
    changeCartItemQuantity,
    countTotalCartPrice,
    getCartItems,
  };
};

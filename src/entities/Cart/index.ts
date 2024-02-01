import { createEvent, createStore } from "effector";
import { CartStore } from "./types";

export const $cart = createStore<CartStore>({});

export const addToCartEvent = createEvent<CartStore>();
export const removeFromCartEvent = createEvent<number>();
export const changeCartQuantityEvent = createEvent<{
  productId: number;
  quantityDelta: number;
}>();

$cart
  .on(addToCartEvent, (state, payload) => {
    return {
      ...state,
      ...payload,
    };
  })
  .on(removeFromCartEvent, (state, payload) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [payload]: _, ...rest } = state;
    return rest;
  })
  .on(changeCartQuantityEvent, (state, payload) => {
    return {
      ...state,
      [payload.productId]: payload.quantityDelta,
    };
  });

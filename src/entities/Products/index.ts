import { createEffect, createEvent, createStore, sample } from "effector";
import { fetchProducts } from "../../services/apiService";
import { ProductsStore } from "./types";

export const $products = createStore<ProductsStore>([]);

export const fetchProductsEvent = createEvent();
const fetchProductsFx = createEffect(async () => {
  const data = await fetchProducts();

  console.log(data);

  return data;
});

$products.on(fetchProductsFx.doneData, (state, payload) => {
  return [...payload];
});

sample({
  clock: fetchProductsEvent,
  target: fetchProductsFx,
});

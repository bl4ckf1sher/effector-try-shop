import { ProductID } from "../../shared/types";

export type CartStore = {
  [key: ProductID]: number;
};

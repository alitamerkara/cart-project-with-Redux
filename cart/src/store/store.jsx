import { configureStore } from "@reduxjs/toolkit";
import { ProductReducer } from "./slices/ProductSlice";
import { ItemReducer } from "./slices/ItemSlice";

export const store = configureStore({
  reducer: {
    product: ProductReducer,
    item: ItemReducer,
  },
});

import { createSlice } from "@reduxjs/toolkit";
import { addingProduct } from "./ProductSlice";

const ItemSlice = createSlice({
  name: "item",
  initialState: {
    productName: "",
    quantity: "",
    price: "",
  },

  reducers: {
    changeName(state, action) {
      state.productName = action.payload;
    },
    changeQuantity(state, action) {
      state.quantity = action.payload;
    },
    changePrice(state, action) {
      state.price = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addingProduct, (state) => {
      state.productName = "";
      state.quantity = 0;
      state.price = 0;
    });
  },
});

export const ItemReducer = ItemSlice.reducer;
export const { changeName, changeQuantity, changePrice } = ItemSlice.actions;

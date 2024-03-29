import { createSlice, nanoid } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    total: 0,
    searchItem: "",
  },
  reducers: {
    addingProduct(state, action) {
      if (
        action.payload.productName.length &&
        action.payload.quantity &&
        action.payload.price > 0
      )
        state.products.push({
          name: action.payload.productName,
          quantity: action.payload.quantity,
          price: action.payload.price,
          id: nanoid(),
        });
    },
    removeItem(state, action) {
      state.products = state.products.filter(
        (item) => action.payload !== item.id
      );
    },
    changeSearch(state, action) {
      state.searchItem = action.payload;
      state.products = state.products.filter((item) =>
        item.name.toLowerCase().includes(state.searchItem.toLowerCase())
      );
    },
    calculateTotal(state) {
      let total = 0;
      state.products.forEach((item) => {
        total += item.price;
      });
      state.total = total;
    },
  },
});

export const ProductReducer = ProductSlice.reducer;
export const { addingProduct, removeItem, calculateTotal, changeSearch } =
  ProductSlice.actions;

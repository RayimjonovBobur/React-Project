import { createSlice } from "@reduxjs/toolkit";
import { products } from "./product_reducer";

const initialState = {
  values: {},
};

export const values = createSlice({
  name: "values",
  initialState,
  reducers: {
    editProduct: (state, action) => {
      state.values = action.payload;
    },
  },
});

export const { editProduct } = values.actions;

export default values.reducer;

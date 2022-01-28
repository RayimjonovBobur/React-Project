import { configureStore } from "@reduxjs/toolkit";
import categoryes from "./redux/cateory_reducer";
import  products  from "./redux/product_reducer";

export const store = configureStore({
  reducer: {
    categoryes: categoryes,
    products: products
  },
});

import { configureStore } from "@reduxjs/toolkit";
import categoryes from "./redux/cateory_reducer";
import  values  from "./redux/ItemData";
import products from "./redux/product_reducer";

export const store = configureStore({
  reducer: {
    categoryes: categoryes,
    products: products,
    values: values,
  },
});

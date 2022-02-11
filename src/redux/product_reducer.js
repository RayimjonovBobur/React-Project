import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: "1",
      name: "Iphone 13 Pro Max",
      price: "90050",
      category_id: "naxnax",
      img: "https://res.cloudinary.com/imsoft/image/upload/v1642671952/OnlineShop/iphone13_aiczpf.jpg",
    },
    {
      id: "2",
      name: "Iphone 12 Pro",
      price: "70050",
      category_id: "sdsasa",
      img: "https://res.cloudinary.com/imsoft/image/upload/v1642671733/OnlineShop/vivo_ite7i3.jpg",
    },
    {
      id: "3",
      name: "Vivo 21S",
      price: "50050",
      category_id: "wasasas",
      img: "https://res.cloudinary.com/imsoft/image/upload/v1642595424/OnlineShop/galaxyS_lee7se.png",
    },
  ],
};

export const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    add_product: (state, action) => {
      state.products = action.payload;
      return state;
    },
    delet_product: (state, { payload }) => {
      state.products = state.products.filter((el) => el.id !== payload.id);
    },
    edit_products: (state, { payload }) => {
      state.products = payload;
    },
  },
});

export const { add_product, delet_product, edit_products } = products.actions;

export default products.reducer;

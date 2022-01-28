import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryes: [
    {
      name: "Phone",
      id: "1",
      price: 2000,
    },
    {
      name: "Fruits",
      id: "2",
      price: 2000,
    },
    {
      name: "Dressis",
      id: "3",
      price: 2000,
    },
  ],
};

export const categoryes = createSlice({
  name: "categoryes",
  initialState,
  reducers: {
    add_category: (state, action) => {
      state.categoryes.push(action.payload);
    },
    delet_category: (state, { payload }) => {
      state.categoryes = state.categoryes.filter((el) => el.id !== payload.id);
    },
  },
});

export const { add_category, delet_category } = categoryes.actions;

export default categoryes.reducer;

import { createSlice } from "@reduxjs/toolkit";

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

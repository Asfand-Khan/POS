import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

// creating async thunk for getting products from API
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    return data;
  }
);

export const filterProductsByCategory = createAsyncThunk(
  "products/filterProductsByCategory",
  async (category) => {
    if (category === "all") {
      const { data } = await axios.get(`https://fakestoreapi.com/products/`);
      return data;
    } else {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      return data;
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
    },
    [filterProductsByCategory.pending]: (state) => {
      state.isLoading = true;
    },
    [filterProductsByCategory.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    },
    [filterProductsByCategory.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
    },
  },
});

// export const {filterProductsByCategoryOne} = productsSlice.actions;
export default productsSlice.reducer;

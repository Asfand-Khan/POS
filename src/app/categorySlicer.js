import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  };

export const productCategories = createAsyncThunk("productCategories",async()=>{
    const {data} = await axios.get("https://fakestoreapi.com/products/categories");
    return data;
})

const categorySlicer = createSlice({
    name:"categories",
    initialState,
    reducers:{},
    extraReducers:{
        [productCategories.pending]:(state)=>{
            state.isLoading = true;
        },
        [productCategories.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
            state.isError = false;
        },
        [productCategories.rejected]:(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.data = [];
            state.message = action.payload;
            state.isError = true;
        }
    }
})

export default categorySlicer.reducer;
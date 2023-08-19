import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productsSlice";
import cartReducer from "./cartSlice";
import categoryReducer from "./categorySlicer";
import onHoldReducer from "./onHoldSlicer";

export const store = configureStore({
    reducer:{
        productReducer,
        cartReducer,
        categoryReducer,
        onHoldReducer
    },
})
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        add : (state,action) =>{
            state.push(action.payload);
        },
        remove : (state,action) =>{
            return state.filter(item => item.id !== action.payload);
        },
        incQty: (state,action) => {
            const updatedProduct = state.map(product => {
                if(product.id === action.payload){
                    return { ...product, quantity: product.quantity + 1 }
                }

                return product;
            });

            return updatedProduct;
        },
        decQty: (state,action) => {
            const updatedProduct = state.map(product => {
                if(product.id === action.payload){
                    if(product.quantity !== 1){
                        return { ...product, quantity: product.quantity - 1 }
                    }
                }

                return product;
            });

            return updatedProduct;
        }
    }
})

export const {add,remove,incQty,decQty} = cartSlice.actions;
export default cartSlice.reducer;
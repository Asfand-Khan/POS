import {createSlice} from "@reduxjs/toolkit";

const onHoldSlice = createSlice({
    name:"onHold",
    initialState:[],
    reducers:{
        addToHold:(state,action)=>{
            state.push(action.payload);
        },
        removeFromHold: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
        resetOnHold:(state)=>{
            state.length = 0;
        }
    }
})

export const {addToHold,removeFromHold,resetOnHold} = onHoldSlice.actions;
export default onHoldSlice.reducer;
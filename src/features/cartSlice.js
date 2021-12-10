import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
    name:'cart',
    initialState:{
        value:false
    },

     reducers:{
        active: (state) =>{
            state.value = !state.value
        },
    },
})

export const { active } = cart.actions

export default cart.reducer;
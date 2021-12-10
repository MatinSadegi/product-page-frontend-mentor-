import { createSlice } from "@reduxjs/toolkit";


export const add = createSlice({
    name:"add",
    initialState:{
        value: false
    },

    reducers:{
        active: (state) =>{
            state.value = true
        },
        deactive: (state) =>{
            state.value = false;
        },
    },
})

export const { active, deactive } = add.actions

export default add.reducer;
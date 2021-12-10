import { createSlice } from "@reduxjs/toolkit";

export const zoom = createSlice({
    name:'zoom',
    initialState:{
        value:false,
        
    },

     reducers:{
        zoomIn: (state) =>{
            if(window.innerWidth > 550){
                state.value = true
            }
        },
        zoomOut: (state) =>{
            state.value = false
        },
    },
})

export const { zoomIn, zoomOut } = zoom.actions

export default zoom.reducer;
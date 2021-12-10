import { createSlice } from "@reduxjs/toolkit";

import {orginalImageSlider } from '../Data/DataSlider'; 

export const btnSlider = createSlice({ 
    name:"btn-slider",
    initialState:{
        currentImage : 0
    },

    reducers:{
       nextSlide:(state) =>{
        state.currentImage +=1;
        if(state.currentImage === (orginalImageSlider.length )){
            state.currentImage = 0
        }
       },
       previousSlide:(state) =>{
           if(state.currentImage === 0){
               state.currentImage = (orginalImageSlider.length-1)
            }
            else{
                state.currentImage-=1
            }
       },
       setCurrentImage: (state, action) =>{
        state.currentImage = action.payload
       },
    },
    
})

export const { nextSlide, previousSlide, setCurrentImage } = btnSlider.actions

export default btnSlider.reducer;
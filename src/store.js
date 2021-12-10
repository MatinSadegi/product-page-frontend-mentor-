import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counterSlice';
import cart from './features/cartSlice';
import add from './features/addSlice';
import zoom from './features/zommSlice';
import btnSlider from './features/btnSliderSlice'

export default configureStore({
    reducer:{
        counter:counterReducer,
        cart:cart,
        add:add,
        zoom:zoom,
        btnSlider:btnSlider
    }
})
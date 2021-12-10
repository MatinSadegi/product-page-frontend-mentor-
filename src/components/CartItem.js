import React from 'react';
import { useSelector,useDispatch } from 'react-redux';

//Actions
import {deactive} from '../features/addSlice';
import {reset} from '../features/counterSlice';

//Image
import image from '../images/image-product-1-thumbnail.jpg';

//Icon
import trash from '../images/icon-delete.svg';

function CartItem() {

    const value = useSelector(state => state.counter.value);
    
    const dispatch = useDispatch();

    return (
        <div className="cart-item" >
            <img style={{width:"55px", borderRadius:"5px"}} src={image} alt="item-img" />
            <div className="info">
                <p>Fall Limited Edition Sneakers</p>
                <p>$125.00 x <span>{value}</span> <span className="total-price">${(125.00 * value).toFixed(2)}</span></p>
            </div>
            <img 
            onClick={() => {dispatch(deactive()); 
                            dispatch(reset())}} 
            src={trash} 
            alt="trash-icon"/>
        </div>
    )
}

export default CartItem

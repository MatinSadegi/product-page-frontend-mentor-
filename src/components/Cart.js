import React from 'react';
import {useSelector} from 'react-redux';
import CartItem from './CartItem';

function Cart() {

    const cart = useSelector ( state => state.cart.value);
    const add = useSelector (state => state.add.value);
    return (
        <div className="cart" style={{display: cart ? "block" : "none"}}>
            <p>Cart</p>
            <div>
                {add ? <CartItem /> : <p>Your cart is empty.</p> }
                <button style={{display: add ===false ? "none" : "block"}}>Checkout</button>
            </div>
        </div>
    )
}

export default Cart

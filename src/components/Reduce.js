import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement} from '../features/counterSlice';
import {active} from '../features/addSlice';
import cart from '../images/icon-cart.svg';


function Reduce() {

    const count = useSelector (state => state.counter.value);
    const dispatch = useDispatch()

    return (
        <div className="reduce">
            <div className="reduce__buttons">
                <button onClick={() => dispatch(decrement())}></button>
                <span>{count}</span>
                <button onClick={() => dispatch(increment())}></button>
            </div>
            <button onClick={() => dispatch(active())}>
                <img src={cart} alt="cart-icon" />
                Add to cart
            </button>
        </div>
    )
}

export default Reduce

import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';

//Actions
import {active} from '../features/cartSlice';

//Images
import logo from '../images/logo.svg';
import avatar from '../images/image-avatar.png';
import cart from '../images/icon-cart.svg';
import menu from '../images/icon-menu.svg';
import close from '../images/icon-close.svg';


function Nav() {

    const count = useSelector (state => state.counter.value);
    const add = useSelector (state => state.add.value);

    const [menuIcon, setMenuIcon] = useState(true);

    const dispatch = useDispatch()

   
    const menuHandler = (e) =>{
        setMenuIcon(prevMenuIcon => !prevMenuIcon)
    }

    return (
        <header>
            <img onClick={menuHandler} className="menu-icon" src={menu} alt="menu-icon"/>
            <img src={logo} alt="logo"/>
            <nav style={{transform:!menuIcon && "translateX(0)", boxShadow:!menuIcon && "0 0 0 400px rgba(0, 0, 0, 0.6)"}}>
                <img onClick={menuHandler} className="close-icon" src={close} alt="close-icon"/>
                <a href="#">Collections</a>
                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav> 
            <div className="profiles">
                <div onClick={() => dispatch(active())} className="cart-div">
                    <p style={{display: add === false ? "none" : "flex"}}>{count}</p>
                    <img src={cart} className="cart-icon" alt="cart-icon"/>
                </div>
                <img src={avatar} className="avatar" alt="avatar-icon"/>
            </div>
        </header>
    )
}

export default Nav;

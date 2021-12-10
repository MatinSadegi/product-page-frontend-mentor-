import React from 'react'
import Products from './Products';
import { useSelector,useDispatch } from 'react-redux';
import { zoomOut} from '../features/zommSlice';

//Icons
import close from '../images/icon-close.svg'
import BtnSlider from './BtnSlider';

function ZoomProducts() {
    const zoom = useSelector ( state => state.zoom.value);
    const dispatch = useDispatch()
    return (
        <div className="zoom-products" style={{display: zoom ? "flex" : "none"}}>
            <div className="zoom-container">
                <div className="close-icon-div">
                    <img onClick={() => dispatch(zoomOut())} src={close} alt="close-icon"  />
                </div>
                <Products />
                <BtnSlider />
            </div>
        </div>
    )
}

export default ZoomProducts

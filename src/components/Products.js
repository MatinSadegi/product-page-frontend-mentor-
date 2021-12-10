import React,{useEffect, useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { zoomIn} from '../features/zommSlice';
import { setCurrentImage } from '../features/btnSliderSlice';
import BtnSlider from './BtnSlider';

import { thumbnaillImageSlider,orginalImageSlider } from './DataSlider'; 



function Products() {

    const [ widthSize , setWidtSize] = useState({
        width : window.innerWidth
    })

    const dispatch = useDispatch();
    const currentImages = useSelector (state => (state.btnSlider.currentImage))

  
    useEffect( () =>{
        window.addEventListener("resize" , () =>{
            setWidtSize({width:window.innerWidth});
        })
    },[])

    return (
        <div className="products">
            <div className="objective-image">
                {orginalImageSlider.map((item, index) =>{
                    if(index === currentImages ){
                        return(<img onClick={() => dispatch(zoomIn()) }  src={item.img} alt={item.title} key={item.id}/>)
                    }
                })}
                {widthSize.width < 550 ? <BtnSlider /> : ""}
            </div>
            <div className="short-images">
            {thumbnaillImageSlider.map((item,index) =>{
                return(
                    <img onClick={() =>dispatch(setCurrentImage(index))} src={item.img} alt={item.title} key={item.id}/>
                )
            })}
            </div>
            
        </div>
    )
}

export default Products

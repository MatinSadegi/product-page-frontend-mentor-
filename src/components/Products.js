import React,{useEffect, useState, useRef} from 'react';
import { useDispatch,useSelector } from 'react-redux';

//Actions
import { zoomIn} from '../features/zommSlice';
import { setCurrentImage } from '../features/btnSliderSlice';

//Component
import BtnSlider from './BtnSlider';

//Gsap
import { gsap } from "gsap";

//Images
import { thumbnaillImageSlider,orginalImageSlider } from '../Data/DataSlider'; 


function Products() {

    const currentImages = useSelector (state => (state.btnSlider.currentImage));

    const [ widthSize , setWidtSize] = useState({
        width : window.innerWidth
    });

    const dispatch = useDispatch();

    const slideRef = useRef();

  
    useEffect( () =>{
        window.addEventListener("resize" , () =>{
            setWidtSize({width:window.innerWidth});
        })
    },[])

    useEffect(() => {
    gsap.fromTo(slideRef.current, {opacity: 0.2}, {opacity: 1, duration: 0.8});
  },[currentImages]);

    return (
        <div className="products">
            <div className="objective-image">
                {orginalImageSlider.map((item, index) =>{
                    if(index === currentImages ){
                        return(<img onClick={() => dispatch(zoomIn()) } ref={slideRef}  src={item.img} alt={item.title} key={item.id}/>)
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

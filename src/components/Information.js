import React from 'react'
import Reduce from './Reduce'

function Information() {
    return (
        <div className="information">
            <h5>SNEAKER COMPANY</h5>
            <h1 onClick={() => window.btoa}>Fall Limited Edition <br/> Sneakers</h1>
            <p>These low-profile sneakers are your perfect casual wear companion. 
               Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
            <div className="price">
                <p>$125.00 <span>50%</span></p>
                <del>$250.00</del>
            </div>
            <Reduce />
        </div>
    )
}

export default Information

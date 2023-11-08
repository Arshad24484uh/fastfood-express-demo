'use client';
import gif from '../../../public/upiimages/Animation - 1698410197310.gif'
import Image from 'next/image'
import '../css/ordersuccess.css';
import { useEffect } from 'react';
const OrderSuccess = ()=>{
    localStorage.removeItem("product")

    setTimeout(() => {
        
        window.location.href='/'
    }, 10000);
    return(
        <>
            <div className="order-box">
                 <Image src={gif}
                 alt='loader'
                 />
                 <h2>Order SuccessFully Placed</h2>
                 <span>OrderId </span>
                 <span className='try'>You Will redirected homepage after 10 Second</span>
            </div>
        </>
    )
}
export default OrderSuccess;
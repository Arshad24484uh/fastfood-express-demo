'use client';
import '../../css/confirmpay.css';
import netbanking from '../../../../public/upiimages/icons8-banking-100.png';
import gpay from '../../../../public/upiimages/icons8-google-pay-india-96.png';
import phonepe from '../../../../public/upiimages/icons8-phone-pe-96.png';
import paytm from '../../../../public/upiimages/icons8-paytm-96.png';
import upi from '../../../../public/upiimages/icons8-bhim-96.png';
import card from '../../../../public/upiimages/icons8-debit-card-96.png';
import Image from 'next/image';
import { useState } from 'react';
import { useEffect } from 'react';
const Confirmpayment = ({params})=>{
    const orderId = params.confirm;
   // console.log("this is user details",user);

      //let totalamount = JSON.parse(localStorage.getItem("totalamount"));
    
    const [payment,setpaymentstatus] = useState();
    const [color,setbackgroundcolor] = useState();
    const [totalamount,setTotalamount] = useState();
    useEffect(()=>{
        let totalamounts = JSON.parse(localStorage.getItem("totalamount"));
        setTotalamount(totalamounts)
    },[])
    setTimeout(() => {
        if(!payment){
            setbackgroundcolor("lightgrey")
        }else{
            setbackgroundcolor("crimson")
        }
    }, 1000);

    const orderhandle = async ()=>{
     const res = await fetch(`http://13.126.118.23:8000/updatepayment/${orderId}`,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({payment})
     });

     let data = await res.json();
     console.log(data)
     if(data.success==true){
        window.location.href=`/ordersuccess/${orderId}`;
     }else{
        alert("something went wrong")
     }
    }

    function submit(e){
        if(!payment){
            alert("please select a payment method");
            
            
        }else{
            orderhandle();
        }

    }
    return(
        
        <>
        <div className='box-wrapper'>
            <div className="orderid-box">
                <h3>OrderID: {orderId}</h3>
                <h3>Amount: ₹{totalamount}.00</h3>
            </div>

            <div className="payment-box">
            <h2>Select Payment Method</h2>
            <div onClick={()=>{setpaymentstatus("COD"); }} className='cod'>
                <input type='radio' className='radio-btn'/>
                <h3 className='h3'>Cash On Delivery</h3>
            </div>
            <div onClick={()=>{setpaymentstatus("online"); }} className="gpay">
                <Image src={gpay}
                    alt="upi"
                    className='images'
                />
                <span>Gpay</span>
            </div>
            <div onClick={()=>{setpaymentstatus("online"); }} className="phonepe">
            <Image src={phonepe}
                    alt="upi"
                    className='images'
                />
                <span>PhonePe</span>
            </div>
            <div  onClick={()=>{setpaymentstatus("online"); }} className="paytm">
            <Image src={paytm}
                    alt="upi"
                    className='images'
                />
                <span>Paytm</span>
            </div>
            <div onClick={()=>{setpaymentstatus("online"); }} className="upi">
            <Image src={upi}
                    alt="upi"
                    className='images'
                />
                <span>UPI</span>
            </div>
            <div onClick={()=>{setpaymentstatus("netbanking"); }} className="netbanking">
            <Image src={netbanking}
                    alt="upi"
                    className='images'
                />
                <span>Netbanking</span>
            </div>
            <div onClick={()=>{setpaymentstatus("debitCard"); }} className="debitcard">
            <Image src={card}
                    alt="upi"
                    className='images'
                />
                <span>Debit/Credit Card</span>
            </div>

            <button id='subin' onClick={submit} style={{backgroundColor:color}} className='pay-btn'>Place Order</button>
            </div>
            </div>
            
        </>
    )
}
export default Confirmpayment;
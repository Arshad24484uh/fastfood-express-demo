"use client";
import './loading';
import '../css/cart.css';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Tooltip from '@mui/material/Tooltip';
import { remove } from '../redux/slice';
import { removeprice } from '../redux/cartprice';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const CartPage = () => {
    const router = useRouter();
    const [item,setitem] = useState([]);
    const items = useSelector((state) => state.cart);
    useEffect(()=>{
    setitem(items)
    },[])
    
    console.warn("this is items",item)
    const total = useSelector((state) => state.cartprice);
    const [address, setaddress] = useState({
        houseno: "01",
        streat: "gk",
        area: "sk",
        landmark: "dk",
        city: "rr",
        pincode: 18
    })


    const user = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("user")) : null;
    console.log("this is user details",);
      
    async function submithandle() {
        console.log("this is a address", address);


        let res = await fetch("http://13.126.118.23:8000/orders", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ user, items, totalprice,address, })
        })
        let result = await res.json();
        console.log(result)
        let totalamount = JSON.stringify(result.response.totalAmount);
        localStorage.setItem("totalamount",totalamount);
        console.log("this is totalamount",totalamount);
        window.location.href=`/confirmorder/${result.response.orderId}`
        
    }
    const [display, setdisplay] = useState();
    const [color, setcolor] = useState();
    const [sdispay, ssetdispay] = useState();
    const [bdisplay,setbdisplay] = useState();
    const dispatch = useDispatch();

   
    console.log("this is a cartprice", total)
    console.log("this is item ",item, "this is item lenght",item.length);

    function handle(id, totalprice) {
        dispatch(remove(id));
        dispatch(removeprice(totalprice))






    }

    
        // ... (previous code)
    
        const [div, setdiv] = useState();
        let totalprice = total.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0);
    console.log("this is a sum of new price", totalprice)
    
        useEffect(() => {
            if (totalprice === 0) {
                alert("your cart is empty")
                setdiv("none")
            } else {
                setdiv("flex")
            }
        }, [totalprice]);
    

    


    const orderhandle = async () => {
        console.log("this is a Address", address)
        if (!user?._id) {
            window.location.href="/signup"
        } else {
            alert("you are loggedIn")
            setdisplay('inline-block');
            setbdisplay("none")
        var btn = document.getElementById("sbtn");
        btn.disabled = true;
        setcolor("lightgrey")
        ssetdispay("none");

        }



    }



    


    return (
        <>
            <div style={{display:bdisplay}} className="cart-wrapper">
                <div className="cart-nav">
                    <h1 className='h1'>Cart </h1>
                    <span id='cart-iconn' class="material-symbols-outlined">
                        shopping_cart_checkout
                    </span>
                    <h3 className='counter'>{item.length} Items</h3>

                </div>

                {
                    items.map((i) => {
                        return (
                            <>
                                <div style={{display:bdisplay}} className="cart-box">
                                    <div className="image-box">
                                        <Image src={i?.image} alt="cart-image" width={100} height={100}  />
                                    </div>

                                    <div className="title-box">
                                        <h5 className="cart-title">{i?.title}</h5>
                                    </div>

                                    <div className="qty-box">
                                        <span>QTY</span>
                                        <span className="span-b">{i?.quantity}</span>
                                    </div>

                                    <div className="price-box">
                                        <span>PRICE</span>
                                        <span className="span-b">₹{i?.price}</span>
                                    </div>

                                    <div className="amount-box">
                                        <span>AMOUNT</span>
                                        <span className="span-b">₹{i?.totalprice}</span>
                                    </div>

                                    <div className="remove-cart">
                                        <Tooltip title="remove">
                                            <DeleteOutlineOutlinedIcon className='delete-icon' style={{ fontSize: "30px", cursor: "pointer", display: sdispay }} onClick={() => handle(i.id, i.totalprice)} />
                                        </Tooltip>
                                    </div>
                                </div>

                            </>
                        )
                    })
                }

                <div  style={{display:div}} className='checkout-box'>
                    <div className='checkout-title-box'>
                        <h3 className='h3'>SUBTOTAL</h3>
                        <h4 className='h4'>₹{totalprice}.00</h4>
                    </div>
                    <div className='checkout-btn-box'>
                        <button style={{ backgroundColor: color }} id='sbtn' onClick={(e) => { orderhandle(); console.log("this is e btn", e) }} className='checkout-btn'>

                            Checkout
                        </button>
                    </div>

                </div>

            </div>

            <div style={{ display: display }} className='address-box'>
                <div className='address-nav'>
                    <h1 className='nav-heading'> Address</h1>
                </div>





                <h3 className='ad-h3'>Enter Your Address Details to Continue</h3>
                <label className='lebal-tag'>House No.</label><br />
                <input onChange={(e) => { setaddress({ ...address, houseno: e.target.value }) }} className='input-tag' type='text' placeholder='Enter Your House No' /><br />
                <label className='lebal-tag'>Street</label><br />
                <input onChange={(e) => { setaddress({ ...address, streat: e.target.value }) }} className='input-tag' type='text' placeholder=' Enter Street' /><br />

                <label className='lebal-tag'>Area</label><br />
                <input onChange={(e) => { setaddress({ ...address, area: e.target.value }) }} className='input-tag' type='text' placeholder=' Enter Your Area or Locality' /><br />

                <label className='lebal-tag'>Landmark</label><br />
                <input onChange={(e) => { setaddress({ ...address, landmark: e.target.value }) }} className='input-tag' type='text' placeholder=' Enter Your Landmark' /><br />

                <label className='lebal-tag'>City</label><br />
                <input onChange={(e) => { setaddress({ ...address, city: e.target.value }) }} className='input-tag' type='text' placeholder=' Enter Your City' /><br />

                <label className='lebal-tag'>Pincode</label><br />
                <input onChange={(e) => { setaddress({ ...address, pincode: e.target.value }) }} className='input-tag' type='number' placeholder="Enter Your Pincode" /><br />
                <button onClick={submithandle} className='sub-btn'>Save & Continue</button>

            </div>
        </>
    )
}
export default CartPage;



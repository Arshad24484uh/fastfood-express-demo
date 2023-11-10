"use client"
import BottomBar from '@/components/bottombar1';
import '../../../app/css/orderpage.css';
import Navbar from "@/components/navbar";
import Searchbar from "@/components/searchbar";
import { useEffect, useState } from "react";
const Orderpage = ({ params }) => {
    const [orders, setorders] = useState([]);
    let userid = params.userorder;
    console.log(userid);

    const fetchorder = async () => {
        const res = await fetch(`http://13.126.118.23:8000/getorders/${userid}`)
        const data = await res.json();
        setorders(data);
        console.log(data)
        let order = JSON.stringify(data)
        localStorage.setItem("order",order);

    }
    //console.log(orders[0]?.orders[0][0].title)
    

    useEffect(() => {
        fetchorder();
    }, [])
    return (
        <>
            <Navbar />
            <Searchbar />



            <h2>{orders.length} Orders</h2>
            <div className="order-wrapper">
            
                {
                    orders.map((i) => {
                        return (
                            <>
                                <div className="order-box">
                                    <div className="image-box">
                                        <img className='img' alt='item-image' src={i?.orders[0][0].image} />
                                    </div>
                                    <div className="title-box">
                                        <h5 className='title-tag'>{i.orders[0][0].title}</h5>
                                    </div>
                                    <div className="orderid-box">
                                        <span className='order-id-title'>OrderId:{i.orderId}</span>
                                    </div>
                                    <div className="status-box">

                                        <div className="con-box">
                                            <span className='tt'>Order Status</span>
                                            <span className='pp'>Confirmed</span>
                                        </div>
                                        <div className="status">
                                            <span className='tt'>Delivers In</span>
                                            <span class="material-symbols-outlined">
                                                local_shipping
                                            </span>
                                            <span className='ppt'>20 minute</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }



            </div>
            <BottomBar/>
        </>
    )
}
export default Orderpage;
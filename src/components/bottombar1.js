"use client";
import React, { useEffect } from 'react';
import { useState } from 'react';
import '../app/css/bottombar1.css';
import { useSelector } from 'react-redux';
import Link from 'next/link';
const BottomBar = () => {
        const [color, setcolor] = useState();
      //  const [display, bsetdisplay] = useState();
        
             // const order = JSON.parse(localStorage.getItem("order"));
        
      //  const user = JSON.parse(localStorage.getItem("user"));
        const item = useSelector((state) => state.cart);
        let counter = item.length - 1;


        useEffect(() => {

        
                

        }, [])
        console.log(color)


        return (
                <>
                        <section className="bottom-bar">
                                <div className="bottom-box">
                                        <span style={{ color: color }} onClick={() => window.location.href = '/menu'} className="material-symbols-outlined">
                                                restaurant_menu
                                        </span>
                                        <p>Menu</p>
                                </div>

                                <div className="bottom-box">
                                        <span class="material-symbols-outlined">
                                                sell
                                        </span>
                                        <p>Offer</p>
                                </div>

                                <div className="bottom-box">
                                        <span className="material-symbols-outlined">
                                                favorite
                                        </span>
                                        <p>Favorite</p>
                                </div>

                                <div onClick={() => { window.location.href = `/order/${user._id}` }} className="bottom-box">
                                        <span className="material-symbols-outlined">
                                                shopping_bag
                                        </span>
                                        <p>Orders</p>
                                </div>

                                <div className="bottom-box">
                                        <span  className="material-symbols-outlined">
                                                shopping_cart
                                        </span>
                                        <Link href={'/cart'}>Cart</Link>
                                        <button style={{ width: "15px", height: "15px", backgroundColor: "red", color: "white", borderRadius: "50%", border: "none", position: "relative", left: "15px" }} className='cart-counter'>{counter}</button>

                                </div>

                        </section>
                </>
        )
}
export default BottomBar;
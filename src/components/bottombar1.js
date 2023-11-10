"use client";
import React, { useEffect } from 'react';
import { useState } from 'react';
import '../app/css/bottombar1.css';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const BottomBar = () => {
        const router = useRouter(); 
      const user = typeof window !== "undefined"?JSON.parse(localStorage.getItem("user")):null;
        const item = useSelector((state) => state.cart);




        return (
                <>
                        <section className="bottom-bar">
                                <div className="bottom-box">
                                        <span onClick={() => window.location.href="/menu"} className="material-symbols-outlined">
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

                                <div  className="bottom-box">
                                        <span className="material-symbols-outlined">
                                                shopping_bag
                                        </span>
                                        <p>Orders</p>
                                </div>

                                <div onClick={()=>{router.push('/cart')}} className="bottom-box">
                                        <span  className="material-symbols-outlined">
                                                shopping_cart
                                        </span>
                                        <Link id='cart-icon' href={'/cart'} passHref>Cart</Link>
                                        <button style={{ width: "15px", height: "15px", backgroundColor: "red", color: "white", borderRadius: "50%", border: "none", position: "relative", left: "15px" }} className='cart-counter'>{item.length }</button>

                                </div>

                        </section>
                </>
        )
}
export default BottomBar;
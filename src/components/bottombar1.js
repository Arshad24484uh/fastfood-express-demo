"use client";
import React, { useEffect } from 'react';
import { useState } from 'react';
import '../app/css/bottombar1.css';
import { useSelector } from 'react-redux';
const BottomBar = () => {
        const [color, setcolor] = useState();
        const [display, bsetdisplay] = useState();
        const order = JSON.parse(localStorage.getItem("order"));
        const user = JSON.parse(localStorage.getItem("user"));
        const item = useSelector((state) => state.cart);
        let counter = item.length - 1;


        useEffect(() => {
                const url = window.location.href;
                if (url == 'http://localhost:3000/menu') {
                        setcolor("green")
                }

                console.log(url)

                if (order) {
                        bsetdisplay("inline-block")
                }

        }, [])
        console.log(color)


        return (
                <>
                        <section className="bottom-bar">
                                <div className="bottom-box">
                                        <span style={{ color: color }} onClick={() => window.location.href = '/menu'} class="material-symbols-outlined">
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
                                        <span class="material-symbols-outlined">
                                                favorite
                                        </span>
                                        <p>Favorite</p>
                                </div>

                                <div onClick={() => { window.location.href = `/order/${user._id}` }} className="bottom-box">
                                        <span class="material-symbols-outlined">
                                                shopping_bag
                                        </span>
                                        <p>Orders</p>
                                </div>

                                <div className="bottom-box">
                                        <span onClick={() => window.location.href = '/cart'} class="material-symbols-outlined">
                                                shopping_cart
                                        </span>
                                        <p>Cart</p>
                                        <button style={{ width: "15px", height: "15px", backgroundColor: "red", color: "white", borderRadius: "50%", border: "none", position: "relative", left: "15px" }} className='cart-counter'>{counter}</button>

                                </div>

                        </section>
                </>
        )
}
export default BottomBar;
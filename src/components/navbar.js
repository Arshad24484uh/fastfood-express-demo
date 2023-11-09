'use client';
import Image from 'next/image';
import navbarimage from '../../public/logo.png';
import React, { useEffect, useState } from 'react';
import '../app/component.css';
import Link from 'next/link';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const [userId,setuserId] = useState();
    const item = useSelector((state)=>state.cart);
    let counter = item.length-1;
    useEffect(()=>{
        let userid = JSON.parse(localStorage?.getItem("user"));
        setuserId(userid)

    },[])

    

    return (
        <>
            <div className="navbar">
                <Image className='logo' src={navbarimage} alt='logo' width={150} height={80} quality={100}></Image>

                <ul className='nav-ul'>
                    <li className='nav-li'><Link className='nav-link' href={'/menu'}>Menu</Link></li>
                    <li className='nav-li'><Link className='nav-link' href={'/deals'}>Hot deals</Link></li>
                    <li className='nav-li'><Link className='nav-link' href={`/order/${userId?._id}`} >orders</Link></li>
                    <li className='nav-li'><Link className='nav-link' href={'/favourite'}>Favourite</Link></li>

                </ul>
                <div className='cart-box'>
                   {/* <ShoppingCartSharpIcon className='cart' style={{ fontSize: "29px", color: "rgb(247, 59, 96)", margin: "10px 4px 3px 15px", cursor: "pointer" }} />*/}
                    <span   onClick={() => window.location.href = '/signup'} style={{ fontSize: "29px", color: "black", margin: "10px 4px 3px 15px", cursor: "pointer" }}  class="material-symbols-outlined">
                    account_circle

</span>


            
                </div>
            </div>
        </>
    )
}
export default Navbar;
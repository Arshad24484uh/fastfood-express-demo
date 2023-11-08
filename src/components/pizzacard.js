'use client';
import Image from "next/image";
import Sandwitch from '../../public/categories2images/sandwitch.jpg';
import '../app/css/pizzacard.css';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import { useState,useEffect } from "react";

const Pizzacard = () =>{
    const [products,setproduct] = useState([]);

    const datafetched = async ()=>{
        const res = await fetch("http://13.126.118.23:8000/find");
        const data = await res.json();
        console.log(data);
        setproduct(data);
    }
    useEffect(()=>{
 datafetched();
    },[])

    
    return(
        <>
        <div className="pizza-wrapper">
        {

            products.map((item)=>{
                return(
                    <>
                    <div className="card" key={item._id}  onClick={()=>{window.location.href=`/products/${item._id}`}}>
                <div className="image-div">
                <span id="fav" class="material-symbols-outlined">
favorite
</span>
<img
className="card-image"
    src={item.image}
    alt="pic"
    width={100}
    height={100}

/>
                </div>
                <div className="item-title">
                    <p className="title">{item.title}</p>
                    <span className="off-title">{item.offer}%Off</span>

                </div>
                <div className="rating-price-div">
                  <StarHalfOutlinedIcon id="star"/>
                <span className="rates">{item.rating}</span>
<span className="price-title">₹{item.price}</span>
                </div>

            </div>

                    </>
                )
            })
        }


            </div>
        </>
    )
}
export default Pizzacard;
// <span id="star" class="material-symbols-outlined">
//star_half
//</span>
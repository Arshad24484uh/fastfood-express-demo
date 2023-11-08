'use client'
import BottomBar from '@/components/bottombar1';
import '../../css/pizzacard.css';

import { useEffect, useState } from "react";

const Searching = ({params})=>{
    
    let query = params.searching;
    console.warn(query)
    const [product,setproduct] = useState([]);

    const fetchdata = async()=>{
        let res = await fetch(`http://13.126.118.23:8000/findcategory/${query}`);
        let data = await res.json();
        setproduct(data)
    }

    useEffect(()=>{
   fetchdata();
    },[])
    return(
        <>
            <div className="search-result">
            <h2 style={{fontSize:"30px",  color:"black",fontFamily:" 'Gabarito', sans-serif",textTransform:"capitalize",marginLeft:"10px"}}>{product[0]?.category}</h2>

            {

product.map((item)=>{
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
    <span id="star" class="material-symbols-outlined">
star_half
</span><span className="rates">{item.rating}</span>
<span className="price-title">₹{item.price}</span>
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

export default Searching;
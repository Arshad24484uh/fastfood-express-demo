'use client';
import '../css/addproduct.css';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addproductsize } from "../redux/productsize";

const Addproduct = () => {
    const dispatch = useDispatch();
    const item = useSelector((state)=>state.addproduct)

    const [sizes,setsizes] = useState({
        size:'medium',
        price:0
        
    })
    const [title,settitle] = useState();
    const [desc,setdesc] = useState();
    const [price,setprice] = useState();
    const [image,setimage] = useState();
    const [type,settype] = useState();
    const [rate,setrate]= useState();
    const [category,setcategory]= useState();
    const [offer,setoffer]= useState();


    function submit(){
        dispatch(addproductsize(sizes));
        console.warn(item);
        console.log(type);
        setsizes({size:"", price:""});

      
    
    
        
    }

    const sendbtn = async()=>{
     const res = await fetch("http://localhost:5000/addproduct",{
        method:'post',
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({title,desc,price,item,image,type,rate,category,offer})
        
     })
     const data = await res.json();
     if(data.success==true){
        alert("product added successfully");
     }else{
        alert("product was not added")
     }
     console.log(data);
    }

    return (
        <>
            <div className="product-page">
                <label>Enter product title</label><br />
                <input onChange={(e) => { settitle(e.target.value) }} type="text" placeholder="Product Title" /><br />

                <label>Enter product description</label><br />
                <input onChange={(e) => {setdesc(e.target.value) }} type="text" placeholder="Product Description" /><br />

                <label>Enter Image URL</label><br />
                <input onChange={(e) => {setimage(e.target.value) }} type="text" placeholder="image url" /><br />

                <label>Enter product Price</label><br />
                <input onChange={(e) => {setprice(e.target.value) }} type="number" placeholder="Product Price" /><br />

                <label>Enter product Type</label><br />
                <input className='t-input' onChange={(e) => {settype(e.target.value) }} type="radio" name="type" value={'veg'} />veg
                <input className='t-input' onChange={(e) => {settype(e.target.value) }} type="radio" name="type" value={'nonveg'} />nonveg<br />

                <label>Enter product rating</label><br />
                <input onChange={(e) => { setrate(e.target.value) }} type="text" placeholder="Product Rate" /><br />

                <label>Enter product Category</label><br />
                <input onChange={(e) => {setcategory(e.target.value) }} type="text" placeholder="Product Category" /><br />

                <label>Enter product offer</label><br />
                <input onChange={(e) => {setoffer(e.target.value) }} type="number" placeholder="Product offer" /><br />
                <label>Enter product size</label><br />
                <input  className='cc' onChange={(e)=>{ setsizes({...sizes,size:e.target.value})}} type="text" placeholder="Enter size"/>
                <input  className='pp' onChange={(e)=>{ setsizes({...sizes,price:e.target.value})}} type="number" placeholder="₹"/>
                <button className='confirm' onClick={submit}>ADD</button><br/>
                <button className='submit' onClick={sendbtn}>SUBMIT</button>


            </div>
        </>
    )
}
export default Addproduct;
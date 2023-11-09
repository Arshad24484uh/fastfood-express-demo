'use client';
import { useState } from "react";
const Deliveryadd = () => {
    const [pincode,setpincode] = useState();
    const [area,setarea] = useState();
    const [city,setcity] = useState();
    const [district,setdistrict] = useState();
    const [state,setstate] = useState();

    const handle = async() =>{
       let res = await fetch("http://13.126.118.23:8000/addDelivery",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({pincode,area,city,district,state})
       })
       if(res.ok == true){
        alert("delivery added successfully");
       }else{
        alert("something went wrong")
       }
    }

    return (
        <>
            <div className="main-box">
                <input onChange={(e)=>{setpincode(e.target.value)}} type='number' placeholder="enter pincode"/>
                <input onChange={(e)=>{setarea(e.target.value)}} type='text' placeholder=" enter area"/>
                <input onChange={(e)=>{setcity(e.target.value)}} type='text' placeholder="enter city"/>
                <input onChange={(e)=>{setdistrict(e.target.value)}} type='text' placeholder="enter district"/> 
               <input onChange={(e)=>{setstate(e.target.value)}} type='text' placeholder="enter state"/>
                <button onClick={(e)=>handle()}> SUBMIT</button>

            </div>
        </>
    )
}
export default Deliveryadd;
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import '../css/registerpage.css';

import Link from 'next/link';

import BottomBar from '@/components/bottombar1';
const Signup = () =>{
    const router = useRouter();
    const [fullname,setfullname] = useState();
    const [email,setemail] = useState();
    const [mobile,setmobile] = useState();
    const [password,setpassword] = useState();
   async function registerbtn(){
        let res = await fetch("http://13.126.118.23:8000/register",{
            method:"post",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify({mobile,password,fullname,email})
        })
      let data  = await res.json()
      console.log(data);
      let userdetails = JSON.stringify(data.details);
      console.log(userdetails)
    
    
    
    if(data.success==true){
       // const user = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("user")) : null;
      typeof window !== 'undefined'? localStorage.setItem("user",userdetails):null;
        window.location.href="/"


    }else{
        alert("you are not registerd")
    }
    console.log(fullname,email,mobile,password);
    

    
    }
    if(typeof window !== "undefined"?localStorage.getItem("user"):null){
        alert("you are authorizes User");
    }

    function gobtn(){
        window.location.href='/login'
    }
    return(
        <>
            <div className="signup-box">
            <h3 className="sign-up-heading">SignUp here</h3>
            <span id='name-icon' class="material-symbols-outlined">
person
</span>   <input onChange={(e)=>setfullname(e.target.value)} type="text" placeholder="Full Name"/><br/>

<span id='email-icon' className="material-symbols-outlined">
mail
</span> <input onChange={(e)=>setemail(e.target.value)} type="email" placeholder="Email Address"/><br/>
   <span id='phone-icon' class="material-symbols-outlined">
call
</span>    <input onChange={(e)=>setmobile(e.target.value)} type="phone" placeholder="Mobile Number"/><br/>
     <span id='password-icon' class="material-symbols-outlined">
key
</span>       <input onChange={(e)=>setpassword(e.target.value)} type="password" placeholder="create Password"/><br/>
                <button onClick={registerbtn} className='register-button'>Signup</button>

                <div className='signup-bottom'>
                    <a  href='/login' className='already-account'>Already havent Account Login here?</a>
                    <button  onClick={gobtn} className='login-button'>Login</button>
                </div>
            </div>
        
            <BottomBar/>
            
        </>
    )
}
export default Signup;
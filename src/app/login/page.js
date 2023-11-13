
'use client';

import '../css/login.css';
import BottomBar from '@/components/bottombar1';



import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Login = () => {
    const [email, setemail] = useState();
    const [password, setpassword] = useState();

    const loginhandle = async () => {
        let res = await fetch("https://www.gadgethindi.com/login", {
            method: 'post',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
        let data = await res.json();
        console.log(data);
    }


    return (
        <>
            <div className="login-box">
                <h3 className="login-heading"> Login Now</h3>
                <span id='email-icon' className="material-symbols-outlined">
                    mail
                </span><input onChange={(e) => { setemail(e.target.value) }} type="email" autoComplete='false' placeholder="Enter Your Email" /><br />
                <span id='password-icon' class="material-symbols-outlined">
                    key
                </span>    <input onChange={(e) => { setpassword(e.target.value) }} type="password" placeholder="enter Your Password" /><br />
                <button onClick={loginhandle} className="login-btn">Login</button><br />
                <a className='signup-link' href='/signup'> New User Register here</a>




            </div>


        </>
    )
}
export default Login;
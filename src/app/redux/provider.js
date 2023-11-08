'use client';
import React from "react";
import { Provider } from "react-redux";
import store1 from "./store";
const Providers =({children})=>{
    return(
        <Provider store={store1}>
       {children}
        </Provider>
    )
}
export default Providers;
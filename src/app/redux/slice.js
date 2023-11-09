'use client';
const { createSlice, current } = require("@reduxjs/toolkit");

const cartslice = createSlice({
    name: "cart",
    initialState:[],
    
    reducers: {
        add(state, action) {

            state.push(action.payload);
           // let a = JSON.stringify(current(state))
           // localStorage.setItem("product", a);


        },
        remove(state, action) {
            console.log(action.payload)
           let data =  state.filter((item)=> item?.id !==action.payload)
           return data;
        
        }

    }


})
export const { add, remove } = cartslice.actions;
export default cartslice.reducer;
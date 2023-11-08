'use client';
const { createSlice, current } = require("@reduxjs/toolkit");

//const initialState=[].concat(JSON.parse(localStorage.getItem("product")))
//let initialState={
    //products:JSON.parse(localStorage.getItem("product"))
//}

//.concat(JSON.parse(localStorage.getItem("product")))
//if(initialState.length>1){
   // initialState = JSON.parse(localStorage.getItem("product"))
//}

//if(initialState.length==1){
//   initialState.splice(1,0)
//}
const cartslice = createSlice({
    name: "cart",
    initialState:[].concat(JSON.parse(localStorage.getItem("product"))),
    reducers: {
        add(state, action) {

            state.push(action.payload);
            let a = JSON.stringify(current(state))
            localStorage.setItem("product", a);


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
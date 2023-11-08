const { createSlice,current} = require("@reduxjs/toolkit");

let initialState = [].concat(JSON.parse(localStorage.getItem("totalprice")));
let cartprice = createSlice({
    name:"cartprice",
    initialState,
    reducers:{
        addprice(state,action){
           state.push(action.payload)
           console.log("this is a price",action.payload);
           let a = JSON.stringify(current(state))
           localStorage.setItem("totalprice",a)
        },
        removeprice(state,action){
            console.warn("this is remove function ",action.payload)
            console.warn("this is current state",state)
           return  state.filter((item)=>item !==action.payload)
           
        }
    }
})

export const {addprice,removeprice} = cartprice.actions;
export default cartprice.reducer;
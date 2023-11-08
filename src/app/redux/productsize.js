import { createSlice } from "@reduxjs/toolkit";
const productsize = createSlice({
    name:"productsize",
    initialState:[],
    reducers:{
        addproductsize(state,action){
            state.push(action.payload)
        }
    }
})
export const {addproductsize} = productsize.actions;
export default productsize.reducer;
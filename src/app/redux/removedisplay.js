const { createSlice } = require("@reduxjs/toolkit");

const initialState = ['none'];
const removelocation = createSlice({
    name:"display",
    initialState,
    reducers:{

        removedisplay(state,action){
            console.log(action.payload)
            state.push(action.payload)
        },
       
    }
})

export const {removedisplay} = removelocation.actions;
export default removelocation.reducer;
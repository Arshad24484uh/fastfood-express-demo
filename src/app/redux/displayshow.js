const { createSlice } = require("@reduxjs/toolkit");

const initialState = ['block'];
const displaylocation = createSlice({
    name:"display",
    initialState,
    reducers:{

        showdisplay(state,action){
            console.log(action.payload)
            state.push(action.payload)
        },
        
    }
})

export const {showdisplay} = displaylocation.actions;
export default displaylocation.reducer;
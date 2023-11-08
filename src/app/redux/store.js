'use client';
'use client';
const { configureStore } = require("@reduxjs/toolkit");
import cartslice from './slice'
import productsize from './productsize';
import cartprice from './cartprice';
import displaylocation from './displayshow';
import removedisplay from './removedisplay';

const store1 = configureStore({
    reducer:{
        cart:cartslice,
        addproduct:productsize,
        cartprice:cartprice,
        displayshow:displaylocation,
        removedisplay:removedisplay
    }
})
export default store1;
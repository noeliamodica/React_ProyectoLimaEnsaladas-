import { createSlice } from '@reduxjs/toolkit'

import productos from '../../productos'

const initialState = {
    cartItems: productos,
    amount: 0,
    total: 0,
    isLoading: true,
  }


const cartSlice = createSlice({
    name: 'cart',
    initialState,
})

//console.log(cartSlice)
export default cartSlice.reducer
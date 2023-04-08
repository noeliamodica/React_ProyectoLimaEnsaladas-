import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../src/reducers/cart/cartSlice'

export const store  = configureStore({
    reducer: {
        cart: cartReducer,
    },
})
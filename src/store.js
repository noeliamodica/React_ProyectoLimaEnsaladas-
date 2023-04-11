import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../src/reducers/cart/cartSlice'
import authReducer from '../src/reducers/user/useSlice'

export const store  = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
    },
})
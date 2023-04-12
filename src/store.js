import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../src/reducers/cart/cartSlice'
import authReducer from './reducers/user/userSlice'

export const store  = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
    },
})
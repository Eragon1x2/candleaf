import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth'
import cartSlice from './cart'
import uiSlice from './ui'
export const store = configureStore({
  reducer: { auth: authReducer, cart: cartSlice.reducer, ui: uiSlice.reducer },
})
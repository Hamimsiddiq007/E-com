import { configureStore } from '@reduxjs/toolkit'
import productSlice from '../Components/Slice/productSlice'

export const store = configureStore({
  reducer: {
    product:productSlice
  },
})
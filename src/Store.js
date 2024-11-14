import { configureStore } from '@reduxjs/toolkit'
import { productSlice } from '../Components/slice/productSlice'

export const store = configureStore({
  reducer: {
    product:productSlice
  },
})
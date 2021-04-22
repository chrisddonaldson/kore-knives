import { configureStore } from '@reduxjs/toolkit'
import basketReducer from '../components/basket/basketSlice'

export default configureStore({
  reducer: {
    basket: basketReducer
  },
})
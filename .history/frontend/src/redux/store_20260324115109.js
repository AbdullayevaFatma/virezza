import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"
import productReducer from "./slices/productsSlice"
import productReducer from "./slices/productsSlice"

const store = configureStore({
  reducer:{
    auth:authReducer,
    products:productReducer,
    cart: 
  }
})

export default store
import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"
import productReducer from ""

const store = configureStore({
  reducer:{
    auth:authReducer
    products:productReducer
  }
})

export default store
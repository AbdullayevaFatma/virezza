import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"

const store = configureStore({
  reducer:{
    auth:authRe
  }
})

export default store
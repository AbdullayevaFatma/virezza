import {createSlice,createAsyncThunk, isRejectedWithValue} from "@reduxjs/toolkit"
import axios from "axios"


//Retrieve user info and token from localStorage if available

const userFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null

//check for an existing guest ID in the localStorage or generate a new one
const initialGuestId = localStorage.getItem("guestId") || `guest_${new Date().getTime()}`
localStorage.setItem("guestId",initialGuestId)


const initialState={
  user:userFromStorage,
  guestId: initialGuestId,
  loading:false,
  error:null
}

//async Thunk for user login

export const login = createAsyncThunk("auth/loginUser",async(userData,{rejectWithValue})=>{
  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/login`,userData)
    localStorage.setItem("userInfo",JSON.stringify(response.data.user))
    localStorage.setItem("userToken",response.data.token)
    return response.data
  } catch (error) {
    
  }
})
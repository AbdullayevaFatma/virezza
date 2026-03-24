import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"


//Retrieve user info and token from localStorage if available

const userFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null

//check for an existing guest ID in the localStorage or generate a new one
const initialGuestId = localStorage.getItem("guestId") || `guest_${new Date}`

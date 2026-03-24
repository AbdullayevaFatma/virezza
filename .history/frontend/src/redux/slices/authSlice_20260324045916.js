import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"


//Retrieve user info and token from localStorage if available

const userFromStorage
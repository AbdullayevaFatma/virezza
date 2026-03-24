import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// helper func to load cart from localStorage

const loadCartFromStorage = ()=>{
  const storedCart = localStorage.getItem("cart")
  return storedCart ? JSON.parse(storedCart) :{products:[]}
}

// helper func to save cart to localStorage

const saveCartToStorage = (cart)=>{
 localStorage.setItem("cart",JSON.stringify(cart))
}

// Fetch cart for a user or guest

export const fetchCart = createAsyncThunk("cart/fetchCart",async({userId,guestId},{rejectWithValue})=>{
  try {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/cart`,{
      params:{userId,guestId}
    })
    return response.data
  } catch (error) {
    console.error(error);
    return rejectWithValue(error.response.data)
    
  }
})

// Add an item to the cart for a user or guest
export const addToCart = createAsyncThunk("cart/addToCart",asycn({productId,quantity,size,color,}))
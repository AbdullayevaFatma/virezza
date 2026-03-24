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
    
  } catch (error) {
    
  }
})
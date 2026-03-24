import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";





//async Thunk for fetch products by collection and optional filters

export const fetchProductsByFilters = createAsyncThunk(
  "products/fetchByFilters",
  async (collection,size,color,gender,minPrice,maxPrice,sortBy,search,category,material,brand,limit) => {

    const query = new URLSearchParams()
    if(collection) query.append("collection",collection)
    if(collection) query.append("collection",collection)
    if(collection) query.append("collection",collection)
    if(collection) query.append("collection",collection)
    if(collection) query.append("collection",collection)
    if(collection) query.append("collection",collection)
    if(collection) query.append("collection",collection)
    if(collection) query.append("collection",collection)
    if(collection) query.append("collection",collection)
    if(collection) query.append("collection",collection)
    if(collection) query.append("collection",collection)
    if(collection) query.append("collection",collection)
  
  },
);




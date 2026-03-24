import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//async Thunk for fetch products by collection and optional filters

export const fetchProductsByFilters = createAsyncThunk(
  "products/fetchByFilters",
  async (
    collection,
    size,
    color,
    gender,
    minPrice,
    maxPrice,
    sortBy,
    search,
    category,
    material,
    brand,
    limit,
  ) => {
    const query = new URLSearchParams();
    if (collection) query.append("collection", collection);
    if (size) query.append("size", size);
    if (color) query.append("color", color);
    if (gender) query.append("gender", gender);
    if (minPrice) query.append("minPrice", minPrice);
    if (maxPrice) query.append("maxPrice", maxPrice);
    if (sortBy) query.append("sortBy", sortBy);
    if (search) query.append("search", search);
    if (material) query.append("material", material);
    if (brand) query.append("brand", brand);
    if (limit) query.append("limit", limit);
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/products?${query.toString()}`,
    );
    return response.data;
  },
);

// async thunk to fetch a single product by Id
export const fetchProductDetails = createAsyncThunk(
  "products/fetchProductDetails",
  async (id) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`,
    );
    return response.data;
  },
);


// async thunk to update product
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({id,productData}) => {
    const response = await axios.put(
      `${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`,productData,{headers:{Authorization:`Bearer ${localStorage.getItem("userToken")}`}}
    );
    return response.data;
  },
);



// async thunk to fetch similar products

export const fetchSimilarProducts = createAsyncThunk("products/fetchSimilarProducts",async({id})=>{
  const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/similar/${id}`)
  return response.data
})


const productsSlice = createSlice({
  name: "products",
  initialState:{
    products:[],
    selectedProduct: null,
    similarProducts:[],
    loading:false,
    error:null,
    filters:{
      category:"",
      size:"",
      color:"",
      gender:"",
      brand:"",
      minPrice:"",
      maxPrice:"",
      sortBy:"",
      search:"",
      material: "",
      collection:""

    }

  },
  reducers: {
    setFilters:(state,action)=>{
      state.filters={...state.filters,...action.payload}
    },
    clearFilters:(state)=>{
      state.filters={
         category:"",
      size:"",
      color:"",
      gender:"",
      brand:"",
      minPrice:"",
      maxPrice:"",
      sortBy:"",
      search:"",
      material: "",
      collection:""
      }
    }
    
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchProductsByFilters.pending,state)
  }
});
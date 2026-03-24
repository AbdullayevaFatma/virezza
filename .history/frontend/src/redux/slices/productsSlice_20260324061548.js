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
    
  },
  reducers: {
    logout: (state) => {
      state.userInfo = null;
      state.guestId = `guest_${new Date().getTime()}`; // Reset guest ID on logout
      localStorage.removeItem("userInfo");
      localStorage.removeItem("userToken");
      localStorage.setItem("guestId", state.guestId); //set new guest ID in lcoalstorage
    },
    generateNewGuestId: (state) => {
      state.guestId = `guest_${new Date().getTime()}`;
      localStorage.setItem("guestId", state.guestId);
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(loginUser.fulfilled, (state,action) => {
      state.loading = false;
      state.userInfo = action.payload;
    })
    .addCase(loginUser.rejected, (state,action) => {
      state.loading = false;
      state.error = action.payload.message;
    })
    .addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(registerUser.fulfilled, (state,action) => {
      state.loading = false;
      state.userInfo = action.payload;
    })
    .addCase(registerUser.rejected, (state,action) => {
      state.loading = false;
      state.error = action.payload.message;
    })
    
  },
});
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// async thunk to fetch admin products  (admin only)

export const fetchAdminProducts = createAsyncThunk("adminProducts/fetchProducts", async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_BACKEND_URL}/api/admin/products`,
    {
      headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` },
    },
  );
  return response.data;
});

// create a new product

export const createProduct = createAsyncThunk(
  "adminProducts/createProduct",
  async (productData) => {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/admin/products`,productData,{
      headers:{
        Authorization: `Bearer ${localStorage.getItem("userToken")}` 
      }
    })
    return response.data
  },
);

//update an existing product

export const updateProduct = createAsyncThunk(
  "adminProducts/updateProduct",
  async ({ id, productData }) => {
    const response = await axios.put(
      `${import.meta.env.VITE_BACKEND_URL}/api/admin/products/${id}`,
      productData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      },
    );
    return response.data;
  },
);

// delete a product
export const deleteProduct = createAsyncThunk("adminProducts/deleteProduct", async (id) => {
  await axios.delete(
    `${import.meta.env.VITE_BACKEND_URL}/api/admin/products/${id}`,
    {
      headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` },
    },
  );

  return id;
});

const adminProductSlice = createSlice({
  name: "adminProducts",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdminProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchAdminProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
       state.products.push(action.payload)
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.find
      })
      .addCase(addUser.pending, (state) => {
        ((state.loading = true), (state.error = null));
      })
      .addCase(addUser.fulfilled, (state, action) => {
        ((state.loading = false), state.users.push(action.payload.user));
      })
      .addCase(addUser.rejected, (state, action) => {
        ((state.loading = false), (state.error = action.payload.message));
      });
  },
});

export default adminProductSlice.reducer
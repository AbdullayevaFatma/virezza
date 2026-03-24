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
export const deleteUser = createAsyncThunk("admin/deleteUser", async (id) => {
  await axios.delete(
    `${import.meta.env.VITE_BACKEND_URL}/api/admin/users/${id}`,
    {
      headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` },
    },
  );

  return id;
});

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const updatedUser = action.payload;
        const userIndex = state.users.findIndex(
          (user) => user._id === updatedUser._id,
        );
        if (userIndex !== -1) {
          state.users[userIndex] = updatedUser;
        }
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user._id !== action.payload);
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

export default adminSlice.reducer
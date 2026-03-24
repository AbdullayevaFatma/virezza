import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";





// async thunk to fetch all orders
export const fetchAllOrders = createAsyncThunk("adminOrders/fetchAllOrders",async(_,{rejectWithValue})=>{
  try {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/orders`,{headers:{
      Authorization: `Bearer ${localStorage.getItem("userToken")}`
    }})
    return response.data
  } catch (error) {
    return rejectWithValue(error.response.data)
  }
})
// update order delivery status
export const updateOrderStatus = createAsyncThunk("adminOrders/updateOrderStatus",async({id,status},{rejectWithValue})=>{
  try {
    const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/admin/orders/${id}`,{status},{headers:{
      Authorization: `Bearer ${localStorage.getItem("userToken")}`
    }})
    return response.data
  } catch (error) {
    return rejectWithValue(error.response.data)
  }
})
// delete an order
export const deleteOrder = createAsyncThunk("adminOrders/deleteOrder",async(id,{rejectWithValue})=>{
  try {
    await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/admin/orders/${id}`,{headers:{
      Authorization: `Bearer ${localStorage.getItem("userToken")}`
    }})
    return id
  } catch (error) {
    return rejectWithValue(error.response.data)
  }
})




const adminOrderSlice = createSlice({
  name:"adminOrders",
  initialState:{
    orders: [],
    totalOrders:0,
    totalSales:0,
    loading:false,
    error:null
  },
  reducers:{},
  extraReducers:(builder)=>{
    builder
    //fetch user orders
    .addCase(fetchAllOrders.pending, (state)=>{
      state.loading = true;
      state.error=null
    })
    .addCase(fetchAllOrders.fulfilled, (state,action)=>{
      state.loading = false;
      state.orders=action.payload
      state.totalOrders=action.payload.le
      
    })
    .addCase(fetchAllOrders.rejected, (state,action)=>{
      state.loading = false;
      state.error=action.payload.message 
    })
    // fetch order details
    .addCase(fetchOrderDetails.pending, (state)=>{
      state.loading = true;
      state.error=null
    })
    .addCase(fetchOrderDetails.fulfilled, (state,action)=>{
      state.loading = false;
      state.orderDetails=action.payload
      
    })
    .addCase(fetchOrderDetails.rejected, (state,action)=>{
      state.loading = false;
      state.error=action.payload.message 
    })
  }
})


export default orderSlice.reducer
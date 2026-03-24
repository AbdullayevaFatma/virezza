import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";

// fetch all users (admin only)

export const fetchUsers = createAsyncThunk("admin/fetchUsers")
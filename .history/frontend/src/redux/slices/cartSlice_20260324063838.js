import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// helper func to load cart from localStorage

const load
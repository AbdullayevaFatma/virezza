import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//async Thunk for fetch products by collection and optional filters

export const fetchProductsByFilters = createAsyncThunk(
  "products/fetchByFilters",
  async (filters) => {  // sadece bir obje al
    const query = new URLSearchParams();

    if (filters.collection) query.append("collection", filters.collection);
    if (filters.size) query.append("size", filters.size);
    if (filters.color) query.append("color", filters.color);
    if (filters.gender) query.append("gender", filters.gender);
    if (filters.minPrice) query.append("minPrice", filters.minPrice);
    if (filters.maxPrice) query.append("maxPrice", filters.maxPrice);
    if (filters.sortBy) query.append("sortBy", filters.sortBy);
    if (filters.search) query.append("search", filters.search);
    if (filters.category) query.append("category", filters.category);
    if (filters.material) query.append("material", filters.material);
    if (filters.brand) query.append("brand", filters.brand);
    if (filters.limit) query.append("limit", filters.limit);

    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/products?${query.toString()}`
    );
    return response.data;
  }
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
  async ({ id, productData }) => {
    const response = await axios.put(
      `${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`,
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

// async thunk to fetch similar products

export const fetchSimilarProducts = createAsyncThunk(
  "products/fetchSimilarProducts",
  async ({ id }) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/products/similar/${id}`,
    );
    return response.data;
  },
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    selectedProduct: null,
    similarProducts: [],
    loading: false,
    error: null,
    filters: {
      category: "",
      size: "",
      color: "",
      gender: "",
      brand: "",
      minPrice: "",
      maxPrice: "",
      sortBy: "",
      search: "",
      material: "",
      collection: "",
    },
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = {
        category: "",
        size: "",
        color: "",
        gender: "",
        brand: "",
        minPrice: "",
        maxPrice: "",
        sortBy: "",
        search: "",
        material: "",
        collection: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByFilters.pending, (state) => {
        ((state.loading = true), (state.error = null));
      })
      .addCase(fetchProductsByFilters.fulfilled, (state, action) => {
        ((state.loading = false),
          (state.products = Array.isArray(action.payload)
            ? action.payload
            : []));
      })
      .addCase(fetchProductsByFilters.rejected, (state, action) => {
        ((state.loading = false), (state.error = action.error.message));
      })
      // handle fetching single product details
      .addCase(fetchProductDetails.pending, (state) => {
        ((state.loading = true), (state.error = null));
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        ((state.loading = false), (state.selectedProduct = action.payload));
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        ((state.loading = false), (state.error = action.error.message));
      })
      //handle updating product
      .addCase(updateProduct.pending, (state) => {
        ((state.loading = true), (state.error = null));
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        const updatedProduct = action.payload;
        const index = state.products.findIndex(
          (product) => product._id === updatedProduct._id,
        );
        if (index !== -1) {
          state.products[index] = updatedProduct;
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        ((state.loading = false), (state.error = action.error.message));
      })
      .addCase(fetchSimilarProducts.pending, (state) => {
        ((state.loading = true), (state.error = null));
      })
      .addCase(fetchSimilarProducts.fulfilled, (state, action) => {
        ((state.loading = false), (state.similarProducts = action.payload));
      })
      .addCase(fetchSimilarProducts.rejected, (state, action) => {
        ((state.loading = false), (state.error = action.error.message));
      });
  },
});
export const {setFilters,clearFilters} = productsSlice.actions
export default productsSlice.reducer
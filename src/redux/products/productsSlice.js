import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productsOperations from './productsOperations';
const { addProduct, getAllProducts, deleteProductById, getProductById } =
  productsOperations;

const initialState = {
  products: [],
  currentProduct: null,
  sortedValue: 'name',
  isLoading: false,
  isLoadingAddProduct: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSortedValue(state, action) {
      state.sortedValue = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      // ADD PRODUCT
      .addCase(addProduct.pending, state => {
        state.isLoadingAddProduct = true;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.isLoadingAddProduct = false;
        state.error = action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })

      // GET ALL PRODUCTS
      .addCase(getAllProducts.pending, handlePending)
      .addCase(getAllProducts.rejected, handleRejected)
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })

      // GET PRODUCT
      .addCase(getProductById.pending, handlePending)
      .addCase(getProductById.rejected, handleRejected)
      .addCase(getProductById.fulfilled, (state, action) => {
        state.currentProduct = action.payload;
        state.isLoading = false;
      })

      // DELETE PRODUCT
      .addCase(deleteProductById.pending, handlePending)
      .addCase(deleteProductById.rejected, handleRejected)
      .addCase(deleteProductById.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      });
  },
});

const persistConfig = {
  key: 'inforce/shop',
  storage,
};

export const persistedProductsReducer = persistReducer(
  persistConfig,
  productsSlice.reducer
);

export const { setSortedValue } = productsSlice.actions;

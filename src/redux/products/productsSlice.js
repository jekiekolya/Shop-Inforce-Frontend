import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productsOperations from './productsOperations';
const { addProduct, getAllProducts, deleteProductById } = productsOperations;

const initialState = {
  products: [],
  sortedValue: 'name',
  isLoading: false,
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
      .addCase(addProduct.pending, handlePending)
      .addCase(addProduct.rejected, handleRejected)
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

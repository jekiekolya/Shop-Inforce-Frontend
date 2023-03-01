import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productsOperations from './productsOperations';
const { addProduct } = productsOperations;

const initialState = {
  totalBalance: null,
  isLoading: false,
  data: [],
  totalQuantityTransactions: 0,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const financeSlice = createSlice({
  name: 'finance',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addProduct.pending, handlePending)
      .addCase(addProduct.rejected, handleRejected)
      .addCase(addProduct.fulfilled, (state, action) => {
        state.data = action.payload.rdyTransactions;
        state.totalBalance = action.payload.totalBalance;
        state.totalQuantityTransactions = action.payload.updatedCount;
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
  financeSlice.reducer
);

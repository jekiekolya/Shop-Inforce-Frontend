import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showModalAddProduct: false,
  showModalDeleteProduct: false,
  showModalEditProduct: false,
  deletedProductId: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleShowModalAddProduct(state, action) {
      state.showModalAddProduct = action.payload;
    },
    toggleShowModalDeleteProduct(state, action) {
      state.showModalDeleteProduct = action.payload;
    },
    toggleShowModalEditProduct(state, action) {
      state.showModalEditProduct = action.payload;
    },
    setDeletedProductId(state, action) {
      state.deletedProductId = action.payload;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const {
  toggleShowModalAddProduct,
  toggleShowModalDeleteProduct,
  toggleShowModalEditProduct,
  setDeletedProductId,
} = modalSlice.actions;

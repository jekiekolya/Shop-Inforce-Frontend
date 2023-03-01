import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showModalAddProduct: false,
  // showModalLogout: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleShowModalAddProduct(state, action) {
      state.showModalAddProduct = action.payload;
    },
    // toggleShowModalLogout(state, action) {
    //   state.showModalLogout = action.payload;
    // },
  },
});

export const modalReducer = modalSlice.reducer;
export const { toggleShowModalAddProduct } = modalSlice.actions;

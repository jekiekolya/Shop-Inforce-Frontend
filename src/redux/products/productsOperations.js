import { createAsyncThunk } from '@reduxjs/toolkit';
// import { axiosBaseUrl } from '../settingsAxios';
import { Notify } from 'notiflix';

const addProduct = createAsyncThunk(
  'products/add',
  async (credentials, { rejectWithValue }) => {
    try {
      return { credentials };
    } catch (e) {
      Notify.failure(e.message);
      return rejectWithValue(e.message);
    }
  }
);

const productsOperations = {
  addProduct,
};
export default productsOperations;

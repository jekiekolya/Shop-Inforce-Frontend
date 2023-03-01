import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosBaseUrl } from '../settingsAxios';
import { Notify } from 'notiflix';

const addProduct = createAsyncThunk(
  'products/add',
  async (credentials, { rejectWithValue }) => {
    try {
      const { imgProductFile } = credentials;
      console.log('credentials', credentials);

      const imgUrl = await axiosBaseUrl.patch(
        '/products/product_img',
        imgProductFile,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('imgUrl', imgUrl);

      return 1;
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

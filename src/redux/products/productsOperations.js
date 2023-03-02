import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

import { axiosBaseUrl } from '../settingsAxios';
import { toggleShowModalAddProduct } from 'redux/modal/modalSlice';

const addProduct = createAsyncThunk(
  'products/add',
  async (credentials, { rejectWithValue, getState, dispatch }) => {
    try {
      const {
        imgProductFile,
        productName,
        productCount,
        productWidth,
        productHeight,
        productWeight,
      } = credentials;

      const res = await axiosBaseUrl.post(
        '/products/product_img',
        imgProductFile,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      const imgUrl = res.data.data.productImgURL;

      const data = {
        imageUrl: imgUrl,
        name: productName,
        count: productCount,
        size: {
          width: productWidth,
          height: productHeight,
        },
        weight: productWeight,
      };

      const product = await axiosBaseUrl.post('/products', {
        ...data,
      });

      const oldProducts = getState().products.products;
      const newProducts = [...oldProducts, product.data.data.addedProduct];

      dispatch(toggleShowModalAddProduct(false));
      Notify.success('Product succesfully added');
      return newProducts;
    } catch (e) {
      Notify.failure(e.message);
      return rejectWithValue(e.message);
    }
  }
);

const getAllProducts = createAsyncThunk(
  'products/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const products = await axiosBaseUrl.get('/products');
      return products.data.data.products;
    } catch (e) {
      Notify.failure(e.message);
      return rejectWithValue(e.message);
    }
  }
);

const productsOperations = {
  addProduct,
  getAllProducts,
};
export default productsOperations;

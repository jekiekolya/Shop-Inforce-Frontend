import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

import { axiosBaseUrl } from '../settingsAxios';
import {
  toggleShowModalAddProduct,
  toggleShowModalDeleteProduct,
  toggleShowModalEditProduct,
} from 'redux/modal/modalSlice';

import getFormatDataForComment from 'redux/helpers/getDateFormat';

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
      Notify.success('Product successfully added');
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

const getProductById = createAsyncThunk(
  'products/getById',
  async (id, { rejectWithValue }) => {
    try {
      const products = await axiosBaseUrl.get(`/products/${id}`);
      return products.data.data.product;
    } catch (e) {
      Notify.failure(e.message);
      return rejectWithValue(e.message);
    }
  }
);

const deleteProductById = createAsyncThunk(
  'products/deleteById',
  async (id, { rejectWithValue, getState, dispatch }) => {
    try {
      await axiosBaseUrl.delete(`/products/${id}`);

      const oldProducts = getState().products.products;
      const newProducts = oldProducts.filter(item => item._id !== id);

      dispatch(toggleShowModalDeleteProduct(false));
      Notify.success('Product successfully deleted');

      return newProducts;
    } catch (e) {
      Notify.failure(e.message);
      return rejectWithValue(e.message);
    }
  }
);

const editProductById = createAsyncThunk(
  'products/editById',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      let {
        imgProductFile,
        imageUrl,
        productName,
        productCount,
        productWidth,
        productHeight,
        productWeight,
        productId,
      } = credentials;

      if (imgProductFile) {
        const res = await axiosBaseUrl.post(
          '/products/product_img',
          imgProductFile,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        imageUrl = res.data.data.productImgURL;
      }

      await axiosBaseUrl.patch(`/products/${productId}`, {
        imageUrl,
        name: productName,
        count: productCount,
        size: {
          width: productWidth,
          height: productHeight,
        },
        weight: productWeight,
      });

      dispatch(getProductById(productId));
      dispatch(toggleShowModalEditProduct(false));
    } catch (e) {
      Notify.failure(e.message);
      return rejectWithValue(e.message);
    }
  }
);

const addCommentByProductId = createAsyncThunk(
  'products/addCommentByProductId',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const { comment, productId } = credentials;
      const data = {
        description: comment,
        date: getFormatDataForComment(),
      };

      await axiosBaseUrl.post(`/products/comment/${productId}`, data);

      dispatch(getProductById(productId));
    } catch (e) {
      Notify.failure(e.message);
      return rejectWithValue(e.message);
    }
  }
);

const deleteCommentByProductId = createAsyncThunk(
  'products/deleteCommentByProductId',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const { commentId, productId } = credentials;

      await axiosBaseUrl.delete(`/products/comment/${productId}/${commentId}`);

      dispatch(getProductById(productId));
    } catch (e) {
      Notify.failure(e.message);
      return rejectWithValue(e.message);
    }
  }
);

const productsOperations = {
  addProduct,
  getAllProducts,
  deleteProductById,
  getProductById,
  addCommentByProductId,
  deleteCommentByProductId,
  editProductById,
};
export default productsOperations;

const products = state => state.products.products;
const sortedValue = state => state.products.sortedValue;
const currentProduct = state => state.products.currentProduct;
const isLoadingProducts = state => state.products.isLoading;
const isLoadingAddProduct = state => state.products.isLoadingAddProduct;

export const productsSelectors = {
  products,
  sortedValue,
  currentProduct,
  isLoadingProducts,
  isLoadingAddProduct,
};

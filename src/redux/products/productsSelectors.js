const products = state => state.products.products;
const isLoadingProducts = state => state.products.isLoading;
const sortedValue = state => state.products.sortedValue;
const currentProduct = state => state.products.currentProduct;

export const productsSelectors = {
  products,
  isLoadingProducts,
  sortedValue,
  currentProduct,
};

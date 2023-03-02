const products = state => state.products.products;
const isLoadingProducts = state => state.products.isLoading;

export const productsSelectors = {
  products,
  isLoadingProducts,
};

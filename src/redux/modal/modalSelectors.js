const showModalAddProduct = state => state.modal.showModalAddProduct;
const showModalDeleteProduct = state => state.modal.showModalDeleteProduct;
const getDeletedProductId = state => state.modal.deletedProductId;

export const modalSelectors = {
  showModalAddProduct,
  showModalDeleteProduct,
  getDeletedProductId,
};

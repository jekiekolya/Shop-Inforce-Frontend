const showModalAddProduct = state => state.modal.showModalAddProduct;
const showModalDeleteProduct = state => state.modal.showModalDeleteProduct;
const showModalEditProduct = state => state.modal.showModalEditProduct;

const getDeletedProductId = state => state.modal.deletedProductId;

export const modalSelectors = {
  showModalAddProduct,
  showModalDeleteProduct,
  getDeletedProductId,
  showModalEditProduct,
};

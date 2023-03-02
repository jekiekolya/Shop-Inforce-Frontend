// Redux
import { useDispatch, useSelector } from 'react-redux';
import { toggleShowModalDeleteProduct } from 'redux/modal/modalSlice';
import productsOperations from 'redux/products/productsOperations';
import { modalSelectors } from 'redux/modal/modalSelectors';

// Components
import ModalUniversal from '../ModalUniversal/ModalUniversal';

// Styles
import s from './ModalDeleteProduct.module.scss';

export default function ModalDeleteProduct() {
  const dispatch = useDispatch();
  const deletedProductId = useSelector(modalSelectors.getDeletedProductId);

  // Handlers
  const handleCancel = () => {
    dispatch(toggleShowModalDeleteProduct(false));
  };

  const handleDelete = () => {
    dispatch(productsOperations.deleteProductById(deletedProductId));
  };

  return (
    <ModalUniversal toggleAction={toggleShowModalDeleteProduct}>
      <h2 className={s.title}>Delete Product?</h2>
      <p className={s.desc}>
        The product will be permanently deleted. Are you sure?
      </p>
      <div className={s.buttonWrapper}>
        <button className={s.buttonConfirm} onClick={handleDelete}>
          Yes
        </button>
        <button className={s.buttonCancel} onClick={handleCancel}>
          No
        </button>
      </div>
    </ModalUniversal>
  );
}

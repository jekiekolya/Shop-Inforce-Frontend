// React
import { useEffect } from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { toggleShowModalAddProduct } from 'redux/modal/modalSlice';

// Components
import ModalUniversal from '../ModalUniversal/ModalUniversal';
import AddProductForm from '../../AddProductForm/AddProductForm';

// Styles
// import s from './ModalAddProduct.module.scss';

const ModalAddProduct = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener('keydown', escKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', escKeyDown);
      document.body.style.overflow = '';
    };
  });

  // handlers
  const handleCloseModal = () => {
    dispatch(toggleShowModalAddProduct(false));
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      handleCloseModal();
    }
  };

  const escKeyDown = e => {
    if (e.code === 'Escape') {
      handleCloseModal();
    }
  };

  return (
    <ModalUniversal onClose={handleCloseModal} onClick={handleBackdropClick}>
      <AddProductForm />
    </ModalUniversal>
  );
};

export default ModalAddProduct;

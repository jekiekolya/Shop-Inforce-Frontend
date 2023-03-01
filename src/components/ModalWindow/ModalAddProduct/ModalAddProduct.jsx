// React
import { useEffect } from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { toggleShowModalAddTransaction } from 'redux/modal/modalSlice';

// Components
import ModalUniversal from '../ModalUniversal/ModalUniversal';

// Styles
import s from './ModalAddProduct.module.scss';

const ModalAddTransaction = () => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(toggleShowModalAddTransaction(false));
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

  useEffect(() => {
    document.addEventListener('keydown', escKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', escKeyDown);
      document.body.style.overflow = '';
    };
  });

  return (
    <ModalUniversal onClose={handleCloseModal} onClick={handleBackdropClick}>
      <div></div>
    </ModalUniversal>
  );
};

export default ModalAddTransaction;

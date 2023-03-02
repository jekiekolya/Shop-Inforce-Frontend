// React
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

// Redux
import { useDispatch } from 'react-redux';

// Icons
import { BsXLg } from 'react-icons/bs';

// Styles
import s from './ModalUniversal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const ModalUniversal = ({ toggleAction, children }) => {
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
    dispatch(toggleAction(false));
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

  return createPortal(
    <div
      className={s.modal__backdrop}
      onClick={handleBackdropClick}
      type="flipInX"
    >
      <div className={s.modal__content}>
        <button className={s.btnClose} onClick={handleCloseModal}>
          <BsXLg className={s.btnClose__icon} />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default ModalUniversal;

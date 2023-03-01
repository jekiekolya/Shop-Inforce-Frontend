// React
import { createPortal } from 'react-dom';

// Icons
import { BsXLg } from 'react-icons/bs';

// Styles
import s from './ModalUniversal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const ModalUniversal = ({ onClick, onClose, children }) => {
  return createPortal(
    <div className={s.modal__backdrop} onClick={onClick} type="flipInX">
      <div className={s.modal__content}>
        <button className={s.btnClose} onClick={onClose}>
          <BsXLg className={s.btnClose__icon} />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default ModalUniversal;

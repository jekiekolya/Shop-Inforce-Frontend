// Redux
import { toggleShowModalEditProduct } from 'redux/modal/modalSlice';

// Components
import ModalUniversal from '../ModalUniversal/ModalUniversal';
import EditProductForm from '../../EditProductForm/EditProductForm';

// Styles
import s from './ModalEditProduct.module.scss';

const ModalEditProduct = () => {
  return (
    <ModalUniversal toggleAction={toggleShowModalEditProduct}>
      <h2 className={s.title}>Edit Product</h2>
      <EditProductForm />
    </ModalUniversal>
  );
};

export default ModalEditProduct;

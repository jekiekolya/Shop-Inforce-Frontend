// Redux
import { toggleShowModalEditProduct } from 'redux/modal/modalSlice';

// Components
import ModalUniversalEdit from '../ModalUniversalEdit/ModalUniversalEdit';
import EditProductForm from '../../EditProductForm/EditProductForm';

// Styles
import s from './ModalEditProduct.module.scss';

const ModalEditProduct = () => {
  return (
    <ModalUniversalEdit toggleAction={toggleShowModalEditProduct}>
      <h2 className={s.title}>Edit Product</h2>
      <EditProductForm />
    </ModalUniversalEdit>
  );
};

export default ModalEditProduct;

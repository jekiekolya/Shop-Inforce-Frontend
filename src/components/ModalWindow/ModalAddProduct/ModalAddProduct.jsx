import { toggleShowModalAddProduct } from 'redux/modal/modalSlice';

// Components
import ModalUniversal from '../ModalUniversal/ModalUniversal';
import AddProductForm from '../../AddProductForm/AddProductForm';

// Styles
import s from './ModalAddProduct.module.scss';

const ModalAddProduct = () => {
  return (
    <ModalUniversal toggleAction={toggleShowModalAddProduct}>
      <h2 className={s.title}>Add Product</h2>
      <AddProductForm />
    </ModalUniversal>
  );
};

export default ModalAddProduct;

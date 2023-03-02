import React from 'react';

// Redux
// import { toggleShowModalEditProduct } from 'redux/modal/modalSlice';

// Components
// import ModalUniversal from '../ModalUniversal/ModalUniversal';
import EditProductForm from 'components/EditProductForm/EditProductForm';

// Styles
import s from './ModalEditProduct.module.scss';

export default function ModalEditProduct({ product }) {
  return (
    // <ModalUniversal toggleAction={toggleShowModalEditProduct}>
    <>
      <h2 className={s.title}>Edit Product</h2>
      <EditProductForm product={product} />
    </>
    //  </ModalUniversal>
  );
}

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { toggleShowModalAddProduct } from 'redux/modal/modalSlice';
import { modalSelectors } from 'redux/modal/modalSelectors';

// Components
import PageWrapper from 'components/PageWrapper/PageWrapper';
import ProductList from 'components/ProductList/ProductList';
import ModalAddProduct from 'components/ModalWindow/ModalAddProduct/ModalAddProduct';

// Styles
import s from './Homepage.module.scss';

const HomePage = () => {
  const dispatch = useDispatch();

  const showModalAddProduct = useSelector(modalSelectors.showModalAddProduct);

  // Handlers
  const handleAddBtn = () => {
    dispatch(toggleShowModalAddProduct(true));
  };

  return (
    <>
      <PageWrapper>
        <div>
          <div className={s.titleWrapper}>
            <h1 className={s.title}>Products</h1>
            <button className={s.button} onClick={handleAddBtn}>
              Add Product
            </button>
          </div>
          <ProductList />
        </div>
      </PageWrapper>
      {showModalAddProduct && <ModalAddProduct />}
    </>
  );
};

export default HomePage;

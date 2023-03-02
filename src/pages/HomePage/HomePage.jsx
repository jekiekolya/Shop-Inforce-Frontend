import { useState } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { toggleShowModalAddProduct } from 'redux/modal/modalSlice';
import { modalSelectors } from 'redux/modal/modalSelectors';
import { productsSelectors } from 'redux/products/productsSelectors';
import { setSortedValue } from 'redux/products/productsSlice';

// Components
import PageWrapper from 'components/PageWrapper/PageWrapper';
import ProductList from 'components/ProductList/ProductList';
import ModalAddProduct from 'components/ModalWindow/ModalAddProduct/ModalAddProduct';
import DropdownMenu from 'components/DropdownMenu/DropdownMenu';

// Styles
import s from './Homepage.module.scss';

const HomePage = () => {
  const [dropIsOpen, setDropIsOpen] = useState(false);
  const dispatch = useDispatch();

  const showModalAddProduct = useSelector(modalSelectors.showModalAddProduct);
  const sortedValue = useSelector(productsSelectors.sortedValue);

  // Handlers
  const handleAddBtn = () => {
    dispatch(toggleShowModalAddProduct(true));
  };

  const handleOpenDrop = () => {
    setDropIsOpen(!dropIsOpen);
  };

  const handleChooseValue = value => {
    dispatch(setSortedValue(value));
    setDropIsOpen(!dropIsOpen);
  };

  return (
    <>
      <PageWrapper>
        <div>
          <div className={s.titleWrapper}>
            <h1 className={s.title}>Products</h1>
            <div className={s.dropWrapper}>
              <button className={s.buttonDrop} onClick={handleOpenDrop}>
                {`Sorted by: ${sortedValue}`}
              </button>
              {dropIsOpen && (
                <DropdownMenu handleChooseValue={handleChooseValue} />
              )}
            </div>
            <button className={s.buttonAdd} onClick={handleAddBtn}>
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

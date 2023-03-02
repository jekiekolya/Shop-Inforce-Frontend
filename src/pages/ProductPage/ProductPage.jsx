import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { productsSelectors } from 'redux/products/productsSelectors';
import productsOperations from 'redux/products/productsOperations';
// import { modalSelectors } from 'redux/modal/modalSelectors';
import { toggleShowModalEditProduct } from 'redux/modal/modalSlice';

// Components
import PageWrapper from 'components/PageWrapper/PageWrapper';
import ProductInfo from 'components/ProductInfo/ProductInfo';
import CommentsList from 'components/CommentsList/CommentsList';
// import ModalEditProduct from 'components/ModalWindow/ModalEditProduct/ModalEditProduct';

// Styles
import s from './ProductPage.module.scss';

export default function ProductPage() {
  const product = useSelector(productsSelectors.currentProduct);
  const dispatch = useDispatch();
  // const showModalEditProduct = useSelector(modalSelectors.showModalEditProduct);

  // Get product Id
  const location = useLocation();
  const pathName = [...location.pathname];
  pathName.shift();
  const id = pathName.join('');

  useEffect(() => {
    dispatch(productsOperations.getProductById(id));
  }, [dispatch, id]);

  // Handlers
  const handleEditModalOpen = () => {
    dispatch(toggleShowModalEditProduct(true));
  };

  return (
    <>
      <PageWrapper>
        {product && (
          <div className={s.productWrapper}>
            <div className={s.titleWrapper}>
              <h1 className={s.title}>{product.name}</h1>
              <button className={s.buttonEdit} onClick={handleEditModalOpen}>
                Edit Product
              </button>
            </div>
            <ProductInfo product={product} />
            <CommentsList comments={product.comments} productId={id} />
          </div>
        )}
      </PageWrapper>
      {/* {showModalEditProduct && <ModalEditProduct product={product} />} */}
    </>
  );
}

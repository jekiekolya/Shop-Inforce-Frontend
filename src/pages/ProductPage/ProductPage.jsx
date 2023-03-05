import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { productsSelectors } from 'redux/products/productsSelectors';
import productsOperations from 'redux/products/productsOperations';
import { modalSelectors } from 'redux/modal/modalSelectors';
import { toggleShowModalEditProduct } from 'redux/modal/modalSlice';

// Components
import PageWrapper from 'components/PageWrapper/PageWrapper';
import ProductInfo from 'components/ProductInfo/ProductInfo';
import CommentsList from 'components/CommentsList/CommentsList';
import ModalEditProduct from 'components/ModalWindow/ModalEditProduct/ModalEditProduct';
import Loader from 'components/Loader/Loader';

// Styles
import s from './ProductPage.module.scss';

export default function ProductPage() {
  const product = useSelector(productsSelectors.currentProduct);
  const isLoading = useSelector(productsSelectors.isLoadingProducts);
  const dispatch = useDispatch();
  const showModalEditProduct = useSelector(modalSelectors.showModalEditProduct);

  // Get product Id
  const { productId } = useParams();

  useEffect(() => {
    dispatch(productsOperations.getProductById(productId));
  }, [dispatch, productId]);

  // Handlers
  const handleEditModalOpen = () => {
    dispatch(toggleShowModalEditProduct(true));
  };

  return (
    <>
      <PageWrapper>
        {isLoading ? (
          <Loader center />
        ) : (
          <div className={s.productWrapper}>
            <div className={s.titleWrapper}>
              <h1 className={s.title}>{product.name}</h1>
              <button className={s.buttonEdit} onClick={handleEditModalOpen}>
                Edit Product
              </button>
            </div>
            <ProductInfo product={product} />
            <CommentsList comments={product.comments} productId={productId} />
          </div>
        )}
      </PageWrapper>
      {showModalEditProduct && <ModalEditProduct />}
    </>
  );
}

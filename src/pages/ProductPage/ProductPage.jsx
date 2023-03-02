import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { productsSelectors } from 'redux/products/productsSelectors';

// Components
import PageWrapper from 'components/PageWrapper/PageWrapper';
import ProductInfo from 'components/ProductInfo/ProductInfo';
import CommentsList from 'components/CommentsList/CommentsList';

// Styles
import s from './ProductPage.module.scss';
import productsOperations from 'redux/products/productsOperations';

export default function ProductPage() {
  const product = useSelector(productsSelectors.currentProduct);
  const dispatch = useDispatch();

  const location = useLocation();
  const pathName = [...location.pathname];
  pathName.shift();
  const id = pathName.join('');

  useEffect(() => {
    dispatch(productsOperations.getProductById(id));
  }, [dispatch, id]);

  return (
    <PageWrapper>
      {product && (
        <div className={s.productWrapper}>
          <h1 className={s.title}>{product.name}</h1>
          <ProductInfo product={product} />
          <CommentsList comments={product.comments} />
        </div>
      )}
    </PageWrapper>
  );
}

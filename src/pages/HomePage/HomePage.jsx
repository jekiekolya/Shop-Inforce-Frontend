// Components
import PageWrapper from 'components/PageWrapper/PageWrapper';
import ProductList from 'components/ProductList/ProductList';

// Styles
import s from './Homepage.module.scss';

const HomePage = () => {
  return (
    <PageWrapper>
      <div>
        <div className={s.titleWrapper}>
          <h1 className={s.title}>Products</h1>
          <button className={s.button}>Add Product</button>
        </div>
        <ProductList />
      </div>
    </PageWrapper>
  );
};

export default HomePage;

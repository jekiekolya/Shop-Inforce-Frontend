// Components
import PageWrapper from 'components/PageWrapper/PageWrapper';
import ProductList from 'components/ProductList/ProductList';

// Styles
import s from './Homepage.module.scss';

const HomePage = () => {
  return (
    <PageWrapper>
      <div>
        <h1 className={s.title}>Products</h1>
        <ProductList />
      </div>
    </PageWrapper>
  );
};

export default HomePage;

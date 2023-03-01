// Components
import PageWrapper from 'components/PageWrapper/PageWrapper';
import ProductInfo from 'components/ProductInfo/ProductInfo';
import CommentsList from 'components/CommentsList/CommentsList';

// Styles
import s from './ProductPage.module.scss';

const product = {
  id: 1,
  imageUrl:
    'https://thenextavenue.com/wp-content/uploads/2020/01/d5488662ff3849d66b89deba7ff175f2.png',
  name: 'Product name1 ',
  count: 4,
  size: {
    width: 200,
    height: 200,
  },
  weight: '200g',
  comments: [
    {
      id: 3,
      productId: 1,
      description: 'some text here',
      date: '14:00 22.08.2021',
    },
    {
      id: 1,
      productId: 1,
      description: 'some text here',
      date: '14:00 22.08.2021',
    },
  ],
};

export default function ProductPage() {
  return (
    <PageWrapper>
      <div className={s.productWrapper}>
        <h1 className={s.title}>{product.name}</h1>
        <ProductInfo product={product} />
        <CommentsList comments={product.comments} />
      </div>
    </PageWrapper>
  );
}

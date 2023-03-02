// React
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import productsOperations from 'redux/products/productsOperations';
import { productsSelectors } from 'redux/products/productsSelectors';

// Styles
import s from './ProductList.module.scss';

export default function ProductList() {
  const products = useSelector(productsSelectors.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsOperations.getAllProducts());
  }, [dispatch]);

  return (
    <ul className={s.list}>
      {products.map(item => (
        <li className={s.item} key={item.id}>
          <Link className={s.link} to={`/${item.id}`}>
            <img className={s.img} src={item.imageUrl} alt="Img product" />
            <h2 className={s.productName}>{item.name}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
}

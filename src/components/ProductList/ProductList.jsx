// React
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import productsOperations from 'redux/products/productsOperations';
import { productsSelectors } from 'redux/products/productsSelectors';
import {
  setDeletedProductId,
  toggleShowModalDeleteProduct,
} from 'redux/modal/modalSlice';
import { modalSelectors } from 'redux/modal/modalSelectors';

// Components
import { AiOutlineDelete } from 'react-icons/ai';
import ModalDeleteProduct from 'components/ModalWindow/ModalDeleteProduct/ModalDeleteProduct';

// Styles
import s from './ProductList.module.scss';

export default function ProductList() {
  const products = useSelector(productsSelectors.products);
  const sortedValue = useSelector(productsSelectors.sortedValue);
  const dispatch = useDispatch();

  const sortedProducts = [...products].sort((a, b) => {
    if (sortedValue === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortedValue === 'count') {
      console.log('a.count', a.count);
      return b.count - a.count;
    } else {
      return 1;
    }
  });

  useEffect(() => {
    dispatch(productsOperations.getAllProducts());
  }, [dispatch]);

  const showModalDeleteProduct = useSelector(
    modalSelectors.showModalDeleteProduct
  );

  // Handlers
  const handleDeleteBtn = id => {
    dispatch(setDeletedProductId(id));
    dispatch(toggleShowModalDeleteProduct(true));
  };

  return (
    <>
      <ul className={s.list}>
        {sortedProducts.map(item => (
          <li className={s.item} key={item._id}>
            <button
              className={s.buttonDelete}
              onClick={() => {
                handleDeleteBtn(item._id);
              }}
            >
              <AiOutlineDelete size={20} />
            </button>
            <Link className={s.link} to={`/${item._id}`}>
              <img className={s.img} src={item.imageUrl} alt="Img product" />
              <h2 className={s.productName}>{item.name}</h2>
              <p className={s.productCount}>{`Count: ${item.count}`}</p>
            </Link>
          </li>
        ))}
      </ul>
      {showModalDeleteProduct && <ModalDeleteProduct />}
    </>
  );
}

// Styles
import { Link } from 'react-router-dom';
import s from './ProductList.module.scss';

const api = [
  {
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
    comments: ['CommentModel', 'CommentModel'],
  },
  {
    id: 2,
    imageUrl:
      'https://thenextavenue.com/wp-content/uploads/2020/01/d5488662ff3849d66b89deba7ff175f2.png',
    name: 'Product name1',
    count: 4,
    size: {
      width: 200,
      height: 200,
    },
    weight: '200g',
    comments: ['CommentModel', 'CommentModel'],
  },
  {
    id: 3,
    imageUrl:
      'https://thenextavenue.com/wp-content/uploads/2020/01/d5488662ff3849d66b89deba7ff175f2.png',
    name: 'Product name1',
    count: 4,
    size: {
      width: 200,
      height: 200,
    },
    weight: '200g',
    comments: ['CommentModel', 'CommentModel'],
  },
  {
    id: 4,
    imageUrl:
      'https://thenextavenue.com/wp-content/uploads/2020/01/d5488662ff3849d66b89deba7ff175f2.png',
    name: 'Product name1',
    count: 4,
    size: {
      width: 200,
      height: 200,
    },
    weight: '200g',
    comments: ['CommentModel', 'CommentModel'],
  },
  {
    id: 5,
    imageUrl:
      'https://thenextavenue.com/wp-content/uploads/2020/01/d5488662ff3849d66b89deba7ff175f2.png',
    name: 'Product name1',
    count: 4,
    size: {
      width: 200,
      height: 200,
    },
    weight: '200g',
    comments: ['CommentModel', 'CommentModel'],
  },
  {
    id: 6,
    imageUrl:
      'https://thenextavenue.com/wp-content/uploads/2020/01/d5488662ff3849d66b89deba7ff175f2.png',
    name: 'Product name1',
    count: 4,
    size: {
      width: 200,
      height: 200,
    },
    weight: '200g',
    comments: ['CommentModel', 'CommentModel'],
  },
  {
    id: 7,
    imageUrl:
      'https://thenextavenue.com/wp-content/uploads/2020/01/d5488662ff3849d66b89deba7ff175f2.png',
    name: 'Product name1',
    count: 4,
    size: {
      width: 200,
      height: 200,
    },
    weight: '200g',
    comments: ['CommentModel', 'CommentModel'],
  },
  {
    id: 8,
    imageUrl:
      'https://thenextavenue.com/wp-content/uploads/2020/01/d5488662ff3849d66b89deba7ff175f2.png',
    name: 'Product name1',
    count: 4,
    size: {
      width: 200,
      height: 200,
    },
    weight: '200g',
    comments: ['CommentModel', 'CommentModel'],
  },
  {
    id: 9,
    imageUrl:
      'https://thenextavenue.com/wp-content/uploads/2020/01/d5488662ff3849d66b89deba7ff175f2.png',
    name: 'Product name1',
    count: 4,
    size: {
      width: 200,
      height: 200,
    },
    weight: '200g',
    comments: ['CommentModel', 'CommentModel'],
  },
  {
    id: 10,
    imageUrl:
      'https://thenextavenue.com/wp-content/uploads/2020/01/d5488662ff3849d66b89deba7ff175f2.png',
    name: 'Product name1',
    count: 4,
    size: {
      width: 200,
      height: 200,
    },
    weight: '200g',
    comments: ['CommentModel', 'CommentModel'],
  },
  {
    id: 11,
    imageUrl:
      'https://thenextavenue.com/wp-content/uploads/2020/01/d5488662ff3849d66b89deba7ff175f2.png',
    name: 'Product name1',
    count: 4,
    size: {
      width: 200,
      height: 200,
    },
    weight: '200g',
    comments: ['CommentModel', 'CommentModel'],
  },
  {
    id: 12,
    imageUrl:
      'https://thenextavenue.com/wp-content/uploads/2020/01/d5488662ff3849d66b89deba7ff175f2.png',
    name: 'Product name1',
    count: 4,
    size: {
      width: 200,
      height: 200,
    },
    weight: '200g',
    comments: ['CommentModel', 'CommentModel'],
  },
];

export default function ProductList() {
  return (
    <ul className={s.list}>
      {api.map(item => (
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

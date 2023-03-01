// Styles
import s from './ProductInfo.module.scss';

export default function ProductInfo({ product }) {
  const { imageUrl, name, count, size, weight } = product;

  return (
    <div className={s.infoWrapper}>
      <img className={s.img} src={imageUrl} alt={name} />
      <div className={s.descWrapper}>
        <h2 className={s.titleInfo}>Product information</h2>
        <p>
          <span className={s.nameProperty}>Count:</span>
          {count}
        </p>
        <p>
          <span className={s.nameProperty}>Size:</span>
          {`${size.width} x ${size.height}`}
        </p>
        <p>
          <span className={s.nameProperty}>Weight:</span>
          {weight}
        </p>
      </div>
    </div>
  );
}

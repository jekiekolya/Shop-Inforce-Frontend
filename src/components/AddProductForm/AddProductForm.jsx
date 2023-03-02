// React
import { useState } from 'react';

// Redux
import { useDispatch } from 'react-redux';
import productsOperations from 'redux/products/productsOperations';

// Libraries
import { Notify } from 'notiflix';

// Styles
import s from './AddProductForm.module.scss';

export default function AddProductForm() {
  const [imgProduct, setImgProduct] = useState('');
  const [imgProductFile, setImgProductFile] = useState(null);
  const [productName, setProductName] = useState('');
  const [productCount, setProductCount] = useState(0);
  const [productWidth, setProductWidth] = useState(0);
  const [productHeight, setProductHeight] = useState(0);
  const [productWeight, setProductWeight] = useState('');

  // Dispatch
  const dispatch = useDispatch();

  // handlers
  const handleOnChangeFile = e => {
    const productImg = e.target.value;
    const productImgFile = e.target.files[0];
    const imgFormat = productImg.split('.').at(-1);

    if (imgFormat !== 'png' && imgFormat !== 'jpeg' && imgFormat !== 'jpg') {
      Notify.failure('Invalid image format. It has to be: PNG, JPEG or JPG');
      setImgProduct('');
      setImgProductFile(null);
      return;
    }

    const data = new FormData();
    data.append('product_img', productImgFile);

    setImgProduct(productImg);
    setImgProductFile(data);
  };

  const handleOnChangeName = e => {
    setProductName(e.target.value);
  };
  const handleOnChangeCount = e => {
    setProductCount(e.target.valueAsNumber);
  };
  const handleOnChangeWidth = e => {
    setProductWidth(e.target.valueAsNumber);
  };
  const handleOnChangeHeight = e => {
    setProductHeight(e.target.valueAsNumber);
  };
  const handleOnChangeWeight = e => {
    setProductWeight(e.target.value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();

    const dataForm = {
      imgProductFile,
      productName,
      productCount,
      productWidth,
      productHeight,
      productWeight,
    };

    if (imgProductFile === null || productName === '' || productWeight === '') {
      Notify.failure('All fields are required');
      return;
    }

    dispatch(productsOperations.addProduct(dataForm));
  };

  return (
    <div className={s.formWrapper}>
      <h2 className={s.title}>Add Product</h2>
      <form encType="multipart/form-data">
        <label className={s.user}>
          <input
            type="file"
            name="productImg"
            onChange={handleOnChangeFile}
            value={imgProduct}
          />
        </label>
      </form>
      <form className={s.form} autoComplete>
        <label className={s.label}>
          <p>Product Name</p>
          <input
            type="text"
            name="productName"
            onChange={handleOnChangeName}
            value={productName}
          />
        </label>
        <label className={s.label}>
          <p>Count</p>
          <input
            type="number"
            name="count"
            onChange={handleOnChangeCount}
            value={productCount}
          />
        </label>

        <div>
          <p>Size</p>
          <div className={s.sizeWrapper}>
            <label className={s.label}>
              <p>Width</p>
              <input
                type="number"
                name="width"
                onChange={handleOnChangeWidth}
                value={productWidth}
              />
            </label>
            <label className={s.label}>
              <p>Height</p>
              <input
                type="number"
                name="height"
                onChange={handleOnChangeHeight}
                value={productHeight}
              />
            </label>
          </div>
        </div>
        <label className={s.label}>
          <p>Weight</p>
          <input
            type="text"
            name="weight"
            onChange={handleOnChangeWeight}
            value={productWeight}
          />
        </label>
        <button className={s.button} onClick={handleOnSubmit}>
          Add product
        </button>
      </form>
    </div>
  );
}

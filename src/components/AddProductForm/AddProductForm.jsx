// React
import { useState } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import productsOperations from 'redux/products/productsOperations';
import { productsSelectors } from 'redux/products/productsSelectors';

// Libraries
import { Notify } from 'notiflix';

// Components
import { Loader } from 'components';
import InputField from 'components/InputField/InputField';

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
  const isLoadingProducts = useSelector(productsSelectors.isLoadingProducts);

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
      <form encType="multipart/form-data">
        <label className={s.label}>
          <p className={s.inputTitle}>Product photo</p>
          <input
            type="file"
            name="productImg"
            onChange={handleOnChangeFile}
            value={imgProduct}
          />
        </label>
      </form>
      <form className={s.form}>
        <InputField
          inputTitle="Product Name"
          type="text"
          name="productName"
          onChange={handleOnChangeName}
          value={productName}
        />
        <InputField
          inputTitle="Count"
          type="number"
          name="count"
          onChange={handleOnChangeCount}
          value={productCount}
        />

        <div>
          <p className={s.sizeTitle}>Size:</p>
          <div className={s.sizeWrapper}>
            <InputField
              inputTitle="Width"
              type="number"
              name="width"
              onChange={handleOnChangeWidth}
              value={productWidth}
            />
            <InputField
              inputTitle="Height"
              type="number"
              name="height"
              onChange={handleOnChangeHeight}
              value={productHeight}
            />
          </div>
        </div>
        <InputField
          inputTitle="Weight"
          type="text"
          name="weight"
          onChange={handleOnChangeWeight}
          value={productWeight}
        />
        <button className={s.button} onClick={handleOnSubmit}>
          {isLoadingProducts ? (
            <Loader height={'20'} width={'20'} />
          ) : (
            'Add product'
          )}
        </button>
      </form>
    </div>
  );
}

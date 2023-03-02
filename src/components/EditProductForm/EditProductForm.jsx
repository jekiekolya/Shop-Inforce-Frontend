// React
import { useState } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import productsOperations from 'redux/products/productsOperations';
import { productsSelectors } from 'redux/products/productsSelectors';

// Libraries
import { Notify } from 'notiflix';

// Components
import InputField from 'components/InputField/InputField';

// Styles
import s from './EditProductForm.module.scss';

export default function EditProductForm() {
  const product = useSelector(productsSelectors.currentProduct);

  const [imgProduct, setImgProduct] = useState('');
  const [imgProductFile, setImgProductFile] = useState(null);
  const [productName, setProductName] = useState(product.name);
  const [productCount, setProductCount] = useState(product.count);
  const [productWidth, setProductWidth] = useState(product.size.width);
  const [productHeight, setProductHeight] = useState(product.size.height);
  const [productWeight, setProductWeight] = useState(product.weight);

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
      imageUrl: product.imageUrl,
      productName,
      productCount,
      productWidth,
      productHeight,
      productWeight,
      productId: product._id,
    };

    if (productName === '' || productWeight === '') {
      Notify.failure('All fields are required');
      return;
    }

    console.log('dataForm', dataForm);
    dispatch(productsOperations.editProductById(dataForm));
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
          Edit product
        </button>
      </form>
    </div>
  );
}

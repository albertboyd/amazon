// components/ProductDetail.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';
import Image from 'next/image';
import styles from './ProductDetail.module.css';

function ProductDetail({ product }) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      category,
      description,
      image,
      price,
      rating,
    };
    dispatch(addToBasket(product));
  };



  return (
    <div className={styles.productDetail}>
      <div className={styles.productDetail__image}>
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
          objectFit="contain"
        />
      </div>
      <div className={styles.productDetail__info}>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h2>${product.price}</h2>
        <button onClick={addItemToBasket} className="mt-auto button">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;

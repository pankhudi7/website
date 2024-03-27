import React from 'react';
import styles from "./Product.module.css";
import { Link, useNavigate } from 'react-router-dom';

function Product({ id, imageUrl, heading }) {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(`Heading clicked for product with ID ${id}`);
    navigate(`/info/${id}`);
  };

  return (
    <div className={styles.mainproduct}>
      <div className={styles.productcard}>
        <div className={styles.imgcontainer}>
          <img src={imageUrl} alt="card" />
        </div>
        <div className={styles.headingcontainer} onClick={handleClick}>
          <Link to={`/info/${id}`} className={styles.link}>
            <h3 className={styles.head}>{heading}</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;

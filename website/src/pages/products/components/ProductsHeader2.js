import Image from 'next/image';
import styles from '../styles/products.module.css';

const ProductsHeader2 = () => {
  return (
    <div className={styles.ProductsContainer}>
      <div className={styles.Productsimge}>
        <Image src='/Product2.png' alt='Best Seller' width={800} height={600} />
      </div>
      <div className={styles.ProductsContent}>
        <h1>New Arrivals</h1>
        <p>We are a private, independent practice constantly striving to provide excellence in personalized, compassionate care that is consistent, quality-driven and choice-conscious for all of our patients. Our staff is well trained, caring and professional. Each and every one of us respects the diversity and dignity of our patients. We welcome advances in learning and technology in an effort to achieve efficient and quality-driven patient care.</p>
      </div>
    </div>
  );
};

export default ProductsHeader2;

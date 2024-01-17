import Image from 'next/image';
import styles from '../styles/index.module.css';

const IndexHeader = () => {
  return (
    <div className={styles.header}>
      <Image
        src="/HomeCarousel1.png" // Adjust the path based on your project structure
        alt="Home"
        layout="responsive"
        width={1200}
        height={600}
      />
    </div>
  );
};

export default IndexHeader;

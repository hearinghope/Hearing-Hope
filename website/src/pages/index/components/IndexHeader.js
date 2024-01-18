import Image from 'next/image';
import styles from '../styles/index.module.css';

const IndexHeader = () => {
  return (
    <div className={styles.header}>
      <Image
        src="/Home/HomeCarousel1.png" // Adjust the path based on your project structure
        alt="HomeCarousel"
        width={1200}
        height={600}
      />
    </div>
  );
};

export default IndexHeader;

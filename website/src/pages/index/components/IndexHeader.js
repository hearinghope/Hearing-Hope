// pages/index.js
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/index.module.css';

const images = [
  { path: '/Home/HomeCarousel1.png', width: 800, height: 600 },
  { path: '/Home/HomeCarousel2.png', width: 800, height: 600 },
  { path: '/Home/HomeCarousel3.png', width: 800, height: 600 },
  { path: '/Home/HomeCarousel4.png', width: 800, height: 600 },
  { path: '/Home/HomeCarousel5.png', width: 800, height: 600 },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.Homecarousel}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.Homeslide} ${index === currentIndex ? styles.Homeactive : ''}`}
          style={{ opacity: index === currentIndex ? 1 : 0, transition: 'opacity 1s easy-in-out' }}
        >
          <Image src={image.path} alt={`Slide ${index + 1}`} width={image.width} height={image.height} />
        </div>
      ))}
    </div>
  );
};

const IndexHeader = () => {
  return (
    <div>
      <Carousel />
    </div>
  );
};

export default IndexHeader;

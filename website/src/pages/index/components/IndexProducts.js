import styles from '../styles/index.module.css';
import React, { useRef, useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

const IndexProducts = () => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Wrap the initialization of 'certificationsData' in useMemo
  const certificationsData = useMemo(
    () => [
      { id: 1, imgeUrl: '/Product2.png', description: 'Product 1' },
      { id: 2, imgeUrl: '/Product2.png', description: 'Product 1' },
      { id: 3, imgeUrl: '/Product2.png', description: 'Product 1' },
      { id: 4, imgeUrl: '/Product2.png', description: 'Product 1' },
      { id: 5, imgeUrl: '/Product2.png', description: 'Product 1' },
      { id: 6, imgeUrl: '/Product2.png', description: 'Product 1' },
    ],
    []
  );

  useEffect(() => {
    const handleAutomaticScroll = (direction) => {
      const nextSlide = (currentSlide + 1) % certificationsData.length;
      setCurrentSlide(nextSlide);
      const scrollPosition = nextSlide * 320; // Adjust based on the width of the products

      // Use scrollTo with behavior: 'smooth' for smooth scrolling
      carouselRef.current?.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    };

    const interval = setInterval(() => {
      handleAutomaticScroll('right');
    }, 5000); // Adjust the duration for automatic scrolling

    return () => clearInterval(interval);
  }, [currentSlide, certificationsData]);

  const handleManualNavigation = (index) => {
    setCurrentSlide(index);
    const scrollPosition = index * 320; // Adjust based on the width of the products

    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleWheel = (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
    }
  };

  return (
    <div className={styles.ProductcarouselContainer}>
      <h1 style={{ color: '#ff6600', fontSize: '45px' }}>Our Products</h1>
      <div className={styles.carousel} ref={carouselRef} onWheel={handleWheel}>
        {certificationsData.map((certification, index) => (
          <div
            key={certification.id}
            className={styles.certificationItem}
            onClick={() => handleManualNavigation(index)}
          >
            <Image
              src={certification.imgeUrl}
              alt={`Certification ${certification.id}`}
              width={350} // Adjust the width
              height={300} // Adjust the height
            />
            <p className={styles.ProductsName}>{certification.description}</p>
          </div>
        ))}
      </div>
      <div className={styles.dots}>
        {certificationsData.map((_, index) => (
          <span
            key={index}
            className={currentSlide === index ? styles.activeDot : styles.dot}
            onClick={() => handleManualNavigation(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default IndexProducts;

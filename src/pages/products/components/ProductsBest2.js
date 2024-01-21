import styles from '../styles/products.module.css';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const ProductsBest2 = () => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const productsData = [
    { id: 1, imgUrl: '/Products/Product2.png', description: 'Product 1' },
    { id: 2, imgUrl: '/Products/PureDry&CleanCharger.png', description: 'Pure Dry & Clean Charger' },
    { id: 3, imgUrl: '/Products/Pure CnG IX.png', description: 'Pure CnG IX' },
    { id: 4, imgUrl: '/Products/SilkCNGIX.png', description: 'Silk CNG IX' },
    { id: 5, imgUrl: '/Products/Pure Charger.png', description: 'Pure Charger' },
    { id: 6, imgUrl: '/Products/PureCNG.png', description: 'Pure CNG' },
  ];

  useEffect(() => {
    const handleAutomaticScroll = (direction) => {
      const nextSlide = (currentSlide + 1) % productsData.length;
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
    }, 7000); // Adjust the duration for automatic scrolling
  
    return () => clearInterval(interval);
  }, [currentSlide, productsData.length]);

  const handleManualNavigation = (index) => {
    const scrollPosition = index * 320; // Adjust based on the width of the products

    // Use scrollTo with behavior: 'smooth' for smooth scrolling
    carouselRef.current?.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    });

    setCurrentSlide(index);
  };

  const handleWheel = (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
    }
  };

  return (
    <div className={styles.ProductcarouselContainer}>
      <div className={styles.carousel} ref={carouselRef} onWheel={handleWheel}>
        {productsData.map((product, index) => (
          <div key={product.id} className={styles.certificationItem}>
            <Image
              src={product.imgUrl}
              alt={`Product ${product.id}`}
              width={500} // Adjust the width
              height={250} // Adjust the height
            />
            <p className={styles.ProductsName}>{product.description}</p>
          </div>
        ))}
      </div>
      <div className={styles.dots}>
        {productsData.map((_, index) => (
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

export default ProductsBest2;

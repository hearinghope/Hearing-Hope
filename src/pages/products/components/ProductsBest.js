import styles from '../styles/products.module.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import React, { useRef, useState, useEffect, useMemo } from 'react';
import Image from 'next/image'; // Import the Image component

const ProductsBest = () => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const certificationsData = useMemo(() => [
    { id: 1, imgeUrl: '/Products/Product2.png', description: 'Kit Pure Charge & Go 1AX' },
    { id: 2, imgeUrl: '/Products/InsioCharge&GoAX.png', description: 'Kit Insio Charge & Go AX' },
    { id: 3, imgeUrl: '/Products/ActivePro.png', description: 'Kit Active Pro' },
    { id: 4, imgeUrl: '/Products/BTEmotionCharge.png', description: 'Kit BTE Motion Charge & Go SP 1X' },
    { id: 5, imgeUrl: '/Products/Styletto.png', description: 'Styletto AX' },
    { id: 6, imgeUrl: '/Products/PureCharge&GoAX.png', description: 'Kit Pure Charge & Go AX' },
    { id: 7, imgeUrl: '/Products/BestSeller.png', description: 'Silk Rechargeable IX' },
  ], []); // The empty dependency array ensures that useMemo runs only once

  useEffect(() => {
    const handleAutomaticScroll = () => {
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
      handleAutomaticScroll();
    }, 7000); // Adjust the duration for automatic scrolling

    return () => clearInterval(interval);
  }, [currentSlide, certificationsData]);

  const handleManualNavigation = (direction) => {
    const scrollAmount = direction === 'left' ? -320 : 320; // Adjust based on the width of the certificationItem

    // Use scrollLeft for manual navigation
    carouselRef.current.scrollLeft += scrollAmount;
  };

  const handleWheel = (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
    }
  };

  return (
    <div className={styles.ProductcarouselContainer}>
      <div className={styles.carousel} ref={carouselRef} onWheel={handleWheel}>
        {certificationsData.map((certification, index) => (
          <div key={certification.id} className={styles.certificationItem}>
            <Image
              src={certification.imgeUrl}
              alt={`Certification ${certification.id}`}
              width={500} // Adjust the width
              height={250} // Adjust the height
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

export default ProductsBest;

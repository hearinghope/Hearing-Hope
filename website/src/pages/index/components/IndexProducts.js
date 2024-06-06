import styles from '../styles/index.module.css';
import React, { useRef, useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const IndexProducts = () => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const certificationsData = useMemo(
    () => [
      { id: 1, imageUrl: '/Products/SigniaBTEFastP.png', description: 'Signia BTE Fast P', href: '/hearing-aids/models/signia-bte-fast-p' },
      { id: 2, imageUrl: '/Products/SigniaBTEFastP.png', description: 'Signia BTE Fun P', href: '/hearing-aids/models/signia-bte-fun-p' },
      { id: 3, imageUrl: '/Products/BTEFunSP.png', description: 'Signia BTE Fun SP', href: '/hearing-aids/models/signia-bte-fun-sp' },
      { id: 4, imageUrl: '/Products/SigniaPromptPSP.png', description: 'Signia BTE prompt P', href: '/hearing-aids/models/signia-bte-prompt-p' },
      { id: 5, imageUrl: '/Products/SigniaPromptPSP.png', description: 'Signia BTE Prompt SP', href: '/hearing-aids/models/signia-bte-prompt-sp' },
      { id: 6, imageUrl: '/Products/CICInsio1.png', description: 'Signia CIC prompt Custom', href: '/hearing-aids/models/signia-cic-prompt-custom' },
      { id: 7, imageUrl: '/Products/BTEIntuis40PSP.png', description: 'Signia Digital - 12 channel', href: '/hearing-aids/models/signia-digital-12-channel' },
      { id: 8, imageUrl: '/Products/BTEIntuis40PSP.png', description: 'Signia BTE INTUIS 4.0 P/ SP', href: '/hearing-aids/models/signia-bte-intuis-4.0-p-sp' },
      { id: 9, imageUrl: '/Products/BestSeller.png', description: 'Signia Digital - 16 channel', href: '/hearing-aids/models/signia-digital-16-channel' },
      { id: 10, imageUrl: '/Products/BTEIntuis40PSP.png', description: 'Signia BTE INTUIS 4.1 P/SP', href: '/hearing-aids/models/signia-bte-intuis-4.1-p-sp' },
      { id: 11, imageUrl: '/Products/CICInsio1.png', description: 'Signia Cic Insio 1Px Custom', href: '/hearing-aids/models/signia-cic-insio-1px-custom' },
      { id: 12, imageUrl: '/Products/Pure312X.png', description: 'Signia RIC - 16 channel', href: '/hearing-aids/models/signia-ric-16-channel' },
      { id: 13, imageUrl: '/Products/Pure312X.png', description: 'Signia RIC Pure 1Px', href: '/hearing-aids/models/signia-ric-pure-1px' },
      { id: 14, imageUrl: '/Products/PureCharge&GoAX.png', description: 'Signia Ric pure 1X', href: '/hearing-aids/models/signia-ric-pure-1x' },
      { id: 15, imageUrl: '/Products/Pure312X.png', description: 'Signia Ric pure 1AX', href: '/hearing-aids/models/signia-ric-pure-1ax' },
      { id: 16, imageUrl: '/Products/Styletto.png', description: 'Signia KIT Styletto 1AX- 16 channel', href: '/hearing-aids/models/signia-kit-styletto-1ax-16-channel' },
      { id: 17, imageUrl: '/Products/Pure CnG IX.png', description: 'Signia Pure charge & Go 1AX- 16 channel', href: '/hearing-aids/models/signia-pure-charge-&-go-1ax-16-channel' },
      { id: 18, imageUrl: '/Products/SilkNxCouple.png', description: 'Signia Silk 1X- 16 channel', href: '/hearing-aids/models/signia-silk-1x-16-channel' },
      { id: 19, imageUrl: '/Products/ActivePro.png', description: 'Signia Kit Active  - 16 channel', href: '/hearing-aids/models/signia-kit-active-16-channel' },
    ],
    []
  );

  const handleImageClick = (href) => {
    router.push(href);
  };

  useEffect(() => {
    const handleAutomaticScroll = () => {
      const nextSlide = (currentSlide + 1) % certificationsData.length;
      setCurrentSlide(nextSlide);
      const scrollPosition = nextSlide * 320; // Adjust based on the width of the products
      carouselRef.current?.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    };

    const interval = setInterval(handleAutomaticScroll, 7000);
    return () => clearInterval(interval);
  }, [currentSlide, certificationsData]);

  const handleManualNavigation = (index) => {
    setCurrentSlide(index);
    const scrollPosition = index * 320; // Adjust based on the width of the products
    carouselRef.current?.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    });
  };

  const handleWheel = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.ProductcarouselContainer}>
      <h1 style={{ color: '#ff6600', fontSize: '45px' }}>Our Products</h1>
      <div className={styles.carousel} ref={carouselRef} onWheel={handleWheel}>
        {certificationsData.map((certification, index) => (
          <div key={certification.id} className={styles.certificationItem} onClick={() => handleManualNavigation(index)}>
            <div onClick={() => handleImageClick(certification.href)}>
              <Image src={certification.imageUrl} alt={`Certification ${certification.id}`} width={350} height={300} />
            </div>
            <p className={styles.ProductsName}>{certification.description}</p>
          </div>
        ))}
      </div>
      <div className={styles.dots}>
        {certificationsData.map((_, index) => (
          <span key={index} className={currentSlide === index ? styles.activeDot : styles.dot} onClick={() => handleManualNavigation(index)}></span>
        ))}
      </div>
    </div>
  );
};

export default IndexProducts;

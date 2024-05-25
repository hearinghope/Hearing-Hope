import React, { useState } from 'react';
import Link from 'next/link'; // Import the Link component
import Image from 'next/image'; // Import the Image component
import styles from './styles/navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [isSubProduct1MenuOpen, setIsSubProduct1MenuOpen] = useState(false);
  const [isSubProduct2MenuOpen, setIsSubProduct2MenuOpen] = useState(false);
  const [isSubProduct3MenuOpen, setIsSubProduct3MenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleProductsMenu = () => {
    setIsProductsMenuOpen(!isProductsMenuOpen);
    setIsSubProduct1MenuOpen(false);
    setIsSubProduct2MenuOpen(false);
    setIsSubProduct3MenuOpen(false);
    setIsServicesMenuOpen(false);
  };

  const toggleSubProduct1Menu = () => {
    setIsSubProduct1MenuOpen(!isSubProduct1MenuOpen);
    setIsSubProduct2MenuOpen(false);
    setIsSubProduct3MenuOpen(false);
    setIsServicesMenuOpen(false);
  };

  const toggleSubProduct2Menu = () => {
    setIsSubProduct2MenuOpen(!isSubProduct2MenuOpen);
    setIsSubProduct1MenuOpen(false);
    setIsSubProduct3MenuOpen(false);
    setIsServicesMenuOpen(false);
  };

  const toggleSubProduct3Menu = () => {
    setIsSubProduct3MenuOpen(!isSubProduct3MenuOpen);
    setIsSubProduct1MenuOpen(false);
    setIsSubProduct2MenuOpen(false);
    setIsServicesMenuOpen(false);
  };

  const toggleServicesMenu = () => {
    setIsServicesMenuOpen(!isServicesMenuOpen);
    setIsSubProduct1MenuOpen(false);
    setIsSubProduct2MenuOpen(false);
    setIsSubProduct3MenuOpen(false);
    setIsProductsMenuOpen(false);
  };

  const handleNavbarVisibility = () => {
    setNavbarVisible(!isNavbarVisible);
  };

  return (
    <div
      className={`${styles.navbar} ${isMenuOpen ? styles.open : ''} ${
        isNavbarVisible ? styles.visible : ''
      }`}
      onMouseEnter={handleNavbarVisibility}
    >
      <div className={styles.logo}>
        <Link href='/'>
          <Image src="/logo-transparent.png" alt="logo" height={100} width={100} />
        </Link>
      </div>

      <div className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
        <Link href="/" style={{ fontWeight: '500' }}>
          Home
        </Link>
        <Link href="/about" style={{ fontWeight: '500' }}>
          About
        </Link>
        {/* <Link href="/onlineHearingTest" style={{ fontWeight: '500'}}>
          Online Hearing Test
          <p style={{fontSize: '10px', color:'orange'}}>Quick Test!!</p>
        </Link> */}
        <div className={styles.dropdown}>
          <span
            className={styles.dropbtn}
            style={{ cursor: 'pointer', fontWeight: 500 }}
            onClick={toggleServicesMenu}
          >
            
            Services &#9662;
            
          </span>
          {isServicesMenuOpen && (
            <div className={styles.dropdownContent}>
              <Link href="../../services" className={styles.dropdownContentLinks}>All Services</Link>
              <Link href="../../services/hearing-test-in-delhi" className={styles.dropdownContentLinks}>Hearing Test Services</Link>
              <Link href="../../services/speech-therapy-in-delhi" className={styles.dropdownContentLinks}>Speech Therapy Services</Link>
              {/* <Link href="../../services/Audiologist" className={styles.dropdownContentLinks}>Audiologist</Link> */}
              <Link href="../../services/HearingCare" className={styles.dropdownContentLinks}>Hearing Care</Link>
              <Link href="../../services/hearing-aid-center-in-delhi" className={styles.dropdownContentLinks}>Hearing Aid Centre</Link>
            </div>
          )}
        </div>
        <Link href="/blog" style={{ fontWeight: '500' }}>
          Blog
        </Link>
        <div className={styles.dropdown}>
          <span
            className={styles.dropbtn}
            style={{ cursor: 'pointer', color: 'black', fontWeight: 500  }}
            onClick={toggleProductsMenu}
          >
            Hearing Aids &#9662;
          </span>
          {isProductsMenuOpen && (
            <div className={styles.dropdownContent}>
             <div className={styles.subDropdown} >
               <Link href="../../hearing-aids/Hearing-aids" className={styles.dropdownContentLinks}>All Hearing Aids</Link>
               </div>
              <div className={styles.subDropdown} onClick={toggleSubProduct1Menu}>
                <span>Hearing Aids Types &#9662;</span>
                {isSubProduct1MenuOpen && (
                  <div className={styles.subDropdownContent}>
                    <Link href="/hearing-aids/types/BTEHearingAids" className={styles.subDropdownContentLinks}>BTE Hearing Aids</Link>
                    <Link href="/hearing-aids/types/CICHearingAids" className={styles.subDropdownContentLinks}>CIC Hearing Aids</Link>
                    <Link href="/hearing-aids/types/ITCHearingAids" className={styles.subDropdownContentLinks}>ITC Hearing Aids</Link>
                    <Link href="/hearing-aids/types/IICHearingAids" className={styles.subDropdownContentLinks}>IIC Hearing Aids</Link>
                    <Link href="/hearing-aids/types/RICHearingAids" className={styles.subDropdownContentLinks}>RIC Hearing Aids</Link>
                    <Link href="/hearing-aids/types/RechargeableHearingAids" className={styles.subDropdownContentLinks}>Rechargeable Hearing Aids</Link>
                    <Link href="/hearing-aids/types/AnalogHearingAids" className={styles.subDropdownContentLinks}>Analog Hearing Aids</Link>
                    <Link href="/hearing-aids/types/WirelessHearingAids" className={styles.subDropdownContentLinks}>Wireless Hearing Aids</Link>
                    <Link href="/hearing-aids/types/BluetoothHearingAids" className={styles.subDropdownContentLinks}>Bluetooth Hearing Aids </Link>
                    <Link href="/hearing-aids/types/MicroincanalHearingAids" className={styles.subDropdownContentLinks}>Micro in Canal Hearing Aids </Link>
                    <Link href="/hearing-aids/types/PocketHearingAids" className={styles.subDropdownContentLinks}>Pocket Hearing Aids </Link>
                  </div>
                )}
              </div>
              {/* <div className={styles.subDropdown} onClick={toggleSubProduct2Menu}>
                <span>Hearing Aids Accessories &#9662;</span>
                {isSubProduct2MenuOpen && (
                  <div className={styles.subDropdownContent}>
                    <Link href="/products/HearingAidsBatteries" className={styles.subDropdownContentLinks}>Hearing Aids Batteries</Link>
                    <Link href="/products/HearingAidFitting" className={styles.subDropdownContentLinks}>Hearing Aid Fitting</Link>
                    <Link href="/products/HearingAidAccessories-3" className={styles.subDropdownContentLinks}>Hearing Aid Accessories-3</Link>
                  </div>
                )}
              </div> */}
              <div className={styles.subDropdown} onClick={toggleSubProduct3Menu}>
                <span>Hearing Aids Models &#9662;</span>
                {isSubProduct3MenuOpen && (
                  <div className={styles.subDropdownContent}>
                    <Link href="/hearing-aids/models/signia-bte-fast-p" className={styles.subDropdownContentLinks}>Signia BTE Fast P</Link>
                    <Link href="/hearing-aids/models/signia-bte-fun-p" className={styles.subDropdownContentLinks}>Signia BTE Fun P</Link>
                    <Link href="/hearing-aids/models/signia-bte-fun-sp" className={styles.subDropdownContentLinks}>Signia BTE Fun SP</Link>
                    <Link href="/hearing-aids/models/Digital8Channel" className={styles.subDropdownContentLinks}>Signia Digital - 8 channel</Link>
                    <Link href="/hearing-aids/models/signia-bte-prompt-p" className={styles.subDropdownContentLinks}>Signia BTE prompt P</Link>
                    <Link href="/hearing-aids/models/signia-bte-prompt-sp" className={styles.subDropdownContentLinks}>Signia BTE Prompt SP</Link>
                    <Link href="/hearing-aids/models/signia-cic-prompt-custom" className={styles.subDropdownContentLinks}>Signia CIC prompt Custom</Link>
                    <Link href="/hearing-aids/models/signia-digital-12-channel" className={styles.subDropdownContentLinks}>Signia Digital - 12 channel</Link>
                    <Link href="/hearing-aids/models/signia-bte-intuis-4.0-p-sp" className={styles.subDropdownContentLinks}>Signia BTE INTUIS 4.0 P/ SP</Link>
                    <Link href="/hearing-aids/models/signia-digital-16-channel" className={styles.subDropdownContentLinks}>Signia Digital - 16 channel</Link>
                    <Link href="/hearing-aids/models/signia-bte-intuis-4.1-p-sp" className={styles.subDropdownContentLinks}>Signia BTE INTUIS 4.1 P/SP</Link>
                    <Link href="/hearing-aids/models/signia-cic-insio-1px-custom" className={styles.subDropdownContentLinks}>Signia Cic Insio 1Px Custom</Link>
                    <Link href="/hearing-aids/models/signia-ric-16-channel" className={styles.subDropdownContentLinks}>Signia RIC - 16 channel</Link>
                    <Link href="/hearing-aids/models/signia-ric-pure-1px" className={styles.subDropdownContentLinks}>Signia RIC Pure 1Px</Link>
                    <Link href="/hearing-aids/models/signia-ric-pure-1x" className={styles.subDropdownContentLinks}>Signia RIC pure 1X</Link>
                    <Link href="/hearing-aids/models/signia-ric-pure-1ax" className={styles.subDropdownContentLinks}>Signia Ric pure 1AX</Link>
                    <Link href="/hearing-aids/models/signia-kit-styletto-1ax-16-channel" className={styles.subDropdownContentLinks}>Signia KIT Styletto 1AX- 16 channel</Link>
                    <Link href="/hearing-aids/models/signia-pure-charge-&-go-1ax-16-channel" className={styles.subDropdownContentLinks}>Pure charge & Go 1AX- 16 channel</Link>
                    <Link href="/hearing-aids/models/signia-silk-1x-16-channel" className={styles.subDropdownContentLinks}>Signia Silk 1X- 16 channel</Link>
                    <Link href="/hearing-aids/models/signia-kit-active-16-channel" className={styles.subDropdownContentLinks}>Signia Kit Active  - 16 channel</Link>
                   
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <Link href="/contact">
          <button type="button" className={styles.NavButton}>
            Contact Us
          </button>
        </Link>
      </div>

      <div className={`${styles.socialLinks} ${isMenuOpen ? styles.open : ''}`}>
        <Link href="/contact">
          <button type="button" className={styles.NavButton2}>
            Contact Us
          </button>
        </Link>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </div>
  );
};

export default Navbar;

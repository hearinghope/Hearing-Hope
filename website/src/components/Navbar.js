
import React, { useState } from 'react';
import Link from 'next/link'; // Import the Link component
import Image from 'next/image'; // Import the Image component
import styles from './styles/navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${styles.navbar} ${isMenuOpen ? styles.open : ''}`}>
      <div className={styles.logo}>
        <Image src="/logo-transparent.png" alt="logo" height={100} width={100} />
      </div>

      <div className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
        <Link href="/" style={{ fontWeight: '500' }}>
          Home
        </Link>
        <Link href="/about" style={{ fontWeight: '500' }}>
          About
        </Link>
        <Link href="/service" style={{ fontWeight: '500' }}>
          Services
        </Link>
        <Link href="/blog" style={{ fontWeight: '500' }}>
          Blog
        </Link>
        <Link href="/products" style={{ fontWeight: '500' }}>
          Products
        </Link>
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

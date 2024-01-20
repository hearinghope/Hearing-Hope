import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './styles/PopupForm.module.css';

const PopupForm = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if the popup should be visible based on a flag in localStorage
    const hasPopupBeenShown = localStorage.getItem('hasPopupBeenShown');
    if (!hasPopupBeenShown) {
      setIsVisible(true);
    }
  }, []);

  const handleCrossButtonClick = () => {
    setIsVisible(false);
    onClose();

    // Set a flag in localStorage to indicate that the popup has been shown
    localStorage.setItem('hasPopupBeenShown', 'true');

    // Navigate to the home page after closing the form
    router.push('/');
  };

  return (
    isVisible && (
      <div className={styles.popup}>
        <div className={styles.formContainer}>
          <center>
            <h1 style={{ color: '#ff6600', marginBottom: '20px', fontSize: '35px' }}>Connect With Us</h1>
          </center>
          <label>Name: </label>
          <input type="text" placeholder="Your Name..." />
          <label>Phone Number: </label>
          <input type="tel" placeholder="+91 ...." />
          <label>Email: </label>
          <input type="email" placeholder="@gmail.com" />
          <label>Message: </label>
          <input type="text" placeholder="Optional..." />

          <div className={styles.FormSubmit}>
            <button type="submit">Submit</button>
            <button onClick={handleCrossButtonClick} className={styles.btn}>
              Later
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default PopupForm;

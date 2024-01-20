import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './styles/PopupForm.module.css';

const PopupForm = ({ onClose }) => {

  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    PhoneNumber: '',
    Message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('URL_TO_YOUR_GOOGLE_APPS_SCRIPT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Handle successful form submission
  
        // Close the popup form
        onClose();
  
        // Set a flag in localStorage to indicate that the popup has been shown
        localStorage.setItem('hasPopupBeenShown', 'true');
  
        // Navigate to the home page
        router.push('/');
  
        console.log('Form submitted successfully');
      } else {
        // Handle failed form submission
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


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
          <input type="text" placeholder="Your Name..." onChange={handleChange}/>
          <label>Phone Number: </label>
          <input type="tel" placeholder="+91 ...." />
          <label>Email: </label>
          <input type="email" placeholder="@gmail.com" onChange={handleChange}/>
          <label>Message: </label>
          <input type="text" placeholder="Optional..."  onChange={handleChange}/>

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

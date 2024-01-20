import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './styles/PopupForm.module.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyChtn1kg8jerQFj6t1dEP1Pwy0a9s0hEgI",
  authDomain: "hearinghope-96349.firebaseapp.com",
  projectId: "hearinghope-96349",
  storageBucket: "hearinghope-96349.appspot.com",
  messagingSenderId: "243314305458",
  appId: "1:243314305458:web:2a3f79b072265c45b35cab",
  measurementId: "G-WVMMKVE0G7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const PopupForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    PhoneNumber: '',
    Message: '',
  });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      console.log('Form Data:', formData); // Log the form data
  
      // Check for empty fields in formData
      const isEmptyData = Object.values(formData).some(value => value === '');
  
      if (isEmptyData) {
        console.error('Form data contains empty fields');
        return;
      }
  
      // Store data in Firestore
      const docRef = await addDoc(collection(db, 'contactForms'), formData);
      console.log('Document written with ID: ', docRef.id);
  
      // Clear the form after successful submission
      setFormData({
        Name: '',
        Email: '',
        PhoneNumber: '',
        Message: '',
      });
  
      alert("We'll get back to you within 24 hours.");
  
      // Close the popup form
      onClose();
  
      // Set a flag in localStorage to indicate that the popup has been shown
      localStorage.setItem('hasPopupBeenShown', 'true');
  
      // Navigate to the home page
      router.push('/');
  
      console.log('Form submitted successfully');
    } catch (error) {
      // Handle failed form submission
      console.error('Error submitting form:', error);
    }
  };
  
  



  const [isVisible, setIsVisible] = useState(true);

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
<input type="text" name="Name" placeholder="Your Name..." onChange={handleChange} />
<label>Phone Number: </label>
<input type="tel" name="PhoneNumber" placeholder="+91 ...." onChange={handleChange} />
<label>Email: </label>
<input type="email" name="Email" placeholder="@gmail.com" onChange={handleChange} />
<label>Message: </label>
<input type="text" name="Message" placeholder="Optional..." onChange={handleChange} />


          <div className={styles.FormSubmit}>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
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

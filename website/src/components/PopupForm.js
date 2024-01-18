import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './styles/PopupForm.module.css';

const PopupForm = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  const handleCrossButtonClick = () => {
    setIsVisible(false);
    onClose();

    // Navigate to the home page after closing the form
    router.push('/');
  };

  return (
    isVisible && (
      <div className={styles.popup}>
        <div className={styles.formContainer}>

          <div className={styles.buttonContainer}>
            <button onClick={handleCrossButtonClick}>&times;</button>
          </div>
         <center> <h1 style={{color:'#ff6600', marginBottom:'20px', fontSize:'35px'}}>Connect With Us</h1></center>
          <label>Name: </label>
          <input type="text" placeholder='Your Name...' />
          <label>Phone Number: </label>
          <input type="tel" placeholder='+91 ....'/>
          <label>Email: </label>
          <input type="email" placeholder='@gmail.com' />
          <label>Message: </label>
          <input type="text" placeholder='Optional...'/>

          <div className={styles.FormSubmit}>
            <button type='submit'>Submit</button>
          </div>

        </div>
      </div>
    )
  );
};

export default PopupForm;

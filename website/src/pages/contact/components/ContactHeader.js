import Image from 'next/image'; // Import the Image component
import Link from 'next/link'; // Import the link component
import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import styles from '../styles/contact.module.css';

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

const ContactHeader = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Store data in Firestore
      const docRef = await addDoc(collection(db, 'contactForms'), formData);
      console.log('Document written with ID: ', docRef.id);

      // Clear the form after successful submission
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
      });
      alert("We'll get back to you within 24 hours.");
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };


  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.rowCenter}>
          <div className={`${styles.colLg10} ${styles.colMd12}`}>
            <div className={styles.wrapper}>
              <div className={`${styles.colMd5} ${styles.flexAlignStretch}`}>
                <div className={styles.infoWrap}>
                  <h3 className={`${styles.mb4} ${styles.mtMd4}`}>Looking for the best Hearing Test in town?</h3>
                  <div className={styles.dbox}>
                    <div className={styles.icon}>
                      <Image src='/Contact/gps.png' alt='call' height={41} width={41} />
                    </div>
                    <div className={styles.text}>
                      <p style={{ lineHeight: '25px' }}>
                        <span style={{ color: '#ff6600' }}><b>Address:</b></span> G-14, Ground Floor, Kings Mall, Twin District Centre, Sector 10, Rohini.
                      </p>
                    </div>
                  </div>
                  <div className={styles.dbox}>
                    <div className={styles.icon}>
                      <Image src='/Contact/call.png' alt='call' height={50} width={50} />
                    </div>
                    <div className={styles.text}>
                      <p>
                        <span style={{ color: '#ff6600' }}><b>Phone:</b></span> <a href="tel://9711871168">+91 9711871168</a>
                      </p>
                    </div>
                  </div>
                  <div className={styles.dbox}>
                    <div className={styles.icon}>
                      <Image src='/Contact/email.png' alt='call' height={41} width={41} />
                    </div>
                    <div className={styles.text}>
                      <p>
                        <span style={{ color: '#ff6600' }}><b>Email:</b></span>{' '}
                        <Link href="mailto:Hearinghope@gmail.com">Hearinghope@gmail.com</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.colMd7} ${styles.flexAlignStretch}`}>
                <div className={styles.contactWrap}>
                  <form className={styles.formContainer} method="POST" id={styles.contactForm} name="contactForm" onSubmit={handleSubmit}>
                    <div className={styles.row}>
                      <div className={styles.colMd6}>
                        <div className={styles.formGroup}>
                          <input
                            type="text"
                            className={styles.formControl}
                            name="name"
                            id="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className={styles.colMd6}>
                        <div className={styles.formGroup}>
                          <input
                            type="email"
                            className={styles.formControl}
                            name="email"
                            id="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className={styles.colMd12}>
                        <div className={styles.formGroup}>
                          <input
                            type="tel"
                            className={styles.formControl}
                            name="phoneNumber"
                            id="subject"
                            placeholder="+91..."
                            value={formData.phoneNumber}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className={styles.colMd12}>
                        <div className={styles.formGroup}>
                          <textarea
                            name="message"
                            className={styles.textareaControl}
                            id="Message"
                            cols="30"
                            rows="7"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>
                      <div className={styles.colMd12}>
                        <div className={styles.formGroup}>
                          <input
                            type="submit"
                            className={styles.btnPrimary}
                            value="Submit"
                            onChange={handleChange}

                          />
                          <div className={styles.submitting}></div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ContactHeader;

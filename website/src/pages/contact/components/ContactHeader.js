import { useState } from 'react';
import Image from 'next/image'; // Import the Image component
import Link from 'next/link'; // Import the link component
import styles from '../styles/contact.module.css';

const ContactHeader = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const formData = new FormData(e.target);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        e.target.reset();
        // Provide feedback to the user as needed (e.g., show a success message)
        alert('Form submitted successfully! We will get back to you soon.');
      } else {
        console.error('Form submission failed:', response.statusText);
        // Provide feedback to the user as needed (e.g., show an error message)
        alert('Form submission failed. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Provide feedback to the user as needed (e.g., show an error message)
      alert('Error submitting form. Please try again later.');
    } finally {
      setSubmitting(false);
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
                      <Image src='/gps.png' alt='call' height={41} width={41} />
                    </div>
                    <div className={styles.text}>
                      <p style={{ lineHeight: '25px' }}>
                        <span style={{ color: '#ff6600' }}><b>Address:</b></span> G-14, Ground Floor, Kings Mall, Twin District Centre, Sector 10, Rohini.
                      </p>
                    </div>
                  </div>
                  <div className={styles.dbox}>
                    <div className={styles.icon}>
                      <Image src='/call.png' alt='call' height={50} width={50} />
                    </div>
                    <div className={styles.text}>
                      <p>
                        <span style={{ color: '#ff6600' }}><b>Phone:</b></span> <a href="tel://9711871168">+91 9711871168</a>
                      </p>
                    </div>
                  </div>
                  <div className={styles.dbox}>
                    <div className={styles.icon}>
                      <Image src='/email.png' alt='call' height={41} width={41} />
                    </div>
                    <div className={styles.text}>
                      <p>
                        <span style={{ color: '#ff6600' }}><b>Email:</b></span>{' '}
                        <Link href="mailto:info@yoursite.com">Hearinghope@gmail.com</Link>
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
                          />
                        </div>
                      </div>
                      <div className={styles.colMd12}>
                        <div className={styles.formGroup}>
                          <input
                            type="text"
                            className={styles.formControl}
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                      <div className={styles.colMd12}>
                        <div className={styles.formGroup}>
                          <textarea
                            name="message"
                            className={styles.textareaControl}
                            id="message"
                            cols="30"
                            rows="7"
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>
                      <div className={styles.colMd12}>
                        <div className={styles.formGroup}>
                          <input
                            type="submit"
                            value={submitting ? 'Submitting...' : 'Send Message'}
                            className={styles.btnPrimary}
                            disabled={submitting}
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

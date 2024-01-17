import styles from '../styles/service.module.css';

const ServiceHeader = () => {
    return (
      <div className={styles.cardContainer}>
    <div className={styles.card}>
      <h2 className={styles.title}>Hearing Aids</h2>
      <p className={styles.description}>Description for Card 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>

    <div className={styles.card}>
      <h2 className={styles.title}>Hearing Tests</h2>
      <p className={styles.description}>Description for Card 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>

    <div className={styles.card}>
      <h2 className={styles.title}>Speech Therapy</h2>
      <p className={styles.description}>Description for Card 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
    );
  };
  
  export default ServiceHeader;
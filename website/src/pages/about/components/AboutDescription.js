import styles from '../styles/about.module.css';

const AboutDescriptions = () => {
  return (
    <div className={styles.AboutDescriptionContainer}>
        <h1>About<span style={{color:'#ff6600'}}> Hearing Hope</span></h1>
        <center><p>We are a private, independent practice constantly striving to provide excellence in personalized, compassionate care that is consistent, quality-driven and choice-conscious for all of our patients.
Our staff is well trained, caring and professional. Each and every one of us respects the diversity and dignity of our patients. We welcome advances in learning and technology in an effort to achieve efficient and quality-driven patient care.
Together our team of audiologists bring a broad spectrum of experience and professional expertise and continually undertake professional development education to remain up to date with the latest in hearing treatment options.
We aim to make all patients feel welcome whilst providing high quality, professional hearing care in a friendly environment. Although it may not always be possible to see your preferred audiologist, our audiologist work together as a team to make sure your ongoing health needs are met.
</p></center>
    </div>
  );
};

export default AboutDescriptions;

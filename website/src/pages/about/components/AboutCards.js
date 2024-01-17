// AboutCard.js

import Image from 'next/image';
import styles from '../styles/about.module.css';

const AboutCard = () => {
  return (
    <div className={styles.AboutCard}>
      <h1 style={{ color: '#ff6600', textAlign: 'center', marginBottom: '30px', fontSize: '45px' }}>
        Meet Our Team
      </h1>
      <div className={styles.card}>
        {/* Card 1 */}
        <div className={styles.flipCard}>
          <div className={styles.flipCardInner}>
            <div className={styles.flipCardFront} style={{borderRadius:'11px'}}>
              {/* Use next/image for image optimization */}
              <Image src="/Aditya.jpg" alt="Avatar" width={300} height={400} className={styles.cardImage} style={{borderRadius:'11px'}}/>
            </div>
            <div className={styles.flipCardBack}>
              <h1>Mrs. Neelam</h1>
              <p style={{ marginTop: '10px' }}>Executive Director</p>
              <p style={{ marginTop: '20px', textAlign: 'start' }}>
                I&apos;m Mrs. Neelam, Executive Director at Hearing Hope, where I&apos;ve dedicated 15+ years. It&apos;s my dream to gift everyone the hope of hearing. I&apos;m immensely pleased with my incredible team, whose dedication and passion are shaping a future where the gift of Hearing becomes a reality for all.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className={styles.flipCard}>
          <div className={styles.flipCardInner}>
            <div className={styles.flipCardFront} style={{borderRadius:'11px'}}>
              <Image src="/Aditya.jpg" alt="Avatar" width={300} height={400} className={styles.cardImage} style={{borderRadius:'11px'}} />
            </div>
            <div className={styles.flipCardBack} >
              <h1>Dr. Harshi</h1>
              <p style={{ marginTop: '10px' }}>MBBS, Audiologist</p>
              <p style={{ marginTop: '20px', textAlign: 'start' }}>
                I&apos;m Dr. Harshi, an audiologist at Hearing Hope. My lifelong goal is to help people with hearing impairments. Join me on this mission to enhance lives through better hearing, incorporating the transformative power of hearing aids. Let&apos;s create a world where everyone can fully engage in the beautiful symphony of sound.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className={styles.flipCard}>
          <div className={styles.flipCardInner}>
            <div className={styles.flipCardFront} style={{borderRadius:'11px'}}>
              <Image src="/AboutBhawna.png" alt="Avatar" width={300} height={400} className={styles.cardImage} style={{borderRadius:'11px'}} />
            </div>
            <div className={styles.flipCardBack}>
              <h1>Mrs. Bhawna</h1>
              <p style={{ marginTop: '10px' }}>Business Development Manager</p>
              <p style={{ marginTop: '20px', textAlign: 'start' }}>
                Greetings, I&apos;m Mrs. Bhawna, the Business Development Manager at Hearing Hope. This remarkable journey with Hearing Hope has not just been a career but a platform for my personal growth. It&apos;s fulfilling to be part of a team dedicated to making a meaningful impact by connecting people with the gift of hearing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;

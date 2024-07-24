import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/index.module.css';

const cardsData = [
  {
   "id": 8,
    "image": "/Home/hearing-loss-aidlist.png",
    "heading": "What Level of Hearing Loss Requires a Hearing Aid?",
    "description": "Hearing loss is an important issue that can affect people of all ages. Addressing hearing loss early is crucial because it can impact daily activities,...",
    "link": "/blog/what-level-of-hearing-loss-requires-a-hearing-aid"
  },
  {
    "id": 7,
    "image": "/Home/hearing-aid-care-and-maintenancelist.png",
    "heading": "Comprehensive Guide to Hearing Aid Care and Maintenance",
    "description": "Maintaining hearing aids is essential for ensuring their optimal performance and longevity. Without proper care, hearing aids can accumulate dirt and moisture,...",
    "link": "/blog/comprehensive-guide-to-hearing-aid-care-and-maintenance"
  },
  {
    "id": 6,
    "image": "/Home/speech-therapy-typeslist.png",
    "heading": "Understanding the Different Types of Speech Therapy",
    "description": "Speech therapy plays a crucial role in helping individuals overcome communication and swallowing disorders. These disorders can significantly impact a person's quality...",
    "link": "/blog/understanding-the-different-types-of-speech-therapy"
  },
];

const Home = () => {
  return (
    <div>
      <h2 className={styles.blogHeading}>My Blog</h2>
      <div className={styles.cardsContainer}>
        {cardsData.map((card) => (
          <div key={card.id} className={styles.Blogcard}>
            <Image src={card.image} alt={card.heading} width={400} height={200} className={styles.BlogCardimg} />
            <div className={styles.BlogCardContent}>
              <h2 className={styles.BlogCardHeading}>{card.heading}</h2>
              <p className={styles.BlogCardDescription}>{card.description}</p>
              <Link href={card.link} legacyBehavior>
                <a>
              <button className={styles.BlogBtn}>Learn More</button>
              </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.ViewMoreContainer}>
              <Link href="/blog" legacyBehavior>
                <a>
              <button className={styles.ViewMoreBtn}>View More</button>
              </a>
              </Link></div>
    </div>
  );
};

export default Home;

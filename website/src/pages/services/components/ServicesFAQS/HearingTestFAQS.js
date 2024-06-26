import { useState } from 'react';
import styles from '../../styles/service.module.css';

const HearingTestFAQS = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.accordion}>
      <h2>Frequently Asked Questions</h2>

      {faqData.map((faq, index) => (
        <div className={styles.accordionItem} key={index}>
          <input
            type="checkbox"
            id={`accordion${index + 1}`}
            defaultChecked={activeIndex === index}
          />
          <label
            htmlFor={`accordion${index + 1}`}
            className={styles.accordionItemTitle}
            onClick={() => handleAccordionClick(index)}
          >
            <span className={styles.icon}></span>
            {faq.question}
          </label>
          <div className={`${styles.accordionItemDesc} ${activeIndex === index ? styles.active : ''}`}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

const faqData = [
  {
    question: 'What types of hearing tests do you offer at Hearing Hope in Delhi?',
    answer: "At Hearing Hope, we offer a variety of hearing tests, including Pure tone Audiometry, Speech Audiometry, Tympanometry, and Otoacoustic Emissions (OAEs). Each test is tailored to assess various facets of your hearing capacity, providing a thorough auditory evaluation.",
  },
  {
    question: 'How often should I get my hearing tested?',
    answer: "We recommend regular hearing assessments to monitor your auditory health, especially if you are frequently exposed to noisy environments, have noticed changes in your hearing, or are over the age of 60. Typically, an annual hearing test is advisable, but our audiologists might suggest a different frequency based on your specific circumstances.",
  },
  {
    question: 'What should I expect during my first hearing test at Hearing Hope?  ',
    answer: 'During your first visit, you&apos;ll undergo a brief interview to discuss your hearing history and any concerns. This is followed by a hearing test conducted in a sound-treated room to ensure accuracy. You&apos;ll be asked to listen to various sounds through headphones, and our audiologist will guide you through each step of the process. ',
  },
  {
    question: 'Can children and seniors undergo hearing tests at Hearing Hope?',
    answer: "Yes, we offer specialized hearing assessments for both children and seniors. Our tests are tailored to meet the unique needs of these age groups, ensuring appropriate and effective evaluation and care.",
  },
  {
    question: 'What follow-up services do you provide after a hearing test?',
    answer: "After your hearing test, we offer comprehensive follow-up services, including detailed discussions of your results, personalized recommendations for hearing aids or other interventions, and regular check-ups. We also provide ongoing support and maintenance for any hearing aids prescribed, ensuring optimal performance and comfort.",
  },
  
  // Add more FAQ items as needed
];

export default HearingTestFAQS;

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
    question: 'What is a hearing test?',
    answer: "An audiometer assesses how good an individual can hear different sounds and pitches at various volumes.",
  },
  {
    question: 'Why do I need to take a hearing test in Delhi?',
    answer: "Frequent hearings are quite crucial for the early detection of hearing loss to enhance therapy results.",
  },
  {
    question: 'How do I book a hearing test in Delhi?',
    answer: 'You can call or visit our website to book a hearing test in Delhi through Hearing Hope.',
  },
  {
    question: 'Which hearing tests are available In Delhi?',
    answer: "The test types available in Delhi are auditory brainstem response, audiometry or hearing testing, tympanometry and otoacoustic emissions OAE.",
  },
  {
    question: 'What should you look forward to at your hearing test in Delhi?',
    answer: "A hearing test is where the audiologist plays sounds at different volumes and frequencies to determine, based upon which softest sound you can hear.",
  },
  
  // Add more FAQ items as needed
];

export default HearingTestFAQS;

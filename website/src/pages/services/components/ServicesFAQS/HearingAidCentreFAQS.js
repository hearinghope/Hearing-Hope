import { useState } from 'react';
import styles from '../../styles/service.module.css';

const HearingAidCentreFAQS = () => {
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
    question: 'How long does a hearing aid fitting take?',
    answer: 'The average hearing aid fitting session is 30-60 minutes. This will include tuning the hearing aid to your particular loss configuration, and also appropriate orientation about wearing it.',
  },
  {
    question: 'What hearing aids do HearingHope offer?',
    answer: "We provide a number of different types of hearing aids, such as Behind-the-Ear (BTE), In-the-Ear (ITE), and Completely-in-Canal(CIC). Every design caters to individual needs in terms of hearing loss and aesthetics.",
  },
  {
    question: 'Is it possible to preview a hearing aid before buying one?',
    answer: 'Absolutely! Some hearing aids also come with a risk-free trial, so you can experience how the device works in your daily environment before committing to purchase it.',
  },
  {
    question: 'What are your Hearing Aid Financing Options?',
    answer: "We offer various financing options including instalment plans and possible cooperation with insurance providers to make our hearing aids more accessible.",
  },
  {
    question: 'How do I care for my hearing aid?',
    answer: "To better serve you, we  provide detailed instructions on how to clean your hearing aids and other tips for maintaining them so that they last.",
  },
  
  // Add more FAQ items as needed
];

export default HearingAidCentreFAQS;

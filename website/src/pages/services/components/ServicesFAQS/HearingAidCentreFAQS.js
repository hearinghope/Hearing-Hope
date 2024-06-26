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
    question: 'What types of hearing aids are available at Hearing Hope?',
    answer: 'At Hearing Hope, we offer a wide variety of hearing aids, including behind-the-ear (BTE), in-the-ear (ITE), and completely-in-canal (CIC) models, featuring the latest technology like wireless connectivity, rechargeable batteries, and advanced noise cancellation to meet different lifestyle and budget requirements.',
  },
  {
    question: 'How can I tell if I need a hearing aid?',
    answer: "If you're experiencing difficulties hearing conversations, often ask people to repeat themselves, or find yourself increasing the volume on your devices, it may be time to consider a hearing test. We recommend visiting our hearing aid center in Delhi for a comprehensive hearing evaluation to determine if a hearing aid is suitable for you.",
  },
  {
    question: 'What is the process of getting a hearing aid at Hearing Hope?',
    answer: 'The process begins with an initial consultation to discuss your hearing concerns, followed by a detailed hearing evaluation using advanced diagnostic tools. Based on the results, we recommend and customize the best hearing aid for your needs, fit it precisely, and provide ongoing aftercare and support.',
  },
  {
    question: ' Am I able to test out a hearing aid prior to making a purchase?',
    answer: "Yes, at Hearing Hope, we understand the importance of choosing the right hearing aid, and we offer trial periods for selected models. This allows you to experience how the hearing aid works in your daily environment, ensuring it meets your expectations before making a final decision.",
  },
  {
    question: 'What support services are available after purchasing a hearing aid?',
    answer: "We provide comprehensive aftercare services, including regular check-ups, maintenance, and fine-tuning of your hearing aids. Our dedicated team is always available to answer your questions, provide technical support, and make necessary adjustments to ensure you are completely satisfied with your hearing aid.",
  },
  
  // Add more FAQ items as needed
];

export default HearingAidCentreFAQS;

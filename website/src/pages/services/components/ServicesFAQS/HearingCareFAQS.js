import { useState } from 'react';
import styles from '../../styles/service.module.css';

const HearingCareFAQS = () => {
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
    answer: 'At Hearing Hope, we provide an extensive selection of hearing aids, such as behind-the-ear (BTE), in-the-ear (ITE), and completely-in-canal (CIC) styles.Each type is equipped with the latest technology to suit different hearing loss needs and personal preferences.',
  },
  {
    question: 'How do I determine if I need a hearing aid?',
    answer: "If you're experiencing difficulties in understanding conversations, especially in noisy environments, or find yourself frequently asking others to repeat themselves, it might be time to schedule a hearing evaluation. Our expert audiologists at Hearing Hope can conduct a comprehensive hearing test to determine if a hearing aid is recommended for your condition.",
  },
  {
    question: 'What is the process for getting a hearing aid at Hearing Hope?',
    answer: 'The process begins with a detailed hearing assessment conducted by our audiologists. Based on the results, we discuss suitable hearing aid options and fit you with the device that best meets your needs. A follow-up appointment is then scheduled to fine-tune the device and ensure optimal performance.',
  },
  {
    question: 'Are financing plans available for the purchase of hearing aids?',
    answer: "Yes, Hearing Hope offers flexible financing options to make hearing aids more affordable. We provide various payment plans to fit different budgets, ensuring that our patients can access the hearing care they need without financial strain.",
  },
  {
    question: 'How can I maintain my hearing aid to ensure it lasts longer?',
    answer: "Proper maintenance is crucial for extending the life of your hearing aid. We recommend regular cleaning with a soft, dry cloth, avoiding exposure to moisture and heat, and storing the device in a dry, cool place when not in use. Additionally, Hearing Hope offers ongoing maintenance services and advice to help you keep your hearing aid in excellent condition.",
  },
  
  // Add more FAQ items as needed
];

export default HearingCareFAQS;

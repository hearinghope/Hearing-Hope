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
    question: 'How can I tell if I require a hearing aid?',
    answer: 'If you experience difficulty understanding conversations, particularly in noisy environments, or find yourself frequently asking others to repeat themselves, it may be time to schedule a hearing assessment with one of our audiologists.',
  },
  {
    question: 'What is the process for getting a hearing aid from HearingHope?',
    answer: "The process starts with a comprehensive hearing evaluation. If a hearing aid is recommended, we will guide you through the selection, fitting, and customization of your device, followed by ongoing support and adjustments as needed.",
  },
  {
    question: 'Can hearing aids be invisible?',
    answer: 'Yes, we offer invisible-in-canal (IIC) hearing aids that are custom-fitted to sit completely within the ear canal, making them virtually undetectable when worn.',
  },
  {
    question: 'How often should I have my hearing tested?',
    answer: "We recommend having your hearing tested annually, or more frequently if you notice any changes in your hearing abilities.",
  },
  {
    question: 'Can I finance the purchase of hearing aids?',
    answer: "Yes, HearingHope provides several financing plans to make hearing care affordable, including instalment payments and partnerships with healthcare financing companies.",
  },


  {
    question: 'What warranty comes with hearing aids purchased at HearingHope?',
    answer: "Our hearing aids come with a comprehensive warranty that covers repairs, maintenance, and even replacements if necessary, typically for up to three years.",
  },
  {
    question: 'How do I care for my hearing aids?',
    answer: "We provide detailed instructions on daily care and maintenance, including cleaning tips and advice on storing your devices to ensure they function optimally.",
  },
  {
    question: 'Can I use my hearing aids while participating in sports or other physical activities?',
    answer: "Yes, many modern hearing aids are designed to be durable and water-resistant. We also offer specific advice on how to protect and maintain your hearing aids during such activities.",
  },
  {
    question: 'What should I do if I experience discomfort or feedback from my hearing aid?',
    answer: "If you experience any discomfort or feedback, schedule an appointment with us for an adjustment. Often, minor tweaks to the fit or settings can resolve these issues quickly.",
  },
  
  // Add more FAQ items as needed
];

export default HearingCareFAQS;

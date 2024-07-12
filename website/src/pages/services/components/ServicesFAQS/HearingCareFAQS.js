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
    question: 'What services does Hearing Hope offer?',
    answer: 'Hearing Hope offers a comprehensive range of services including diagnostic evaluations, personalised hearing aid fittings, tinnitus management, auditory rehabilitation, and ongoing support for hearing health.',
  },
  {
    question: 'How do I know if I need a hearing evaluation?',
    answer: "If you're experiencing difficulty hearing conversations, asking others to repeat themselves often, or noticing ringing in your ears, it may be time for a hearing evaluation at Hearing Hope.",
  },
  {
    question: 'What should I expect during a hearing evaluation?',
    answer: 'A hearing evaluation at Hearing Hope typically includes a series of tests to assess your hearing ability, determine the type and degree of hearing loss, and understand your unique hearing needs.',
  },
  {
    question: 'How do I choose the right hearing aid?',
    answer: "Our audiologists at Hearing Hope will guide you through the process of selecting the right hearing aid based on your hearing loss, lifestyle, and personal preferences.",
  },
  {
    question: 'Do you offer different types of hearing aids?',
    answer: "Yes, we offer a variety of hearing aids including behind-the-ear (BTE), in-the-ear (ITE), and invisible-in-canal (IIC) styles, among others, to suit different levels of hearing loss and aesthetic preferences.",
  },


  {
    question: 'What is tinnitus and how can Hearing Hope help?',
    answer: "Tinnitus is a ringing or buzzing sensation in the ears. At Hearing Hope, we provide management strategies and treatments to alleviate the symptoms of tinnitus and improve your quality of life.",
  },
  {
    question: 'Do you offer maintenance and support for hearing aids?',
    answer: "Yes, Hearing Hope provides ongoing maintenance, adjustments, and support for your hearing aids to ensure they continue to function optimally and meet your hearing needs over time.",
  },
  {
    question: 'Are there financing options available for hearing aids?',
    answer: "We offer flexible payment plans and financing options to make our hearing aids and services affordable for all patients in Delhi.",
  },
  {
    question: 'How often should I get my hearing aids checked?',
    answer: "Regular check-ups at Hearing Hope are recommended to monitor the performance of your hearing aids, adjust settings if necessary, and address any changes in your hearing health.",
  },
  {
    question: 'Can hearing loss be prevented?',
    answer: "While some forms of hearing loss are preventable (such as noise-induced hearing loss), others may be age-related or due to medical conditions. Hearing Hope offers guidance on hearing protection and preventive measures.",
  },
  {
    question: 'Do you provide educational resources on hearing health?',
    answer: "Yes, Hearing Hope offers educational materials and resources to help patients and their families understand hearing loss, hearing aid technology, and strategies for maintaining optimal hearing health.",
  },
  {
    question: 'How can I schedule an appointment at Hearing Hope?',
    answer: "You can schedule an appointment by calling our clinic directly or through our website. Our staff will assist you in finding a convenient time for your visit.",
  },

  {
    question: 'What should I bring to my first appointment?',
    answer: "For your first appointment at Hearing Hope, please bring any previous hearing test results, a list of medications you are currently taking, and your insurance information (if applicable).",
  },
  {
    question: 'Is Hearing Hope covered by insurance?',
    answer: "We accept various insurance plans. Please check with your insurance provider to verify coverage details for hearing evaluations, hearing aids, and related services at Hearing Hope.",
  },
  {
    question: 'Why should I choose Hearing Hope for my hearing care needs in Delhi?',
    answer: "Hearing Hope distinguishes itself with a commitment to personalised care, advanced technology, affordability, and a reputation for excellence in hearing care services throughout Delhi.",
  },
  
  // Add more FAQ items as needed
];

export default HearingCareFAQS;

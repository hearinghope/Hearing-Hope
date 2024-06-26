import { useState } from 'react';
import styles from '../../styles/service.module.css';

const SpeechTherapyFAQS = () => {
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
    question: 'What age groups do you cater to at Hearing Hope?',
    answer: " We provide speech therapy services in Delhi for all age groups. Our services are tailored for children experiencing developmental delays, as well as adults who may be recovering from strokes or managing degenerative conditions. We believe everyone deserves the chance to improve their communication abilities, regardless of age.",
  },
  {
    question: ' What is the duration of a standard speech therapy session?  ',
    answer: "A typical session lasts between 30 and 60 minutes, depending on the specific needs and stamina of the client. The frequency and duration of sessions are customized based on individual treatment plans to ensure optimal results without causing fatigue. ",
  },
  {
    question: ' Are the speech therapy sessions conducted individually or in groups?  ',
    answer: 'Most of our speech therapy services in Delhi are conducted on a one-on-one basis to ensure personalized attention and privacy. However, group sessions may be organized for specific activities or peer interaction scenarios where social communication skills can be effectively developed.',
  },
  {
    question:  'Can family members participate in the therapy sessions?  ',
    answer: "Absolutely, family involvement is encouraged at Hearing Hope. We believe that incorporating family members into the therapy process not only supports the client but also equips the family with strategies to help in everyday communication scenarios. This collaborative approach is crucial, especially in the familial and community-oriented culture of Delhi.",
  },
  {
    question: 'What makes Hearing Hope&apos;s approach to speech therapy unique?',
    answer: "Our approach is deeply rooted in a personalized and evidence-based methodology, integrated with the latest advancements in speech therapy. We place a strong emphasis on involving family and caregivers, which is particularly effective in the context of Delhi&apos;s supportive community culture. Additionally, our commitment to continuous progress monitoring and adjustment of treatment plans ensures that each client receives the most effective care tailored to their evolving needs.",
  },
  
  // Add more FAQ items as needed
];

export default SpeechTherapyFAQS;

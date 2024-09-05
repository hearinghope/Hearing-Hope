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
    question: 'What is speech therapy?',
    answer: "Speech therapy treats speech, language and swallowing disorders.",
  },
  {
    question: 'Who needs speech therapy?',
    answer: "From a toddler to an adult, anyone who is facing communication challenges may require speech therapy.",
  },
  {
    question: 'Does anyone need speech therapy, am I/my child one amongst them?',
    answer: 'Symptoms can range from a speech delay or difficulties in producing sounds, to problems comprehending and using the linguistic qualities of words.',
  },
  {
    question: 'How do I know if I or my child needs speech therapy?',
    answer: "Signs include delayed speech, trouble articulating words, or difficulty understanding and expressing language.",
  },
  {
    question: 'What happens during a speech therapy session?',
    answer: "Sessions may involve exercises to improve language skills, articulation, and communication effectiveness.",
  },
  // Add more FAQ items as needed
];

export default SpeechTherapyFAQS;

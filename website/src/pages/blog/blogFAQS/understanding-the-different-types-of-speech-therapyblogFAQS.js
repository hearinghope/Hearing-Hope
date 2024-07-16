import { useState } from 'react';
import styles from '../styles/blog.module.css';

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


// Question: What is mixed hearing loss, and how is it managed?
// Answer:- Mixed hearing loss combines aspects of conductive and sensorineural hearing loss. Usually, the inner ear or auditory nerve and the outer or middle ear are injured. Management includes a combination of treatments appropriate for both types of hearing loss, such as surgery and hearing aids.

// Question: Are there preventative measures for hearing loss?
// Answer: Yes, many forms of hearing loss can be prevented. Preventative measures include protecting ears from loud noises with earplugs or earmuffs, avoiding prolonged exposure to noisy environments, maintaining good ear hygiene, having regular hearing check-ups, and leading a healthy lifestyle to support overall ear health.

const faqData = [
  {
    question: 'What are the different types of speech therapy?',
    answer: 'There are various types of speech therapy, including articulation therapy, language intervention activities, oral motor therapy, and augmentative and alternative communication (AAC).',
  },
  {
    question: 'Are there specific techniques for autism?',
    answer: 'Yes, types of speech therapy for autism include Picture Exchange Communication System (PECS), social stories, and play-based therapy.',
  },
  {
    question: 'Where can I find resources on speech therapy techniques?',
    answer: 'You can find speech therapy techniques PDF documents online or through professional organisations like ASHA.',
  },
  {
    question: 'What techniques are used for adults?',
    answer: "Speech therapy techniques for adults often include cognitive-communication therapy, voice therapy, and fluency therapy.",
  },
  {
    question: 'What are formal approaches to speech and language therapy?',
    answer: "Formal approaches to speech and language therapy involve structured methods like the PROMPT technique, phonological contrast therapy, and the Hanen Program.",
  },
  
  // Add more FAQ items as needed
];

export default SpeechTherapyFAQS;

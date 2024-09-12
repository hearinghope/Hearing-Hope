import { useState } from 'react';
import styles from '../styles/blog.module.css';

const FrequencyHearingLossFAQS = () => {
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
    question: 'Can low-frequency hearing loss be corrected?',
    answer: 'Low-frequency hearing loss can be managed but not always fully corrected. Treatments such as hearing aids, medical interventions, and lifestyle changes can help improve hearing and quality of life.',
  },
  {
    question: 'What is the relationship between low-frequency hearing loss and tinnitus?',
    answer: 'Low-frequency hearing loss often accompanies tinnitus, a ringing or buzzing in the ears. Managing hearing loss can sometimes alleviate tinnitus symptoms.',
  },
  {
    question: 'How is low-frequency hearing loss treated?',
    answer: 'Treatment options include hearing aids designed to amplify low frequencies, cochlear implants, and other medical interventions tailored to individual needs.',
  },
  {
    question: 'What does low-frequency hearing loss sound like?',
    answer: "Individuals with low-frequency hearing loss may perceive low-pitched sounds as muffled or distant, making it difficult to hear deep voices and bass notes.",
  },
  {
    question: 'How rare is low-frequency hearing loss?',
    answer: "Low-frequency hearing loss is less common than high-frequency hearing loss. Its rarity varies based on genetic, environmental, and health factors. Regular hearing tests can help detect this type of hearing loss early.​",
  },
  
  // Add more FAQ items as needed
];

export default FrequencyHearingLossFAQS;

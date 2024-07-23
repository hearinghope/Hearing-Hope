import { useState } from 'react';
import styles from '../styles/blog.module.css';

const HearingLossAidFAQS = () => {
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
    question: 'Do I need a hearing aid for mild hearing loss?',
    answer: 'People with mild hearing loss may benefit from a hearing aid if they find it difficult to hear soft sounds or follow conversations in noisy environments. Consulting an audiologist can help determine if a hearing aid is necessary.',
  },
  {
    question: 'What are the 5 levels of hearing loss?',
    answer: 'The five levels of hearing loss are mild, moderate, moderately severe, severe, and profound. Each level indicates the degree of hearing impairment and the potential need for a hearing aid.',
  },
  {
    question: 'What level of hearing loss requires a hearing aid in a child?',
    answer: 'Children with moderate to severe hearing loss typically require a hearing aid to support speech and language development. Early intervention is crucial for their educational and social growth.',
  },
  {
    question: 'Hearing loss by age chart?',
    answer: "Hearing loss often progresses with age. A hearing loss by age chart shows the average degree of hearing loss in different age groups, helping to understand age-related hearing decline and the potential need for hearing aids.",
  },
  {
    question: 'Best hearing aid for mild hearing loss?',
    answer: "The best hearing aid for mild hearing loss depends on individual needs and preferences. Generally, discreet, in-the-ear or behind-the-ear models with basic amplification features are suitable for mild hearing loss. An audiologist can recommend the best option.​",
  },
  
  // Add more FAQ items as needed
];

export default HearingLossAidFAQS;

import { useState } from 'react';
import styles from '../styles/blog.module.css';

const TypesOfHearingProblemsFAQS = () => {
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
    question: 'What are the main types of hearing problems?',
    answer: 'Mixed, sensorineural, and conductive hearing loss are the three main hearing impairment categories. Each type affects different ear parts and has distinct causes and treatment options.',
  },
  {
    question: 'What causes conductive hearing loss, and how is it treated?',
    answer: 'Conduction-related hearing loss is primarily caused by problems with the middle or outer ears that block sound waves from entering the inner ear. Ear infections, earwax accumulation, and perforations in the eardrum are common causes. Treatments often involve removing blockages, treating infections with antibiotics, or surgery for more severe conditions.',
  },
  {
    question: 'How does sensorineural hearing loss occur, and what are the treatment options?',
    answer: 'Issues with the inner ear or auditory nerve result in sensorineural hearing loss, which is often irreversible. Causes include ageing, exposure to loud noises, certain medications, and genetic factors. Interventions such as cochlear implants, assistive listening devices, and hearing aids are available.',
  },
  {
    question: 'What is mixed hearing loss, and how is it managed?',
    answer: "Mixed hearing loss combines aspects of conductive and sensorineural hearing loss. Usually, the inner ear or auditory nerve and the outer or middle ear are injured. Management includes a combination of treatments appropriate for both types of hearing loss, such as surgery and hearing aids.",
  },
  {
    question: 'Are there preventative measures for hearing loss?',
    answer: "Yes, many forms of hearing loss can be prevented. Preventative measures include protecting ears from loud noises with earplugs or earmuffs, avoiding prolonged exposure to noisy environments, maintaining good ear hygiene, having regular hearing check-ups, and leading a healthy lifestyle to support overall ear health.",
  },
  
  // Add more FAQ items as needed
];

export default TypesOfHearingProblemsFAQS;

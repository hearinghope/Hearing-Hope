import { useState } from 'react';
import styles from '../styles/blog.module.css';

const HearingAidInIndiaFAQS = () => {
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
    question: 'What are the best hearing aid brands in India with their prices?',
    answer: 'The best hearing aid brands in India include Signia, Phonak, Siemens, Resound, and Starkey. Signia hearing aids range from ₹30,000 to ₹2,50,000 depending on the model and features. Phonak offers a variety of advanced features with prices ranging from ₹40,000 to ₹3,00,000. Siemens is known for its durability and sound quality, with prices ranging from ₹25,000 to ₹2,00,000. Resound hearing aids are popular for their natural sound and connectivity options, with prices ranging from ₹30,000 to ₹2,50,000. Starkey provides customizable and advanced hearing solutions, with prices ranging from ₹40,000 to ₹3,00,000.',
  },
  {
    question: 'Which are the top 5 hearing aid brands in India?',
    answer: 'The top 5 hearing aid brands in India are Signia, Phonak, Siemens, Resound, and Starkey. These brands are renowned for their high-quality sound, advanced features, and excellent customer support, making them the preferred choices for many users in India.',
  },
  {
    question: 'Which hearing aid is best in India for old age?',
    answer: 'For old age, the best hearing aids in India include the Phonak Audeo Marvel, known for its clear sound quality and easy connectivity, and the Signia Evoke, which offers natural sound and ease of use. The Siemens Signia provides excellent noise reduction and a comfortable fit, while the Starkey Livio AI features advanced technology like health tracking and fall detection. The Oticon Opn S enhances speech understanding and reduces listening effort, making it suitable for elderly users.',
  },
  {
    question: ' What are the best hearing aid brands in India according to Quora?',
    answer: "According to Quora, the best hearing aid brands in India are Signia, Phonak, Siemens, Resound, and Starkey. Quora users frequently recommend these brands for their reliability, advanced features, and good customer service, making them popular choices among users seeking effective hearing solutions.",
  },
  {
    question: 'What are the top 10 hearing aid companies in the world?',
    answer: "The top 10 hearing aid companies in the world are Signia, Phonak, Siemens, Resound, Starkey, Oticon, Unitron, Bernafon, Sonic, and Interton. These companies are recognized globally for their innovation, quality, and user satisfaction, consistently delivering advanced hearing solutions to improve the quality of life for individuals with hearing loss.​",
  },
  
  // Add more FAQ items as needed
];

export default HearingAidInIndiaFAQS;

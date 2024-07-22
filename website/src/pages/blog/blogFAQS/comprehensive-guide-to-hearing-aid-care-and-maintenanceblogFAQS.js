import { useState } from 'react';
import styles from '../styles/blog.module.css';

const HearingAidCareAndMaintenanceFAQS = () => {
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
    question: 'What is the daily routine for hearing aid care?',
    answer: 'Daily routines include wiping the hearing aids with a dry, soft cloth, brushing away any debris, and storing them in a dry, safe place. Regular cleaning helps maintain sound quality and prevent damage.',
  },
  {
    question: 'How often should I perform deep cleaning on my hearing aids?',
    answer: 'Deep cleaning should be done weekly or monthly, depending on your usage. It involves more thorough techniques such as cleaning vents and using a hearing aid dryer.',
  },
  {
    question: 'What are the signs that my hearing aids need professional maintenance?',
    answer: 'If you experience distorted or no sound, persistent feedback, or if you notice any physical damage, it&apos;s time to seek professional help. Regular check-ups with an audiologist are also recommended.',
  },
  {
    question: 'What tools and products are recommended for hearing aid maintenance?',
    answer: "Recommended tools include a soft cloth, hearing aid cleaning brush, wax pick or loop, and hearing aid cleaning wipes. Avoid using water or alcohol-based cleaners as they can damage the devices.",
  },
  {
    question: 'How can I extend the life of my hearing aid accessories like batteries and ear moulds?',
    answer: "Store batteries in a cool, dry place and remove them if not in use for a long time to prevent corrosion. Clean ear moulds regularly with warm, soapy water and ensure they are completely dry before reattaching.",
  },
  
  // Add more FAQ items as needed
];

export default HearingAidCareAndMaintenanceFAQS;

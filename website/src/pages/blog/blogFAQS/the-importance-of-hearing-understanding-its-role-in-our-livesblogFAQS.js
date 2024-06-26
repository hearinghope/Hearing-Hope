import { useState } from 'react';
import styles from '../styles/blog.module.css';

const HearingRoleInLiveFAQS = () => {
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
    question: 'What are the consequences of untreated hearing loss?',
    answer: 'Untreated hearing loss can lead to various detrimental effects, including social isolation and loneliness due to difficulty following conversations, communication frustrations, and increased risk of mental health issues like depression and cognitive decline. It also poses safety hazards by impairing the ability to hear warning signals or alarms and reduces quality of life by making it challenging to enjoy activities like listening to music or attending social gatherings.',
  },
  {
    question: 'How can I protect my hearing?',
    answer: 'To protect your hearing, limit exposure to loud noises by using earplugs or earmuffs and avoiding prolonged loud sounds. Lower the volume on personal audio devices and avoid extended high-volume listening. Maintain a healthy lifestyle with a balanced diet, regular exercise, and stress management. Lastly, schedule regular hearing check-ups, especially if you&apos;re at higher risk for hearing loss.',
  },
  {
    question: 'What options are there for treating hearing loss?',
    answer: 'Popular treatments for hearing loss include hearing aids, which amplify sound to improve hearing, and cochlear implants, surgically implanted devices that help those with profound hearing loss experience sound. Additionally, assistive listening devices, such as amplified telephones and FM systems, enhance hearing in specific situations.',
  },
  {
    question: 'Why is early detection of hearing loss important?',
    answer: "Early detection of hearing loss allows for prompt intervention, which can prevent further damage, improve communication and social interactions, support language development in children, reduce the risk of mental health issues, and enhance overall quality of life.",
  },
  {
    question: 'How can I overcome the stigma associated with hearing loss?',
    answer: "The stigma around hearing loss often deters people from seeking treatment. To overcome this, educate yourself and others about the prevalence of hearing loss and the effectiveness of modern treatments. Embrace hearing aids as helpful tools, much like eyeglasses for vision. Seek support from doctors, audiologists, or support groups for guidance and encouragement. Remember that treating hearing loss can significantly improve communication, social interactions, and overall well-being.",
  },
  
  // Add more FAQ items as needed
];

export default HearingRoleInLiveFAQS;

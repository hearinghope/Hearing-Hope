import { useState } from 'react';
import styles from '../styles/blog.module.css';

const BenefitsOfSpeechTherapyFAQS = () => {
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
    question: 'What are the disadvantages of speech therapy?',
    answer: 'While speech therapy offers numerous benefits, there are some disadvantages to consider. It can be time-consuming, requiring regular sessions over an extended period, and costs can add up, especially if insurance doesn’t cover the therapy. Additionally, progress can be slow, requiring patience and persistence from both the therapist and the patient.',
  },
  {
    question: 'What are the benefits of speech therapy for adults?',
    answer: 'Speech therapy for adults provides several advantages, including helping to recover speech and language skills lost due to medical conditions like strokes, improving professional communication and public speaking abilities, and assisting in managing speech disorders such as stuttering and voice disorders. These benefits significantly enhance the quality of life for adults facing these challenges.',
  },
  {
    question: 'What do speech therapists do?',
    answer: 'Speech therapists, or speech-language pathologists, perform various tasks. They assess and diagnose speech, language, and communication disorders, develop and implement personalized therapy plans, and work with individuals to improve articulation, fluency, and language comprehension. Their goal is to help patients communicate more effectively and confidently.',
  },
  {
    question: 'What are the benefits of speech therapy for children and toddlers? ',
    answer: "Speech therapy offers significant benefits for young children and toddlers. It enhances language development and vocabulary, improves speech clarity and articulation, and supports better social interactions and communication skills. Early intervention can set the foundation for future academic and social success, making a lasting positive impact.",
  },
  {
    question: 'What are some common speech therapy techniques?',
    answer: "Speech therapists use various techniques to help their patients. These include articulation therapy to improve pronunciation, language intervention activities to build vocabulary and grammar skills, voice therapy to address pitch, volume, and quality issues, and augmentative and alternative communication (AAC) for non-verbal individuals. These techniques are tailored to meet the specific needs of each patient, ensuring effective treatment.",
  },
  
  // Add more FAQ items as needed
];

export default BenefitsOfSpeechTherapyFAQS;

import { useState } from 'react';
import styles from '../styles/blog.module.css';

const BeraTestFAQS = () => {
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
    question: 'What is a BERA test used for?',
    answer: 'The BERA (Brainstem Evoked Response Audiometry) test evaluates hearing function and the health of the auditory pathway from the ear to the brainstem. This test is invaluable for the early identification of hearing impairments in newborns and infants. It is essential for diagnosing various types of hearing loss, including conductive, sensorineural, and auditory neuropathy. Furthermore, the BERA test is essential for assessing the auditory system in individuals with neurological conditions.',
  },
  {
    question: 'Why is the BERA test beneficial?',
    answer: 'BERA offers numerous advantages. It is non-invasive and safe, making it suitable for individuals of all ages, including newborns and those sensitive to invasive procedures. The test provides objective results, delivering reliable data independent of patient responses, ensuring consistency. This facilitates early detection of hearing issues, enabling timely management. Moreover, BERA has broad applicability and is useful for patients of all ages and abilities.',
  },
  {
    question: 'Who needs a BERA test?',
    answer: 'The BERA test is recommended for various groups, including newborns and infants who have a family history of hearing loss, were born prematurely, or exhibit signs of hearing difficulties. It is also advised for children and adults who are suspected of having hearing loss or auditory processing disorders. Additionally, individuals with neurological conditions such as multiple sclerosis or brainstem lesions are advised to undergo the BERA test.',
  },
  {
    question: 'How is the BERA test conducted?',
    answer: "The BERA test involves placing electrodes on the scalp, earlobes, or mastoid bones and presenting click or tone burst sounds through earphones. These sounds generate electrical responses within the auditory pathway, which are then recorded. The recorded responses are analysed to assess hearing thresholds and the integrity of the auditory pathway.",
  },
  {
    question: 'What are the limitations of the BERA test?',
    answer: "The BERA test, while valuable, does have its limitations. It primarily assesses high-frequency hearing, which means it might miss low-frequency hearing loss. Additionally, the test requires the patient to remain still and relaxed, which can be challenging for some individuals. To obtain a comprehensive assessment of a patient's hearing, complementary audiological tests may also be necessary.",
  },
  
  // Add more FAQ items as needed
];

export default BeraTestFAQS;

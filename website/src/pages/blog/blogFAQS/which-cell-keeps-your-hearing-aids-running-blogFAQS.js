import { useState } from 'react';
import styles from '../styles/blog.module.css';

const HearingAidsRunningCellFAQS = () => {
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
    question: 'What type of battery powers traditional hearing aids?',
    answer: 'Traditional hearing aids typically rely on mercury cells, which are non-rechargeable batteries known for their numerous advantages. One significant benefit is their long lifespan, lasting between one to three years, which minimizes the need for frequent battery changes. Additionally, mercury cells provide a stable voltage, ensuring consistent performance of the hearing aids. Their compact size allows them to fit seamlessly into discreet hearing aid designs, and their low current drain ensures efficient power delivery for the devices.',
  },
  {
    question: 'Why are mercury cells becoming less common?',
    answer: 'While convenient, mercury cells pose a significant environmental concern due to the hazardous nature of mercury. Many countries have implemented regulations restricting their use, leading to a phase-out in some regions.',
  },
  {
    question: 'What are some eco-friendly alternatives to mercury cells?',
    answer: 'Zinc-air batteries are a rechargeable option that utilizes zinc and air (oxygen), making them a more sustainable choice, though they require regular charging. On the other hand, lithium-ion batteries, which are similar to those used in smartphones, offer a long life and are also rechargeable, albeit with a slightly higher initial cost.',
  },
  {
    question: 'How do I choose the correct battery for my hearing aid?',
    answer: "When selecting batteries, consider several factors. Lifestyle is important; long-life options like mercury (if available) or lithium-ion batteries might be ideal for those who prefer minimal changes, while rechargeable batteries provide an eco-friendly choice for those who are comfortable with a charging routine. Dexterity is another consideration; users with limited hand mobility might benefit from longer-lasting batteries such as mercury or lithium-ion. Hearing needs should also be taken into account, as more sophisticated hearing aids may drain batteries faster. It's essential to discuss your specific needs with your audiologist to ensure compatibility. Budget plays a role as well; although lithium-ion batteries might have a higher upfront cost, they can offer significant long-term savings due to fewer replacements. Finally, for environmental considerations, rechargeable options like zinc-air or lithium-ion are greener choices.",
  },
  {
    question: 'What resources can help me choose the correct battery?',
    answer: "Your audiologist is a valuable resource. Discuss your needs and preferences to find the power source that best suits your hearing aid and lifestyle. They can guide you through the available options and address any questions.",
  },
  
  // Add more FAQ items as needed
];

export default HearingAidsRunningCellFAQS;

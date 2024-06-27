import { useState } from 'react';
import styles from '../styles/blog.module.css';

const HearingMachinePriceFAQS = () => {
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
    question: 'What factors affect the cost of digital hearing aids?',
    answer: 'The cost of digital hearing aids is influenced by several factors, including their technology and features, the brand and model, customization and fit, and additional services such as warranties and professional fittings. Advanced features like noise reduction, Bluetooth connectivity, and rechargeable batteries can increase prices. Well-known brands and custom-fit models also tend to be more expensive. Additionally, services such as follow-up adjustments and extended warranties add to the overall cost​.',
  },
  {
    question: 'How do I choose the right digital hearing aid?',
    answer: 'Choosing the right digital hearing aid involves assessing your hearing needs, comparing prices and features of different models, consulting with an audiologist, and looking for deals and discounts. Evaluate the severity of your hearing loss, consider the specific features you need, and research various options within your budget. An audiologist can provide professional advice and help you select a device that fits well and functions effectively. Searching for promotions and financing options can also make high-quality hearing aids more affordable​.',
  },
  {
    question: 'What are the different price ranges for digital hearing aids?',
    answer: 'Digital hearing aids are available in three price ranges. Low-end models cost $500 to $1,500 and offer basic features for mild to moderate hearing loss. Mid-range devices, priced between $1,500 and $3,000, provide advanced features at an affordable price. High-end models, costing $3,000 to $5,000 or more, include the latest technology, superior sound quality, and advanced noise management.',
  },
  {
    question: 'How often should I maintain and check my digital hearing aid?',
    answer: "Regular maintenance and check-ups are crucial for the optimal performance of digital hearing aids. You should clean your hearing aids daily using a soft, dry cloth and store them properly when not in use. Regular professional check-ups with an audiologist are recommended to ensure the devices function optimally and make necessary adjustments. Addressing minor issues promptly through basic troubleshooting can prevent significant problems and prolong the lifespan of your hearing aids​.",
  },
  {
    question: 'Can I get discounts or financing for digital hearing aids?',
    answer: "Many manufacturers and retailers offer discounts, promotions, and financing options to make digital hearing aids more affordable. Seasonal sales, special promotions, and payment plans can significantly reduce costs. Look for these deals and consult with an audiologist who might know about available offers. Additionally, a portion of the cost of hearing aids may be covered by certain government and insurance programs.​",
  },
  
  // Add more FAQ items as needed
];

export default HearingMachinePriceFAQS;

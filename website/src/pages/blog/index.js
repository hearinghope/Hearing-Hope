// pages/index.js
import { useState } from 'react'; // Import useState hook
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/blog.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '../WhatsAppButton';
import Head from 'next/head';

// Sample data for demonstration
const cardsData = [
  
  {
    "id": 11,
    "image": "/Home/lowfrequencyhearinglosslist.png",
    "heading": "Understanding Low-Frequency Hearing Loss",
    "description": "Low-frequency hearing loss is a condition where individuals struggle to hear low-pitched sounds. This type of hearing loss affects the ability to perceive sounds...",
    "link": "/blog/understanding-low-frequency-hearing-loss"
  },

  {
    "id": 10,
    "image": "/Home/hearingaidinindialist.png",
    "heading": "Which Hearing Aid is Best in India? A Comprehensive Guide",
    "description": "Hearing aids are vital tools for those with hearing impairments, greatly improving their quality of life. These small, yet powerful devices amplify sounds,...",
    "link": "/blog/which-hearing-aid-is-best-in-india-a-comprehensive-guide"
  },
  
  
  {
    "id": 9,
    "image": "/Home/benefitsofspeechtherapylist.png",
    "heading": "The Comprehensive Benefits of Speech Therapy",
    "description": "Speech therapy is an essential intervention that helps individuals improve their communication skills and overcome speech-related challenges. It offers...",
    "link": "/blog/the-comprehensive-benefits-of-speech-therapy"
  },
  
  {
    "id": 8,
    "image": "/Home/hearing-loss-aidlist.png",
    "heading": "What Level of Hearing Loss Requires a Hearing Aid?",
    "description": "Hearing loss is an important issue that can affect people of all ages. Addressing hearing loss early is crucial because it can impact daily activities,...",
    "link": "/blog/what-level-of-hearing-loss-requires-a-hearing-aid"
  },
  
  {
    "id": 7,
    "image": "/Home/hearing-aid-care-and-maintenancelist.png",
    "heading": "Comprehensive Guide to Hearing Aid Care and Maintenance",
    "description": "Maintaining hearing aids is essential for ensuring their optimal performance and longevity. Without proper care, hearing aids can accumulate dirt and moisture,...",
    "link": "/blog/comprehensive-guide-to-hearing-aid-care-and-maintenance"
  },
  
  {
    "id": 6,
    "image": "/Home/speech-therapy-typeslist.png",
    "heading": "Understanding the Different Types of Speech Therapy",
    "description": "Speech therapy plays a crucial role in helping individuals overcome communication and swallowing disorders. These disorders can significantly impact a person's quality...",
    "link": "/blog/understanding-the-different-types-of-speech-therapy"
  },
  {
    "id": 5,
    "image": "/Home/hearingmachine-pricelist.png",
    "heading": "Understanding Digital Hearing Machine Prices: A Comprehensive Guide",
    "description": "Digital hearing aids are essential for those with hearing impairments, offering advanced features that enhance auditory experiences. This thorough guide...",
    "link": "/blog/understanding-digital-hearing-machine-prices-a-comprehensive-guide"
  },  
  {
    "id": 4,
    "image": "/Home/hearing-rolelist.png",
    "heading": "The Importance of Hearing: Understanding Its Role in Our Lives",
    "description": "Hearing plays a fundamental role in our day-to-day existence, influencing our capacity to communicate, enjoy entertainment, and maintain overall well...",
    "link": "/blog/the-importance-of-hearing-understanding-its-role-in-our-lives"
  },

  {
    "id": 3,
    "image": "/Home/bera-testlist.png",
    "heading": "Understanding the BERA Test: A Comprehensive Guide",
    "description": "The Brainstem Evoked Response Audiometry (BERA) test is a crucial diagnostic tool used in both audiology and neurology. It is critical in assessing...",
    "link": "/blog/what-is-bera-test"
  },

  {
    "id": 2,
    "image": "/Home/hearing-aids-celllist.png",
    "heading": "Which cell keeps your hearing aids running?",
    "description": "Hearing aids are an essential tool that helps many people with hearing loss reintegrate into society. These tiny devices amplify sound, allowing individuals to participate in conversations,....",
    "link": "/blog/which-cell-keeps-your-hearing-aids-running"
  },
  {
      "id": 1,
      "image": "/Home/hearing-problemlist.png",
      "heading": "Types of Hearing Problems: An In-Depth Guide",
      "description": "Hearing is one of our most vital senses, allowing us to communicate, enjoy music, and be aware of our surroundings. Unfortunately, hearing problems are common and affect people of all ages....",
      "link": "/blog/types-of-hearing-problems-an-in-depth-guide"
    },
    // {
    //   "id": 6,
    //   "image": "/Home/HomeBlog3.png",
    //   "heading": "The Path to Healthy Hearing: Empowered by Hearing Hope",
    //   "description": "The ability to hear is a priceless gift that connects us to the people and experiences around us in a world full of the symphony of life. Unfortunately, many people face hearing problems, which can significantly lower their quality of life. Hearing Hope is committed to assisting you on a transformative journey towards better hearing and increased well-being.",
    //   "link": "/blog/Blog3"
    // },
    // {
    //   "id": 7,
    //   "image": "/Home/HomeBlog3.png",
    //   "heading": "The Path to Healthy Hearing: Empowered by Hearing Hope",
    //   "description": "The ability to hear is a priceless gift that connects us to the people and experiences around us in a world full of the symphony of life. Unfortunately, many people face hearing problems, which can significantly lower their quality of life. Hearing Hope is committed to assisting you on a transformative journey towards better hearing and increased well-being.",
    //   "link": "/blog/Blog3"
    // },
    // {
    //   "id": 8,
    //   "image": "/Home/HomeBlog3.png",
    //   "heading": "The Path to Healthy Hearing: Empowered by Hearing Hope",
    //   "description": "The ability to hear is a priceless gift that connects us to the people and experiences around us in a world full of the symphony of life. Unfortunately, many people face hearing problems, which can significantly lower their quality of life. Hearing Hope is committed to assisting you on a transformative journey towards better hearing and increased well-being.",
    //   "link": "/blog/Blog3"
    // }
  
  // Your existing card data here
];

const Blog = () => {
  // Define state for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 27; // Number of cards per page

  // Calculate indexes for pagination
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardsData.slice(indexOfFirstCard, indexOfLastCard);

  // Function to handle page change
  const paginate = pageNumber => setCurrentPage(pageNumber);

    // Function to handle previous page
    const previousPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    // Function to handle next page
    const nextPage = () => {
      if (indexOfLastCard < cardsData.length) {
        setCurrentPage(currentPage + 1);
      }
    };

    return (
      <div>
        <div>
          <WhatsAppButton />
        </div>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Home</title>
          <link rel="icon" href="./favicon.png" />
        </Head>
        <Navbar />
        <h1 className={styles.blogHeading}>My Blog</h1>
        <div className={styles.cardsContainer}>
          {currentCards.map((card) => (
            <div key={card.id} className={styles.Blogcard}>
              <Image src={card.image} alt={card.heading} width={400} height={200} className={styles.BlogCardimg} />
              <div className={styles.BlogCardContent}>
                <h2 className={styles.BlogCardHeading}>{card.heading}</h2>
                <p className={styles.BlogCardDescription}>{card.description}</p>
                <Link href={card.link} legacyBehavior>
                  <a>
                    <button className={styles.BlogBtn}>Learn More</button>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button
            onClick={previousPage}
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              margin: '0 10px',
              padding: '15px 20px',
              borderRadius: '5px',
              color: '#333',
              transition: 'background-color 0.3s',
              outline: 'none',
              fontSize: '20px', // Increase font size
            }}
          >
            &laquo;
          </button>
          {Array.from({ length: Math.ceil(cardsData.length / cardsPerPage) }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              style={{
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                margin: '0 5px',
                padding: '15px 20px',
                borderRadius: '5px',
                color: currentPage === i + 1 ? '#FFA500' : '#333',
                transition: 'color 0.3s',
                outline: 'none',
                fontSize: '20px', // Increase font size
              }}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={nextPage}
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              margin: '0 10px',
              padding: '15px 20px',
              borderRadius: '5px',
              color: '#333',
              transition: 'background-color 0.3s',
              outline: 'none',
              fontSize: '20px', // Increase font size
            }}
          >
            &raquo;
          </button>
        </div>
        <Footer />
      </div>
    );
  };
  

export default Blog;

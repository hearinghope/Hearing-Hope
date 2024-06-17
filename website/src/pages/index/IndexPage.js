import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import IndexHeader from './components/IndexHeader';
import styles from './styles/index.module.css';
import Footer from '@/components/Footer';
import Head from 'next/head';
import Swiper from './components/Swiper';
import IndexCards from './components/IndexCards';
import IndexAbout from './components/IndexAbout';
import IndexProducts from './components/IndexProducts';
import IndexTrust from './components/IndexTrust';
import IndexTestimonials from './components/IndexTestimonials';
import IndexCertifications from './components/IndexCertifications';
import IndexLocations from './components/IndexLocations';
import IndexFAQ from './components/IndexFAQ';
import IndexBlog from './components/IndexBlog';
import WhatsAppButton from '../WhatsAppButton';
import PopupForm from '@/components/PopupForm';
import Sliding from './components/Swiper';
const IndexPage = () => {
  // State to manage the visibility of the form
  const [isFormOpen, setIsFormOpen] = useState(true);

  // Function to handle the form close event
  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  return (
    
    <div className={styles.container}>
       <div>
        {/* Render the form if it's open */}
        {isFormOpen && <PopupForm onClose={handleFormClose} />}
      </div>
      <div>
      <WhatsAppButton />
      </div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Best Hearing Care Clinic in Delhi - Hearing Hope</title>
        <meta name="description" content="Experience expert hearing care in Delhi at Hearing Hope. Get tailored solutions for your hearing needs. Book your appointment today!"></meta>
        <meta name="robots" content= "index,follow"/>
        <meta property="og:title" content="Best Hearing Care Clinic in Delhi - Hearing Hope" />
        <meta property="og:description" content="Experience expert hearing care in Delhi at Hearing Hope. Get tailored solutions for your hearing needs. Book your appointment today!" />
            <meta property="og:url" content="https://www.hearinghope.in/"/>
            <meta property="og:image:url"
        content="https://www.hearinghope.in/_next/image?url=%2Flogo-transparent.png&w=256&q=75" />
        <link rel="canonical" href="https://www.hearinghope.in/"/>
        <link rel="icon" href="./favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "Hearing Hope",
              "alternateName": "hearing care clinic in Delhi",
              "url": "https://www.hearinghope.in/",
              "logo": "https://www.hearinghope.in/_next/image?url=%2Flogo-transparent.png&w=256&q=75",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 9711871168",
                "contactType": "customer service",
                "contactOption": "TollFree",
                "areaServed": "IN",
                "availableLanguage": ["en", "Hindi"]
              },
              "sameAs": [
                "https://www.facebook.com/people/Hearing-Hope/100063607797322/",
                "https://www.youtube.com/@HearingHope",
                "https://www.hearinghope.in/"
              ]
            })
          }}
        />

      </Head>
      <Navbar />
      <IndexHeader />
      <Sliding/>
      <IndexCards />
      <IndexAbout />
      <IndexProducts />
      <IndexTrust />
      <IndexTestimonials />
      <IndexCertifications />
      <IndexLocations />
      <IndexFAQ />
      <IndexBlog />
      <Footer />
    </div>
  );
};

export default IndexPage;
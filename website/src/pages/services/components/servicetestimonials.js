import Image from 'next/image';
import styles from '../styles/service.module.css';

const ServiceTestimonials = () => {
  const reviews = [
    {
      id: 1,
      name: 'Rishav Agarwal',
      imge: 'R.png',
      stars: 5,
      review: 'I recently took speech therapy services from Hearing Hope and found it incredibly beneficial. The personalized attention and expert guidance have made a significant difference in my communication abilities. Highly recommend their professional and supportive approach!',
    },
    {
      id: 2,
      name: 'Sachin Joshi',
      imge: 'S.png',
      stars: 5,
      review: 'I recently acquired a new hearing aid and am pleased to report a marked improvement in my balance and overall well-being.  The doctor demonstrated exceptional expertise, and the staff were courteous and professional. Thank you for a positive experience.',
    },
    {
      id: 3,
      name: 'Rishika Jain',
      imge: 'R.png',
      stars: 5,
      review: 'I recently had the pleasure of experiencing the hearing care services provided by Hearing Hope. I am thoroughly impressed with the exceptional quality of care offered. The staff was incredibly supportive and provided explanations that were both clear and insightful.',
    },
    {
      id: 4,
      name: 'Prakash Sharma',
      imge: 'P.png',
      stars: 5,
      review: 'I am a repeat customer of Hearing Hope and bought my new Hearing Aids from them. The whole team is very customer-friendly and gives service with a smile. All the very best to the whole team! ',
    },
    {
      id: 5,
      name: 'Vijay Chauhan',
      imge: 'V.png',
      stars: 5,
      review: 'Amazing experience that extends their thorough hearing test service to their trusted products and exceptional sale support. I highly recommend them to anyone in need of hearing care solutions.',
    },
    {
      id: 6,
      name: 'Srishti Banzal',
      imge: 'S.png',
      stars: 5,
      review: 'The staff was very professional and friendly. They gave my grandmother a very good audiometry and hearing aid trial at home. I would recommend Hearing Hope for your needs.',
    },
    // Add more reviews...
  ];

  return (
    <div className={styles.Testimonialcontainer}>
      <h2 style={{ color: '#ff6600', marginBottom: '20px', fontSize: '40px' }}>Testimonials</h2>
      <div className={styles.TestimonialcardContainer}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.Testimonialcard}>
            <div className={styles.userInfo}>
              <Image
                src={`/Home/${review.imge}`}
                alt={`${review.name}'s avatar`}
                height={50}
                width={50}
                className={styles.userimge}
              />
              <div className={styles.userName}>
                {review.name}
                <span className={styles.rating}>{'\u2605'.repeat(review.stars)}</span>
              </div>
              <Image src="/Home/google.png" alt="google" height={30} width={30} />
            </div>
            <div className={styles.review}>{review.review}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceTestimonials;

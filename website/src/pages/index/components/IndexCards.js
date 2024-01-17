import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/index.module.css';

const IndexCards = ({ imgeSrc, text }) => {
  return (
    <Link href="/service">
      <div className={styles.card}>
        <Image src={imgeSrc} alt={text} width={400} height={200} style={{borderRadius:'11px'}}/>
      </div>
    </Link>
  );
};
// Page logic
const cardsData = [
  { id: 1, imgeSrc: '/IndexCard1.png', text: 'Hearing Aids' },
  { id: 2, imgeSrc: '/IndexCard3.png', text: 'Hearing Tests' },
  { id: 3, imgeSrc: '/IndexCard2.png', text: 'Hearing Speech Therapy' },
];

const Home = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap' }}>
      {cardsData.map((card) => (
        <IndexCards key={card.id} imgeSrc={card.imgeSrc}  />
      ))}
    </div>
  );
};

export default Home;

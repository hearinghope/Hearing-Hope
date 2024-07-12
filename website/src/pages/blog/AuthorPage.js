import Image from "next/image"
import Link from "next/link"
import styles from './styles/blog.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';
import WhatsAppButton from '../WhatsAppButton';

const AuthorPage  = () => {
    return(
        <>
        <div><WhatsAppButton /></div>
        <Navbar />

        <div className={styles.AuthorPageContainer}>
            <Image className={styles.AuthorMainPicture} src='/About/Harshi.jpg' width={500} height={400} />
            <div className={styles.Author2Container}>
            <h1 className={styles.AuthorName}>Dr. Harshi</h1>
            <div className={styles.AuthorDescriptionPage}>
                <p>
                Dr. Harshi is a distinguished audiologist and a highly qualified medical professional with an MBBS degree. With years of experience in the field of audiology, Dr. Harshi brings a wealth of knowledge and expertise to the table. She is deeply committed to helping individuals with hearing loss lead better lives through personalized care and advanced hearing solutions. Dr. Harshi&apos; approach to hearing care is holistic, ensuring that each patient receive comprehensive support tailored to their unique needs.
                </p>
                <br /> <br />
                <p>
                At Hearing Hope, Dr. Harshi plays a pivotal role in educating and guiding patients on their journey to better hearing. Her contributions to our blog provide valuable insights into hearing loss, hearing care, and the latest advancements in hearing aids. Dr. Harshi&apos; dedication to her patients and her passion for audiology make her an invaluable asset to our team. We are proud to have her expertise and compassionate care as the cornerstone of our practice.
                </p>
            </div>
            <div className={styles.AuthorSocials}>
            <Link href='https://www.instagram.com/drharshiverma/'><Image className={styles.AuthorSocialsButtons} src='/Components/instagram.png' alt='instagram logo' width={30} height={30}></Image></Link>
            <Link href='https://www.facebook.com/dr.harshi.verma?mibextid=LQQJ4d'><Image className={styles.AuthorSocialsButtons} src='/Components/facebook.png' alt='facebook logo' width={30} height={30}></Image></Link>
              <a href="mailto:hearinghope@gmail.com"><Image  className={styles.AuthorSocialsButtons} src='/Components/email.png' alt='Mail logo' width={30} height={30}></Image></a>
            </div>
            </div>
        </div>
        </>
    )
}

export default AuthorPage;
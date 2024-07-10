import Image from "next/image"
import Link from "next/link"
import styles from './styles/blog.module.css';

const BlogAuthorBox = () => {
    return(

<div className={styles.BlogAuthorBox}>
          <Image className={styles.AuthorImage} src='/About/Harshi.jpg' alt='Author pic' width={100} height={100} style={{borderRadius:"50%"}}></Image>
          <div className={styles.AuthorBio}>
            <p className={styles.AuthorName}><Link href='./AuthorPage'>Dr Harshi</Link></p>
            <span className={styles.AuthorDescription}>Dr. Harshi, is an accomplished Audiologist with extensive expertise in treating individuals with hearing impairments.</span>
            <div className={styles.AuthorSocials}>
            <Link href='https://www.instagram.com/drharshiverma/'><Image className={styles.AuthorSocialsButtons} src='/Components/instagram.png' alt='instagram logo' width={30} height={30}></Image></Link>
            <Link href='https://www.facebook.com/dr.harshi.verma?mibextid=LQQJ4d'><Image className={styles.AuthorSocialsButtons} src='/Components/facebook.png' alt='facebook logo' width={30} height={30}></Image></Link>
              <a href="mailto:hearinghope@gmail.com"><Image  className={styles.AuthorSocialsButtons} src='/Components/email.png' alt='Mail logo' width={30} height={30}></Image></a>
            </div>
          </div>
        </div>
    )

}

export default BlogAuthorBox;



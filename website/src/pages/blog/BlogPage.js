import Navbar from '@/components/Navbar';
import BlogHeader from './components/BlogHeader';
import styles from './styles/blog.module.css';
import Footer from '@/components/Footer';
import Head from 'next/head';
import WhatsAppButton from '../WhatsAppButton';

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <div>
      <WhatsAppButton />
      </div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Blog</title>
        <link rel="icon" href="./favicon.png" />

      </Head>
      <Navbar />
      <BlogHeader />
      <Footer />
    </div>
  );
};

export default BlogPage;
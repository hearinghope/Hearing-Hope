import Head from 'next/head';
import NextTopLoader from 'nextjs-toploader';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        />
      </Head>
      <NextTopLoader color="#ff6600"  initialPosition={0.08}
  crawlSpeed={200}
  height={5}
  crawl={false}
  showSpinner={false}
  easing="ease"
  speed={200}
  template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  zIndex={1600}
  showAtBottom={false}/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

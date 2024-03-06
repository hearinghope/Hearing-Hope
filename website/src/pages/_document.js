// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
          />
          {
          /* Add other global stylesheets or meta tags here */
          }
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-VKSQZQZT0D"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag(&apos;js&apos;, new Date());

  gtag(&apos;config&apos;, &apos;G-VKSQZQZT0D&apos;);
</script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>{/* Additional meta tags, links, and scripts */}</Head>
        <body className="overflow-x-hidden">
          <Main/>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

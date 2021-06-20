import Document, { Html, Head, Main, NextScript } from "next/document"
import { getCssString } from "../stitches.config";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssString() }} />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Noto+Sans+KR&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
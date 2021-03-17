import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import { getCssString } from "../stitches.config";

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    try {
      const initialProps = await NextDocument.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps?.styles}
            <style dangerouslySetInnerHTML={{
              __html: "body { opacity: 0; visibility: hidden; }"
            }} />
            <noscript>
              <style dangerouslySetInnerHTML={{
                __html: "body { opacity: 1; visibility: visible; }"
              }} />
            </noscript>
            <style
              id="stitches"
              dangerouslySetInnerHTML={{
                __html: getCssString()
              }}
            />
          </>
        )
      };
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    return (
      <Html lang="ko">
        <Head>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
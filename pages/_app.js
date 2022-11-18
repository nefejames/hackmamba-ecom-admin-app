import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@layout/index";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Script
        src="https://upload-widget.cloudinary.com/global/all.js"
        type="text/javascript"
        strategy="beforeInteractive"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;

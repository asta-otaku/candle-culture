import { Header } from "@/layout/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Candle Culture</title>
      </Head>
      <Header>
        <Component {...pageProps} />
      </Header>
    </>
  );
}

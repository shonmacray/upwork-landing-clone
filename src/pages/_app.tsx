import SiteHeader from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SiteHeader>
      <Component {...pageProps} />
    </SiteHeader>
  );
}

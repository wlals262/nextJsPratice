import "@/styles/globals.css";
import type { AppProps } from "next/app";
import GlobalLayout from "./components/global-layout";
import { ReactNode } from "react";
import { NextPage } from "next";

// 타입 별칭
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: NextPageWithLayout }) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>;
}

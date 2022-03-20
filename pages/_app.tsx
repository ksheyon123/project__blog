import { ReactElement, ReactNode } from "react";
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import "../styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        {getLayout(<Component {...pageProps} />)}
      </RecoilRoot>
    </ThemeProvider>

  )
}

export default App

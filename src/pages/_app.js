import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { createEmotionCache } from '../utils/create-emotion-cache';
import { CssBaseline } from '@mui/material';
import { theme } from "../theme";
import "../theme/custom.css";

const clientSideEmotionCache = createEmotionCache();

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
      <CacheProvider value={emotionCache}>
        <Head>
          <title>
            Portfolio
          </title>
          <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
          />
        </Head>
          <ThemeProvider theme={theme}>
              <CssBaseline />
              {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
      </CacheProvider>
  )
}

export default App

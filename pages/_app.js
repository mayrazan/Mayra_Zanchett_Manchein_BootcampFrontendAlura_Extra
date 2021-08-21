import React from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import PropTypes from 'prop-types';
import GlobalStyle from '../src/theme/GlobalStyle';
import theme from '../src/theme';
import { FormProvider } from '../src/context/Provider';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Alura Viagens</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Pattaya&family=Roboto:wght@100;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <FormProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </FormProvider>
      </ThemeProvider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

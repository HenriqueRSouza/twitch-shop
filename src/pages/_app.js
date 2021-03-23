import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Helmet } from "react-helmet";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
} 

`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Chango&display=swap" rel="stylesheet"/>
      </Helmet>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp

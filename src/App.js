import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Animation from './components/Animation';
import Footer from './components/Footer';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }
`;

const defaultTheme = {
  darkColor: '#071e3d',
  lightColor: '#21e6c1',
  primaryColor: '#1f4287',
};

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Header />
      <Hero />
      <Animation />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

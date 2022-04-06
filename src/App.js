import React from "react";
import GlobalStyles from "./GlobalStyles";
import { lightTheme } from "./components/Theme";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router";
import Main from "./components/Main";
import About from "./components/About";
import Blog from "./components/Blog";
import Work from "./components/Work";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={lightTheme}>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/work" element={<Work />} />
          <Route exact path="/skills" element={<Skills />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;

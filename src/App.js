import React from "react";
import "../node_modules/react-vis/dist/style.css";

import DeepWork from "./components/DeepWork";
import Header from "./components/Header";
import Board from "./components/Board";
import Layout from "./components/Layout";
import GlobalStyles from "./utils/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Theme from "./utils/Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Layout />
      </>
    </ThemeProvider>
  );
}

export default App;

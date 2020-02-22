import React from "react";
import "../node_modules/react-vis/dist/style.css";

import DeepWork from "./components/DeepWork";
import Header from "./components/Header";
import Board from "./components/Board";

function App() {
  return (
    <>
      <Header />
      <Board />
    </>
  );
}

export default App;

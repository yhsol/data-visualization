import React from "react";
import "../node_modules/react-vis/dist/style.css";

import SimpleBarChart from "./components/SimpleBarChart";
import DeepWork from "./components/DeepWork";
import BarChart from "./components/nivo/Barchart";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <DeepWork />
      <SimpleBarChart />
      <BarChart />
    </>
  );
}

export default App;

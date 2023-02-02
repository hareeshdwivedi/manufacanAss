import React from "react";
import data from "../assets/wineData";
import "./App.css";
import Chart from "./Chart";

const App = () => {
  const alcohols: number[] = data.map((d) => d[1]);
  const malicAcids: number[] = data.map((d) => d[2]);
  const colorIntensities: number[] = data.map((d) => d[9]);
  const hues: number[] = data.map((d) => d[10]);

  return (
    <div className="container">
      {/* bar chart */}
      <Chart
        xValues={{ data: alcohols, name: "Alcohol" }}
        yValues={{ data: malicAcids, name: "Malic Acid" }}
        title="Alcohol"
        type="bar"
      />
      {/* scatter chart */}
      <Chart
        xValues={{ data: colorIntensities, name: "Color Intensities" }}
        yValues={{ data: hues, name: "Hues" }}
        title="Color Intensities"
        type="scatter"
      />
    </div>
  );
};

export default App;

import React, { Component } from "react";
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  VerticalBarSeries,
  MarkSeries,
  RadialChart,
  AreaSeries,
} from "react-vis";
import styled from "styled-components";

function SimpleBarChart() {
  const datas = [
    { a: "a", b: 0 },
    { a: "b", b: 1 },
    { a: "c", b: 5 },
  ];
  const data = datas.map(item => ({ x: item.a, y: item.b }));
  console.log(data);
  // console.log(s);
  return (
    <div className="App">
      <XYPlot height={300} width={500} xType="ordinal">
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalBarSeries data={data} />
      </XYPlot>
    </div>
  );
}

export default SimpleBarChart;

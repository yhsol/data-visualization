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
  // const data = [
  //   { x: 0, y: 8 },
  //   { x: 1, y: 5 },
  //   { x: 2, y: 4 },
  //   { x: 3, y: 9 },
  //   { x: 4, y: 1 },
  //   { x: 5, y: 7 },
  //   { x: 6, y: 6 },
  //   { x: 7, y: 3 },
  //   { x: 8, y: 2 },
  //   { x: 9, y: 0 },
  // ];
  const datas = [
    { a: "a", b: 0 },
    { a: "b", b: 1 },
    { a: "c", b: 2 },
    { a: "d", b: 3 },
    { a: "e", b: 4 },
    { a: "f", b: 5 },
  ];
  const data = datas.map(item => ({ x: item.a, y: item.b }));
  console.log(data);
  // console.log(s);
  return (
    <div className="App">
      <XYPlot height={300} width={300} xType="ordinal">
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries data={data} />
      </XYPlot>
      <XYPlot height={300} width={300} xType="ordinal">
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalBarSeries data={data} />
      </XYPlot>
      <XYPlot height={300} width={300} xType="ordinal">
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <MarkSeries data={data} />
      </XYPlot>
      <XYPlot height={300} width={300} xType="ordinal">
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <AreaSeries data={data} />
      </XYPlot>
    </div>
  );
}

export default SimpleBarChart;

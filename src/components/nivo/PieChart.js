import React, { useEffect, useState } from "react";
import { ResponsivePie } from "@nivo/pie";
import { PieChartDatas } from "../Datas";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 23rem;
  height: 20rem;
`;

function PieChart({ datas, done }) {
  const [toggle, setToggle] = useState([]);

  const data = datas && datas !== null ? datas : PieChartDatas;
  const fill = id => ({
    match: {
      id: id,
    },
    id: "dots",
  });
  const doneData = done && done.map(item => fill(item.id));
  console.log(
    "pie chart's datas: ",
    datas.map(item => item.done === true),
  );
  console.log(done);
  const fillToggle =
    datas &&
    datas.map(item => item.done === true) &&
    datas.map(item => fill(item.id));

  useEffect(() => {
    fill();
  }, [done]);

  return (
    <Wrapper>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: "nivo" }}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: "color" }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "white",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
        ]}
        fill={doneData}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            translateY: 56,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </Wrapper>
  );
}
export default PieChart;

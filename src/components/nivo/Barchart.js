import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { BarChartDatas } from "../Datas";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 800px;
  height: 500px;
`;

function BarChart() {
  const data = BarChartDatas;
  const dataKeys = Object.keys(data[0]);
  console.log("multi bar chart datas: ", data);
  console.log(Object.keys(data[0]));

  // indexBy 를 title 로 변경.
  // input 으로 입력된 데이터를 그리면 됨.
  // 여러 그래프를 하나의 페이퍼에 담으려면 key 값이 서로 달라지기 때문에 그렇게 안될 듯.
  // 각각의 그래프를 따로 나누어서 그려야 하나?
  // 아니면 bar chart 보다 더 multi graph 에 적합한 chart 를 찾아야 하나?
  return (
    <Wrapper>
      <ResponsiveBar
        data={data}
        keys={dataKeys.slice(1, 4)}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: "nivo" }}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "country",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "food",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </Wrapper>
  );
}
export default BarChart;

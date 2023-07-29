import React from "react";

import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";

import mockData from "../../../mock/RadialBarChart_mock";

export default function RadialBarChartComponent() {
  return (
    <div>
      <RadialBarChart
        width={258}
        height={263}
        innerRadius="100%"
        outerRadius="80%"
        data={mockData}
        startAngle={220}
        endAngle={50}
      >
        <RadialBar
          minAngle={1}
          label={{ fill: "#FF0000", position: "insideStart" }}
          background
          clockWise={true}
          dataKey="uv"
        />
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
        <Tooltip />
      </RadialBarChart>
    </div>
  );
}

import React from "react";

import {
  LineChart,
  CartesianGrid,
  XAxis,

  Tooltip,
 
  Line,
} from "recharts";

import mockData from "../../../mock/LineChart_mock";

export default function LineChartComponent() {
  return (
    <LineChart width={258} height={263} data={mockData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
    
      <Tooltip />
     
      <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
}

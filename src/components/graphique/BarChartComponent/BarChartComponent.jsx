import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  Legend,
  Bar,
  Text,
} from "recharts";

import './BarChartComponent.css'; 
import mockData from "../../../mock/BarChart_mock";

export default function BarChartComponent() {
  return (


      <BarChart width={760} height={320} data={mockData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        
        <Tooltip />
        <Legend />
        <Bar dataKey="kg" fill="#282D30" barSize={8} radius={[40, 40, 0, 0]}/>
        <Bar dataKey="kCal" fill="#E60000" barSize={8} radius={[10, 10, 0, 0]}/>
        <Text x={10} y={20} fontSize={14} fill="#E60000">
          Mon texte en haut à gauche
        </Text>
      </BarChart>
  
  );
}

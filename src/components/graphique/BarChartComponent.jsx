import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Text,
} from "recharts";

import './BarChartComponent.css'; // Assurez-vous que le chemin du fichier CSS est correct
import mockData from "../../mock/BarChart_mock";

export default function BarChartComponent() {
  return (

       <div className="chart-container">

     
      <BarChart className="aaa" width={700} height={250} data={mockData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="kg" fill="#282D30" barSize={8} radius={[40, 40, 0, 0]}/>
        <Bar dataKey="kCal" fill="#E60000" barSize={8} radius={[10, 10, 0, 0]}/>
        <Text x={10} y={20} fontSize={14} fill="#E60000">
          Mon texte en haut à gauche
        </Text>
      </BarChart>
    </div>
  );
}

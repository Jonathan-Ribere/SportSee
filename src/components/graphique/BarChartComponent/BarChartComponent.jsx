import React, { Component } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  Legend,
  Bar,
  Text,
} from "recharts";
import "./BarChartComponent.css";

class BarChartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
    };
  }

  componentDidMount() {
    const { userId, apiService } = this.props; // Utilisez la prop apiService
    console.log("userId in BarChartComponent:", userId);

    apiService.getUserActivity(userId) // Utilisez ApiService pour obtenir les données
      .then((data) => {
        const formattedData = data.sessions.map((session) => ({
          day: session.day,
          kg: session.kilogram,
          kCal: session.calories,
        }));
        this.setState({ userData: formattedData });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { userData } = this.state;

    if (!userData) {
      return <div>Loading...</div>;
    }

    return (
      <BarChart width={760} height={320} data={userData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <Tooltip />
        <Legend />
        <Bar dataKey="kg" fill="#282D30" barSize={8} radius={[8, 8, 0, 0]} />
        <Bar
          dataKey="kCal"
          fill="#E60000"
          barSize={8}
          radius={[8, 8, 0, 0]}
        />
        <Text x={10} y={20} fontSize={14} fill="#E60000">
          Mon texte en haut à gauche
        </Text>
      </BarChart>
    );
  }
}

export default BarChartComponent;

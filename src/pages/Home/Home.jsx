import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "../../components/Header/Header";
import StateAside from "../../components/stateAside/StateAside";
import BarChartComponent from "../../components/graphique/BarChartComponent/BarChartComponent";
import LineChartComponent from "../../components/graphique/LineChart/LineChartComponent";
import RadarChartComponent from "../../components/graphique/RadarChartComponent/RadarChartComponent";
import RadialBarChartComponent from "../../components/graphique/RadialBarChart/RadialBarChartComponent";

export default function Home() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/user/12')
      .then(response => {
        // Récupérer les données de la réponse
        const data = response.data.data;
        setUserData(data);
      })
      .catch(error => {
        // Gérer les erreurs ici
        console.error(error);
      });
  }, []);

  return (
    <div className="page">
      <Header />
      <div className="sidebar"></div>
      <div className="container">
        <div className="container--layout">
          <div className="enTete">
            <h1>
              Bonjour <span>{userData?.userInfos?.firstName}</span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
          <main>
            <aside>
              <div>
                <StateAside />
                <StateAside />
                <StateAside />
                <StateAside />
              </div>
            </aside>
            <div className="card1">
              <BarChartComponent todayScore={userData?.todayScore} />
            </div>
            <div className="card2">
              <div className="card2-div">    
                <LineChartComponent />
              </div>
              <div className="card2-div">
                <RadarChartComponent />
              </div>
              <div className="card2-div">
                <RadialBarChartComponent />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

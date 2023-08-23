import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Importez useParams
import Header from "../../components/Header/Header";
import StateAside from "../../components/stateAside/StateAside";
import BarChartComponent from "../../components/graphique/BarChartComponent/BarChartComponent";
import LineChartComponent from "../../components/graphique/LineChart/LineChartComponent";
import RadarChartComponent from "../../components/graphique/RadarChartComponent/RadarChartComponent";
import RadialBarChartComponent from "../../components/graphique/RadialBarChart/RadialBarChartComponent";
import ApiService from '../../ApiService'

const apiService = new ApiService('http://localhost:3001'); 

export default function Home() {
  const [userData, setUserData] = useState({}); // Initialisation avec un objet vide

  const { id } = useParams();
  console.log("userId in Home:", id);

  useEffect(() => {
    apiService.getUser(id)
      .then(data => {
        setUserData(data);
        console.log("userData:", data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

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
                <StateAside txt="Calories" />
                <StateAside txt="Proteines"/>
                <StateAside txt="Glucides"/>
                <StateAside txt="Lipides"/>
              </div>
            </aside>
            <div className="card1">
            <BarChartComponent userId={id} apiService={apiService} />
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

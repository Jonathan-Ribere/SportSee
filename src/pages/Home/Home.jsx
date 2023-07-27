import React from "react";
import Header from "../../components/Header/Header";

import StateAside from '../../components/stateAside/StateAside'
import BarChartComponent from "../../components/graphique/BarChartComponent";

export default function Home() {
  return (
    <div className="page">
      <Header />
      <div class="sidebar"></div>
      <div className="container">
        <div className="container--layout">
          <div className="enTete">
            <h1>
              Bonjour <span>Prénom</span>
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
              <BarChartComponent />
            </div>
            <div className="card2">deuxieme tableau</div>
          </main>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import './stateAside.scss'

import logo from "../../images/energy.png";

export default function StateAside() {
  return (
    <div className="containerInfo">
      <div className="info">
        <div className="info--logo">
        <img src={logo} className="" alt="" />
        </div>
        <div className="info--state">
          <p className="info--state__Kcal">1,930 Kcal</p>
          <span className="info--state__span">Calorie</span>
        </div>
      </div>
    </div>
  );
}

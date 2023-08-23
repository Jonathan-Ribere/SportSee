import React from "react";
import './stateAside.scss'

import logo from "../../images/energy.png";

export default function StateAside(props) {
  return (
    <div className="containerInfo">
      <div className="info">
        <div className="info--logo">
        <img src={logo} className="" alt="" />
        </div>
        <div className="info--state">
          <p className="info--state__Kcal">{props.Kcal} {props.unite}</p>
          <span className="info--state__span">{props.txt}</span>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import logo from "../../images/logo.png";
import "./header.scss"

export default function Header() {
  return (
    <div className="header">
      
      <div className="header--logo">
        <img src={logo} className="" alt="" />
      </div>

      <nav className="header--nav">
        <span className="header--nav_span">Accueil</span>
        <span className="header--nav_span">Profil</span>
        <span className="header--nav_span">Réglage</span>
        <span className="header--nav_span">Communauté</span>
      </nav>

    </div>
  );
}

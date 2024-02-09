import React from "react";
import "../stylesheets/main.css"
import HeaderButton from "./HeaderButton";
import HepsaLogo from "../images/logo hepsa.PNG";

function Header () {
    return (
      <div className="header-wrapper">
        <header>
          <div className="header-topbar">
            <p>Perú, Lima</p>
            <p>|</p>
            <p>ventas@hepsa.com</p>
            <p>|</p>
            <p>999000999 / 999111999</p>
          </div>
          <div className="header-navbar">
          <img src={HepsaLogo} />
            <HeaderButton 
            text="Inicio" />
            <HeaderButton 
            text="Nosotros" />
            <HeaderButton 
            text="Productos" />
            <HeaderButton 
            text="Contacto" />
          </div>
        </header>
      </div>
    )
}

export default Header;
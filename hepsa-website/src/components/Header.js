import React from "react";
import "../stylesheets/main.css"
import HeaderButton from "./HeaderButton";
import HepsaLogo from "../images/logohepsa.jpeg";

function Header () {
    return (
      <div className="header-wrapper">
        <header>
          <div className="header-topbar">
            <p>Lima, Perú</p>
            <p>|</p>
            <p>ventas@hepsa.com</p>
            <p>|</p>
            <p>999000999 / 999111999</p>
          </div>
          <div className="header-navbar">
            <div className="header-navbar-logo"><img src={HepsaLogo} /></div>
            <div className="header-navbar-buttons">
            <HeaderButton 
            text="Inicio" />
            <HeaderButton 
            text="Nosotros" 
            section = "#contentid"
            />
            <HeaderButton 
            text="Productos" 
            section = "#productsid"
            />
            <HeaderButton 
            text="Contacto" 
            section ="#contactid"
            />
            </div>
          </div>
        </header>
      </div>
    )
}

export default Header;
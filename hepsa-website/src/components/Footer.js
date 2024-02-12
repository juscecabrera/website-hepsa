import React from "react";
import "../stylesheets/main.css";
import LogoHepsa from "../images/logo hepsa.PNG";

function Footer () {
    return (
      <>
      <div className="footer-wrapper">
        <div className="footer-contacto">
          <h3>Contacto</h3>
          <p>Dirección de Hepsa</p>
          <p>Correo de Hepsa</p>
          <p>Número de Hepsa</p>
        </div>
        <div className="footer-info">
          <img src={LogoHepsa}/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        </div>
        <div className="footer-copyright">
          <p>©2024 Hepsa | Todos los derechos reservados</p>
        </div>
      </>
    )
}

export default Footer; 
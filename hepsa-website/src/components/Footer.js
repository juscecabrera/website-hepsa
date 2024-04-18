import React from "react";
import "../stylesheets/main.css";
import HepsaLogo from "../images/logohepsa.jpeg";

function Footer () {
    return (
      <>
      <div className="footer-wrapper">
        {/* <div className="footer-contacto">
          <h3>Contacto</h3>
          <p>Dirección de Hepsa</p>
          <p>venta@hepsa.com.pe</p>
          <p>999999999</p>
        </div>
        <div className="footer-info">
          <img src={HepsaLogo}/>  
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
        </div>
        </div> */}
        <div className="footer-copyright">
          <p>© 2024 Hepsa | Todos los derechos reservados</p>
        </div>
        </div>
      </>
    )
}

export default Footer; 
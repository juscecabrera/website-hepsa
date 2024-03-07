import React from "react";
import "../stylesheets/main.css";
import HepsaLogo from "../images/logohepsa.jpeg";

function Content () {
    return(
        <>
        <div className="content-wrapper">
            <h2>Nosotros</h2>
            <p>Desde 1965, somos los únicos productores peruanos de carburo de calcio. Pequeña introducción de la empresa. 
                60 años en el servicio
                X cantidad de toneladas, etc.

            </p>
            <div className="content-img-wrapper"><img src={HepsaLogo}/></div>
        </div>
        </>
    )
}  

export default Content;
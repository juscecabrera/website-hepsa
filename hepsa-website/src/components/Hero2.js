import React from "react";
import "../stylesheets/main.css";
import logoHepsa from "../images/logoHepsa3.png";

function Hero2() {
    return (
        <div className="hero2-wrapper">
            {/* <img src={logoHepsa}></img> */}
            <h1 className="hero2-h1">Hepsa</h1>
            <h2>
                Somos una empresa con más de 60 años en el sector de venta industrial de Carburo de Calcio.
            </h2>
            <a href="#contactid"><button>Contáctanos</button></a>
        </div>
    )
}

export default Hero2;
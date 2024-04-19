import React from "react";
import "../stylesheets/main.css";
import ContentImg4 from "../images/imgHepsaIndex1.webp";
import ContentImg5 from "../images/imgHepsaIndex2.webp";
import ContentImg7 from "../images/imgHepsaIndex3.jpg";



function About () {
    return(
        <>
        <div className="about-wrapper" id="aboutid">
            <h2 className="about-h2">NOSOTROS</h2>
            <p className="about-p"> Somos una empresa con más de 60 años en el sector de la venta industrial de Carburo de Calcio. Somos la única empresa peruana de producción y venta de Carburo de Calcio. Actualmente proveemos a más de 10 compañías dentro del sector industrial.
            </p>
            <div className="about-img-wrapper"><img src={ContentImg4}/><img src={ContentImg5}/><img src={ContentImg7}/></div>
        </div>
        </>
    )
}  

export default About;
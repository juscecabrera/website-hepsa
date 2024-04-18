import React from "react";
import "../stylesheets/main.css";
import ContentImg1 from "../images/contentimg1.jpg";
import ContentImg2 from "../images/contentimg2.jpg";
import ContentImg3 from "../images/contentimg3.jpg";
import ContentImg4 from "../images/imgHepsaIndex1.webp";
import ContentImg5 from "../images/imgHepsaIndex2.webp";
import ContentImg6 from "../images/imgHepsaIndex5.jpg";
import ContentImg7 from "../images/imgHepsaIndex3.jpg";



function About () {
    return(
        <>
        <div className="about-wrapper" id="aboutid">
            <h2 className="about-h2">NOSOTROS</h2>
            <p className="about-p"> Somos una empresa con más de 60 años en el sector de la venta industrial de Carburo de Calcio. Somos la única empresa peruana de producción y venta de Carburo de Calcio.  
            </p>
            <div className="about-img-wrapper"><img src={ContentImg4}/><img src={ContentImg5}/><img src={ContentImg7}/></div>
        </div>
        </>
    )
}  

export default About;
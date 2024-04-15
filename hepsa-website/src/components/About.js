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
            <p className="about-p"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque varius morbi. Libero enim sed faucibus turpis in eu mi bibendum. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. At volutpat diam ut venenatis tellus in metus vulputate. Sit amet nisl purus in mollis nunc sed id. Elementum curabitur vitae nunc sed velit dignissim sodales. Magna etiam tempor orci eu lobortis. Purus non enim praesent elementum facilisis. Tellus orci ac auctor augue mauris augue. 
            </p>
            <div className="about-img-wrapper"><img src={ContentImg4}/><img src={ContentImg5}/><img src={ContentImg7}/></div>
        </div>
        </>
    )
}  

export default About;
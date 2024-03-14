import React from "react";
import "../stylesheets/main.css";
import HepsaLogo from "../images/logohepsa.jpeg";
import ContentImg1 from "../images/contentimg1.jpg";
import ContentImg2 from "../images/contentimg2.jpg";
import ContentImg3 from "../images/contentimg3.jpg";

function Content () {
    return(
        <>
        <div className="content-wrapper" id="contentid">
            <h2 className="content-h2">Nosotros</h2>
            <p className="content-p"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque varius morbi. Libero enim sed faucibus turpis in eu mi bibendum. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. At volutpat diam ut venenatis tellus in metus vulputate. Sit amet nisl purus in mollis nunc sed id. Elementum curabitur vitae nunc sed velit dignissim sodales. Magna etiam tempor orci eu lobortis. Purus non enim praesent elementum facilisis. Tellus orci ac auctor augue mauris augue. 
            </p>
            <div className="content-img-wrapper"><img src={ContentImg1}/><img src={ContentImg2}/><img src={ContentImg3}/></div>
        </div>
        </>
    )
}  

export default Content;
import React from "react";
import BarrelSvgImg from "../images/barrelSVG.svg";
import "../stylesheets/main.css";

function BarrelSVG (props) {
    return (
        <div className="barrel-svg-wrapper">
            <img className="barrel-svg-img" src={BarrelSvgImg}/> 
            <p className="barrel-svg-text">{props.text}</p>
        </div>
    );
};

export default BarrelSVG;
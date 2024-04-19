import React from "react";
import "../stylesheets/main.css";
import BarrelSVG from "./BarrelSVG";

function Products () {
    return (
        <div className="products-wrapper" id="productsid">
            <h2 className="products-h2">PRODUCTOS</h2>
            <div className="products-barrel-wrapper">
                <BarrelSVG 
                text = "Carburo de Calcio 50/80 Soldadura"
                />
                <BarrelSVG 
                text = "Carburo de Calcio 25/50 Acetileno"
                />
                <BarrelSVG 
                text = "Carburo de Calcio 15/25 Lámparas mineras"
                />
                <BarrelSVG 
                text = "Carburo de Calcio 4/7 Maduración de frutas"
                />
                <BarrelSVG 
                text = "Carburo de Calcio 14ND Fundiciones"
                />
            </div>
        </div>
    );
};

export default Products;
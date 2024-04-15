import React from "react";
import "../stylesheets/main.css";
import ProductsImg1 from "../images/productsimg1.jpg";
import ProductsImg2 from "../images/imgHepsaIndex3.jpg"
import BarrelSVG from "./BarrelSVG";

function Products () {
    return (
        <div className="products-wrapper" id="productsid">
            <h2 className="products-h2">PRODUCTOS</h2>
            {/* <h3 className="products-h3">Carburo de Calcio</h3>
            <p className="products-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <img className="products-img" src={ProductsImg2}></img> */}
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
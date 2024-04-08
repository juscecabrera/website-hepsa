import React from "react";
import "../stylesheets/main.css";
import ProductsImg1 from "../images/productsimg1.jpg"

function Products () {
    return (
        <div className="products-wrapper" id="productsid">
            <h2 className="products-h2">Productos</h2>
            <h3 className="products-h3">Carburo de Calcio</h3>
            <p className="products-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <img className="products-img" src={ProductsImg1}></img>
        </div>
    );
};

export default Products;
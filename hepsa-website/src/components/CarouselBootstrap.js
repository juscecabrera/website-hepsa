import React from "react";
import "../stylesheets/main.css"
import CarouselImage1 from "../images/carousel-image-1-example.jpeg";
import CarouselImage2 from "../images/carousel-image-2-example.jpeg";
import CarouselImage3 from "../images/carousel-image-3-example.jpeg";

function CarouselBootstrap () {
  return (
    <div className="carousel-wrapper">
      <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={CarouselImage1} class="d-block w-100" alt="CarouselImage1" />
    </div>
    <div class="carousel-item">
      <img src={CarouselImage2} class="d-block w-100" alt="CarouselImage2" />
    </div>
    <div class="carousel-item">
      <img src={CarouselImage3} class="d-block w-100" alt="CarouselImage3" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
    </div>
  )
}

export default CarouselBootstrap;
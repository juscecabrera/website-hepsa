import Carousel from 'react-bootstrap/Carousel';
import Carousel1 from "../images/carousel1.jpeg";
import Carousel2 from "../images/carousel2.jpeg";
import Carousel3 from "../images/carousel3.jpeg";
import "../stylesheets/main.css";


function CarouselBootstrap() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={Carousel1} className="carousel-img"/>
        <Carousel.Caption>
          <h3>Imagen de Cilindros</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Carousel2} className="carousel-img" />
        <Carousel.Caption>
          <h3>Imagen de cilindros</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Carousel3} className="carousel-img" />
        <Carousel.Caption>
          <h3>Imagen de cilindros</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBootstrap;
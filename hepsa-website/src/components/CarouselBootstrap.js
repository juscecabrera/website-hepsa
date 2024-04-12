import Carousel from 'react-bootstrap/Carousel';
import Carousel1 from "../images/carouselstock1.jpg";
import Carousel2 from "../images/carouselstock2.jpg";
import Carousel3 from "../images/carouselstock3.jpg";
import "../stylesheets/main.css";


function CarouselBootstrap() {
  return (
    <div className='carousel-wrapper'>
    <Carousel>
      <Carousel.Item>
        <img src={Carousel1} className="carousel-img"/>
        <Carousel.Caption>
        <div className="carousel-text-wrapper">
          <h3 className="carousel-h3">Imagen de Cilindros</h3>
          <p className="carousel-p">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <a href="#contactid"><button>Contáctanos</button></a>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Carousel2} className="carousel-img" />
        <Carousel.Caption>
          <div className="carousel-text-wrapper">
            <h3 className="carousel-h3">Imagen de cilindros</h3>
            <p className="carousel-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#contactid"><button>Contáctanos</button></a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Carousel3} className="carousel-img" />
        <Carousel.Caption>
        <div className="carousel-text-wrapper">
          <h3 className="carousel-h3">Imagen de cilindros</h3>
          <p className="carousel-p">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          <a href="#contactid"><button>Contáctanos</button></a>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselBootstrap;
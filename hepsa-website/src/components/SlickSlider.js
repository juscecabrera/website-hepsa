import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgSlider1 from "../images/imgHepsaIndex4.jpg";
import { useState } from "react";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const [active, setActive] = useState(0)

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
            <div className="slider-text-wrapper">
                <h4>1962</h4>
                <p>Empezamos operaciones en 1962. </p>
            </div>
            <div className="black-bg"></div>
            <img src={ImgSlider1}></img>
        </div>
        <div>
        <div className="slider-text-wrapper">
                <h4>1972</h4>
                <p>Algo ocurrió en 1972. </p>
            </div>
            <img src={ImgSlider1}></img>
        </div>
        <div>
        <div className="slider-text-wrapper">
                <h4>1982</h4>
                <p>Algo ocurrió en 1982. </p>
            </div>
            
            <img src={ImgSlider1}></img>
        </div>
        <div>
        <div className="slider-text-wrapper">
                <h4>1992</h4>
                <p>Algo ocurrió en 1992.</p>
            </div>
            
            <img src={ImgSlider1}></img>
        </div>
        <div>
        <div className="slider-text-wrapper">
                <h4>2010</h4>
                <p>Algo ocurrió en 2010. </p>
            </div>
            
            <img src={ImgSlider1}></img>
        </div>
        <div>
        <div className="slider-text-wrapper">
                <h4>2024</h4>
                <p>QUE PASO EN 2024 CHISMOSO</p>
            </div>
            
            <img src={ImgSlider1}></img>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
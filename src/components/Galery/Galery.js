import React from "react";
import Slider from "react-slick";
import "./Galery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gallery_1 from "../../Assets/gallery_1.jpg";
import gallery_2 from "../../Assets/gallery_2.png";
import gallery_3 from "../../Assets/gallery_3.jpg";
import gallery_4 from "../../Assets/gallery_4.jpg";
import gallery_5 from "../../Assets/gallery_5.jpg";
import gallery_6 from "../../Assets/gallary_6.jpg";
import gallery_7 from "../../Assets/gallery_7.png";
import gallery_8 from "../../Assets/gallery_8.png";
import gallery_9 from "../../Assets/gallery_9.png";

const ImageCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const imagesList = [
    gallery_1,
    gallery_2,
    gallery_3,
    gallery_4,
    gallery_5,
    gallery_6,
    gallery_7,
    gallery_8,
    gallery_9,
  ];

  return (
    <div className="carousel">
      <Slider {...settings}>
        {imagesList.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt=''
              className="carousel__item"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;

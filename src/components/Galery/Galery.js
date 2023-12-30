import React, { useEffect, useState} from "react";
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

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesList.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagesList.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); // автоматическое переключение каждые 3 секунды

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="carousel">
      <button onClick={prevSlide}>Previous</button>
      <img src={imagesList[currentIndex]} alt={`slide ${currentIndex + 1}`} />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel
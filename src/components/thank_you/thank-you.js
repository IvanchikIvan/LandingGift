import React from "react";
import "./thank-you.css";

const Thankyou = () => {
  return (
    <div className="thank-you">
      <div className="thank-you__container">
        <div className="thank-you__list-container">
          <div className="thank-you__list-title">
            <h1 className="thank-you__title-text">Спасибо за...</h1>
          </div>
          <div className="thank-you__list">
            <div className="thank-you__list-item"><p>A</p></div>
            <div className="thank-you__list-item"><p>B</p></div>
            <div className="thank-you__list-item"><p>C</p></div>
            <div className="thank-you__list-item"><p>D</p></div>
            <div className="thank-you__list-item"><p>F</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;

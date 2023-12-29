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
            <div className="thank-you__list-item"><p>Первый разговор в лагере</p></div>
            <div className="thank-you__list-item"><p>Возможность поспать в два часа ночи на твоей кровати...</p></div>
            <div className="thank-you__list-item"><p>Возможность посушиться лучшим феном BaByliss Pro</p></div>
            <div className="thank-you__list-item"><p>Прекрасные выступления</p></div>
            <div className="thank-you__list-item"><p>Презентацию Твери</p></div>
            <div className="thank-you__list-item"><p>Твою поддержку</p></div>
            <div className="thank-you__list-item"><p>Твою доброту</p></div>
            <div className="thank-you__list-item"><p>Наши общие воспоминания</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;

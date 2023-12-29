import React from "react";
import { animated, config, useInView } from "react-spring";
import "./thank-you.css";

const Thankyou = () => {
    const [ref, props] = useInView(
        () => ({
          from: { opacity: 0, x: -1500},
          to: { opacity: 1, x: 0},
          config: config["molasses"],
        }),
        {
            rootMargin: '-30% 0%',
        }
      );

  return (
    <div className="thank-you">
      <div className="thank-you__container">
        <animated.div className="thank-you__list-container" style={props} ref={ref}>
          <div className="thank-you__list-title">
            <h1 className="thank-you__title-text">Спасибо за...😣</h1>
          </div>
          <div className="thank-you__list">
            <div className="thank-you__list-item">
              <p>😊 Первый разговор в лагере</p>
            </div>
            <div className="thank-you__list-item">
              <p>😴 Возможность поспать в два часа ночи на твоей кровати...</p>
            </div>
            <div className="thank-you__list-item">
              <p>💨 Возможность посушиться лучшим феном BaByliss Pro</p>
            </div>
            <div className="thank-you__list-item">
              <p>💃 Прекрасные выступления</p>
            </div>
            <div className="thank-you__list-item">
              <p>🎉 Милое видео на день рождения</p>
            </div>
            <div className="thank-you__list-item">
              <p>🖐 Презентацию Твери</p>
            </div>
            <div className="thank-you__list-item">
              <p>🤗 Твою поддержку</p>
            </div>
            <div className="thank-you__list-item">
              <p>🤩 Твою доброту</p>
            </div>
            <div className="thank-you__list-item">
              <p>🤯 Наши общие воспоминания</p>
            </div>
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default Thankyou;

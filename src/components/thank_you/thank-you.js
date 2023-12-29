import React from "react";
import { animated, useSpring, config, useInView } from "react-spring";
import "./thank-you.css";

const Thankyou = () => {
    const [ref, springs] = useInView(
        () => ({
          from: {
            opacity: 0,
            x: -100,
          },
          to: {
            opacity: 1,
            x: 0,
          },
        }),
        {
          rootMargin: '-40% 0%',
        }
      )

  return (
    <div className="thank-you">
      <animated.div className="thank-you__container" ref={ref} style={springs}>
        <div className="thank-you__list-container">
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
        </div>
      </animated.div>
    </div>
  );
};

export default Thankyou;

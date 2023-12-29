import { useInView, animated } from "react-spring";
import "./Memories.css";
import React from "react";


const Memories = () => {

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
      rootMargin: '-50% 0%',
    }
  )

  return (
    <div className="memories" ref={ref} >
      <div className="memories__container">
        <div className="memories__list-container">
          <h1 className="memories__list-title">Наши воспоминания</h1>
          <p className="memories__list-desription">Эти моменты согревают мне душеньку, когда вновь возникают в моей голове.<br></br> Спасибо за них, Маш</p>
          <div className="memories__list">
            <animated.div className="memories__list-item" style={springs}>
              <div className="memories__item-container">
                <div className="memories__list-name">
                  <p>Первая встреча</p>
                </div>
                <div className="memories__list-date">25.06.2023</div>
              </div>
            </animated.div>
            <hr></hr>
            <animated.div className="memories__list-item" style={springs}>
              <div className="memories__item-container">
                <div className="memories__list-name">
                  <p>Первая ночная посиделка</p>
                </div>
                <div className="memories__list-date">26.06.2023</div>
              </div>
            </animated.div>
            <hr></hr>
            <animated.div className="memories__list-item" style={springs}>
              <div className="memories__item-container">
                <div className="memories__list-name">
                  <p>Наш велеколепный танец-открытка</p>
                </div>
                <div className="memories__list-date">28.06.2023</div>
              </div>
            </animated.div>
            <hr></hr>
            <animated.div className="memories__list-item" style={springs}>
              <div className="memories__item-container">
                <div className="memories__list-name">
                  <p>Посидел у вас в шкафу</p>
                </div>
                <div className="memories__list-date">05.07.2023</div>
              </div>
            </animated.div>
            <hr></hr>
            <animated.div className="memories__list-item" style={springs}>
              <div className="memories__item-container">
                <div className="memories__list-name">
                  <p>Конец смены</p>
                </div>
                <div className="memories__list-date">07.07.2023</div>
              </div>
            </animated.div>
            <hr></hr>
            <animated.div className="memories__list-item" style={springs}>
              <div className="memories__item-container">
                <div className="memories__list-name">
                  <p>Твой замечательный, трогательный подарок</p>
                </div>
                <div className="memories__list-date">14.07.2023</div>
              </div>
            </animated.div>
            <hr></hr>
            <animated.div className="memories__list-item" style={springs}>
              <div className="memories__item-container">
                <div className="memories__list-name">
                  <p>C Новым годом</p>
                </div>
                <div className="memories__list-date">31.12.2023</div>
              </div>
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Memories;

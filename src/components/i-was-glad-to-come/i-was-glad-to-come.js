import "./i-was-glad-to-come.css";
import together from "../../Assets/together.jpg";
import together_2 from "../../Assets/together_2.jpg";
import { useInView, animated } from "react-spring";

const IWGTC = () => {

  const [refLeft, springsLeft] = useInView(
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
    <div className="i-was-glad-to-come" ref={refLeft}>
      <div className="i-was-glad-to-come__container">
        <div className="i-was-glad-to-come__rows">
          <animated.div className="i-was-glad-to-come__row" style={springsLeft}>
            <div className="i-was-glad-to-come-row__icon">
              <img alt="" src={together}></img>
            </div>
            <div className="i-was-glad-to-come-row__text-container">
              <div className="i-was-glad-to-come-row__text">
                <h2>Прибытие в тверь</h2>
                <p>
                  Я был бесконечно рад приехать к вам. Самые тёплые чувства,
                  которые я испытал с вами в лагере снова меня посетили
                </p>
              </div>
            </div>
          </animated.div>
          <div className="i-was-glad-to-come__row">
            <div className="i-was-glad-to-come-row__text-container">
              <div className="i-was-glad-to-come-row__text">
                <h2>Прибытие в тверь</h2>
                <p>
                  Я был бесконечно рад приехать к вам. Самые тёплые чувства,
                  которые я испытал с вами в лагере снова меня посетили
                </p>
              </div>
            </div>
            <div className="i-was-glad-to-come-row__icon">
              <img alt="" src={together_2}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IWGTC;

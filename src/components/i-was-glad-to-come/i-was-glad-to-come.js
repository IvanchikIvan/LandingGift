import "./i-was-glad-to-come.css";
import together from "../../Assets/together.jpg";
import together_2 from "../../Assets/together_2.jpg";

const IWGTC = () => {
  return (
    <div className="i-was-glad-to-come">
      <div className="i-was-glad-to-come__container">
        <div className="i-was-glad-to-come__rows">
          <div className="i-was-glad-to-come__row">
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
          </div>
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
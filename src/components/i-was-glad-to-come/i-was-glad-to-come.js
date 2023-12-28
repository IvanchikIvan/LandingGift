import "./i-was-glad-to-come.css";
import together from "../../Assets/together.jpg";

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
                <p>
                  Я был бесконечно рад приехать к вам. Самые тёплые чувства,
                  которые я испытал с вами в лагере снова меня достанут
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IWGTC;

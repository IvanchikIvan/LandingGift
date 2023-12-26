import "./Header.css";
import icon from "../../Assets/chat-avatar.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="quotation__icon-container">
          <img className="quotation__icon" src={icon} alt=""></img>
        </div>
        <div className="header__text-container">
          <div className="header__quotation">
            <h1 className="header__title">
              "Изучать <span className="title__memories">воспоминания</span> -{" "}
              <br></br>
              значит найти лучший <span className="title__gift">подарок</span>"
            </h1>
          </div>
          <h2 className="header__subtitle">
            Фраза сформирована во время очередного просмотра фотографик нашего,
            пятого города
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;

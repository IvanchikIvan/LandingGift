import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__text-container">
          <h1 className="header__title">
            Изучать воспоминания - <br></br>значит найти лучший подарок
          </h1>
          <h2 className="header__subtitle">Эта фраза у меня сформулировалась у меня во время очередного просмотра приятный фотографий нашего, пятого города</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;

import "./Memories.css";

const Memories = () => {
  return (
    <div className="memories">
      <div className="memories__container">
        <div className="memories__list-container">
          <h1 className="memories__list-title">Наши воспоминания</h1>
          <div className="memories__list">
            <div className="memories__list-item">
              <div className="memories__item-container">
                <div className="memories__list-name">
                  <p>Первая встреча</p>
                </div>
                <div className="memories__list-date">25.06.2023</div>
              </div>
            </div>
            <hr></hr>
            <div className="memories__list-item">
              <div className="memories__item-container">
                <div className="memories__list-name">
                  <p>Первая ночная посиделка</p>
                </div>
                <div className="memories__list-date">26.06.2023</div>
              </div>
            </div>
            <hr></hr>
            <div className="memories__list-item">
              <div className="memories__item-container">
                <div className="memories__list-name">
                  <p>Первая встреча</p>
                </div>
                <div className="memories__list-date">25.06.2023</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Memories;

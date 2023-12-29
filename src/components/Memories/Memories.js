import "./Memories.css";

const Memories = () => {

  return (
    <div className="memories">
      <div className="memories__container">
        <div className="memories__list-container">
          <h1 className="memories__list-title">Наши воспоминания</h1>
          <p className="memories__list-desription">Эти моменты согревают мне душеньку, когда вновь возникают в моей голове.<br></br> Спасибо за них, Маш</p>
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
                  <p>Наш велеколепный танец-открытка</p>
                </div>
                <div className="memories__list-date">28.06.2023</div>
              </div>
            </div>
            <hr></hr>
            <div className="memories__list-item">
              <div className="memories__item-container">
                <div className="memories__list-name">
                  <p>Посидел у вас в шкафу</p>
                </div>
                <div className="memories__list-date">05.07.2023</div>
              </div>
            </div>
            <hr></hr>
            <div className="memories__list-item">
              <div className="memories__item-container">
                <div className="memories__list-name">
                  <p>Конец смены</p>
                </div>
                <div className="memories__list-date">07.07.2023</div>
              </div>
            </div>
            <hr></hr>
            <div className="memories__list-item">
              <div className="memories__item-container">
                <div className="memories__list-name">
                  <p>Твой замечательный, трогательный подарок</p>
                </div>
                <div className="memories__list-date">14.07.2023</div>
              </div>
            </div>
            <hr></hr>
            <div className="memories__list-item">
              <div className="memories__item-container">
                <div className="memories__list-name">
                  <p>C Новым годом</p>
                </div>
                <div className="memories__list-date">31.12.2023</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Memories;

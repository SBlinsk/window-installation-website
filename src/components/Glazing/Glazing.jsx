import { useState, useEffect } from "react";
import GlazingSlider from "./GlazingSlider";
import ModalCalc from "../modalCalc/modalCalc";
import Button from "./Button";
import Img from "./Img";


const findGlazingDataById = (ids, dataArr) => {
  const Item = dataArr.find((item) => item.id === ids);
  if (!Item) {
    return console.log("items wasnt found in func findGlazingDataById ");
  }
  return Item;
};

const Glazing = ({dataOfGlazing}) => {
  const data = dataOfGlazing;

  const [selectedImageId, setSelectedImageId] = useState("wood");
  const [modal, setModal] = useState(false);

  const modalClose = () => {
    setModal(false);
  };

  const selecledItem = findGlazingDataById(selectedImageId, data);

  return (
    <section className="glazing">
      <div className="container">
        <div className="section_header">
          <h2>Остекление балконов и лоджий</h2>
          <div className="section_header_sub"></div>
        </div>
        <GlazingSlider setSelectedImageId={setSelectedImageId} />
        <ViewItem item={selecledItem} setModal={setModal} />
        {modal ? <ModalCalc modalClose={modalClose} /> : null}
      </div>
    </section>
  );
};

const ViewItem = ({ item, setModal }) => {
  if (!item) {
    return <div>Loading...</div>;
  }
  return (
    <div className="row tree glazing_content">
      {/* Отображение данных о холодном остеклении */}
      <div className="col-md-6 no-padding">
        <div className="glazing_cold">
          <h3>Холодное</h3>
          <Img src={item.info.cold.img} alt="#" />
          <ul>
            <li>
              Конструктивная толщина: {item.info.cold.constructionThickness}
            </li>
            <li>Остекление: {item.info.cold.glazing}</li>
            <li>Теплоизоляция: {item.info.cold.thermalInsulation}</li>
            <li>Звукоизоляция: {item.info.cold.soundInsulation}</li>
          </ul>
        </div>
        <div className="glazing_price">
          <p>
            {/* цена под ключ в следующей строке призодит из другого компонента , модальное окно будет тут*/}
            {item.info.cold.price}$
            <br />
            <span>под ключ с установкой</span>
          </p>
          <Button onClick={() => setModal(true)} />
        </div>
      </div>

      {/* Отображение данных о теплом остеклении */}
      <div className="col-md-6 no-padding">
        <div className="glazing_warm">
          <h3>Теплое</h3>
          <Img src={item.info.warm.img} alt="#" />
          <ul>
            <li>
              Конструктивная толщина профиля:
              {item.info.warm.constructionThickness}
            </li>
            <li>Остекление: {item.info.warm.glazing}</li>
            <li>Теплоизоляция: {item.info.warm.thermalInsulation}</li>
            <li>Звукоизоляция: {item.info.warm.soundInsulation}</li>
          </ul>
        </div>
        <div className="glazing_price">
          <p>
            {item.info.warm.price}$
            <br />
            <span>под ключ с установкой</span>
          </p>
          <Button onClick={() => setModal(true)} />
        </div>
      </div>
    </div>
  );
};

export default Glazing;

import { useState, useEffect } from "react";
import glazingData from "./glazingData";
import GlazingSlider from "./GlazingSlider";

const Glazing = () => {
  const data = glazingData;

  const findGlazingDataById = (ids) => {
    const selItem = data.find((item) => item.id === ids);
    if(!selItem){
      return console.log("items wasnt found in func findGlazingDataById ")
    }
    return selItem;
  };

  const [selectedImageId, setSelectedImageId] = useState("wood");
  const [selectedItem, setSelectedItem] = useState(findGlazingDataById(selectedImageId));




  useEffect(() => {
    const selectedItemData = findGlazingDataById(selectedImageId);
    setSelectedItem(selectedItemData);
  }, [selectedImageId]);

  return (
    <section className="glazing">
      <div className="container">
        <div className="section_header">
          <h2>Остекление балконов и лоджий</h2>
          <div className="section_header_sub"></div>
        </div>
        <GlazingSlider setSelectedImageId={setSelectedImageId} />
        <ViewItem item={selectedItem}/>
      </div>
    </section>
  );
};

const ViewItem = ({item}) => {
  if (!item) {
    return <div>Loading...</div>; 
  }
  return (
    <div className="row tree glazing_content">
      {/* Отображение данных о холодном остеклении */}
      <div className="col-md-6 no-padding">
        <div className="glazing_cold">
          <h3>Холодное</h3>
          <img src={item.info.cold.img} alt="#" />
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
            {item.info.cold.price}
            <br />
            <span>под ключ с установкой</span>
          </p>
          <button className="button glazing_price_btn text-uppercase popup_calc_btn">
            Рассчитать стоимость
          </button>
        </div>
      </div>

      {/* Отображение данных о теплом остеклении */}
      <div className="col-md-6 no-padding">
        <div className="glazing_warm">
          <h3>Теплое</h3>
          <img src={item.info.warm.img} alt="#" />
          <ul>
            <li>
              Конструктивная толщина профиля:{" "}
              {item.info.warm.constructionThickness}
            </li>
            <li>Остекление: {item.info.warm.glazing}</li>
            <li>Теплоизоляция: {item.info.warm.thermalInsulation}</li>
            <li>Звукоизоляция: {item.info.warm.soundInsulation}</li>
          </ul>
        </div>
        <div className="glazing_price">
          <p>
            {item.info.warm.price}
            <br />
            <span>под ключ с установкой</span>
          </p>
          <button className="button glazing_price_btn text-uppercase popup_calc_btn">
            Рассчитать стоимость
          </button>
        </div>
      </div>
    </div>
  );
};

export default Glazing;

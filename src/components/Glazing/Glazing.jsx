import { useState } from "react";
import GlazingSlider from "./GlazingSlider";
import Modal from "../modalCalc/  Modal";
import Button from "./Button";
import Img from "./Img";
import Footage from "../modalCalc/Footage";

const findGlazingDataById = (ids, dataArr) => {
  const Item = dataArr.find((item) => item.id === ids);
  if (!Item) {
    return console.log("items wasnt found in func findGlazingDataById ");
  }
  return Item;
};

const Glazing = ({ data }) => {
  const [selectedImageId, setSelectedImageId] = useState("wood");
  const [hasModal, setHasModal] = useState(false);
  const [price, setPrice] = useState(3);

  const modalClose = () => {
    setHasModal(false);
    console.log("Close Modal");
  };

  const selecledItem = findGlazingDataById(selectedImageId, data);

  return (
    <section className="glazing">
      <div className="container">
        <div className="section_header">
          <h2>Glazing of balconies and loggias</h2>
          <div className="section_header_sub"></div>
        </div>
        <GlazingSlider setSelectedImageId={setSelectedImageId} data={data} />
        <ViewItem
          item={selecledItem}
          setHasModal={setHasModal}
          setPrice={setPrice}
        />
        {hasModal ? (
          <Modal modalClose={modalClose}>
            <Footage price={price} />
          </Modal>
        ) : null}
      </div>
    </section>
  );
};

const ViewItem = ({ item, setHasModal, setPrice }) => {
  if (!item) {
    return <div>Loading...</div>;
  }
  return (
    <div className="row tree glazing_content">
      {/* Отображение данных о холодном остеклении */}
      <div className="col-md-6 no-padding">
        <div className="glazing_cold">
          <h3>Cold</h3>
          <Img src={item.info.cold.img} alt="#" />
          <ul>
            <li>
              Structural thickness: {item.info.cold.constructionThickness}
            </li>
            <li>Glazing: {item.info.cold.glazing}</li>
            <li>Thermal insulation: {item.info.cold.thermalInsulation}</li>
            <li>Soundproofing: {item.info.cold.soundInsulation}</li>
          </ul>
        </div>
        <div className="glazing_price">
          <p>
            {item.info.cold.price}$
            <br />
            <span>Turnkey price with installation</span>
          </p>
          <Button
            onClick={() => {
              setPrice(item.info.cold.price);
              setHasModal(true);
            }}
          >
            Calculate the cost
          </Button>
        </div>
      </div>

      {/* Отображение данных о теплом остеклении */}
      <div className="col-md-6 no-padding">
        <div className="glazing_warm">
          <h3>Warm</h3>
          <Img src={item.info.warm.img} alt="#" />
          <ul>
            <li>
              Structural profile thickness:
              {item.info.warm.constructionThickness}
            </li>
            <li>Glazing: {item.info.warm.glazing}</li>
            <li>Thermal insulation: {item.info.warm.thermalInsulation}</li>
            <li>Soundproofing: {item.info.warm.soundInsulation}</li>
          </ul>
        </div>
        <div className="glazing_price">
          <p>
            {item.info.warm.price}$
            <br />
            <span>Turnkey price with installation</span>
          </p>
          <Button
            onClick={() => {
              setPrice(item.info.warm.price);
              setHasModal(true);
            }}
          >
            Calculate the cost
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Glazing;

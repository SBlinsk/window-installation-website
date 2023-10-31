import { useState } from "react";
import Modal from "../modalCalc/  Modal";

const OurWorks = ({ data }) => {
  const [modal, setModal] = useState(false);
  const [moadalPicture, setModalPicture] = useState(null);

  const onHandleClick = (e) => {
    e.preventDefault();
    setModalPicture(e.target.src);
    setModal(true);
  };

  const result = (arr) =>
    arr.map((item, index) => {
      return (
        <div
          key={index}
          className="col-lg-3 col-md-4 col-sm-6 col-xs-12 text-center "
          data-wow-delay={index === 0 ? "0s" : `${0.1 * index}s`}
        >
          <a onClick={onHandleClick} href={item.a}>
            <img className="preview" src={item.img} alt="window" />
          </a>
        </div>
      );
    });

  return (
    <section className="works">
      <div className="container">
        <div className="section_headaer">
          <h2 style={{ display: "flex", justifyContent: "center" }}>
            Our Works
          </h2>
          <div className="section_header_sub"></div>
        </div>
        <div className="row">{result(data)} </div>
        {modal ? (
          <Modal
            modalClose={() => setModal(false)}
            inlineStyle={{ width: "70%", height: "90%" }}
          >
            <img
              className="preview"
              src={moadalPicture}
              alt="window"
              style={{ height: "80%" }}
            />
          </Modal>
        ) : null}
      </div>
    </section>
  );
};

export default OurWorks;

import Modal from "../modalCalc/  Modal";
import MainForm from "../Form/MainForm";
import { useState } from "react";
const Header = () => {
  const [modalClosed, setModalclose]= useState(true)

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-3 col-xs-12">
            <div className="logo">
              <p>
              Glazing of balconies and loggias in Antarctica and the region.
              </p>
            </div>
          </div>
          <div className="col-md-2 col-sm-3 col-xs-12">
            <div className="header_btn_wrap">
              <div className="header_btn_wrap_block">
                <button className="header_btn text-uppercase text-left popup_engineer_btn"onClick={()=>setModalclose(false)}>
                  Call
                  <br /> Master
                </button>
                {modalClosed?null:<Modal modalClose={()=>setModalclose(true)} children={<MainForm/>}inlineStyle={{height: "100%"}}/>}
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-3 col-xs-6 text-left">
            <div className="working_hours">
              <div className="working_hours_img">
                <img src="/src/assets/img/header/clock.png" alt="#" />
                <p>
                  No weekends<span>9:00-18:00</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-6">
            <div className="contact_us">
              <div className="contact_us_wrap">
                <a href="#">
                  <img src="/src/assets/img/header/phone.png" alt="picture" />
                  +49000000000
                </a>
                <a className="phone_link" href="#" onClick={()=>setModalclose(false)}>request callback</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

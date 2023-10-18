import Form from "../Form/FormComponent";
import MainForm from "../Form/mainForm";

const MainBlock = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-7 wow fadeInLeft">
            <h1>
              <span>Balcony glazing turnkey</span>
              <br />
              <span>started from 100 usd</span>
            </h1>
            <div className="main_features">
              <div className="row">
                <div className="col-sm-3 col-xs-6">
                  <div className="main_features_block">
                    <img
                      src="../src/assets/img/main/icons/quality.png"
                      alt="quality"
                    />
                    <p>
                      High
                      <br />
                      quality
                    </p>
                  </div>
                </div>
                <div className="col-sm-3 col-xs-6">
                  <div className="main_features_block">
                    <img
                      src="../src/assets/img/main/icons/time.png"
                      alt="assembly"
                    />
                    <p>
                      Quick
                      <br />
                      assembly
                    </p>
                  </div>
                </div>
                <div className="col-sm-3 col-xs-6">
                  <div className="main_features_block">
                    <img
                      src="../src/assets/img/main/icons/guaranty.png"
                      alt="quality"
                    />
                    <p>
                      3 years
                      <br />
                      quality
                    </p>
                  </div>
                </div>
                <div className="col-sm-3 col-xs-6">
                  <div className="main_features_block">
                    <img
                      src="../src/assets/img/main/icons/quality.png"
                      alt="Garbage"
                    />
                    <p>
                      Garbage
                      <br />
                      disposal
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-lg-offset-2 col-md-5 col-md-offset-0 col-sm-8 col-sm-offset-2 col-xs-12 wow fadeInRight"></div>
            </div>
          </div>
          <div className="col-lg-4 col-lg-offset-2 col-md-5 col-md-offset-0 col-sm-8 col-sm-offset-2 col-xs-12 wow fadeInRight"><MainForm/></div>
        </div>
      </div>
    </main>
  );
};

export default MainBlock;

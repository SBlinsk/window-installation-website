import MainForm from "../Form/mainForm";
import Timer from "./Timer/Timer";

export const Sale = () => {
  return (
    <section className="sale">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 wow fadeInLeft">
            <h2 className="sale_title">Sale - 60%</h2>
            <p className="sale_subtitle">
              Have time to save on glazing! Only until the end of the year!
            </p>
            <div className="timer1" id="timer">
              <h4>
                <p>BEFORE THE END OF THE PROMOTION:</p>
              </h4>
              <Timer />
            </div>
          </div>

          <div className="col-lg-4 col-lg-offset-3 col-md-5 col-md-offset-1 col-sm-8 col-sm-offset-2 wow fadeInRight">
            <MainForm />
          </div>
        </div>
      </div>
    </section>
  );
};

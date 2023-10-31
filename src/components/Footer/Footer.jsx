export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-sm-push-8 col-xs-12">
            <div className="contacts">
              <a className="phone" href="#">
                +4 (000) 000-00-00
              </a>
              <a className="email" href="#">
                info@window.de
              </a>
            </div>
          </div>
          <div className="col-sm-4 col-xs-12">
            <div className="logo">
              <img src="src/assets/img/header/logo.png" alt="#" />
            </div>
          </div>
          <div className="col-sm-4 col-sm-pull-8 col-xs-12">
            <div className="copyright"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

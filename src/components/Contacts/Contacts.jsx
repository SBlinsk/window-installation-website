export const Contacts = () => {
  return (
    <section className="contacts">
      <div className="container">
        <div className="section_header">
          <h2>How you can find us</h2>
          <div className="section_header_sub"></div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 wow fadeInLeft">
          <iframe
        title="Google Maps"
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d304869.6477884872!2d13.405855742616482!3d52.52000606191186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e37392e0555%3A0x94033f47e6db7d9c!2sBerlin%2C%20Germany!5e0!3m2!1sen!2sde!4v1510535523155
        "
        width="550"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
      />
          </div>
          <div className="col-lg-5 col-lg-offset-1 col-md-6 col-md-offset-0 wow fadeInRight">
            <div className="contacts_info">
              <h3>Legal address:</h3>
              <p>IRVAS LLC, 127411, Berlin, Berlin highway, 125, corp. 1</p>
              <h3>Actual address:</h3>
              <p>IRVAS LLC, 127411, Berlin, Berlin highway, 125, corp.</p>
              <h3>Tel:</h3>
              <p>+4 (9171) 000-00-00</p>
              <h3>E-mail:</h3>
              <a href="#">info@ideutscland.de</a>
              <h3>Mode of operation:</h3>
              <p>9:00 - 18:00 </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

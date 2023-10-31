export const Payment = () => {
    return(
        <section className="payment">
        <div className="container">
          <div className="section_header payment_header">
            <h2>You can pay for our services:</h2>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-4 wow bounceIn">
              <div className="payment_item">
                <div className="payment_img">
                  <img src="src/assets/img/payment/wallet.png" alt=""/>
                </div>
                <h3>Cash</h3>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 wow bounceIn" data-wow-delay="0.3s">
              <div className="payment_item">
                <div className="payment_img">
                  <img src="src/assets/img/payment/credit-card.png" alt=""/>
                </div>
                <h3>By bank card</h3>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 wow bounceIn" data-wow-delay="0.6s">
             <div className="payment_item">
               <div className="payment_img">
                 <img src="src/assets/img/payment/museum.png" alt=""/>
               </div>
               <h3>Cashless payment</h3>
             </div>
            </div>
          </div>
        </div>
      </section>
    )
}
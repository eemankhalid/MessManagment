import React from 'react';

const ContactForm = () => {
  return (
    <div>
      <div className="container-fluid contact py-6 wow bounceInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="p-5 bg-light rounded contact-form">
            <div className="row g-4">
              <div className="col-12">
                <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
                  Get in touch
                </small>
                <h1 className="display-5 mb-0">Contact Us!</h1>
                <p>Contact us for your complaints or feedback</p>
              </div>
              <div className="col-md-6 col-lg-7">
                <form>
                  <input type="text" className="w-100 form-control p-3 mb-4 border-primary bg-light" placeholder="Your Name" />
                  <input type="email" className="w-100 form-control p-3 mb-4 border-primary bg-light" placeholder="Enter Your Email" />
                  <textarea className="w-100 form-control mb-4 p-3 border-primary bg-light" rows="4" cols="10" placeholder="Your Message"></textarea>
                  <button className="w-100 btn btn-primary form-control p-3 border-primary bg-primary rounded-pill" type="submit">
                    Submit Now
                  </button>
                </form>
              </div>
              <div className="col-md-6 col-lg-5">
                <div>
                  <div className="d-inline-flex w-100 border border-primary p-4 rounded mb-3">
                    <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                    <div>
                      <h4>Address</h4>
                      <p>Street 12, G-14, Islamabad</p>
                    </div>
                  </div>
                  <div className="d-inline-flex w-100 border border-primary p-4 rounded mb-3">
                    <i className="fas fa-envelope fa-2x text-primary me-4"></i>
                    <div>
                      <h4>Mail Us</h4>
                      <p className="mb-1">eHungry@gmail.com</p>
                    </div>
                  </div>
                  <div className="d-inline-flex w-100 border border-primary p-4 rounded">
                    <i className="fa fa-phone-alt fa-2x text-primary me-4"></i>
                    <div>
                      <h4>Telephone</h4>
                      <p className="mb-1">(+92) 311 877 1467</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

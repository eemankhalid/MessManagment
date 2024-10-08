// Hero.jsx
import React from 'react';

const Hero = ({ welcome, text, image, buttons }) => {
  return (
    <div>
      {/* Hero Start */}
      <div className="container-fluid bg-light py-6 my-6 mt-0">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7 col-md-12">
              <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-4 animated bounceInDown">
                {welcome}
              </small>
              <h1 className="display-1 mb-4 animated bounceInDown">
                {text}
              </h1>
              {buttons && buttons.length > 0 && (
                <div className="hero-buttons">
                  {buttons.map((button, index) => (
                    <a key={index} href={button.href} className={`btn btn-primary border-0 rounded-pill py-3 px-4 px-md-5 me-4 animated bounceInLeft`}>
                      {button.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="col-lg-5 col-md-12">
              <img src={image} className="img-fluid rounded animated zoomIn" alt="Hero Image" />
            </div>
          </div>
        </div>
      </div>
      {/* Hero end */}
    </div>
  );
}

export default Hero;

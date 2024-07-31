import React from 'react'

const Hero = () => {
  return (
    <div>
      {/* Hero Start */}
      <div className="container-fluid bg-light py-6 my-6 mt-0">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-7 col-md-12">
                <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-4 animated bounceInDown">
                  Welcome to eHungry
                </small>
                <h1 className="display-1 mb-4 animated bounceInDown">
                  Your Mess with <span className="text-primary">e</span>Hungry, Delight in Every Meal
                </h1>
                <a href="" className="btn btn-primary border-0 rounded-pill py-3 px-4 px-md-5 me-4 animated bounceInLeft">
                  Check Menu
                </a>
                <a href="" className="btn btn-primary border-0 rounded-pill py-3 px-4 px-md-5 animated bounceInLeft">
                  Know More
                </a>
              </div>
              <div className="col-lg-5 col-md-12">
                <img src="src/assets/img/hero.png" className="img-fluid rounded animated zoomIn" alt="Hero Image" />
              </div>
            </div>
          </div>
        </div>
        {/* Hero end */}
    </div>
  )
}

export default Hero

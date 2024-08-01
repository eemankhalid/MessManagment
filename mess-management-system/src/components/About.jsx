import React from 'react'

const About = () => {
  return (
    <div>
      {/* About Start */}
      <section className='about' id='about-section'>
      <div className="container-fluid py-6">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-5 wow bounceInUp" data-wow-delay="0.1s">
                <img src="src/assets/img/Fresh and Fast Food.jpg" className="img-fluid rounded" alt="About Image" />
              </div>
              <div className="col-lg-7 wow bounceInUp" data-wow-delay="0.3s">
                <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
                  About Us
                </small>
                <h1 className="display-5 mb-4">About eHungry</h1>
                <p className="mb-4">
                  Welcome to eHungry, your ultimate solution for hassle-free mess management! We’re dedicated to transforming how you manage daily meals with our innovative platform, designed to simplify and enhance your dining experience. From efficient meal scheduling to real-time updates, eHungry makes managing meals easier and more efficient.
                  <br />
                  Join us in making daily dining seamless and enjoyable—experience the future of mess management with eHungry!
                </p>
                <div className="row g-4 text-dark mb-5">
                  <div className="col-sm-6">
                    <i className="fas fa-share text-primary me-2"></i>Fresh and Fast food
                  </div>
                  <div className="col-sm-6">
                    <i className="fas fa-share text-primary me-2"></i>24/7 Customer Support
                  </div>
                  <div className="col-sm-6">
                    <i className="fas fa-share text-primary me-2"></i>Easy Customization Options
                  </div>
                  <div className="col-sm-6">
                    <i className="fas fa-share text-primary me-2"></i>Delicious Deals for Delicious Meals
                  </div>
                </div>
                <a href="#" className="btn btn-primary py-3 px-5 rounded-pill">
                  About Us<i className="fas fa-arrow-right ps-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        </section>
        {/* About End */}
    </div>
  )
}

export default About

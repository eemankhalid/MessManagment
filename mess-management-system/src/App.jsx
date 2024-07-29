import React from 'react';


const App = () => {
  return (
    <div>
      <head>
        <meta charSet="utf-8" />
        <title>CaterServ - Catering Services Website Template</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="" name="keywords" />
        <meta content="" name="description" />

        {/* Google Web Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Playball&display=swap"
          rel="stylesheet"
        />

        {/* Icon Font Stylesheet */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />

        {/* Libraries Stylesheet */}
        <link href="src/lib/animate/animate.min.css" rel="stylesheet" />
        <link href="src/lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
        <link href="src/lib/owlcarousel/owl.carousel.min.css" rel="stylesheet" />

        {/* Customized Bootstrap Stylesheet */}
        <link href="src/css/bootstrap.min.css" rel="stylesheet" />

        {/* Template Stylesheet */}
        <link href="src/css/style.css" rel="stylesheet" />
      </head>

      <body>
        {/* Navbar start */}
        <div className="container-fluid nav-bar">
          <div className="container">
            <nav className="navbar navbar-light navbar-expand-lg py-4">
              <a href="index.html" className="navbar-brand">
                <h1 className="text-primary fw-bold mb-0">
                  e<span className="text-dark">Hungry</span>
                </h1>
              </a>
              <button
                className="navbar-toggler py-2 px-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span className="fa fa-bars text-primary"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav mx-auto">
                  <a href="index.html" className="nav-item nav-link active">
                    Home
                  </a>
                  <a href="about.html" className="nav-item nav-link">
                    Menu
                  </a>
                  <a href="service.html" className="nav-item nav-link">
                    Meal Booking
                  </a>
                  <a href="contact.html" className="nav-item nav-link">
                    Contact
                  </a>
                  <a href="menu.html" className="nav-item nav-link">
                    Admin
                  </a>
                </div>
                <a
                  href=""
                  className="btn btn-primary py-2 px-4 d-none d-xl-inline-block rounded-pill"
                >
                  Check Menu
                </a>
              </div>
            </nav>
          </div>
        </div>
        {/* Navbar End */}

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

        {/* About Start */}
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
        {/* About End */}

        {/* Menu Start */}
        <div className="container-fluid menu bg-light py-6 my-6">
          <div className="container">
            <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
              <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
                Our Menu
              </small>
              <h1 className="display-5 mb-5">Most Popular Food in the World</h1>
            </div>
            <div className="tab-class text-center">
              <ul className="nav nav-pills d-inline-flex justify-content-center mb-5 wow bounceInUp" data-wow-delay="0.1s">
                <li className="nav-item p-2">
                  <a className="d-flex py-2 mx-2 border border-primary bg-white rounded-pill active" data-bs-toggle="pill" href="#tab-6">
                    <span className="text-dark" style={{ width: '150px' }}>Today</span>
                  </a>
                </li>
                <li className="nav-item p-2">
                  <a className="d-flex py-2 mx-2 border border-primary bg-white rounded-pill" data-bs-toggle="pill" href="#tab-7">
                    <span className="text-dark" style={{ width: '150px' }}>This Week</span>
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div id="tab-6" className="tab-pane fade show p-0 active">
                  <div className="row g-4">
                    <div className="col-lg-6 wow bounceInUp" data-wow-delay="0.1s">
                      <div className="d-flex rounded overflow-hidden">
                        <img src="src/assets/img/menu-1.jpg" className="img-fluid" style={{ width: '100px' }} alt="Menu Item 1" />
                        <div className="flex-fill d-flex align-items-center bg-white px-4">
                          <div className="d-flex flex-column">
                            <h5 className="text-start">Baked Cup Cake</h5>
                            <p className="text-start m-0">Baked Cup Cake with fresh ingredients</p>
                          </div>
                          <h5 className="text-primary m-0">$5</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-7" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-lg-6 wow bounceInUp" data-wow-delay="0.1s">
                      <div className="d-flex rounded overflow-hidden">
                        <img src="src/assets/img/menu-4.jpg" className="img-fluid" style={{ width: '100px' }} alt="Menu Item 4" />
                        <div className="flex-fill d-flex align-items-center bg-white px-4">
                          <div className="d-flex flex-column">
                            <h5 className="text-start">Fried Rice</h5>
                            <p className="text-start m-0">Delicious fried rice with veggies and chicken</p>
                          </div>
                          <h5 className="text-primary m-0">$6</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Menu End --> */}


        {/* JavaScript Libraries */}
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="src/lib/wow/wow.min.js"></script>
        <script src="src/lib/easing/easing.min.js"></script>
        <script src="src/lib/waypoints/waypoints.min.js"></script>
        <script src="src/lib/counterup/counterup.min.js"></script>
        <script src="src/lib/lightbox/js/lightbox.min.js"></script>
        <script src="src/lib/owlcarousel/owl.carousel.min.js"></script>

        {/*<!-- Template Javascript */}
        <script src="src/js/main.js"></script>
      </body>
    </div>
  );
};

export default App;
 
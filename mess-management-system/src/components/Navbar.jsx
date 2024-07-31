import React from 'react'

const Navbar = () => {
  return (
    <div>
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
    </div>
  )
}

export default Navbar

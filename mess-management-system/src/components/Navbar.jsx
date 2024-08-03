import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();

  return (
    <div>
      {/* Navbar start */}
      <div className="container-fluid nav-bar">
          <div className="container">
            <nav className="navbar navbar-light navbar-expand-lg py-4">
              <Link to="/" className="navbar-brand">
                <h1 className="text-primary fw-bold mb-0">
                  e<span className="text-dark">Hungry</span>
                </h1>
              </Link>
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
                  <Link to="/" className={`nav-item nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                    Home
                  </Link>
                  <Link to="/menu" className={`nav-item nav-link ${location.pathname === '/menu' ? 'active' : ''}`}>
                    Menu
                  </Link>
                  <Link to="/meal-booking" className={`nav-item nav-link ${location.pathname === '/meal-booking' ? 'active' : ''}`}>
                    Meal Booking
                  </Link>
                  <Link to="/contact" className={`nav-item nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
                    Contact
                  </Link>
                  <Link to="/admin" className={`nav-item nav-link ${location.pathname === '/admin' ? 'active' : ''}`}>
                    Admin
                  </Link>
                </div>
                <Link
                  to="/menu"
                  className="btn btn-primary py-2 px-4 d-none d-xl-inline-block rounded-pill"
                >
                  Check Menu
                </Link>
              </div>
            </nav>
          </div>
        </div>
        {/* Navbar End */}
    </div>
  )
}

export default Navbar

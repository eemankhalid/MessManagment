import React from 'react';


const Footer = () => {
    return (
        <div>
            {/* Footer Start */}
            <div className="container-fluid footer py-5 bg-dark text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="footer-item">
                                <h1 className="text-primary">
                                    e<span className="text-light">Hungry</span>
                                </h1>
                                <div className="footer-icon d-flex">
                                    <a className="btn btn-outline-light btn-sm-square me-2 rounded-circle" href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="btn btn-outline-light btn-sm-square me-2 rounded-circle" href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" className="btn btn-outline-light btn-sm-square me-2 rounded-circle">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="#" className="btn btn-outline-light btn-sm-square rounded-circle">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="footer-item">
                                <h4 className="mb-4">Special Facilities</h4>
                                <div className="d-flex flex-column align-items-start">
                                    <a className="text-light mb-2" href="#">
                                        <i className="fa fa-check text-primary me-2"></i>Fresh Food
                                    </a>
                                    <a className="text-light mb-2" href="#">
                                        <i className="fa fa-check text-primary me-2"></i>Fast Food
                                    </a>
                                    <a className="text-light mb-2" href="#">
                                        <i className="fa fa-check text-primary me-2"></i>Customized Booking
                                    </a>
                                    <a className="text-light mb-2" href="#">
                                        <i className="fa fa-check text-primary me-2"></i>Placing Complaints
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="footer-item">
                                <h4 className="mb-4">Contact Us</h4>
                                <div className="d-flex flex-column align-items-start">
                                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>Street 12, G-14, Islamabad</p>
                                    <p><i className="fa fa-phone-alt text-primary me-2"></i>(+92) 311 877 1467</p>
                                    <p><i className="fas fa-envelope text-primary me-2"></i> eHungry@gmail.com</p>
                                    <p><i className="fa fa-clock text-primary me-2"></i> 26/7 Hours Service</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}
        </div>
    );
};

export default Footer;

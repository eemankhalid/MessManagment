import React from 'react'

const MealBooking = () => {
    return (
        <div>
            {/* <!-- Meal Booking End--> */}
            <div className="container-fluid service py-6">
                <div className="container">
                    <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Meal Booking</small>
                        <h1 className="display-5 mb-5">What We Offer</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.7s">
                            <div className="bg-light rounded service-item">
                                <div className="service-content d-flex align-items-center justify-content-center p-4">
                                    <div className="service-content-icon text-center">
                                        <i className="fas fa-utensils fa-7x text-primary mb-4"></i>
                                        <h4 className="mb-3">Book Your Meal</h4>
                                        <p className="mb-4">
                                            At eHungry, we understand that variety is the spice of life. That’s why we offer a customized meal booking service alongside our routine menu. Whether you’re craving something special or have specific dietary preferences, you can easily book your personalized meal with us. Our platform allows you to choose from a range of delicious options tailored to your taste and nutritional needs, ensuring that every meal is a delightful experience. Enjoy the convenience of having your perfect meal prepared just the way you like it with eHungry!
                                        </p>
                                        <a href="#" className="btn btn-primary px-4 py-2 rounded-pill">Place Order</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Meal Booking End--> */}

        </div>
    )
}

export default MealBooking

import React, { useState, useEffect } from 'react';

const BookingForm = () => {
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await fetch('http://localhost:8000/menu');
        const data = await response.json();
        setFood(data.menu.ChineseCuisine.map(item => ({
          value: item.name,
          label: item.name
        })));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching food items:', error);
        setLoading(false);
      }
    };

    fetchFood();
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    cellNo: '',
    email: '',
    address: '',
    mealType: '',
    foodItem: '',
    dietaryRestrictions: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      cellNo: '',
      email: '',
      address: '',
      mealType: '',
      foodItem: '',
      dietaryRestrictions: ''
    });
  };

  return (
    <div className="container-fluid py-6">
      <div className="container">
        <div className="row g-0">
          <div className="col-1">
            <img
              src="src/assets/img/forms1.jpg"
              className="img-fluid h-100 w-100 rounded-start"
              style={{ objectFit: 'cover', opacity: 0.9 }}
              alt=""
            />
          </div>
          <div className="col-10">
            <div className="border-bottom border-top border-primary bg-light py-5 px-4">
              <div className="text-center">
                <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
                  Customize Your Meal
                </small>
                <h1 className="display-5 mb-5">Personalize Your Dining Experience</h1>
              </div>
              <form onSubmit={handleSubmit} className="row g-4">
                <div className="col-lg-4 col-md-6">
                  <input
                    type="text"
                    className="form-control border-primary p-2"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-lg-4 col-md-6">
                  <input
                    type="text"
                    className="form-control border-primary p-2"
                    name="cellNo"
                    value={formData.cellNo}
                    onChange={handleChange}
                    placeholder="Your Cell No."
                    required
                  />
                </div>
                <div className="col-lg-4 col-md-6">
                  <input
                    type="email"
                    className="form-control border-primary p-2"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="col-lg-4 col-md-6">
                  <input
                    type="text"
                    className="form-control border-primary p-2"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Your Address"
                    required
                  />
                </div>
                <div className="col-lg-4 col-md-6">
                  <select
                    className="form-select border-primary p-2"
                    name="mealType"
                    value={formData.mealType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Meal Type</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                  </select>
                </div>
                <div className="col-lg-4 col-md-6">
                  <select
                    className="form-select border-primary p-2"
                    name="foodItem"
                    value={formData.foodItem}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Food Item</option>
                    {loading ? (
                      <option value="">Loading...</option>
                    ) : (
                      food.map((item, index) => (
                        <option key={index} value={item.value}>
                          {item.label}
                        </option>
                      ))
                    )}
                  </select>
                </div>
                <div className="col-lg-12 col-md-6">
                  <textarea
                    className="form-control border-primary p-2"
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleChange}
                    placeholder="Dietary Restrictions"
                  />
                </div>
                <div className="col-12 text-center">
                  <button
                    type="submit"
                    className="btn btn-primary px-5 py-3 rounded-pill"
                  >
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-1">
            <img
              src="src/assets/img/forms2.jpg"
              className="img-fluid h-100 w-100 rounded-end"
              style={{ objectFit: 'cover', opacity: 0.9 }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;

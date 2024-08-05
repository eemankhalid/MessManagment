import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingForm = () => {
  const [menu, setMenu] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    address: '',
    dietaryRestrictions: ''
  });

  useEffect(() => {
    // Fetch the menu data from the local JSON file or API
    fetch('http://localhost:8000/menu')
      .then(response => response.json())
      .then(data => setMenu(data));
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedItem('');
    setPrice('');
    setDescription('');
  };

  const handleItemClick = (e) => {
    const item = e.target.value;
    setSelectedItem(item);
    const itemDetails = menu[selectedCategory]?.find(i => i.name === item);
    setPrice(itemDetails?.price || '');
    setDescription(itemDetails?.description || '');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, contact, address, dietaryRestrictions } = formData;

    if (name && email && contact && selectedCategory && selectedItem && address && dietaryRestrictions) {
      toast.success('Your order is booked!');
      // You can handle the form submission logic here
      className: 'custom-toast'
    } else {
      toast.error('Please fill out all fields.');
      className: 'custom-toast'
    }
  };

  return (
    <>
      <div className="container-fluid contact py-6 wow bounceInUp" data-wow-delay="0.1s">
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
                    Book Order
                  </small>
                  <h1 className="display-5 mb-5">Order Your Favourite Meal</h1>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="row g-4 form">
                    <div className="col-lg-4 col-md-6">
                      <input
                        type="text"
                        className="form-control border-primary p-2"
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <input
                        type="email"
                        className="form-control border-primary p-2"
                        placeholder="Enter Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <input
                        type="text"
                        className="form-control border-primary p-2"
                        placeholder="Your Contact No."
                        name="contact"
                        value={formData.contact}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <select className="form-select border-primary p-2" aria-label="Default select example" onChange={handleCategoryChange}>
                        <option selected>Meal Type</option>
                        {Object.keys(menu).map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <select className="form-select border-primary p-2" aria-label="Default select example" onChange={handleItemClick} value={selectedItem}>
                        <option selected>Food Item</option>
                        {selectedCategory && menu[selectedCategory]?.map(item => (
                          <option key={item.name} value={item.name}>{item.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <input
                        type="text"
                        className="form-control border-primary p-2"
                        placeholder="Price"
                        value={price}
                        readOnly
                      />
                    </div>
                    <div className="col-lg-4 col-md-12">
                      <textarea
                        className="form-control border-primary p-2"
                        placeholder="Description"
                        rows="3"
                        value={description}
                        readOnly
                      ></textarea>
                    </div>
                    <div className="col-lg-4 col-md-12">
                      <textarea
                        className="form-control border-primary p-2"
                        placeholder="Address"
                        rows="3"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                    <div className="col-lg-4 col-md-12">
                      <textarea
                        className="form-control border-primary p-2"
                        placeholder="Dietary Restrictions"
                        rows="3"
                        name="dietaryRestrictions"
                        value={formData.dietaryRestrictions}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-primary px-5 py-3 rounded-pill">
                        Order Now
                      </button>
                    </div>
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
      <ToastContainer />
    </>
  );
};

export default BookingForm;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('tab-6');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
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
              <button
                className={`d-flex py-2 mx-2 border border-primary rounded-pill justify-content-center ${activeTab === 'tab-6' ? 'bg-primary text-white' : 'bg-white text-dark'}`}
                onClick={() => handleTabClick('tab-6')}
                style={{ border: 'none', background: 'none', width: '150px' }}
              >
                Today
              </button>
            </li>
            <li className="nav-item p-2">
              <button
                className={`d-flex py-2 mx-2 border border-primary rounded-pill justify-content-center ${activeTab === 'tab-7' ? 'bg-primary text-white' : 'bg-white text-dark'}`}
                onClick={() => handleTabClick('tab-7')}
                style={{ border: 'none', background: 'none', width: '150px' }}
              >
                This Week
              </button>
            </li>
          </ul>
          <div className="tab-content">
            {activeTab === 'tab-6' && (
              <div id="tab-6" className="tab-pane fade show active p-0">
                <div className="row g-4">
                  <div className="col-lg-4 wow bounceInUp" data-wow-delay="0.1s">
                    <div className="d-flex rounded overflow-hidden">
                      <img src="src/assets/img/menu-1.jpg" className="img-fluid" style={{ width: '100px' }} alt="Menu Item 1" />
                      <div className="flex-fill d-flex align-items-center bg-white px-4">
                        <div className="d-flex flex-column">
                          <h5 className="text-start">Breakfast</h5>
                          <p className="text-start m-0">Baked Cup Cake with fresh ingredients</p>
                        </div>
                        <h5 className="text-primary m-0">$5</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 wow bounceInUp" data-wow-delay="0.1s">
                    <div className="d-flex rounded overflow-hidden">
                      <img src="src/assets/img/menu-1.jpg" className="img-fluid" style={{ width: '100px' }} alt="Menu Item 1" />
                      <div className="flex-fill d-flex align-items-center bg-white px-4">
                        <div className="d-flex flex-column">
                          <h5 className="text-start">Lunch</h5>
                          <p className="text-start m-0">Baked Cup Cake with fresh ingredients</p>
                        </div>
                        <h5 className="text-primary m-0">$5</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 wow bounceInUp" data-wow-delay="0.1s">
                    <div className="d-flex rounded overflow-hidden">
                      <img src="src/assets/img/menu-1.jpg" className="img-fluid" style={{ width: '100px' }} alt="Menu Item 1" />
                      <div className="flex-fill d-flex align-items-center bg-white px-4">
                        <div className="d-flex flex-column">
                          <h5 className="text-start">Dinner</h5>
                          <p className="text-start m-0">Baked Cup Cake with fresh ingredients</p>
                        </div>
                        <h5 className="text-primary m-0">$5</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'tab-7' && (
              <div id="tab-7" className="tab-pane fade show active p-0">
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

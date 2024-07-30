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
                    <div className=" rounded overflow-hidden bg-card">
                      <img src="src/assets/img/breakfast.jpg" className="img-fluid" style={{  width: '100%', height: 'auto' }} alt="Menu Item 1" />
                      <div className="flex-fill d-flex align-items-center bg-white px-4 mt-3 ">
                        <div className="d-flex flex-column">
                          <h4 className="text-start">Breakfast</h4>
                          <p className="text-start m-0">A nourishing breakfast sets the tone for a productive day.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 wow bounceInUp" data-wow-delay="0.1s">
                    <div className=" rounded overflow-hidden bg-card">
                      <img src="src/assets/img/lunch.jpg" className="img-fluid" style={{  width: '100%', height: 'auto' }} alt="Menu Item 1" />
                      <div className="flex-fill d-flex align-items-center bg-white px-4 mt-3">
                        <div className="d-flex flex-column">
                          <h4 className="text-start">Lunch</h4>
                          <p className="text-start m-0">A time to nourish not only the body but also the spirit.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 wow bounceInUp" data-wow-delay="0.1s">
                    <div className=" rounded overflow-hidden bg-card">
                      <img src="src/assets/img/dinner.jpg" className="img-fluid" style={{  width: '100%', height: 'auto' }} alt="Menu Item 1" />
                      <div className="flex-fill d-flex align-items-center bg-white px-4 mt-3">
                        <div className="d-flex flex-column">
                          <h4 className="text-start">Dinner</h4>
                          <p className="text-start m-0">Feast your eyes on this delicious dinner spread.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'tab-7' && (
              <div id="tab-7" className="tab-pane fade show active p-0">
                <div className="row g-4">
                  <div className="col-lg-4 wow bounceInUp" data-wow-delay="0.1s">
                    <div className=" rounded overflow-hidden bg-card">
                      <img src="src/assets/img/breakfast.jpg" className="img-fluid" style={{  width: '100%', height: 'auto' }} alt="Menu Item 1" />
                      <div className="flex-fill d-flex align-items-center bg-white px-4 mt-3 ">
                        <div className="d-flex flex-column">
                          <h4 className="text-start">Monday</h4>
                          <p className="text-start m-0">A nourishing breakfast sets the tone for a productive day.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 wow bounceInUp" data-wow-delay="0.1s">
                    <div className=" rounded overflow-hidden bg-card">
                      <img src="src/assets/img/lunch.jpg" className="img-fluid" style={{  width: '100%', height: 'auto' }} alt="Menu Item 1" />
                      <div className="flex-fill d-flex align-items-center bg-white px-4 mt-3">
                        <div className="d-flex flex-column">
                          <h4 className="text-start">Tuesday</h4>
                          <p className="text-start m-0">A time to nourish not only the body but also the spirit.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 wow bounceInUp" data-wow-delay="0.1s">
                    <div className=" rounded overflow-hidden bg-card">
                      <img src="src/assets/img/dinner.jpg" className="img-fluid" style={{  width: '100%', height: 'auto' }} alt="Menu Item 1" />
                      <div className="flex-fill d-flex align-items-center bg-white px-4 mt-3">
                        <div className="d-flex flex-column">
                          <h4 className="text-start">Wednesday</h4>
                          <p className="text-start m-0">Feast your eyes on this delicious dinner spread.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 wow bounceInUp" data-wow-delay="0.1s">
                    <div className=" rounded overflow-hidden bg-card">
                      <img src="src/assets/img/dinner.jpg" className="img-fluid" style={{  width: '100%', height: 'auto' }} alt="Menu Item 1" />
                      <div className="flex-fill d-flex align-items-center bg-white px-4 mt-3">
                        <div className="d-flex flex-column">
                          <h4 className="text-start">Thursday</h4>
                          <p className="text-start m-0">Feast your eyes on this delicious dinner spread.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 wow bounceInUp" data-wow-delay="0.1s">
                    <div className=" rounded overflow-hidden bg-card">
                      <img src="src/assets/img/dinner.jpg" className="img-fluid" style={{  width: '100%', height: 'auto' }} alt="Menu Item 1" />
                      <div className="flex-fill d-flex align-items-center bg-white px-4 mt-3">
                        <div className="d-flex flex-column">
                          <h4 className="text-start">Friday</h4>
                          <p className="text-start m-0">Feast your eyes on this delicious dinner spread.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 wow bounceInUp" data-wow-delay="0.1s">
                    <div className=" rounded overflow-hidden bg-card">
                      <img src="src/assets/img/dinner.jpg" className="img-fluid" style={{  width: '100%', height: 'auto' }} alt="Menu Item 1" />
                      <div className="flex-fill d-flex align-items-center bg-white px-4 mt-3">
                        <div className="d-flex flex-column">
                          <h4 className="text-start">Saturday</h4>
                          <p className="text-start m-0">Feast your eyes on this delicious dinner spread.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 wow bounceInUp" data-wow-delay="0.1s">
                    <div className=" rounded overflow-hidden bg-card">
                      <img src="src/assets/img/dinner.jpg" className="img-fluid" style={{  width: '100%', height: 'auto' }} alt="Menu Item 1" />
                      <div className="flex-fill d-flex align-items-center bg-white px-4 mt-3">
                        <div className="d-flex flex-column">
                          <h4 className="text-start">Sunday</h4>
                          <p className="text-start m-0">Feast your eyes on this delicious dinner spread.</p>
                        </div>
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

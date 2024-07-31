import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

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
                      <img src="src/assets/img/breakfast.jpg" className="img-fluid" style={{ width: '100%', height: 'auto' }} alt="Menu Item 1" />
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
                      <img src="src/assets/img/lunch.jpg" className="img-fluid" style={{ width: '100%', height: 'auto' }} alt="Menu Item 1" />
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
                      <img src="src/assets/img/dinner.jpg" className="img-fluid" style={{ width: '100%', height: 'auto' }} alt="Menu Item 1" />
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
                    <h3 className="text-start align-items-center" style={{ textAlign: 'center' }}>Breakfast</h3>
                    <div id="weekMenuCarousel" className="carousel slide" data-bs-ride="carousel">
                      <div className="carousel-inner">

                        <div className="carousel-item active">
                          <div className="rounded overflow-hidden bg-card">
                            <img src="src/assets/img/Nashta.jfif" className="img-fluid" style={{ width: '100%', height: 'auto' }} alt="Monday Menu" />
                            <div className="flex-fill d-flex align-items-center bg-white px-4 mt-3">
                              <div className="d-flex flex-column">
                                <h4 className="text-start">Monday</h4>
                                <p className="text-start m-0">Fried Egg + Pratha</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="carousel-item">
                          <div className="rounded overflow-hidden bg-card">
                            <img src="src/assets/img/Nashta.jfif" className="img-fluid" style={{ width: '100%', height: 'auto' }} alt="Tuesday Menu" />
                            <div className="flex-fill d-flex align-items-center bg-white px-4 mt-3">
                              <div className="d-flex flex-column">
                                <h4 className="text-start">Tuesday</h4>
                                <p className="text-start m-0">Naan Chana</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="carousel-item">
                          <div className="rounded overflow-hidden bg-card">
                            <img src="src/assets/img/Nashta.jfif" className="img-fluid" style={{ width: '100%', height: 'auto' }} alt="Wednesday Menu" />
                            <div className="flex-fill d-flex align-items-center bg-white px-4 mt-3">
                              <div className="d-flex flex-column">
                                <h4 className="text-start">Wednesday</h4>
                                <p className="text-start m-0">Paratha + Omelete</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="carousel-item">
                          <div className="rounded overflow-hidden bg-card">
                            <img src="src/assets/img/Nashta.jfif" className="img-fluid" style={{ width: '100%', height: 'auto' }} alt="Thursday Menu" />
                            <div className="flex-fill d-flex align-items-center bg-white px-4 mt-3">
                              <div className="d-flex flex-column">
                                <h4 className="text-start">Thursday</h4>
                                <p className="text-start m-0">French Toast</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="carousel-item">
                          <div className="rounded overflow-hidden bg-card">
                            <img src="src/assets/img/Nashta.jfif" className="img-fluid" style={{ width: '100%', height: 'auto' }} alt="Friday Menu" />
                            <div className="flex-fill d-flex align-items-center bg-white px-4 mt-3">
                              <div className="d-flex flex-column">
                                <h4 className="text-start">Friday</h4>
                                <p className="text-start m-0">Alu Anda</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="carousel-item">
                          <div className="rounded overflow-hidden bg-card">
                            <img src="src/assets/img/Nashta.jfif" className="img-fluid" style={{ width: '100%', height: 'auto' }} alt="Saturday Menu" />
                            <div className="flex-fill d-flex align-items-center bg-white px-4 mt-3">
                              <div className="d-flex flex-column">
                                <h4 className="text-start">Saturday</h4>
                                <p className="text-start m-0">Alu Paratha</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="carousel-item">
                          <div className="rounded overflow-hidden bg-card">
                            <img src="src/assets/img/Nashta.jfif" className="img-fluid" style={{ width: '100%', height: 'auto' }} alt="Sunday Menu" />
                            <div className="flex-fill d-flex align-items-center bg-white px-4 mt-3">
                              <div className="d-flex flex-column">
                                <h4 className="text-start">Sunday</h4>
                                <p className="text-start m-0">Halwa Puri Channa</p>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>

                      <button className="carousel-control-prev" type="button" data-bs-target="#weekMenuCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button" data-bs-target="#weekMenuCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                  {/*  */}
                  <div className="col-lg-4 wow bounceInUp" data-wow-delay="0.1s">
                    <h3 className="text-start align-items-center" style={{ textAlign: 'center' }}>Lunch</h3>
                    <div id="lunchCarousel" className="carousel slide" data-bs-ride="carousel">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="rounded overflow-hidden bg-card">
                            <img src="src/assets/img/monday.jpg" className="img-fluid" style={{ width: '100%', height: 'auto' }} alt="Monday Menu" />
                            <div className="flex-fill d-flex align-items-center bg-white px-4 mt-3">
                              <div className="d-flex flex-column">
                                <h4 className="text-start">Monday</h4>
                                <p className="text-start m-0">Palak Alu</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="carousel-item">
                          <div className="rounded overflow-hidden bg-card">
                            <img src="src/assets/img/monday.jpg" className="img-fluid" style={{ width: '100%', height: 'auto' }} alt="Tuesday Menu" />
                            <div className="flex-fill d-flex align-items-center bg-white px-4 mt-3">
                              <div className="d-flex flex-column">
                                <h4 className="text-start">Tuesday</h4>
                                <p className="text-start m-0">Kari Pakura + Roti</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="carousel-item">
                          <div className="rounded overflow-hidden bg-card">
                            <img src="src/assets/img/monday.jpg" className="img-fluid" style={{ width: '100%', height: 'auto' }} alt="Wednesday Menu" />
                            <div className="flex-fill d-flex align-items-center bg-white px-4 mt-3">
                              <div className="d-flex flex-column">
                                <h4 className="text-start">Wednesday</h4>
                                <p className="text-start m-0">Daal Moong + Salad</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="carousel-item">
                          <div className="rounded overflow-hidden bg-card">
                            <img src="src/assets/img/monday.jpg" className="img-fluid" style={{ width: '100%', height: 'auto' }} alt="Thursday Menu" />
                            <div className="flex-fill d-flex align-items-center bg-white px-4 mt-3">
                              <div className="d-flex flex-column">
                                <h4 className="text-start">Thursday</h4>
                                <p className="text-start m-0">Kaddu Channy Ki Daal</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="carousel-item">
                          <div className="rounded overflow-hidden bg-card">
                            <img src="src/assets/img/monday.jpg" className="img-fluid" style={{ width: '100%', height: 'auto' }} alt="Friday Menu" />
                            <div className="flex-fill d-flex align-items-center bg-white px-4 mt-3">
                              <div className="d-flex flex-column">
                                <h4 className="text-start">Friday</h4>
                                <p className="text-start m-0">Daal Chawal (Yellow)</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="carousel-item">
                          <div className="rounded overflow-hidden bg-card">
                            <img src="src/assets/img/monday.jpg" className="img-fluid" style={{ width: '100%', height: 'auto' }} alt="Saturday Menu" />
                            <div className="flex-fill d-flex align-items-center bg-white px-4 mt-3">
                              <div className="d-flex flex-column">
                                <h4 className="text-start">Saturday</h4>
                                <p className="text-start m-0">Bhindi</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="carousel-item">
                          <div className="rounded overflow-hidden bg-card">
                            <img src="src/assets/img/monday.jpg" className="img-fluid" style={{ width: '100%', height: 'auto' }} alt="Sunday Menu" />
                            <div className="flex-fill d-flex align-items-center bg-white px-4 mt-3">
                              <div className="d-flex flex-column">
                                <h4 className="text-start">Sunday</h4>
                                <p className="text-start m-0">Red Bean</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Repeat for other days */}
                      </div>
                      <button className="carousel-control-prev" type="button" data-bs-target="#lunchCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button" data-bs-target="#lunchCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                  {/* Dinner */}
                  <div className="col-lg-4 wow bounceInUp" data-wow-delay="0.1s">
                    <h3 className="text-start align-items-center" style={{ textAlign: 'center' }}>Dinner</h3>
                    <div id="dinnerCarousel" className="carousel slide" data-bs-ride="carousel">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="rounded overflow-hidden bg-card">
                            <img src="src/assets/img/Biryani.jfif" className="img-fluid" style={{ width: '90%', height: 'auto' }} alt="Monday Menu" />
                            <div className="flex-fill d-flex align-items-center bg-white px-4 mt-3">
                              <div className="d-flex flex-column">
                                <h4 className="text-start">Monday</h4>
                                <p className="text-start m-0">Chicken Roast + Daal Channa + Chatni</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="carousel-item">
                          <div className="rounded overflow-hidden bg-card">
                            <img src="src/assets/img/Biryani.jfif" className="img-fluid" style={{ width: '90%', height: 'auto' }} alt="Tuesday Menu" />
                            <div className="flex-fill d-flex align-items-center bg-white px-4 mt-3">
                              <div className="d-flex flex-column">
                                <h4 className="text-start">Tuesday</h4>
                                <p className="text-start m-0">Chicken Manchurian + Chinese Rice</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="carousel-item">
                          <div className="rounded overflow-hidden bg-card">
                            <img src="src/assets/img/Biryani.jfif" className="img-fluid" style={{ width: '100%', height: 'auto' }} alt="Wednesday Menu" />
                            <div className="flex-fill d-flex align-items-center bg-white px-4 mt-3">
                              <div className="d-flex flex-column">
                                <h4 className="text-start">Wednesday</h4>
                                <p className="text-start m-0">Chicken Karahi + Kheer</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="carousel-item">
                          <div className="rounded overflow-hidden bg-card">
                            <img src="src/assets/img/Biryani.jfif" className="img-fluid" style={{ width: '100%', height: 'auto' }} alt="Thursday Menu" />
                            <div className="flex-fill d-flex align-items-center bg-white px-4 mt-3">
                              <div className="d-flex flex-column">
                                <h4 className="text-start">Thursday</h4>
                                <p className="text-start m-0">Biryani + Cold Drinks</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="carousel-item">
                          <div className="rounded overflow-hidden bg-card">
                            <img src="src/assets/img/Biryani.jfif" className="img-fluid" style={{ width: '100%', height: 'auto' }} alt="Friday Menu" />
                            <div className="flex-fill d-flex align-items-center bg-white px-4 mt-3">
                              <div className="d-flex flex-column">
                                <h4 className="text-start">Friday</h4>
                                <p className="text-start m-0">Beef Kofta</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="carousel-item">
                          <div className="rounded overflow-hidden bg-card">
                            <img src="src/assets/img/Biryani.jfif" className="img-fluid" style={{ width: '100%', height: 'auto' }} alt="Saturday Menu" />
                            <div className="flex-fill d-flex align-items-center bg-white px-4 mt-3">
                              <div className="d-flex flex-column">
                                <h4 className="text-start">Saturday</h4>
                                <p className="text-start m-0">Chicken Pulao + Raita</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="carousel-item">
                          <div className="rounded overflow-hidden bg-card">
                            <img src="src/assets/img/Biryani.jfif" className="img-fluid" style={{ width: '100%', height: 'auto' }} alt="Sunday Menu" />
                            <div className="flex-fill d-flex align-items-center bg-white px-4 mt-3">
                              <div className="d-flex flex-column">
                                <h4 className="text-start">Sunday</h4>
                                <p className="text-start m-0">Aluu Cutlets + Mix Daal + Chatni</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Repeat for other days */}
                      </div>
                      <button className="carousel-control-prev" type="button" data-bs-target="#dinnerCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button" data-bs-target="#dinnerCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
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

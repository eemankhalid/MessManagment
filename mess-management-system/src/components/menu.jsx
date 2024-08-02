import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('tab-6');
  const [menu, setMenu] = useState({ today: [], thisWeek: { breakfast: [], lunch: [], dinner: [] } });
  const [loading, setLoading] = useState(true);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchMenu = async () => {
      try {

        const todayRes = await fetch('http://localhost:8000/today');
        const todayData = await todayRes.json();
        
        const thisWeekRes = await fetch('http://localhost:8000/thisWeek');
        const thisWeekData = await thisWeekRes.json();
        
        setMenu({ today: todayData, thisWeek: thisWeekData });
      } catch (error) {
        console.log('Error Fetching Data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  return (
    <>
      <section id="menu-section">
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
                      {menu.today.map((item, index) => (
                        <div key={index} className="col-lg-4 wow bounceInUp" data-wow-delay="0.1s">
                          <div className="rounded overflow-hidden bg-card">
                            <a href='/menu#menu-section'><img src={item.image} className="img-fluid" style={{ width: '100%', height: 'auto' }} alt={item.title} /></a>
                            <div className="flex-fill d-flex align-items-center bg-white px-4 mt-3 ">
                              <div className="d-flex flex-column">
                                <h4 className="text-start">{item.title}</h4>
                                <p className="text-start m-0">{item.description}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {activeTab === 'tab-7' && (
                  <div id="tab-7" className="tab-pane fade show active p-0">
                    {['breakfast', 'lunch', 'dinner'].map((mealType, index) => (
                      <div key={index} className="col-lg-4 wow bounceInUp" data-wow-delay="0.1s">
                        <h3 className="text-start align-items-center" style={{ textAlign: 'center' }}>{mealType.charAt(0).toUpperCase() + mealType.slice(1)}</h3>
                        <div id={`${mealType}Carousel`} className="carousel slide" data-bs-ride="carousel">
                          <div className="carousel-inner">
                            {menu.thisWeek[mealType].map((item, idx) => (
                              <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
                                <div className="rounded overflow-hidden bg-card">
                                  <img src={item.image} className="img-fluid" style={{ width: '100%', height: 'auto' }} alt={`${item.day} Menu`} />
                                  <div className="flex-fill d-flex align-items-center bg-white px-4 mt-3">
                                    <div className="d-flex flex-column">
                                      <h4 className="text-start">{item.day}</h4>
                                      <p className="text-start m-0">{item.item}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          <button className="carousel-control-prev" type="button" data-bs-target={`#${mealType}Carousel`} data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <button className="carousel-control-next" type="button" data-bs-target={`#${mealType}Carousel`} data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;

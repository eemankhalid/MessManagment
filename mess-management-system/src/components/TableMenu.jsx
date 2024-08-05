import React, { useState, useEffect } from 'react';

const TableMenu = () => {
  const [menu, setMenu] = useState({ thisWeek: { breakfast: [], lunch: [], dinner: [] } });
  const [overallMenu, setOverallMenu] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const thisWeekRes = await fetch('http://localhost:8000/thisWeek');
        const thisWeekData = await thisWeekRes.json();
        setMenu({ thisWeek: thisWeekData });

        const overallMenuRes = await fetch('http://localhost:8000/menu');
        const overallMenuData = await overallMenuRes.json();
        setOverallMenu(overallMenuData);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  // Function to get today's menu item
  const getTodaysMenu = () => {
    const dayOfWeek = new Date().getDay(); // 0 (Sunday) to 6 (Saturday)  
    return {
      breakfast: menu.thisWeek.breakfast[dayOfWeek - 1]?.item || "No item",
      lunch: menu.thisWeek.lunch[dayOfWeek - 1]?.item || "No item",
      dinner: menu.thisWeek.dinner[dayOfWeek - 1]?.item || "No item"
    };
  };

  const todaysMenu = getTodaysMenu();

  return (
    <section className='menu' id='menu-section'>
      <div className="container-fluid py-6">
        <div className="container">
          <div id='menu'>
            <div className="menu-column wow fadeInUp" data-wow-delay="0.3s" aria-label="Lunch Menu">
              <div className="today-menu mt-5">
                <h2 className="display-5 mb-4">Today's Menu</h2>
                <div className="menu-column">
                  <h3 className="bg-primary text-white p-3 rounded-top">Breakfast</h3>
                  <div className="menu-item">{todaysMenu.breakfast}</div>
                </div>
                <div className="menu-column">
                  <h3 className="bg-primary text-white p-3 rounded-top">Lunch</h3>
                  <div className="menu-item">{todaysMenu.lunch}</div>
                </div>
                <div className="menu-column">
                  <h3 className="bg-primary text-white p-3 rounded-top">Dinner</h3>
                  <div className="menu-item">{todaysMenu.dinner}</div>
                </div>
              </div>
            </div>
          </div>

          <div id='menu'>
            <div className="text-center mb-5">
              <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
                This Week's Menu
              </small>
              <h1 className="display-5 mb-4">Weekly Menu</h1>
            </div>
            <div className="menu-grid wow fadeInUp" data-wow-delay="0.1s">
              {['breakfast', 'lunch', 'dinner'].map((mealType, index) => (
                <div key={index} className="menu-column wow fadeInUp" data-wow-delay={`${0.2 + index * 0.1}s`} aria-label={`${mealType.charAt(0).toUpperCase() + mealType.slice(1)} Menu`}>
                  <h3 className="bg-primary text-white p-3 rounded-top">{mealType.charAt(0).toUpperCase() + mealType.slice(1)}</h3>
                  {menu.thisWeek[mealType].map((item, idx) => (
                    <div key={idx} className="menu-item">{item.day}: {item.item}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div id='overall-menu'>
            <div className="overall-menu-header text-center mb-5">
              <small className="overall-menu-tag d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
                Overall Menu
              </small>
              <h1 className="overall-menu-title display-5 mb-4">Menu</h1>
            </div>
            <div className="overall-menu-grid wow fadeInUp" data-wow-delay="0.1s">
              {Object.keys(overallMenu).map((cuisineType, index) => (
                <div key={index} className="overall-menu-column wow fadeInUp" data-wow-delay={`${0.2 + index * 0.1}s`} aria-label={`${cuisineType.charAt(0).toUpperCase() + cuisineType.slice(1)} Menu`}>
                  <h3 className="overall-menu-cuisine-title bg-primary text-white p-3 rounded-top text-center">{cuisineType.charAt(0).toUpperCase() + cuisineType.slice(1)}</h3>
                  {overallMenu[cuisineType].map((item, idx) => (
                    <div key={idx} className="overall-menu-item d-flex flex-column align-items-center p-3 border rounded mb-3">
                      <div className="overall-menu-item-name fw-bold">{item.name}</div>
                      <div className="overall-menu-item-description text-muted">{item.description}</div>
                      <div className="overall-menu-item-price mt-2 badge bg-success text-white">{item.price}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}

export default TableMenu;

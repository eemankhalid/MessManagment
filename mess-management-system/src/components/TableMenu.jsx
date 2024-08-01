import React from 'react';

const TableMenu = () => {
    // Function to get today's menu item (example)
    const getTodaysMenu = () => {
        const dayOfWeek = new Date().getDay(); // 0 (Sunday) to 6 (Saturday)
        const menus = {
            breakfast: ["Pancakes", "Omelette", "French Toast", "Bagels", "Smoothie Bowl", "Waffles", "Scrambled Eggs"],
            lunch: ["Grilled Chicken Sandwich", "Caesar Salad", "Beef Burritos", "Veggie Wrap", "Fish Tacos", "Margherita Pizza", "Chicken Caesar Wrap"],
            dinner: ["Spaghetti Bolognese", "Grilled Salmon", "Steak with Veggies", "Chicken Alfredo", "Shrimp Scampi", "BBQ Ribs", "Roast Chicken"]
        };
        return {
            breakfast: menus.breakfast[dayOfWeek],
            lunch: menus.lunch[dayOfWeek],
            dinner: menus.dinner[dayOfWeek]
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
                            <div className="menu-column wow fadeInUp" data-wow-delay="0.2s" aria-label="Breakfast Menu">
                                <h3 className="bg-primary text-white p-3 rounded-top">Breakfast</h3>
                                <div className="menu-item">Monday: Pancakes</div>
                                <div className="menu-item">Tuesday: Omelette</div>
                                <div className="menu-item">Wednesday: French Toast</div>
                                <div className="menu-item">Thursday: Bagels</div>
                                <div className="menu-item">Friday: Smoothie Bowl</div>
                                <div className="menu-item">Saturday: Waffles</div>
                                <div className="menu-item">Sunday: Scrambled Eggs</div>
                            </div>
                            <div className="menu-column wow fadeInUp" data-wow-delay="0.3s" aria-label="Lunch Menu">
                                <h3 className="bg-primary text-white p-3 rounded-top">Lunch</h3>
                                <div className="menu-item">Monday: Grilled Chicken Sandwich</div>
                                <div className="menu-item">Tuesday: Caesar Salad</div>
                                <div className="menu-item">Wednesday: Beef Burritos</div>
                                <div className="menu-item">Thursday: Veggie Wrap</div>
                                <div className="menu-item">Friday: Fish Tacos</div>
                                <div className="menu-item">Saturday: Margherita Pizza</div>
                                <div className="menu-item">Sunday: Chicken Caesar Wrap</div>
                            </div>
                            <div className="menu-column wow fadeInUp" data-wow-delay="0.4s" aria-label="Dinner Menu">
                                <h3 className="bg-primary text-white p-3 rounded-top">Dinner</h3>
                                <div className="menu-item">Monday: Spaghetti Bolognese</div>
                                <div className="menu-item">Tuesday: Grilled Salmon</div>
                                <div className="menu-item">Wednesday: Steak with Veggies</div>
                                <div className="menu-item">Thursday: Chicken Alfredo</div>
                                <div className="menu-item">Friday: Shrimp Scampi</div>
                                <div className="menu-item">Saturday: BBQ Ribs</div>
                                <div className="menu-item">Sunday: Roast Chicken</div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}

export default TableMenu;

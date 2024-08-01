// MenuPage.jsx
import React from 'react';
import Hero from '../components/Hero';
import TableMenu from '../components/TableMenu';





const MenuPage = () => {
  const buttons = [
    { label: 'Learn More', href: '#menu-section' }
  ];

  return (
    <div>
      <Hero 
        welcome="Discover Our Menu" 
        text="From Breakfast to Dinner, We've Got You Covered" 
        image="src/assets/img/menuPage.jpg"
        buttons={buttons}
      />
      <TableMenu />
    </div>
  );
}

export default MenuPage;

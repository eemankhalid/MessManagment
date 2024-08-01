// MenuPage.jsx
import React from 'react';
import Hero from '../components/Hero';

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
    </div>
  );
}

export default MenuPage;

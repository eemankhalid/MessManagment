// HomePage.jsx
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import MealBooking from '../components/MealBooking';
import Menu from '../components/menu';

const heroText = (
  <span>
    Your Mess with <span className="text-primary">e</span>Hungry, Delight in Every Meal
  </span>
);

const HomePage = () => {
  const buttons = [
    { label: 'Check Menu', href: '#menu-section' },
    { label: 'Know More', href: '#about-section' },
  ];

  return (
    <div>
      <Hero 
        welcome="Welcome to eHungry" 
        text={heroText} 
        image="src/assets/img/hero.png" 
        buttons={buttons}
      />
      <About />
      <MealBooking />
      <Menu />
    </div>
  );
}

export default HomePage;

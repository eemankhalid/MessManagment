import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import MealBooking from '../components/MealBooking'
import Menu from '../components/menu'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <MealBooking />
      <Menu />
    </div>
  )
}

export default HomePage

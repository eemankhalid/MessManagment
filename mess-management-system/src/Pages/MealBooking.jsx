import React from 'react'
import Hero from '../components/Hero'
import BookingForm from '../components/BookingForm'

const MealBooking = () => {

  return (
    <div>
      <Hero welcome={'Your Meal, Your Way'}
       text={'Customize and Reserve Your Meal in Just a Few Clicks'} 
       image={'src/assets/img/hero.png'}/>
       <BookingForm />
       
    </div>
  )
}

export default MealBooking

import React from 'react'
import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'

const ContactPage = () => {
  return (
    <div>
      <Hero welcome={'We Value Your Feedback'} text={'Reach Out to Us with Your Thoughts and Concerns'} image={'src/assets/img/menuPage.jpg'} />
      <ContactForm /> 
    
    </div>
  )
}

export default ContactPage

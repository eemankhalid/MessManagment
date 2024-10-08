import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'
import BackToTop from '../components/BackToTop';


const MainLayout = () => {
    return (
        <>
            <Navbar />
            <BackToTop />
            <Outlet />
            <Footer />
            <Copyright />
            
        </>
    )
}

export default MainLayout

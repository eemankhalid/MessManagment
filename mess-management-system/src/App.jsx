import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import MainLayout from './Layouts/MainLayout';
import HomePage from './Pages/HomePage';
import MenuPage from './Pages/MenuPage';
import MealBooking from './Pages/MealBooking';
import ContactPage from './Pages/ContactPage';




const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/menu' element={<MenuPage/>}/>
      <Route path='/meal-booking' element={<MealBooking />}/>
      <Route path='/contact' element={<ContactPage />}/>


    </Route>

  )
);


const App = () => {
  useEffect(() => {
    // Load external JS libraries
    const scripts = [
      { src: "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js", id: "jquery" },
      { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js", id: "bootstrap" },
      { src: "src/lib/wow/wow.min.js", id: "wow" },
      { src: "src/lib/easing/easing.min.js", id: "easing" },
      { src: "src/lib/waypoints/waypoints.min.js", id: "waypoints" },
      { src: "src/lib/counterup/counterup.min.js", id: "counterup" },
      { src: "src/lib/lightbox/js/lightbox.min.js", id: "lightbox" },
      { src: "src/lib/owlcarousel/owl.carousel.min.js", id: "owlcarousel" },
      { src: "src/js/main.js", id: "main" },
    ];

    scripts.forEach(script => {
      const scriptElement = document.createElement("script");
      scriptElement.src = script.src;
      scriptElement.id = script.id;
      scriptElement.async = true;
      document.body.appendChild(scriptElement);
    });


    return () => {
      // Cleanup scripts when the component unmounts
      scripts.forEach(script => {
        const scriptElement = document.getElementById(script.id);
        if (scriptElement) document.body.removeChild(scriptElement);
      });
    }
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CaterServ - Catering Services Website Template</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="" name="keywords" />
        <meta content="" name="description" />

        {/* Google Web Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Playball&display=swap"
          rel="stylesheet"
        />

        {/* Icon Font Stylesheet */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />

        {/* Libraries Stylesheet */}
        <link href="src/lib/animate/animate.min.css" rel="stylesheet" />
        <link href="src/lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
        <link href="src/lib/owlcarousel/owl.carousel.min.css" rel="stylesheet" />

        {/* Customized Bootstrap Stylesheet */}
        <link href="src/css/bootstrap.min.css" rel="stylesheet" />

        {/* Template Stylesheet */}
        <link href="src/css/style.css" rel="stylesheet" />
      </Helmet>

      <>
       
        <RouterProvider router={router}/>
        
      </>
    </>
  );
};

export default App;

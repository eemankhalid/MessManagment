import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/menu';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MealBooking from './components/MealBooking';
import Spinner from './components/Spinner';

const App = () => {
  useEffect(() => {
    // Load external JS libraries
    const script1 = document.createElement("script");
    script1.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js";
    script2.async = true;
    document.body.appendChild(script2);

    const script3 = document.createElement("script");
    script3.src = "src/lib/wow/wow.min.js";
    script3.async = true;
    document.body.appendChild(script3);

    const script4 = document.createElement("script");
    script4.src = "src/lib/easing/easing.min.js";
    script4.async = true;
    document.body.appendChild(script4);

    const script5 = document.createElement("script");
    script5.src = "src/lib/waypoints/waypoints.min.js";
    script5.async = true;
    document.body.appendChild(script5);

    const script6 = document.createElement("script");
    script6.src = "src/lib/counterup/counterup.min.js";
    script6.async = true;
    document.body.appendChild(script6);

    const script7 = document.createElement("script");
    script7.src = "src/lib/lightbox/js/lightbox.min.js";
    script7.async = true;
    document.body.appendChild(script7);

    const script8 = document.createElement("script");
    script8.src = "src/lib/owlcarousel/owl.carousel.min.js";
    script8.async = true;
    document.body.appendChild(script8);

    // Load your main.js
    const scriptMain = document.createElement("script");
    scriptMain.src = "src/js/main.js";
    scriptMain.async = true;
    document.body.appendChild(scriptMain);

    return () => {
      // Cleanup scripts when the component unmounts
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      document.body.removeChild(script3);
      document.body.removeChild(script4);
      document.body.removeChild(script5);
      document.body.removeChild(script6);
      document.body.removeChild(script7);
      document.body.removeChild(script8);
      document.body.removeChild(scriptMain);
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

      <div>
       
        <Spinner />
        <Navbar />
        <Hero />
        <About />
        <Menu />
        <MealBooking />
      </div>
    </>
  );
};

export default App;

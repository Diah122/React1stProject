import React from 'react';
import './App.css';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import About from './Pages/About';
import Experience from './Pages/Experience';
import Project from './Pages/Project';
import Main from './Pages/Main';
import Testimonial from './Pages/Testimonial';
import Header from './Component/Header';
import Skills from './Pages/Skills';
import Partners from './Pages/Partners';
import News from './Pages/News';
import Contact from './Pages/Contact';
import 'ionicons'; 


function App() {
  // Slick carousel options
  const settings = {
    // dots: true,
    // infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true, 
    // autoplay: true,
    autoplaySpeed: 2000, 
    arrows: true,
  };

  return (
    <div className="App">
      
      <Header />
      <div className="carousel" >
        <Slider {...settings}>
         
          <div className='item'>
            <Main />
          </div>
          <div className='item'>
            <About />
          </div>
          <div className='item'>
            <Experience />
          </div>
          <div className='item'>
            <Skills />
          </div>
          <div className='item'>
            <Project />
          </div>
          <div className='item'>
            <Partners />
          </div>
          <div className='item'>
            <Testimonial />
          </div>
          <div className='item'>
            <News />
          </div>
          <div className='item'>
            <Contact />
          </div>
        </Slider>
      </div>
      <div class="progress-nav">
    <ul class="navbar-nav">
      <li data-menuanchor="home" class="active"></li>
      <li data-menuanchor="about"></li>
      <li data-menuanchor="experience"></li>
      <li data-menuanchor="skills"></li>
      <li data-menuanchor="projects"></li>
      <li data-menuanchor="partners"></li>
      <li data-menuanchor="testimonials"></li>
      <li data-menuanchor="news"></li>
      <li data-menuanchor="contact"></li>
    </ul>
  </div>
    </div>
  );
}

export default App;
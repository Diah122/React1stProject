import React from 'react';
import girlImage from '../assets/Images/girl.jpg';

const About = () => {
  return (
    <div>
    <section id="about-me" className="section dg-scrollable d-flex align-items-center">
        <div className="dg-intro">
          <div className="dg-scroll-wrap">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 pr-md-5 pr-lg-0">
                  <div className="mb-4 text-dark">My specialization</div>
                  <h2>
                    I am a trending <br />
                    <span className="text-primary">designer</span> who cares<br/> about the details
                  </h2>
                  <div className="mt-5 pt-2">
                    <a href="#/"> <p>01. CREATIVE DESIGN</p></a>
                    <a href="#/"> <p>02. UI/UX DESIGN</p></a>
                    <a href="#/"> <p>03. WEBSITE DESIGN</p></a>
                    <a href="#/"> <p>04. LOGO DESIGN</p></a>
                    <a href="#/"> <p>05. PRODUCT DESIGN</p></a>
                  </div>
                </div>
                <div className="mt-5 mt-md-0 col-md-6 col-lg-5 offset-lg-1">
                  <div className="position-relative">
                   
                    <img alt="A girl" className="border-radius w-100 img-fluid" src={girlImage} />
                    <div className="dg-experience-info">
                      <div className="dg-experience-number">4</div>
                      <div className="experience-text">YEARS<br /> EXPERIENCE<br /> WORKING</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

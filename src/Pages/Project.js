
import React, { useState, useEffect } from 'react';
import contactBg from '../assets/Images/contact-bg.jpg';
import contactBg2 from '../assets/Images/contact-bg2.jpg';
import bg from '../assets/Images/bg.jpg';

const Project = () => {
 
  const backgrounds = [contactBg, contactBg2, bg];


  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <div>
      {/* Dynamically change the background using currentBgIndex */}
      <section id="dg-projects" className="dg-navbar-is-white text-white section dg-scrollable">
        <div className="dg-project-wrap">
          <div className="dg-bg-changer">
            <div
              className="dg-section-bg active"
              style={{
                backgroundImage: `url(${backgrounds[currentBgIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
               transition: 'background-image 1s ease-in-out', 
              }}
            ></div>
          </div>

          <div className="dg-intro">
            <div className="dg-scroll-wrap">
              <div className="container">
                <h2 className="text-white mb-0">Latest projects</h2>
                <div className="mt-5 pt-2">
                  <div className="row-dg-project-box row">
                    <div className="col-dg-project-box col-md-6 col-lg-4 col-xl-3">
                      <a href="#/" className="dg-project-box">
                        <div className="dg-project-box-inner">
                          <h4>Vector Art</h4>
                          <div className="dg-project-category">Graphic Design</div>
                        </div>
                      </a>
                    </div>
                    <div className="col-dg-project-box col-md-6 col-lg-4 col-xl-3">
                      <a href="#/" className="dg-project-box">
                        <div className="dg-project-box-inner">
                          <h4>Fashion Woman</h4>
                          <div className="dg-project-category">Photography</div>
                        </div>
                      </a>
                    </div>
                    <div className="col-dg-project-box col-md-6 col-lg-4 col-xl-3">
                      <a href="#/" className="dg-project-box">
                        <div className="dg-project-box-inner">
                          <h4>Abstract</h4>
                          <div className="dg-project-category">Illustration</div>
                        </div>
                      </a>
                    </div>
                    <div className="col-dg-project-box col-md-6 col-lg-4 col-xl-3">
                      <a href="#/" className="dg-project-box">
                        <div className="dg-project-box-inner">
                          <h4>Restaurant</h4>
                          <div className="dg-project-category">Branding</div>
                        </div>
                      </a>
                    </div>
                    <div className="col-dg-project-box col-md-6 col-lg-4 col-xl-3">
                      <a href="#/" className="dg-project-box">
                        <div className="dg-project-box-inner">
                          <h4>Puns</h4>
                          <div className="dg-project-category">Creative Design</div>
                        </div>
                      </a>
                    </div>
                    <div className="col-dg-project-box col-md-6 col-lg-4 col-xl-3">
                      <a href="#/" className="dg-project-box">
                        <div className="dg-project-box-inner">
                          <h4>Creative Bird</h4>
                          <div className="dg-project-category">Web Design</div>
                        </div>
                      </a>
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

export default Project;

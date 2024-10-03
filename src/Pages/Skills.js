import React, { useEffect, useState, useRef } from "react";
import shortVideo from "../assets/Videos/shortvideo.mp4";

const Skills = () => {
  const [isActive, setIsActive] = useState(false);
  const sectionRef = useRef(null); // Ref for the section to observe

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsActive(true); // Trigger the animation when the section is in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Observe the section
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Cleanup on unmount
      }
    };
  }, []);

  return (
    <div>
      <section
        ref={sectionRef}
        id="skills"
        className="section dg-scrollable d-flex align-items-center"
      >
        <div className="dg-intro">
          <div className="dg-scroll-wrap">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5 col-sm-6">
                  <div className="position-relative">
                    {/* Add 'active' class when section is in view */}
                    <div
                      className={`dg-photo-icon dg-photo-icon-1 ${
                        isActive ? "active" : ""
                      }`}
                    >
                      <i className="fa-solid fa-palette"></i>
                    </div>
                    <div
                      className={`dg-photo-icon dg-photo-icon-2 ${
                        isActive ? "active" : ""
                      }`}
                    >
                      <i className="fa-solid fa-desktop"></i>
                    </div>
                    <div
                      className={`dg-photo-icon dg-photo-icon-3 ${
                        isActive ? "active" : ""
                      }`}
                    >
                      <i className="fa-solid fa-file"></i>
                    </div>
                    <video autoPlay muted loop className="skills-video">
                      <source src={shortVideo} type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div className="mt-5 mt-lg-0 col-lg-5 offset-lg-1 col-sm-6">
                  <h2>
                    My mission is to <span className="text-primary">develop</span>{" "}
                    best design
                  </h2>
                  <p className="text-dark">
                    I will help you build your brand and grow your business. I
                    create clarifying strategy, beautiful logo and identity
                    design.
                  </p>
                  <div className="mt-5 pt-2">
                    <div className="dg-progress-content">
                      <div className="row">
                        <h6 className="col-md-10 mt-0">Web Design</h6>
                        <h6 className="col-md-2 text-right mt-0">70%</h6>
                      </div>
                      <div className="progress mb-5">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="dg-progress-content">
                      <div className="row">
                        <h6 className="col-md-10 mt-0">Photoshop</h6>
                        <h6 className="col-md-2 text-right mt-0">60%</h6>
                      </div>
                      <div className="progress mb-5">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="dg-progress-content">
                      <div className="row">
                        <h6 className="col-md-10 mt-0">Media & Content</h6>
                        <h6 className="col-md-2 text-right mt-0">80%</h6>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "90%" }}
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
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

export default Skills;

import React from "react";
import introImg from "../assets/Images/intro-img.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Experience = () => {
  const settings = {
    // dots: true,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div>
      <section
        id="experience"
        className="dg-navbar-is-white text-white section dg-scrollable d-flex align-items-center position-absolute experience-bg"
        style={{
          backgroundImage: `url(${introImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <div className="dg-intro">
          <div className="dg-scroll-wrap">
            <div className="container">
              <h2 className="text-white mb-0">Experience</h2>

              <div className="mt-5 pt-5">
                <div className="">
                  <Slider {...settings}>
                    <div className="">
                      <div className="dg-experience-item">
                        <div className="row dg-row-experience">
                          <div className="col-md-4">
                            <div className="square-icon">
                              <a href="#/">
                                <i className="fa-brands fa-behance"></i>
                              </a>
                            </div>
                          </div>
                          <div className="col-md-4 my-4">
                            2019-2021
                            <h3 className="my-0 text-white">Behance</h3>
                          </div>
                          <div className="col-md-4">
                            But I must explain to you how all this mistaken idea
                            of denouncing pleasure and praising pain was born
                            and I will give you a complete
                          </div>
                        </div>
                        <div className="row dg-row-experience">
                          <div className="col-md-4">
                            <div className="square-icon">
                              <a href="#/">
                                <i className="fa-brands fa-dribbble"></i>
                              </a>
                            </div>
                          </div>
                          <div className="col-md-4 my-4">
                            2017-2019
                            <h3 className="my-0 text-white">Dribble</h3>
                          </div>
                          <div className="col-md-4">
                            But I must explain to you how all this mistaken idea
                            of denouncing pleasure and praising pain was born
                            and I will give you a complete
                          </div>
                        </div>
                        <div className="row dg-row-experience">
                          <div className="col-md-4">
                            <div className="square-icon">
                              <a href="#/">
                                <i class="fa-brands fa-reddit"></i>
                              </a>
                            </div>
                          </div>
                          <div className="col-md-4 my-4">
                            2013-2017
                            <h3 className="my-0 text-white">Reddit</h3>
                          </div>
                          <div className="col-md-4">
                            But I must explain to you how all this mistaken idea
                            of denouncing pleasure and praising pain was born
                            and I will give you a complete
                          </div>
                        </div>

                        {/* Repeat the same structure for other experiences */}
                      </div>
                    </div>
                    <div className="">
                      <div className="dg-experience-item">
                        <div className="row dg-row-experience">
                          <div className="col-md-4">
                            <div className="square-icon">
                              <a href="#/">
                                <i className="fa-brands fa-behance"></i>
                              </a>
                            </div>
                          </div>
                          <div className="col-md-4 my-4">
                            2019-2021
                            <h3 className="my-0 text-white">Behance</h3>
                          </div>
                          <div className="col-md-4">
                            But I must explain to you how all this mistaken idea
                            of denouncing pleasure and praising pain was born
                            and I will give you a complete
                          </div>
                        </div>
                        <div className="row dg-row-experience">
                          <div className="col-md-4">
                            <div className="square-icon">
                              <a href="#/">
                                <i className="fa-brands fa-dribbble"></i>
                              </a>
                            </div>
                          </div>
                          <div className="col-md-4 my-4">
                            2017-2019
                            <h3 className="my-0 text-white">Dribble</h3>
                          </div>
                          <div className="col-md-4">
                            But I must explain to you how all this mistaken idea
                            of denouncing pleasure and praising pain was born
                            and I will give you a complete
                          </div>
                        </div>
                        <div className="row dg-row-experience">
                          <div className="col-md-4">
                            <div className="square-icon">
                              <a href="#/">
                                <i class="fa-brands fa-reddit"></i>
                              </a>
                            </div>
                          </div>
                          <div className="col-md-4 my-4">
                            2017-2019
                            <h3 className="my-0 text-white">Reddit</h3>
                          </div>
                          <div className="col-md-4">
                            But I must explain to you how all this mistaken idea
                            of denouncing pleasure and praising pain was born
                            and I will give you a complete
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const Testimonial = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <div>
      <section id="testimonials" className="dg-navbar-is-white section dg-scrollable d-flex align-items-center testimonials-bg">
        <div className="dg-intro">
          <div className="dg-scroll-wrap">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-xl-5">
                  <span className="dg-icon-quote text-primary">"</span>
                  <h2 className="text-white">
                    Hey, this is <span className="text-primary">testimonials</span> from my best clients & partners
                  </h2>
                </div>
                <div className="col-lg-5 col-xl-5 offset-lg-1 offset-xl-2">
                  <div className="carousel">
                    <Slider {...settings}>
                      <div className="">
                        <div className="text-white">
                          <p className="mb-5 text-white">
                            <strong className="h4 mb-0 text-white">Kevin</strong>
                            <br />
                            Rouzel LLP.
                          </p>
                          <p>
                            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, dignissimos illo. Soluta eaque a sapiente molestiae vitae distinctio assumenda? Eum, deserunt? Molestiae repellat recusandae accusantium ducimus veritatis provident consequuntur qui.”
                          </p>
                        </div>
                      </div>
                      <div className="">
                        <div className="text-white">
                          <p className="mb-5 text-white">
                            <strong className="h4 mb-0 text-white">Mary</strong>
                            <br />
                            Alilextra
                          </p>
                          <p>
                            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ex quas nulla minima eum odio voluptate! Asperiores corporis laudantium soluta excepturi illo, pariatur mollitia, temporibus veritatis quasi molestias autem id.”
                          </p>
                        </div>
                      </div>
                    </Slider>
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

export default Testimonial;

import React from 'react';
import logo3 from '../assets/Images/logo3.jpg';
import logo4 from '../assets/Images/logo4.jpg';
import logo6 from '../assets/Images/logo6.jpg';
import logo7 from '../assets/Images/logo7.jpg';
// import img5 from '../assets/Images/5.png';
import img6 from '../assets/Images/6.png';
import img7 from '../assets/Images/7.png';

const Partners = () => {
  return (
    <div> <section id="partners" className="section dg-scrollable ">
    <div className="dg-intro">
      <div className="dg-scroll-wrap">
          <div className="container">
              <h2 className="mb-0"><span className="text-primary">Best</span> Partners</h2>
                  <div className="mt-5 pt-2">
                <div className="row-dg-partners row align-items-center ">
               <div className="col-dg-partner col-sm-6 col-md-4  col-xl-3">
                  <img alt="" src={logo3} className="img-fluid" />
               </div>
                
               <div className="col-dg-partner col-sm-6 col-md-4 col-xl-3">
                <img alt="" src={logo4} className="img-fluid" />
                </div>

                <div className="col-dg-partner col-sm-6 col-md-4  col-xl-3">
                  <img alt="" src={logo6} className="img-fluid"/>
               </div>
               <div className="col-dg-partner col-sm-6 col-md-4  col-xl-3">
                  <img alt="" src={logo7} className="img-fluid"/>
               </div>
               <div className="col-dg-partner col-sm-6 col-md-4  col-xl-3">
                  <img alt="" src={logo4} className="img-fluid"/>
               </div>
               <div className="col-dg-partner col-sm-6 col-md-4  col-xl-3">
                  <img alt="" src={img6} className="img-fluid"/>
               </div>
               <div className="col-dg-partner col-sm-6 col-md-4  col-xl-3">
                  <img alt="" src={img7} className="img-fluid"/>
               </div>
             </div>
           </div>
       </div>
    </div>
    </div>
  </section>
  </div>
  )
}

export default Partners
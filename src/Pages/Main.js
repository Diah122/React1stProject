// import React from 'react';
// import video from '../assets/Videos/Main_video.mp4';

// const Main = () => {
//   return (
//     <div>
//       <section id="hero-area" className="dg-navbar-is-white dg-scrollable d-flex align-items-center section" role="main">
        
//         <video autoPlay muted loop id="mainVideo" className="position-absolute" width="100%" height="100%">
//           <source src={video} type="video/mp4" />
//         </video>

      
//         <div className="dg-intro">


//           <div className="dg-scroll-wrap">
//             <div className="container">
//               <div className="row">
//                 <div className="col-lg-6 col-xl-5">
//                   <div className="mb-2">I'm a Creative<br /> Designer</div>
//                   <h1 className="text-white">
//                     <span className="text-typed a-typed a-typed-about" style={{color: '#dd1a80'}}>Hello,</span> my name is Diya.
//                   </h1>
//                   <div className="line"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Main;

import React from 'react';
import video from '../assets/Videos/Main_video.mp4';

const Main = () => {
  return (
    <div>
      <section id="hero-area" className="dg-navbar-is-white dg-scrollable d-flex align-items-center section position-relative" role="main">
        
        {/* Background Video */}
        <video autoPlay muted loop id="mainVideo" className=" position-absolute">
          <source src={video} type="video/mp4" />
        </video>

        {/* Content on top of the video */}
        <div className="dg-intro position-relative">
          <div className="dg-scroll-wrap">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-xl-5">
                  <div className="mb-2">I'm a Creative<br /> Designer</div>
                  <h1 className="text-white">
                    <span className="text-typed a-typed a-typed-about" style={{color: '#dd1a80'}}>Hello,</span> my name is Diya.
                  </h1>
                  <div className="line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;


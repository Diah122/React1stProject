import React from 'react';
import logoDesign2 from '../assets/Images/logo design2.avif';
import brand from '../assets/Images/brand.avif';
import webImg from '../assets/Images/webimg.png'


const News = () => {
  return (
    <div>
         <section id="news" className="section dg-scrollable ">
        <div className="dg-intro">
          <div className="dg-scroll-wrap">
	          <div className="container">
		          <div className="d-block d-md-flex align-items-center justify-content-between">
		             <h2 className="mb-0 mb-3 mb-md-0">Journal</h2>
		             <a href="#/" className="btn">View all</a>
		          </div>
		          	<div className="mt-5 pt-4">
		            <div className="dg-news-row row">
		           <div className="col-lg-4">
		              <figure>
			              <a href="#/" className="dg-image-link">
			                 <img alt="" src={logoDesign2} className="img-fluid"/>
			              </a>
		              <figcaption>
			              
						  <h4 className="mt-3">Logo Design</h4>
						  <a href="#/" className="dg-read-more">Read more<ion-icon name="chevron-forward-outline"></ion-icon></a>
					  </figcaption>
					  </figure>
		           </div>
		            <div className="col-lg-4 mt-5 mt-lg-0">
		              <figure>
			              <a href="#/" className="dg-image-link">
			                 <img alt="" className="img-fluid" src={brand} />
			              </a>
		                <figcaption>
			               <h4 className="mt-3">Brand Design</h4>
						  <a href="#/" className="dg-read-more">Read more<ion-icon name="chevron-forward-outline"></ion-icon></a>
					   </figcaption>
					  </figure>
		           </div>
		           <div className="col-lg-4 mt-5 mt-lg-0">
		              <figure>
			              <a href="#/" className="dg-image-link">
						  <img alt="" className="img-fluid" src={webImg} />
			              </a>
		                <figcaption>
			               <h4 className="mt-3">Web Design</h4>
						  <a href="#/" className="dg-read-more">Read more<ion-icon name="chevron-forward-outline"></ion-icon></a>
					    </figcaption>
					  </figure>
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

export default News;
import React from 'react';
// import contactBg from '../assets/Images/contact-bg.jpg';
import contactBg2 from '../assets/Images/contact-bg2.jpg';

const Contact = () => {
  return (
    <div>
        <section id="contact" className="navbar-is-white  section pp-scrollable"
		style={{  backgroundImage: `url(${contactBg2})`, backgroundSize: 'cover',
		backgroundPosition: 'center',
		height: '100vh',}}  >
        <div className="dg-intro">
          <div className="dg-scroll-wrap">
	          <div className="container">
		          <div className="row">
					 <div className="col-md-4">
					 	<h2 className="text-white">Contact</h2>
					 	<p className="text-muted">Ready to get started? <span>grab the opportunity to take your business to the next level with jaw-dropping digital innovations.</span></p>
				<h3 className=" mt-5 pt-5 text-white">Trishla City, Zirakpur</h3>
				<h3 className="text-white">+91 9999999999</h3>
				<p className="text-muted mt-3 text-white">Diah.design@gmail.com</p>
				 </div>
				 <div className="col-md-5 offset-md-2">
				 	<h3 className=" mt-0 text-white">Let's grab a coffee and jump on conversation <span className="">chat with me.</span></h3>
				 	<div className="mt-5">
						<form className="js-ajax-form">
							<div className="form-group">
				               <input type="text" name="name" className="form-control" placeholder="Name" />
				            </div>
				             <div className="form-group">
				               <input type="email" name="email"  className="form-control" required="" placeholder="Email *" />
				             </div>
				             <div className="form-group">
				              <textarea rows="3" name="message"  className="form-control" placeholder="Message"></textarea>
				             </div>
				             <div className="message" id="success-message">Your message is successfully sent...</div>
				             <div className="message" id="error-message">Sorry something went wrong</div>
				             <div className="form-group mb-0">
				               <button type="submit" className="btn">Contact me</button>
				             </div>
						</form>
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

export default Contact;
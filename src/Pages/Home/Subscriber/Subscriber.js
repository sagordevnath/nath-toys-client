import React from "react";
import logo from '../../../Images/logo/logo.png';
import './Subscriber.css';


const Subscriber = () => {
  return (
    <div className="container subscriber-container">
      <div className="subscribe1">
        <img src="https://i.ibb.co/ZHCP7tp/subscribe1.jpg" alt="" />
      </div>
      <div className="subscribe text-center">
        <img width="10px" src={logo} alt="" />
        <h3 className='text-primary'>Newsletter</h3>
        <p className='text-success'>Subscribe Now For Exclusive Offers</p>
        <input type="text" />
        <button>Subscribe</button>
        <div className="social-icons">  
  <a className="social-icon social-icon--github">
    <i className="fa fa-github"></i>    
  </a>
  <a className="social-icon social-icon--twitter">
    <i className="fa fa-twitter"></i>    
  </a>  
  <a className="social-icon social-icon--instagram">
    <i className="fa fa-instagram"></i>    
  </a>
  <a className="social-icon social-icon--linkedin">
    <i className="fa fa-linkedin"></i>    
  </a>
  <a className="social-icon social-icon--facebook">
    <i className="fa fa-facebook"></i>    
  </a>
</div>

      </div>
      <div className="subscribe2">
        <img src="https://i.ibb.co/TPNrPXg/subscribe2.png" alt="" />
      </div>
    </div>
  );
};

export default Subscriber;




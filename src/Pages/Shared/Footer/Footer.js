import React from "react";
import logo from "../../../Images/logo/logo.png";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
   
      <div>
        <div className="footer-container">
      <div className="info">
        <h4 className="text-danger mb-3">
          <img width="100px" src={logo} alt="" /> Nath ToYs
        </h4>
        <p>
        Quality in a product or service is not what the supplier puts in. it is what the customer gets out and is willing to pay for. A product is not quality because it is hard to make and costs a lot of money, as manufacturers typically believe.
        </p>
      </div>
      <div className="location">
        <h5 className="text-danger mb-3">YOUR ACCOUNT</h5>
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>FAQs</li>
          <li>New Products</li>
          <li></li>
        </ul>
      </div>
      <div className="contact">
        <h5 className="text-danger mb-3">PRODUCT</h5>
        <ul>
          <li>Delivery</li>
          <li>Legal Notice</li>
          <li>Prices drop</li>
          <li>New products</li>
          <li>Best sale</li>
        </ul>
      </div>
      <div className="social-contact">
        <h5 className="text-danger mb-3">CONTACT INFORMATION</h5>
        <div className="social-icons">
          <div className="d-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-1 w-1 mt-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>{" "}
            4005, Silver business point, Bangladesh
            <button className="btn my-3">View in map</button>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-1 w-1 mt-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
              />
            </svg>{" "}
            01 2552 05 0542
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-1 w-1 mt-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>{" "}
            info@gmail.com
          </div>
          <small>All Rights Reserve. Copywrite © Nath Toys {year}{" "}</small>
        </div>
      </div>
      
    </div>    
      </div>
    
    
  );
};

export default Footer;

import React from 'react';
import akLogo from '../assets/company_icon_green.png';
import './footer.css';
import fb from '../fb.json';
import linkedin from '../linkedin.json';
import twitter from '../twitter.json'
import Lottie from "lottie-react";
import birac from '../assets/incubation/birac.png';
import indigram from '../assets/incubation/indigram.png';
import brand from '../brand.png';
import dpiit from '../assets/recog/DPIIT.png';
import startup from '../assets/recog/startup-india.png';

const Footer = () => (
  <div className="ak__footer-section">
    <div className="ak__footer section__padding" id='footer'>
      {/* <div className="ak__footer-heading">
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
      </div>

      <div className="ak__footer-btn">
        <p>Download Now</p>
      </div> */}

      <div className="ak__footer-links">
        <div className="ak__footer-links_logo">
          <img src={brand} alt="ak_logo" />
          <p>Arraykart Techable Pvt Ltd,<br/> 
          <br /> E-37, Shivajipuram Colony <br/>
          <br/> Swarna Jayanti Nagar <br/>
          <br/> Ramghat Road <br/>
          <br/>Aligarh, 202001<br/>
          <br/>Uttar Pradesh, India <br/></p>
        </div>
        
        <div className="ak__footer-links_div">
          <h4>Incubated At</h4>
          {/* <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p> */}
          <div className='ak__footer-links_div-incubation'><img src={birac} ></img></div>
          <div className='ak__footer-links_div-incubation'><img src={indigram}></img></div>
        </div>
        <div className="ak__footer-links_div">
          <h4>Follow Us</h4>
          <div className='ak__footer-links_div_socials_div'>
              <a href='http://www.facebook.com/arraykartofficial' target="_blank">
                  <Lottie 
                      className="ak__footer-links_div_socials_div-lottie"
                      animationData={fb} 
                      loop={true}
                      autoPlay={true}
                      style={{width:50}}/>
              </a>
              <a href='https://www.linkedin.com/company/arraykart/' target="_blank">
                  <Lottie 
                      className="ak__footer-links_div_socials_div-lottie"
                      animationData={linkedin} 
                      loop={true}
                      autoPlay={true}
                      style={{width:50}}/>
              </a>
              <a href='https://twitter.com/ArrayKart' target="_blank">
              <Lottie 
                      className="ak__footer-links_div_socials_div-lottie"
                      animationData={twitter} 
                      loop={true}
                      autoPlay={true}
                      style={{width:50}}/>
              </a>
          </div>
          
        </div>
        <div className='ak__footer-links_div'>
          <h4>Recognised By</h4>
          <div className='ak__footer-links_div-incubation'><img src={dpiit} ></img></div>
          <div className='ak__footer-links_div-incubation'><img src={startup} ></img></div>
        </div>
        <div className="ak__footer-links_div">
          <h4>Get in touch</h4>
          {/* <p>Arraykart Address1 address2</p> */}
          <p>+91-9311900912 (9:00 - 18:00) IST</p>
          <p>yourfriends@arraykart.com</p>
        </div>
        
      </div>

      <div className="ak__footer-copyright">
        <p>@2022 Arraykart. All rights reserved.</p>
        <br/>
        <p>Designed and Developed by arraykart.com </p>
        <br/>
        <p>Made in India with ❤️</p>
      </div>
    </div>
  </div>
  
);

export default Footer;
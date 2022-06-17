import React from "react";
import "./header.css"
import people from './people.png';
import ai from './ai.png';
import ecommerce from './ecommerce.json';
import Lottie from "lottie-react";

const Header= () => {
  // const particlesInit = (main) => {
  //   console.log(main);

  //   // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  // };

  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };
  return(
    <div className="ak__header section__margin" id="home">
      <div className="ak__header-content">
      <h1 className="gradient__text">
          Let's make Agriculture a Profession of Hope! 
      </h1>
      <p>We are helping the SMEs to compete with the Modern B2C eCommerce by making them ready with digital technology to serve their local customer with a great experience.</p>
        {/* <div className="ak__header-content__input">
          <input type="text" placeholder="Your Email Address or Phone Number"></input>
          <button type="button">Get Started</button>
        </div> */}
        {/* <div className="ak__header-content__people">
          <img src={people} alt="people"/>
          <p>1600+ people are interested!</p>
        </div> */}
      </div>
      <div className="ak__header-image">
        <Lottie 
        className="ak__header-lottie"
            animationData={ecommerce} 
            loop={true}
            autoPlay={true}/>
        </div>
    </div>
  )
}
export default Header;

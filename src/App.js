import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Header from "./Header.jsx";
import Brand from "./brand/brand.jsx";
import './index.css'
import './App.css';
import Lottie from "lottie-react";
import About from "./about/about.jsx";
import Services from "./services/services.jsx";
import Vision from "./vision/vision.jsx";
import CTA from "./cta/cta.jsx";
import Blog from "./blog/blog.jsx";
import Footer from "./footer/footer.jsx";
import BgConst from "./bgconst/bgconst.jsx";
import NumberCounter from "./numberCounter/numberCounter.jsx";
import Team from "./team/team.jsx";
import Testimonials from "./testimonial/testimonial.jsx";
import Progress from "./progress/progress.jsx";
import LifeAtAK from "./lifeatAK/lifeatAK.jsx";
import ScrollServices from "./scrollServices/scrollServices.jsx";
// import splashani from "./splash.json";
import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxEx from "./parallax/parallaxEx.jsx";
import Stats from "./stats/stats.jsx";

const App = () => {
  // const[splash, setSplash] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSplash(false);
  //   },3000)
  // })
  return(
    <div className="App">
      {/* {
        splash
        ?<div className="splash">
          <Lottie 
            animationData={splashani} 
            loop={true}
            autoPlay={true}/>
        </div>
        :<div className="gradient__bg">
            <Navbar />
            <Header />
          </div>
      } */}
      <div className="gradient__bg">
            <Navbar />
            <Header />
            <Brand />
            <About />
            <Progress />
            
            {/* <ScrollServices /> */}
            
            {/* <ParallaxProvider scrollAxis="horizontal"> */}
              
              <ParallaxEx />
            {/* </ParallaxProvider> */}
            <Services />
            {/* <BgConst /> */}
            <Vision />
            <CTA />
            <NumberCounter />
            
            
            {/* <Team /> */}
            <LifeAtAK />
            {/* <Stats /> */}
            <Blog />
            {/* <Testimonials /> */}
            
            <Footer />
          </div>
      
    </div>
  )
}

export default App;

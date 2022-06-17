import React, {useState, useEffect} from 'react';
import './parallax.css';
import delivery from '../assets/services/p3.png';
import doorstep from '../assets/services/p1.png';
import store from '../assets/services/p2.png';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
import { Tween } from 'react-gsap';
gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".imagess")
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const ParallaxEx = () => {
  const [imgWidth, setImgWidth] = useState(0);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const onImgLoad = ({ target: img }) => {
    const { offsetHeight, offsetWidth } = img;
    setImgWidth(offsetWidth*2);
  };
        return (
          <div className='parallax section__margin'>
              <h1 className='heading__text'>How We Handle It</h1>
              {
                windowDimensions.width >=700
                ? <Tween 
                to={ {
                  x: imgWidth * (sections.length - 1),
                  scrollTrigger: {
                    trigger: '.parallax',
                    pin: true,
                    scrub:1,
                    snap:1/(sections.length-1),
                    start: "-100px",
                    end: ()=>"+="+
                        document.querySelector(".container").offsetWidth,
                  },
                }}
              >
                
                  <div className='container'>
                  {/* <section className="hero"> */}
                    <div className='imagess'>
                      <img
                        onLoad={onImgLoad}
                        src={delivery}
                        alt="test"
                      />
                    </div>
                    <div className='imagess'>
                      <img
                        src={doorstep}
                        alt="test"
                      />
                    </div>
                    <div className='imagess'>
                      <img
                        src={store}
                        alt="test"
                      />
                    </div>
                    
                  {/* </section> */}
                  </div>
                  </Tween>
                : <div className='container'>
                {/* <section className="hero"> */}
                  <div className='imagess'>
                    <img
                      onLoad={onImgLoad}
                      src={delivery}
                      alt="test"
                    />
                  </div>
                  <div className='imagess'>
                    <img
                      src={doorstep}
                      alt="test"
                    />
                  </div>
                  <div className='imagess'>
                    <img
                      src={store}
                      alt="test"
                    />
                  </div>
                  
                {/* </section> */}
                  </div>
              }
              
            </div>
            
              
          
          
        )
}

export default ParallaxEx;
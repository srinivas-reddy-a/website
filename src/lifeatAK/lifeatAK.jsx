import React, {useState} from 'react';
import './lifeatAK.css';
import l15 from '../assets/lifeAtAK/l15.jpg';
import l12 from '../assets/lifeAtAK/l12.jpg';
import l14 from '../assets/lifeAtAK/l14.jpg';
import l8 from '../assets/lifeAtAK/l8.jpg';
import l5 from '../assets/lifeAtAK/l5.jpg';
import l10 from '../assets/lifeAtAK/l10.jpg';
import l16 from '../assets/lifeAtAK/l16.jpg';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
import { Tween } from 'react-gsap';
gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".img-dim")
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
const LifeAtAK = () => {
        
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());  
    return(
        <div className='ak__life section__margin section__padding' id="#life">
            <div>
              <h1 className='heading__text'>Life at arraykart</h1>
            </div>
            {
                windowDimensions.width >=700
                ? <Tween 
                to={ {
                  x: 400 * (sections.length - 1),
                  scrollTrigger: {
                    trigger: '.ak__life',
                    pin: true,
                    scrub:1,
                    start: "-100px",
                    snap:1/2,
                    end: ()=>"+="+
                        document.querySelector(".grid-container").offsetWidth,
                  },
                }}
                >
                    <div className="grid-container">
                        <div className='item1'><img src={l15} alt="Sample photo" className='img-dim'/></div>
                        <div className='item2'><img src={l16} alt="Sample photo" className='img-dim'/></div>
                        {/* <div className='item3'><img src={l8} alt="Sample photo" className='img-dim'/></div> */}
                        <div className='item4'><img src={l10} alt="Sample photo" className='img-dim'/></div>
                        <div className='item5'><img src={l5} alt="Sample photo" className='img-dim'/></div>
                        <div className='item6'><img src={l12}alt="Sample photo" className='img-dim'/></div>
                    </div>
                </Tween>
                : <div className="grid-container">
                    <div className='item1'><img src={l15} alt="Sample photo" className='img-dim'/></div>
                    <div className='item2'><img src={l16} alt="Sample photo" className='img-dim'/></div>
                    {/* <div className='item3'><img src={l8} alt="Sample photo" className='img-dim'/></div> */}
                    <div className='item4'><img src={l10} alt="Sample photo" className='img-dim'/></div>
                    <div className='item5'><img src={l5} alt="Sample photo" className='img-dim'/></div>
                    <div className='item6'><img src={l12}alt="Sample photo" className='img-dim'/></div>
                   </div>
            }
            
        </div>
    )
}

export default LifeAtAK;
import React from 'react';
import './vision.css';
import possibilityImage from './possibility.png';
import Lottie from 'lottie-react';
import vision from './vision.json';

const Vision = () => {
    return(
        <div className="ak__vision section__padding" id="vision">
            <div className="ak__vision-image">
            <Lottie 
                      animationData={vision} 
                      loop={true}
                      autoPlay={true}/>
            </div>
            <div className="ak__vision-content">
                <h4>Our Vision</h4>
                <h1 className="gradient__text">To build a value chain for the rural communities<br />and SMEs for the sustainable growth in this digital era.</h1>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolores non pariatur quod, at, nam perferendis doloribus aperiam doloremque neque nobis, vitae voluptatum iusto aliquid labore nihil deserunt fugit. Obcaecati?</p> */}
                {/* <h4>Request Early Access to Get Started</h4> */}
            </div>
        </div>
    )
}

export default Vision;
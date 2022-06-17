import React from 'react';
import './scrollServices.css';
import delivery from '../assets/services/p3.png';
import doorstep from '../assets/services/p1.png';
import store from '../assets/services/p2.png';
import HorizontalScroll from 'react-scroll-horizontal';


const ScrollServices = () => {
    return(
        <div className='ak__ss_container section__margin'>
            <h1>How We Handle It</h1>
            <HorizontalScroll pageLock={false} reverseScroll={true}>
            <div>
                <div className='ak__ss_container-image'>
                    <img src={store}></img>
                </div>
                <div className='ak__ss_container-image'>
                    <img src={doorstep}></img>
                </div>
                <div className='ak__ss_container-image'>
                    <img src={delivery}></img>
                </div>
                {/* <div className='ak__ss_container-image'>
                    <img src={fulfillment}></img>
                </div> */}
            </div>
            </HorizontalScroll>
        </div>
    )
}

export default ScrollServices;
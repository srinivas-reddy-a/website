import React from 'react';
import './progress.css';
import order from '../assets/order.png';
import returnorcancel from '../assets/returnorcancel.png';
import shipment from '../assets/shipment.png';
import Tilt from 'react-tilt'

const Progress = () => {
    return(
        <div className='ak__progress section__margin'>
            <h1 className='heading__text'>Please be informed</h1>                    
            <div className='ak__progress__container'>
            <Tilt className="Tilt" options={{ max : 50 }}>
                <div className='ak__progress-info'>
                    <img src={returnorcancel} alt="img" className='ak__progress-info-img'></img>
                    <p>Zero Returns / Cancellations</p>
                </div>
            </Tilt>
            <Tilt className="Tilt" options={[{ max : 35 },{scale:10}]}>
                <div className='ak__progress-info'>
                    <img src={order} alt="img" className='ak__progress-info-img'></img>
                    <p>80% Order Fulfillment</p>
                </div>
            </Tilt>
            <Tilt className="Tilt" options={{ max : 50 }}>
                <div className='ak__progress-info'>
                    <img src={shipment} alt="img" className='ak__progress-info-img'></img>
                    <p>12Hr Avg Delivery Time</p>
                </div>
            </Tilt>
                
                
            </div>
        </div>
    )
}
export default Progress;
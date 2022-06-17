import React from 'react';
import './cta.css';
import qr from './qr.png';
import playstore from'./playstore.png';

const CTA = () => (
  <div className="ak__cta">
    <div className="ak__cta-content">
      <p>Available on playstore</p>
      <h3>Download our App Today & start exploring the endless possibilities.</h3>
    </div>
    <div className='ak__cta-qr'>
      <img src={qr}></img>
    </div>
    <div className='ak__cta-play'>
    <a href='https://play.google.com/store/apps/details?id=com.arraykart.b2b '><img src={playstore}></img></a>
    </div>  
    {/* <div className="ak__cta-btn">
      <button type="button"><a href='https://play.google.com/store/apps/details?id=com.arraykart.b2b '>Download</a></button>
    </div> */}
  </div>
);

export default CTA;
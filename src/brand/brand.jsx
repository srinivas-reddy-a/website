import React from 'react';
import './brand.css';
import adama from '../assets/brands/adama.png';
import aries from '../assets/brands/aries.png';
import bayer from '../assets/brands/bayer.png';
import bharat from '../assets/brands/bharat.png';
import crystal from '../assets/brands/Crystal.png';
import fito from '../assets/brands/Fito.png';
import fmc from '../assets/brands/FMC.png';
import gharda from '../assets/brands/Gharda.png';
import hpm from '../assets/brands/HPM.png';
import indofil from '../assets/brands/INDOFIL.png';
import mahyco from '../assets/brands/mahyco.png';
import nagarjuna from '../assets/brands/Nagarjuna.png';
import parijat from '../assets/brands/PARIJAT.png';
import pi from '../assets/brands/Pi.png';
import pioneer from '../assets/brands/Pioneer.png';
import sumitomo from '../assets/brands/Sumitomo-Chemicals.png';
import syngenta from '../assets/brands/Syngenta.png';
import rallis from '../assets/brands/Tata-Rallis.png';
import upl from '../assets/brands/upl-logo.png';
import vnr from '../assets/brands/vnr.png';
import Marquee from "react-fast-marquee";


const Brand = () => {
    return (
        <div className='ak__brand_container section__margin'>
            <h1 className='heading__text'>Trusted Brands</h1>
             <Marquee pauseOnHover={true} direction="right" gradientWidth={20}>
                <div className='ak__brand section__padding'>   
                    <div className='ak__brand-image'>
                        <img src={adama} alt="adama"/>
                    </div>
                    <div className='ak__brand-image'>
                        <img src={aries} alt="aries"/>
                    </div>
                    <div className='ak__brand-image'>
                        <img src={bayer} alt="aries"/>
                    </div>
                    <div className='ak__brand-image'>
                        <img src={bharat} alt="aries"/>
                    </div>
                    <div className='ak__brand-image'>
                        <img src={crystal} alt="indofil"/>
                    </div>
                    <div className='ak__brand-image'>
                        <img src={fito} alt="tata"/>
                    </div>
                    <div className='ak__brand-image'>
                        <img src={fmc} alt="tata"/>
                    </div>
                    <div className='ak__brand-image'>
                        <img src={gharda} alt="tata"/>
                    </div>
                    <div className='ak__brand-image'>
                        <img src={hpm} alt="tata"/>
                    </div>
                    <div className='ak__brand-image'>
                        <img src={indofil} alt="tata"/>
                    </div>
                </div>
            </Marquee>
            <Marquee pauseOnHover={true} gradientWidth={20}>
                <div className='ak__brand section__padding'>   
                    <div className='ak__brand-image'>
                        <img src={mahyco} alt="tata"/>
                    </div>
                    <div className='ak__brand-image'>
                        <img src={nagarjuna} alt="tata"/>
                    </div>
                    <div className='ak__brand-image'>
                        <img src={parijat} alt="tata"/>
                    </div>
                    <div className='ak__brand-image'>
                        <img src={pi} alt="tata"/>
                    </div>
                    <div className='ak__brand-image'>
                        <img src={pioneer} alt="tata"/>
                    </div>
                    <div className='ak__brand-image'>
                        <img src={sumitomo} alt="tata"/>
                    </div>
                    <div className='ak__brand-image'>
                        <img src={syngenta} alt="tata"/>
                    </div>
                    <div className='ak__brand-image'>
                        <img src={rallis} alt="tata"/>
                    </div>
                    <div className='ak__brand-image'>
                        <img src={upl} alt="tata"/>
                    </div>
                    <div className='ak__brand-image'>
                        <img src={vnr} alt="tata"/>
                    </div>
                </div>
            </Marquee>
        </div>
       
        
    )
}

export default Brand;
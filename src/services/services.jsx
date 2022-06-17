import React from 'react';
import Feature from '../feature/feature';
import './services.css';

const featureData = [
    {
        title: 'Crop Inputs',
        text: 'We are offering branded and trusted crop inputs to our hundreds of retailers through our rural supply chain.'
    },
    {
        title: 'Digital Lending',
        text: 'We understand the requirement of funds to run a business. For that, we are offering digital lending to our retailers between 10k to 100k for a period of 30 days. This is possible through one of our core values i.e. Collaboration.'
    },
    {
        title: 'Inventory Management',
        text: 'We are building a full-fledged inventory management platform for the retailers to maintain the stocks in peak demand time.'
    },
    {
        title: 'Digital shop',
        text: 'We are building a platform for retailers to open their online shops to compete with other B2C eCommerce businesses and serve their customers efficiently. Through this, retailers can do online and offline business without the fear of losing their customers.'
    },
    {
        title: 'Know Your Crop',
        text: 'We are educating retailers and farmers about better utilization of pesticides for various crop diseases and their respective preventive measures to prevent the loss of yield.'
    }
]
const Services = () => {
    return (
        <div className='ak__services section__padding' id='services'>
            <div className='ak__services-heading'>
                <h1 className='gradient__text'>
                    Building the trio of Agritech, Fintech, and Logistics services for the Rural India
                </h1>
                {/* <p>
                    Request Early Access
                </p> */}
            </div>
            <div className='ak__services-container'>
                {featureData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title+index}/>
                ))}
            </div>
        </div>
    )
}

export default Services;
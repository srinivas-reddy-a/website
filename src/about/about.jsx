import React from 'react';
import './about.css';
import Feature from '../feature/feature.jsx';
const About = () => {
    return (
        <div className='ak__about section__margin' id="about">
            <div className='ak__about-section'>
                <div className='ak__about-feature'>
                {/* . Arraykart is building a tech-driven robust rural supply chain model to speed up the flow of goods to the end consumers. */}
                    <Feature title="About Arraykart" text="Arraykart Techable Private Limited is a DPIIT-recognized startup. Arraykart is helping farmers and retailers through its competitive edge services and technologies to make agriculture an organized and profitable industry. "/>
                </div>
                <div className='ak__about-heading'>
                    <h1 className='gradient__text'>
                        Doing More with Less
                    </h1>
                    {/* <p>Explore the Library</p> */}
                </div>
                <div className='ak__about-container'>
                    <Feature title="Customer-first Policy"/>
                    <Feature title="Working Culture"/>
                    <Feature title="Partner Relationship"/>
                    <Feature title="We Handle It- concept"/>
                    {/* <Feature title="Customer-first Policy" text="Great customer experience is one of the robust foundation stones of the arraykart. Our commitment is to give a delightful experience throughout the customer journey to our customers. Our in-house support team is working on the same philosophy."/>
                    <Feature title="Working Culture" text="We are inspired by some great companies and their working environment. After the meticulous study, We have designed and executed a great working culture. Here, We have been giving the freedom to “Think and do different”. We have experienced that our peers are more productive, efficient, happy, curious, cordial, and creative by working in our working culture."/>
                    <Feature title="Partner Relationship" text="We have a special place in our company for our partners. We grow with the support of our partners and their continuous guidance. We believe in maintaining a great relationship with our partners by keeping high the integrity and commitment in business."/>
                    <Feature title="We Handle It- concept" text="Every individual in our company is proactive in solving the industry's minute and major problems by building useful and accessible technology. Every arraykartian is devoted to handle the problems of farmers and retailers of buying and selling products, supply chain, and finance."/> */}
                </div>
            </div>
        </div>
    )
}

export default About;
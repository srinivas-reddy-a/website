import React from 'react';
import './team.css';
import banner01 from '../assets/banner01.jpg';
import banner02 from '../assets/banner02.jpg';
import banner03 from '../assets/banner03.jpg';
import banner04 from '../assets/banner04.jpg';
const Team = () => {
    return(
        <div className='ak__team_container' id='team'>
            <div className='ak__team-banner1'>
                <img className='ak__team-banner-img' src={banner03}></img>
                <div className='ak__team-info ak__team-info01'>
                    <h1>CEO</h1>
                    <span></span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem corrupti ipsa error optio fuga unde, totam fugiat obcaecati ipsam temporibus labore voluptate earum officia possimus, omnis, saepe ut magnam asperiores?</p>   
                </div>
            </div>
            <div className='ak__team-banner2'>
                <img className='ak__team-banner-img' src={banner02}></img>
                <div className='ak__team-info ak__team-info02'>
                    <h1>COO</h1>
                    <span></span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem corrupti ipsa error optio fuga unde, totam fugiat obcaecati ipsam temporibus labore voluptate earum officia possimus, omnis, saepe ut magnam asperiores?</p>   
                </div>
            </div>
            <div className='ak__team-banner3'>
                <img className='ak__team-banner-img' src={banner01}></img>
                <div className='ak__team-info ak__team-info03'>
                    <h1>CMO</h1>
                    <span></span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem corrupti ipsa error optio fuga unde, totam fugiat obcaecati ipsam temporibus labore voluptate earum officia possimus, omnis, saepe ut magnam asperiores?</p>   
                </div>
            </div>
            <div className='ak__team-banner4'>
                <img className='ak__team-banner-img' src={banner04}></img>
                <div className='ak__team-info ak__team-info04'>
                    <h1>CLO</h1>
                    <span></span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem corrupti ipsa error optio fuga unde, totam fugiat obcaecati ipsam temporibus labore voluptate earum officia possimus, omnis, saepe ut magnam asperiores?</p>   
                </div>
            </div>
        </div>
        
    )
}

export default Team;
import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import brand from './brand.png';
import icon from './arraykart_icon.png';
import festival from './republic.json';
import brand_green from './assets/company_name_green.png'




const Navbar = () =>{
    const [toogleMenu, setToggleMenu] = useState(false);
    return (
        <div className="ak__navbar">
            <div className="ak__navbar-links">
                <div className="ak__navbar-links_logo">
                    {/* <img src={icon} alt="icon" id="icon"></img> */}
                    <img src={brand_green} alt="company name"></img>
                    {/* <h1 className="glow">
                        arraykart
                    </h1> */}

                        {/* for any event  */}
                        {/* <Lottie 
                            className="eventOrFestival"
                        animationData={festival} 
                        loop={true}
                        autoPlay={true}/> */}
                </div>
                <div className="ak__navbar-links_container">
                    <p><a href="#home" className="ak__navbar-links_container-text">Home</a></p>
                    <p><a href="#about" className="ak__navbar-links_container-text">About Us</a></p>
                    <p><a href="#services" className="ak__navbar-links_container-text">Services</a></p>
                    <p><a href="#vision" className="ak__navbar-links_container-text">Vision</a></p>
                    <p><a href="#blog" className="ak__navbar-links_container-text">Blogs</a></p>
                    {/* <p><a href="#team">Team</a></p> */}
                    {/* <p><a href="#testimonial">Testimonial</a></p> */}
                    <p><a href="#footer" className="ak__navbar-links_container-text">Contact Us</a></p>
                </div>
            </div>
            <div className="ak__navbar-menu">
                {
                    toogleMenu
                     ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
                     : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />
                }
                {
                    toogleMenu && (
                        <div className="ak__navbar-menu_container scale-up_center" >
                            <div className="ak__navbar-menu_container-links">
                                <p><a href="#home" className="ak__navbar-links_container-text">Home</a></p>
                                <p><a href="#about" className="ak__navbar-links_container-text">About Us</a></p>
                                <p><a href="#services" className="ak__navbar-links_container-text">Services</a></p>
                                <p><a href="#vision" className="ak__navbar-links_container-text">Vision</a></p>
                                <p><a href="#blog" className="ak__navbar-links_container-text">Blogs</a></p>
                                <p><a href="#footer" className="ak__navbar-links_container-text">Contact Us</a></p>
                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar;
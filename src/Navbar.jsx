import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import fb from './fb.json';
import linkedin from './linkedin.json';
import twitter from './twitter.json'
import Lottie from "lottie-react";
import brand from './brand.png'
import festival from './republic.json';




const Navbar = () =>{
    const [toogleMenu, setToggleMenu] = useState(false);

    const Menu = () =>(
        <>
            <p>
                <a href='http://www.facebook.com/arraykartofficial' target="_blank">
                    <Lottie 
                        className="ak__navbar-lottie__fb"
                        animationData={fb} 
                        loop={true}
                        autoPlay={true}/>
                </a>
            </p>
            <p>
                <a href='https://www.linkedin.com/company/arraykart/' target="_blank">
                    <Lottie 
                        className="ak__navbar-lottie"
                        animationData={linkedin} 
                        loop={true}
                        autoPlay={true}/>
                </a>
            </p>
            <p>
                <a href='https://twitter.com/ArrayKart' target="_blank">
                <Lottie 
                        className="ak__navbar-lottie"
                        animationData={twitter} 
                        loop={true}
                        autoPlay={true}/>
                </a>
            </p>
        </>
    )

    return (
        <div className="ak__navbar">
            <div className="ak__navbar-links">
                <div className="ak__navbar-links_logo">

                        <img src={brand} alt="logo"></img>
                        {/* for any event  */}
                        {/* <Lottie 
                            className="eventOrFestival"
                        animationData={festival} 
                        loop={true}
                        autoPlay={true}/> */}
                </div>
                <div className="ak__navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="ak__navbar-menu">
                {
                    toogleMenu
                     ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                     : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {
                    toogleMenu && (
                        <div className="ak__navbar-menu_container scale-up_center" >
                            <div className="ak__navbar-menu_container-links">
                                <Menu />
                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar;
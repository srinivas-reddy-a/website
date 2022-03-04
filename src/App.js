import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Header from "./Header.jsx";
import './index.css'
import './App.css';
import Lottie from "lottie-react";
// import splashani from "./splash.json";

const App = () => {
  // const[splash, setSplash] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSplash(false);
  //   },3000)
  // })
  return(
    <div className="App">
      {/* {
        splash
        ?<div className="splash">
          <Lottie 
            animationData={splashani} 
            loop={true}
            autoPlay={true}/>
        </div>
        :<div className="gradient__bg">
            <Navbar />
            <Header />
          </div>
      } */}
      <div className="gradient__bg">
            <Navbar />
            <Header />
          </div>
      
    </div>
  )
}

export default App;

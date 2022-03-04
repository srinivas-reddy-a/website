import React from "react";
import "./header.css"
import Particles from "react-tsparticles";
import Lottie from "lottie-react";
import comingSoon from "./coming_soon.json";

const Header= () => {
  // const particlesInit = (main) => {
  //   console.log(main);

  //   // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  // };

  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };
  return(
    <div className="ak__header section__padding" id="home">
      <div className="ak__header-content">
      <h1 className="gradient__text">
          Coming Soon!
        </h1>
        <p>
          Click to add Gravity-point. Double click one to get rid of it. Click and hold to move one!
        </p>
        {/* <div className="ak__header-content__input">
          <input type="email" placeholder="Your Email address"></input>
          <button type="button">Get Started</button>
        </div> */}
        {/* <div className="ak__header-content__people">
          <img src={people} alt="people"/>
          <p>1600+ people are interested!</p>
        </div> */}
        
      </div>
      {/* <div className="ak__header-image">
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
                repeat: "no-repeat",
              },
              fullScreen:{
                enable: false,
                zIndex: 0
              },
        
              detectRetina: false,
              fpsLimit: 60,
              interactivity: {
                events: {
                  onClick: {
                    mode: "push"
                  },
                  onDiv: {
                    selectors: "#repulse-div",
                    mode: "repulse"
                  },
                  onHover: {
                    enable: true,
                    mode: "bubble"
                  }
                },
                modes: {
                  bubble: {
                    distance: 40,
                    duration: 2,
                    opacity: 8,
                    size: 6
                  },
                  grab: {
                    distance: 400
                  },
                  slow: {
                    factor: 1,
                    radius: 0
                  }
                }
              },
              particles: {
                color: {
                  value: "#ffffff"
                },
                links: {
                  color: {
                    value: "#ffffff"
                  },
                  distance: 30,
                  enable: true,
                  opacity: 0.4
                },
                move: {
                  attract: {
                    rotate: {
                      x: 600,
                      y: 1200
                    }
                  },
                  enable: true,
                  outModes: {
                    default: "bounce",
                    bottom: "bounce",
                    left: "bounce",
                    right: "bounce",
                    top: "bounce"
                  },
                  speed: 1
                },
                number: {
                  density: {
                    area: 2000
                  },
                  value: 200
                },
                opacity: {
                  value: {
                    min: 0.05,
                    max: 0.4
                  },
                  animation: {
                    enable: true,
                    minimumValue: 0.05
                  }
                },
                size: {
                  random: {
                    enable: true
                  },
                  value: 1,
                  animation: {
                    speed: 40,
                    minimumValue: 0.1
                  }
                }
              },
              polygon: {
                draw: {
                  enable: false,
                  stroke: {
                    color: {
                      value: "rgba(255,255,255,0.2)"
                    },
                    width: 0.5,
                    opacity: 0.2
                  }
                },
                enable: true,
                inline: {
                  arrangement: "equidistant"
                },
                move: {
                  radius: 10,
                  type: "path"
                },
                scale: 0.5,
                type: "inline",
                url: "https://particles.js.org/images/smalldeer.svg"
              }
            }}
    />
          
        </div>   */}
      
    </div>
  )
}
export default Header;

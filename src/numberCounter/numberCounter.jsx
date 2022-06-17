import React,{useState} from 'react';
import './numberCounter.css';
import CountUp from 'react-countup';
import ReactVisibilitySensor from 'react-visibility-sensor';


const NumberCounter = () => {
    const [once, setOnce] = useState(true);
    const onChange = (isVisible) => {
        setOnce(true);
    }
    return(
        <ReactVisibilitySensor onChange={onChange} active={once} partialVisibility>
            {({isVisible}) => (
                <div className='ak__content'>
                    <p>
                        Retailers<br/> <span>{isVisible?<CountUp end={305} duration={2} suffix="+" onEnd={()=>setOnce(false)}/>: null}</span>
                    </p>
                    <p>
                    Associated Farmers<br/> <span>{isVisible?<CountUp end={36700} duration={2} suffix="+" onEnd={()=>setOnce(false)}/>: null}</span>
                    </p>
                    <p>
                        SKUs<br/> <span> {isVisible?<CountUp end={300} duration={2} suffix="+" onEnd={()=>setOnce(false)}/>: null}</span>
                    </p>
                </div>
            )}
        </ReactVisibilitySensor>
        
    )
}

export default NumberCounter;
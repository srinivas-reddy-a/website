import React from 'react';
import './testimonial.css';
import farmer01 from '../assets/farmers/farmer01.jpg';
import farmer02 from '../assets/farmers/farmer02.jpg';
import farmer03 from '../assets/farmers/farmer03.jpg';
import farmer04 from '../assets/farmers/farmer04.jpg';
import farmer05 from '../assets/farmers/farmer05.jpg';
import l1 from '../assets/lifeAtAK/l1.jpg';
import l2 from '../assets/lifeAtAK/l2.jpg';
import l3 from '../assets/lifeAtAK/l3.jpg';
import l4 from '../assets/lifeAtAK/l4.jpg';
import l5 from '../assets/lifeAtAK/l5.jpg';

const Testimonials = () => {
    return(
        <div className='ak__testimonials_container' id="testimonial"> 
            <section id="ak__testimonials-slider">
                <input type="radio" name="slider" id="s1" onChange={ ( e ) => e.target.checked }/>
                <input type="radio" name="slider" id="s2" onChange={ ( e ) => e.target.checked }/>
                {/* if checked is used in place of defaultChecked radio button doesnt work as intented
                also use onChnage function to update */}
                <input type="radio" name="slider" id="s3" onChange={ ( e ) => e.target.checked } defaultChecked={true}/>
                <input type="radio" name="slider" id="s4" onChange={ ( e ) => e.target.checked }/>
                <input type="radio" name="slider" id="s5" onChange={ ( e ) => e.target.checked }/>

                <label for="s1" id="slide1" className='ak__testimonial-img'>
                    <div className='ak__testimonial-img'>
                        <img src={l1} alt="farmer" className='ak__testimonial-img'/>
                        {/* <div className='ak__testimonial-info'>
                            <h3>Review Highlight</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor necessitatibus nulla natus nemo voluptatibus tempore illum dolore placeat odit voluptatum expedita dignissimos quidem, assumenda ipsum, amet, sunt quia incidunt repellendus.</p>
                        </div> */}
                    </div>
                </label>
                <label for="s2" id="slide2" className='ak__testimonial-img'><img src={l2} alt="farmer" className='ak__testimonial-img'/></label>
                <label for="s3" id="slide3" className='ak__testimonial-img'><img src={l3} alt="farmer" className='ak__testimonial-img'/></label>
                <label for="s4" id="slide4" className='ak__testimonial-img'><img src={l4} alt="farmer" className='ak__testimonial-img'/></label>
                <label for="s5" id="slide5" className='ak__testimonial-img'><img src={l5} alt="farmer" className='ak__testimonial-img'/></label>
            </section>
        </div>
    )
}

export default Testimonials;
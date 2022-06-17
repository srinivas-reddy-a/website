import React from 'react';
import './pictures.css';

const Pictures = ({imgUrl}) => {
    return(
        <div className='ak__pictures-container_article'>
            <div className='ak__pictures-container_article-image'>
                <img className='ak__pictures-img' src={imgUrl}/>
            </div>
        </div>
    )
}

export default Pictures; 
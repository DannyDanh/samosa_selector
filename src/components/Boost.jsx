import React from 'react';
import '../App.css';

const Boost = ({title, description, cost, action})=>{
    return(
        <div className='boost-card'>
            <h2 className='boost-title'>{title}</h2>
            <h3 className='boost-desc'>{description}</h3>
            <button className='boost-button' onClick={action}>{cost} samosas</button>
        </div>
    );
};

export default Boost;
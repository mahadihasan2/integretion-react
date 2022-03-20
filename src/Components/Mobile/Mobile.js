import React from 'react';
import './Mobile.css';

const Mobile = (props) => {
    return (
        <div className='mobile'>
            <h1>This is Mobile Components: {props.name}</h1>
        </div>
    );
};

export default Mobile;
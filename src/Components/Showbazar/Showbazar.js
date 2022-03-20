import React from 'react';

const Showbazar = (props) => {
    const { name, price, id } = props.bazar
    return (
        <div>
            <h2>Show the name:{name}</h2>
            <p>Show the price: ${price}</p>
            <small>Show the id: {id}</small>
        </div>
    );
};

export default Showbazar;
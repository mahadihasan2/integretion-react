import React from 'react';
import './Showbazar.css';

const Showbazar = (props) => {
    const { name, price, id } = props.bazar
    const addToCard = (id) => {
        console.log('item-add..', id)
    }
    return (
        <div className='product'>
            <h2>Show the name:{name}</h2>
            <p>Show the price: ${price}</p>
            <small>Show the id: {id}</small><br>
            </br>
            <button onClick={() => addToCard(id)}>addToCard</button>
        </div>
    );
};

export default Showbazar;
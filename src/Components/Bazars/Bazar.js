import React from 'react';
import Showbazar from '../Showbazar/Showbazar';

const Bazar = () => {
    const bazars = [
        { id: 1, name: 'Fish', price: 200 },
        { id: 2, name: 'Banana', price: 400 },
        { id: 3, name: 'Komola', price: 500 },
        { id: 4, name: 'Kejur', price: 600 },
        { id: 5, name: 'Mango', price: 700 },
        { id: 6, name: 'Cheken', price: 800 },
    ]
    return (
        <div>
            {
                bazars.map(bazar => <Showbazar
                    key={bazar.id}
                    bazar={bazar}
                >

                </Showbazar>)
            }
        </div>
    );
};

export default Bazar;
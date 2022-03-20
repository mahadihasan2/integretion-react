import React from 'react';
import { add } from '../utilities/utilities';

const Cosmetics = () => {
    const first = 60;
    const second = 70;
    const total = add(first, second)
    return (
        <div>
            <h2>Total Cosmetics: {total} </h2>
        </div>
    );
};

export default Cosmetics;
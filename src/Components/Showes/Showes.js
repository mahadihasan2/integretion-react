import React from 'react';
import { add, multipuly } from '../utilities/utilities';
// import add from '../utilities/utilities';

const Showes = () => {
    const first = 33;
    const second = 45;
    const result = add(first, second)
    const totalMultiply = multipuly(first, second)
    return (

        <div>
            <p>total result: {result}</p>
            <p>Total Multiply: {totalMultiply}</p>
        </div>
    );
};

export default Showes;
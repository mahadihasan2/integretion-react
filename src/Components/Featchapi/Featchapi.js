import React, { useEffect, useState } from 'react';
import Showapi from '../Showapi/Showapi';

const Featchapi = () => {
    const [company, setCompany] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCompany(data))
    }, [])
    return (
        <div>
            {
                company.map(company => <Showapi
                    key={company.id}
                    company={company}
                >

                </Showapi>)
            }
        </div>
    );
};

export default Featchapi;
import React from 'react';

const Showdatageneretor = (props) => {
    const { email, id, profile } = props.datageneretor
    return (
        <div>
            <h1>This is email: {email}</h1>
            <h2>This is id: {id}</h2>
            <h4>This is profile name: {profile.name}</h4>
            <h5>This is Company Name: {profile.company}</h5>
            <small>This is dath of birth: {profile.dob}</small>
        </div>
    );
};

export default Showdatageneretor;
import React from 'react';

const Showapi = (props) => {
    const { profile, email, id } = props.company
    return (
        <div>
            <h1>This is name: {profile.name}</h1>
            <h3>This is email: {email}</h3>
            <h4>This is id : {id}</h4>
        </div>
    );
};

export default Showapi;
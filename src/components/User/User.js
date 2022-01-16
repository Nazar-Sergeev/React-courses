import React from 'react';

const User = ({user:{id, name, username}}) => {
    return (
        <div>
            <h5>{id} - {name} - {username}</h5>
        </div>
    );
};


export default User;
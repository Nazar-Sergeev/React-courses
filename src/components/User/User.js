import React from 'react';

const User = ({user:{id, name, username, email}}) => {
    return (
        <div>
            <h3>{id} - {name} {username}***{email}</h3>
        </div>
    );
};


export default User;
import React from 'react';


const User = ({user, getUserDetails}) => {
const {id, name, email} = user

    return (

        <div className={'userWrap'}>
            <div>{id} - {name} - {email}
            <button onClick={() => {getUserDetails(user)}}>User Details</button>
            </div>
        </div>
    );
};


export default User;
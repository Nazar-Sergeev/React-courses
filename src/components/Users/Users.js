import React, {useEffect, useState} from 'react';


import {userService} from "../../services/user.service";
import User from "../User/User";

const Users = ({getUserDetails}) => {

    const [users, setUsers] = useState([]);


    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value))
    },[])


    return (
        <div>
            <div>{users.map(value => <User key={value.id} user={value} getUserDetails={getUserDetails}/>)}</div>
        </div>
    );
};


export default Users;
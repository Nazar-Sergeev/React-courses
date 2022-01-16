import {useEffect, useState} from "react";

import './Users.css'
import User from "../User/User";

export default function Users() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                    .then(value => value.json())
                    .then(response => {
                        setUsers(response);
                    });
    }, []);

    return (
        <div className='users_block'>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
}
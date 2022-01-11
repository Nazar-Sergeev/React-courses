import {useEffect, useState} from "react";
import './Users.css'

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
            {
                users.map( user =>
                    <h5 key={user.id}>{user.id} - {user.name} {user.username}</h5>
                )
            }
        </div>
    );
}
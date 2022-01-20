import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id, name, username} = user;
    return (
        <div>
            <h3>{id} - {name} - {username}</h3>
            <Link to={id.toString()} state={user} ><button>User Details</button> </Link>
            <Link to={id.toString()} ><button>User Albums</button> </Link>

        </div>
    );
};


export default User;
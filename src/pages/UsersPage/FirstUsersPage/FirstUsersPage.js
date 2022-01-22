import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";

import {userService} from "../../../services/user.service";
import UserDetails from "../../../components/UserDetails/UserDetails";

const FirstUsersPage = () => {

    const {id} = useParams();

    const {state} = useLocation();

    const [user, setUser] = useState(null);

    useEffect(() => {
        if (state) {
            setUser(state)
            return
        }

        userService.getById(id)
            .then(value => setUser({...value}));
    }, [id]);

    return (
        <div>
            {user && <UserDetails user={user}/>}
            <Outlet/>
        </div>
    );
};


export default FirstUsersPage;
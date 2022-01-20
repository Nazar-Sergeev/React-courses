import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import './Layout.css'

const Layout = () => {
    return (
        <div>
            <div className={'header'}>

                {/*/!*<NavLink></NavLink>*!------add className = 'active'*/}

                <NavLink to='/'>Home</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
            </div>
            <div className={'wrap'}>
                <Outlet/>
            </div>
        </div>
    );
};


export default Layout;
import React from 'react';
import {Link, Outlet} from "react-router-dom";

import './Layout.css'

const Layout = () => {
    return (
        <div className={'d-flex'}>

            <div className={'wrap'}>
                <Link to={`/cat`}>
                    <button>CAT</button>
                </Link>
                <Link to={'/car'}>
                    <button>CAR</button>
                </Link>
                <Link to={'/dog'}>
                    <button>DOG</button>
                </Link>
                <Link to={'/girl'}>
                    <button>GIRL</button>
                </Link>
                <Link to={'/notebook'}>
                    <button>NOTEBOOK</button>
                </Link>
            </div>
            <div>
                <Outlet/>
            </div>

        </div>
    );
};


export default Layout;
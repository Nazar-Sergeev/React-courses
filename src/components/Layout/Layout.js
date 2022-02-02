import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <div>
                <Link to={'/'}><button>Home page</button></Link>
                <Link to={'/cars'}><button>Cars page</button></Link>
                <Link to={'/users'}><button>Users page</button></Link>
                <Link to={'/posts'}><button>Posts page</button></Link>
                <Link to={'/comments'}><button>Comments page</button></Link>
            </div>

            <div>
                <Outlet/>
            </div>

        </div>
    );
};


export {Layout};
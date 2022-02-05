import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {User} from "../User/User";
import {getAllUsers} from "../../store";

const Users = () => {

    const {users, status, error} = useSelector(state => state['userReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    return (
        <div>
            {status === 'loading' && <h3>Loading.......</h3>}
            {error && <h3>{error}</h3>}
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};
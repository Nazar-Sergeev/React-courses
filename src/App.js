import {useState} from "react";


import './App.css';
import Users from "./components/Users/Users";
import UserDetails from "./components/User/UserDetails";
import Posts from "./components/Posts/Posts";


function App() {

    const [user, setUser] = useState(null);

    const [userId, setUserId] = useState(null);


    const getUserDetails = (user) => {
        setUser(user)
        setUserId(null)
    };


    const getUserId = (id) => {
        setUserId(id)
    };


    return (
    <div>

        <div className={'usersWrap'}>
            <Users getUserDetails={getUserDetails}/>
            {user && <UserDetails user={user} getUserId={getUserId}/>}
        </div>
        {userId && <Posts userId={userId}/>}

    </div>
  );
}

export default App;

import {useEffect, useState} from "react";

import './App.css';
import Form from "./components/Form/Form";
import Users from "./components/Users/Users";
import {userService} from "./services/user.service";

function App() {

    const [users, setUsers] = useState([]);
    const [filterUsers, setFilterUsers] = useState([]);


    useEffect(() => {
        userService.getAll()
            .then(response => {
                setUsers([...response])
                setFilterUsers([...response])
            })
        }, []);

    const getFilter = (date) => {
        let arrayFilterUsers = [...users]

        if (date.name) {
            arrayFilterUsers = arrayFilterUsers.filter(user => user.name.toLowerCase().includes(date.name.toLowerCase()))
        }
        if (date.username) {
             arrayFilterUsers = arrayFilterUsers.filter(user=> user.username.toLowerCase().includes(date.username.toLowerCase()))
        }
        if (date.email) {
            arrayFilterUsers = arrayFilterUsers.filter(user => user.email.toLowerCase().includes(date.email.toLowerCase()))
        }
        setFilterUsers(arrayFilterUsers)


    };

  return (
    <div>

      <Form getFilter={getFilter}/>
      <Users users={filterUsers} />

    </div>
  );
}

export default App;

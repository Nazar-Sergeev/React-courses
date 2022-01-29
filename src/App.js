import {useState} from "react";

import './App.css';
import {Cats, Form} from "./components";

function App() {

    const [cats, setCats] = useState([]);
    console.log(cats)
    const [dogs, setDogs] = useState([]);

    const getFormData = (data) => {
        setCats([...cats, {id: new Date(), ...data}])
        set
    }

    const getId = (id) => {
        setCats(cats.filter(cat => cat.id !== id))

    }

  return (
    <div>
      <Form getFormData={getFormData}/>
      <hr/>
        <Cats cats={cats} getId={getId}/>

    </div>
  );
}

export default App;

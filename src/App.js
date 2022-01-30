import './App.css';
import {Cars, Form} from "./components";
import {useState} from "react";

function App() {

    const [cars, setCars] = useState([]);

    const getFormData = (data) => {
        setCars([...cars, {id: new Date().getTime(), ...data}])
    }

    const getById = (id) => {
        setCars(cars.filter(car => car.id !== id))
        console.log(id)
    }
    return (
        <div>
            <Form getFormData={getFormData}/>
            <Cars cars={cars} getById={getById}/>
        </div>
    );
}

export default App;

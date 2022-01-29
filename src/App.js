import {Cats, Dogs, Form} from "./components";
import {useState} from "react";

export default function App() {

    const [cats, setCats] = useState([]);
    const [dogs, setDogs] = useState([]);

    const getFormCatData = (data) => {
        setCats([...cats, {id:new Date(), ...data}])

    };
    const getFormDogData = (data) => {
        setDogs([...dogs, {id: new Date(), ...data}]);
    }

    const getCatId = (id) => {
        setCats(cats.filter(cat=> cat.id !==id))
    }

    const getDogId = (id) => {
      setDogs(dogs.filter(dog => dog.id !== id))
    }
    return (
        <div>
            <Form getFormCatData={getFormCatData} getFormDogData={getFormDogData}/>
            <hr/>
            <div style={{display:'flex', justifyContent:'space-around'}}>
                <Cats cats={cats} getCatId={getCatId}/>
                <Dogs dogs={dogs} getDogId={getDogId}/>
            </div>
        </div>    
    );
}
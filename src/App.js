import {Cats, Dogs, FormCat, FormDog} from "./components";
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
            <div style={{display:'flex', justifyContent: 'space-around'}}>
                <FormCat getFormCatData={getFormCatData}/>
                <FormDog getFormDogData={getFormDogData}/>
            </div>
            <hr/>
            <div style={{display:'flex', justifyContent:'space-around'}}>
                <Cats cats={cats} getCatId={getCatId}/>
                <Dogs dogs={dogs} getDogId={getDogId}/>
            </div>
        </div>    
    );
}
import {Cats, Dogs, FormCat, FormDog} from "./components";
import {useReducer} from "react";

const reducer = (state, action) => {

    switch (action.type) {
        case'addCat':
            return {...state, cats: [...state.cats, action.payload]}

        case 'deleteCat':
            return {...state, cats: state.cats.filter(cat => cat.id !== action.payload)};

        case 'addDog':
            return {...state, dogs: [...state.dogs, action.payload]}

        case 'deleteDog':
            return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload)};

    }
    return state

}


export default function App() {

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    const addCat = (data) => {

        dispatch({type: 'addCat', payload: data.cats})
    };

    const deleteCat = (id) => {
        dispatch({type: 'deleteCat', payload: id})
    }

    const addDog = (data) => {
        dispatch({type: 'addDog', payload: data.dogs})
    }

    const deleteDog = (id) => {
        dispatch({type: 'deleteDog', payload: id})
    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <FormCat addCat={addCat}/>
                <FormDog addDog={addDog}/>
            </div>
            <hr/>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <Cats cats={state.cats} deleteCat={deleteCat}/>
                <Dogs/>
            </div>
        </div>
    );
}
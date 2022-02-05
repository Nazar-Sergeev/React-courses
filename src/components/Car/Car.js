import {useDispatch} from "react-redux";

import {carToUpdate, deleteCar} from "../../store";

const Car = ({car}) => {

    const dispatch = useDispatch();

    const {id, model, price, year} = car;

    return (
        <div style={{display: 'flex', justifyContent: 'center', margin: '20px'}}>
            <div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
                <button onClick={() => dispatch(deleteCar({id}))}>delete</button>
                <button onClick={() => dispatch(carToUpdate({car}))}>Update</button>
            </div>
        </div>
    );
};

export {Car};
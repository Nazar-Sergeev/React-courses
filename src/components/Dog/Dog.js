import {useDispatch} from "react-redux";

import {deleteDog} from "../../store";

const Dog = ({dog}) => {

    const {id, dogName} = dog;

    const dispatch = useDispatch();

    return (
        <div>
            <h1>{dogName}</h1>
            <button onClick={() => dispatch(deleteDog({id}))}>delete</button>
        </div>
    );
};

export {Dog};
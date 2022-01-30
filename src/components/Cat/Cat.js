import {useDispatch} from "react-redux";

import {deleteCat} from "../../store";

const Cat = ({cat}) => {

    const {id, catName} = cat

    const dispatch = useDispatch();

    return (
        <div>
            <h1>{catName}</h1>
            <button onClick={() => dispatch(deleteCat({id}))}>delete</button>
        </div>
    );
};

export {Cat};
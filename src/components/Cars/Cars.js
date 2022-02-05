import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Car} from "../Car/Car";
import {getAllCars} from "../../store";

const Cars = () => {

    const dispatch = useDispatch();
    const {cars} = useSelector(state => state['carReducer']);

    useEffect(() => {
        dispatch(getAllCars())
    }, []);

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};
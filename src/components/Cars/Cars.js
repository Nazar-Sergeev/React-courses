import {Car} from "../Car/Car";

const Cars = ({cars, getById}) => {
    return (
        <div>
            {cars.map(car=> <Car key={car.id} car={car} getById={getById}/>)}
        </div>
    );
};


export {Cars};
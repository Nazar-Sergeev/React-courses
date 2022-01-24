import React from 'react';

const Car = ({car,update}) => {

    return (
        <div>
            <div><img src={car} alt={car}/></div>
            <button onClick={update}>Update</button>
        </div>
    );
};


export default Car;